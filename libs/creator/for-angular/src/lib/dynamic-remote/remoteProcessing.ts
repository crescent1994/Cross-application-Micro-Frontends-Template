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
import { RemoteProgramConfig } from './type';

export class RemoteProcessing {
  // 创建远程本应用路由
  static remotePageCreator(config: RemoteProgramConfig, remoteName: string): Route {
    return {
      path: config.routePath,
      title: config.displayName,
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName,
          exposedModule: config.exposed
        }).then(m => m[config.moduleName])
    };
  }

  // 创建基于自定义标签的外部应用页面
  static remoteOutsidePageCreator(
    config: RemoteProgramConfig,
    remoteEntry: string,
    remoteName: string
  ): Route {
    return {
      path: config.routePath,
      title: config.displayName,
      component: WebComponentWrapper,
      data: {
        remoteEntry,
        remoteName,
        exposedModule: config.exposed,
        elementName: config.elementName
      }
    };
  }

  // 创建远程独立组件
  static remoteComponentCreator(config: RemoteProgramConfig, remoteEntry: string) {
    return () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry,
        exposedModule: config.exposed
      });
  }
}
