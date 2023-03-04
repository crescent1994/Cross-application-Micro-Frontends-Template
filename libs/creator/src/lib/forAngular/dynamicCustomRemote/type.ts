/**
 *  ---------------------------type.ts-------------------------
 *  @Example        使用示例代码
 *  @Description    说明
 *  @Version        0.0.1
 *  @Author         li xusheng
 *  @Date           2023/2/28
 *  @Param
 *  @Return
 *  @File           libs/creator/src/lib/dynamicCustomRemote type.ts
 *  @Update         [time:user] 某用户更新此文件
 * */
export abstract class DynamicRemoteEntry extends HTMLElement {
  // 初始化挂载的回调方法， 通常用于初始化框架
  abstract connectedCallback(): void;
}

export interface ComponentCandidate {
  getComponentAsync: Promise<any>;
  data: RemoteComponentConfig;
}

export type Usage = 'page' | 'component';

export type RemoteConfig = {
  type: 'module' | 'script';
  remoteEntry: string;
};

export type BaseRemoteConfig = RemoteConfig & {
  // 模块联合中的exposed属性
  exposed: string;
  // 导航中显示的名称
  displayName: string;
  // 框架 identical：'与当前框架相同，并且版本兼容时', outside：'外部框架或版本不匹配'
  frame: 'identical' | 'outside';
  // 当加载外部框架是需要使用自定义标签，此处为标签名
  elementName: string;
};

export type RemoteComponentConfig = BaseRemoteConfig & {
  usage: 'component';
  componentName: string;
};

export type RemoteProgramConfig = BaseRemoteConfig & {
  usage: 'page';
  // 导航路径
  routePath: string;
  // 模块名称
  moduleName: string;
  // 路由中的排序
  sort: number;
};

export type CustomRemoteConfig = RemoteComponentConfig | RemoteProgramConfig;
