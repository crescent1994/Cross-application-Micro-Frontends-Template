import { Routes } from '@angular/router';
import { getManifest } from '@angular-architects/module-federation';
import { Print } from '@tvp/util';
import { RemoteProcessing } from './remoteProcessing';
import { ComponentCandidate, CustomManifest } from './type';

export class DynamicRemoteService {
  static instance = new DynamicRemoteService();

  routers: Routes = [];

  components = new Map<string, ComponentCandidate>();

  build() {
    Print.Info('开始请求远程清单数据');
    const options = getManifest<CustomManifest>();
    if (!options) {
      Print.Warn('初始化清单数据未获取到');
    }
    // 根据清单文件动态创建程序路由组或组件列表
    Object.entries(options).forEach(([key, entry]) => {
      const { components, pages } = entry;
      if (pages) {
        if (entry.frame === 'identical') {
          this.routers = this.routers.concat(
            pages.map(p => {
              return RemoteProcessing.remotePageCreator(p, key);
            })
          );
        } else {
          this.routers = this.routers.concat(
            pages.map(p => {
              return RemoteProcessing.remoteOutsidePageCreator(p, entry.remoteEntry, key);
            })
          );
        }
      }
      if (components) {
        for (let i = 0; i < components.length; i++) {
          this.components.set(key, {
            componentAsync: RemoteProcessing.remoteComponentCreator(
              components[i],
              entry.remoteEntry
            ),
            data: {
              ...components[i],
              remoteEntry: entry.remoteEntry,
              remoteName: key,
              frame: entry.frame
            }
          });
        }
      }
    });
  }

  // 获取指定远端的组件列表， 如需外部组件推荐导入ComponentWrapper
  async getComponentsByRemoteName(remote: string) {
    const config = this.components.get(remote);
    if (!config) return;
    const components = await config.componentAsync();
    return { components, data: config.data };
  }
}
