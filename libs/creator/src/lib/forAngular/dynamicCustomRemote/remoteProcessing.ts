/**
 *  ---------------------------remoteProcessing.ts-------------------------
 *  @Example        使用示例代码
 *  @Description    说明
 *  @Version        0.0.1
 *  @Author         li xusheng
 *  @Date           2023/3/2
 *  @Param
 *  @Return
 *  @File           libs/creator/src/lib/forAngular/dynamicCustomRemote remoteProcessing.ts
 *  @Update         [time:user] 某用户更新此文件
 * */
import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper } from '@angular-architects/module-federation-tools';
import {
  ComponentCandidate,
  CustomRemoteConfig,
  RemoteComponentConfig,
  RemoteProgramConfig,
  Usage
} from './type';

// 通过CustomRemoteConfig.frame与usage判断来处理远程配置
export const remoteProcessingFn = new Map<
  Usage,
  (entry: CustomRemoteConfig, remoteName: string) => Promise<any> | Route
>();

// 相同版本库的路由处理
remoteProcessingFn.set('page', (entry: RemoteProgramConfig, remoteName: string): Route => {
  const defaultRouteConfig: Route = {
    path: entry.routePath,
    title: entry.displayName || remoteName
  };
  if (entry.frame === 'identical') {
    defaultRouteConfig.loadChildren = () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName,
        exposedModule: entry.exposed
      }).then(m => m[entry.moduleName]);
  } else {
    defaultRouteConfig.component = WebComponentWrapper;
    defaultRouteConfig.data = {
      remoteEntry: entry.remoteEntry,
      remoteName,
      exposedModule: entry.exposed,
      elementName: entry.elementName
    };
  }
  return defaultRouteConfig;
});

// 处理远程组件
remoteProcessingFn.set('component', (entry: RemoteComponentConfig): Promise<ComponentCandidate> => {
  return loadRemoteModule({
    type: 'module',
    remoteEntry: entry.remoteEntry,
    exposedModule: entry.exposed
  });
});
