import * as ReactDOM from 'react-dom/client';
import ReactButton from '../app/components/button';

export class RemoteButton extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    root.render(<ReactButton />);
  }
}

customElements.define('remote-button', RemoteButton);
