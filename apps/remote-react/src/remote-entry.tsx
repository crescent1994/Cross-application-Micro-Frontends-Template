import * as ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { DynamicRemoteEntry } from '@tvp/creator';
import App from './app/app';

/**
 *  ---------------------------remote-entry.ts-------------------------
 *  @Example        {
 *    exposes: {
 *      './Module': './src/remote-entry.tsx'
 *    }
 *  }
 *  @Description    暴露给主机程序的入口
 *  @Version        0.0.1
 *  @Author         li xusheng
 *  @Date           2023/2/28
 *  @Param
 *  @Return
 *  @File           apps/remote-react/src remote-entry.ts
 *  @Update         [time:user] 某用户更新此文件
 * */
class ReactElement extends DynamicRemoteEntry {
  connectedCallback() {
    const root = ReactDOM.createRoot(this);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}

customElements.define('remote-react', ReactElement);
