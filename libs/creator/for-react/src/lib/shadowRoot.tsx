import React, { FC, ReactNode, ReactPortal, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// 为导出的自定义组件提供shadow 隔离
export const ShadowView: FC<{ children }> = props => {
  const shadowHost = useRef<HTMLDivElement>(null);
  const [portal, setPortal] = React.useState<ReactPortal | ReactNode>(props.children);

  useEffect(() => {
    if (shadowHost && shadowHost.current) {
      const shadowRoot = shadowHost.current.attachShadow({ mode: 'open' });
      setPortal(createPortal(props.children, shadowRoot));
    }
  }, [props.children]);

  return <div ref={shadowHost}>{portal}</div>;
};
