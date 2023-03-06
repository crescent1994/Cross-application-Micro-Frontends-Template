import { Manifest, RemoteConfig } from '@angular-architects/module-federation';

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

export interface ComponentCandidate {
  componentAsync(): Promise<{ [key: string]: unknown }>;
  data: RemoteProgramConfig & { remoteEntry: string; remoteName: string; frame: Frame };
}

export type Usage = 'page' | 'component';

export interface RemoteProgramConfig {
  // 模块联合中的exposed属性
  exposed: string;
  // 模块名称或远程导出的继承自HTMLElement类型的组件名称
  moduleName: string;
  // 加载不同框架时的自定义标签名
  elementName?: string;
  // 导航路径
  routePath: string;
  // 导航中显示的名称
  displayName: string;
  // 路由中的排序
  sort: number;
}

export type Frame = 'identical' | 'outside';

export type CustomRemoteConfig = RemoteConfig & {
  // 框架 identical：'与当前框架相同，并且版本兼容时', outside：'外部框架或版本不匹配'
  frame: Frame;
  // 用于路由页面的配置项
  pages: RemoteProgramConfig[];
  // 用于独立组件的配置项
  components: RemoteProgramConfig[];
};

export type CustomManifest = Manifest<CustomRemoteConfig>;
