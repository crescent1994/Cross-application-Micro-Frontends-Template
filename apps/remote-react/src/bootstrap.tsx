import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.scss';

import App from './app/app';

const rootContainer = document.getElementById('root');

if (rootContainer) {
  // 单独部署时渲染的方法
  const root = ReactDOM.createRoot(rootContainer);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('未找到根节点root， 请检查页面状态');
}
