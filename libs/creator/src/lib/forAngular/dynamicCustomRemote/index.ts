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
 *  @Update         [time:user]某用户更新此文件
 * */
import { Routes } from '@angular/router';
import { getManifest, Manifest } from '@angular-architects/module-federation';
import { ViewContainerRef } from '@angular/core';
import { Print } from '@tvp/util';
import { WebComponentWrapper } from '@angular-architects/module-federation-tools';
import { CustomRemoteConfig, ComponentCandidate, RemoteComponentConfig } from './type';
import { remoteProcessingFn } from './remoteProcessing';

export type CustomManifest = Manifest<CustomRemoteConfig>;

export class DynamicRemoteProcessing {
  static instance = new DynamicRemoteProcessing();

  routers: Routes = [];

  components = new Map<string, ComponentCandidate>();

  build() {
    const options = getManifest<CustomManifest>();
    if (!options) {
      Print.Warn('初始化清单数据未获取到');
      return;
    }
    // 根据清单文件动态创建程序路由组或组件列表
    Object.entries(options).forEach(([key, entry]) => {
      const create = remoteProcessingFn.get(entry.usage);
      if (create) {
        const result = create(entry, key);
        if ('path' in result) {
          this.routers.push(result);
        } else {
          this.components.set(key, {
            getComponentAsync: result as Promise<any>,
            data: entry as RemoteComponentConfig
          });
        }
      }
    });
  }

  async createComponentNyName(container: ViewContainerRef, name: string) {
    const config = this.components.get(name);
    if (config) {
      const { getComponentAsync, data } = config;
      if (data.frame === 'identical') {
        const component = await getComponentAsync;
        container.createComponent(component[data.componentName]);
      } else {
        const ref = container.createComponent(WebComponentWrapper);
        ref.instance.options = {
          remoteEntry: data.remoteEntry,
          remoteName: name,
          exposedModule: data.exposed,
          elementName: data.elementName
        };
      }
    }
  }
}
