/**
 *  ---------------------------index.ts-------------------------
 *  @Example        使用示例代码
 *  @Description    说明
 *  @Version        0.0.1
 *  @Author         li xusheng
 *  @Date           2023/2/15
 *  @Param
 *  @Return
 *  @File           libs/creator/src/lib/dynamicRemote index.ts
 *  @Update         [time:user] 某用户更新此文件
 * */
import { Routes } from '@angular/router';
import {
  Manifest,
  RemoteConfig,
  loadRemoteModule,
  getManifest
} from '@angular-architects/module-federation';

export type CustomRemoteConfig = RemoteConfig & {
  // 模块联合中的exposed属性
  exposed: string;
  // 导航中显示的名称
  displayName: string;
  // 导航路径
  routePath: string;
  // 模块名称
  moduleName: string;
};

export type CustomManifest = Manifest<CustomRemoteConfig>;

// 根据清单文件动态创建程序路由
export function buildRoutes(): Routes {
  const options = getManifest<CustomManifest>();
  if (!options) {
    console.warn('初始化清单数据未获取到');
    return [];
  }
  const lazyRoutes: Routes = Object.keys(options).map(key => {
    const entry = options[key];
    return {
      path: entry.routePath,
      loadChildren: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: key,
          exposedModule: entry.exposed
        }).then(m => m[entry.moduleName])
    };
  });

  return [...lazyRoutes];
}
