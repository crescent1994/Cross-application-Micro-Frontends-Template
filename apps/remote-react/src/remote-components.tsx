// eslint-disable-next-line max-classes-per-file
import { DynamicRemoteEntry } from '@tvp/creator';
import * as ReactDOM from 'react-dom/client';
import ReactButton from './app/components/button';
import Board from './app/components/board';

/**
 *  ---------------------------remote-components.ts-------------------------
 *  @Example        使用示例代码
 *  @Description    说明
 *  @Version        0.0.1
 *  @Author         li xusheng
 *  @Date           2023/3/3
 *  @Param
 *  @Return
 *  @File           apps/remote-react/src remote-components.ts
 *  @Update         [time:user] 某用户更新此文件
 * */
export class RemoteButton extends DynamicRemoteEntry {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    root.render(<ReactButton />);
  }
}

customElements.define('remote-button', RemoteButton);

export class RemoteReactBoard extends DynamicRemoteEntry {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    root.render(<Board />);
  }
}

customElements.define('react-board', RemoteReactBoard);
