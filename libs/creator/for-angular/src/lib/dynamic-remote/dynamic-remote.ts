import { Routes } from '@angular/router';
import { getManifest } from '@angular-architects/module-federation';
import { Print } from '@tvp/util';
import { Type, ViewContainerRef } from '@angular/core';
import { RemoteProcessing } from './remoteProcessing';
import { ComponentCandidate, CustomManifest } from './type';
import { DynamicWrapperComponent } from './dynamic-wrapper.component';

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

  async createComponents(remote: string, viewContainer: ViewContainerRef, componentName?: string) {
    this.getComponentsByRemoteName(remote).then(result => {
      if (result) {
        const { components, data } = result;
        // 如果是相同框架
        if (data.frame === 'identical') {
          // 如果传入名字则取名字，否则取第一个
          if (componentName && components[componentName])
            return viewContainer.createComponent(components[componentName] as Type<any>);
          if (Object.keys(components).length >= 1) {
            const [name] = Object.keys(components);
            return viewContainer.createComponent(components[name] as Type<any>);
          }
          Print.Ero('创建组件失败，请检查参数是否正确');
        } else {
          // 创建一个代理容器用于渲染自定义组件（外部框架）
          const wrapper = viewContainer.createComponent(DynamicWrapperComponent);
          wrapper.instance.options = data;
          return wrapper;
        }
      }
    });
  }
}
