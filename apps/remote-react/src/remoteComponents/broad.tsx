import * as ReactDOM from 'react-dom/client';
import React from 'react';
import Board from '../app/components/board';

export class RemoteReactBoard extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    const props = JSON.parse(this.getAttribute('props') || '') || {};
    const component = React.createElement(Board, props);
    root.render(component);
    // 如果需要shadow root 隔离样式
    // import { ShadowView } from '@tvp/creator/for-react';
    // root.render(<ShadowView>{component}</ShadowView>);
  }
}

customElements.define('react-board', RemoteReactBoard);
