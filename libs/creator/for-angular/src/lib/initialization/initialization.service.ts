import { APP_INITIALIZER, EnvironmentProviders, Injectable, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DynamicRemoteService } from '../dynamic-remote/dynamic-remote';

/**
 * 项目初始化服务
 * 函数的顺序即为默认推荐的的初始化顺序
 */
@Injectable()
export class InitializationService {
  progress = 0;

  constructor(private httpClient: HttpClient, private router: Router) {}

  // 获取远程主机配置清单文件
  getRemotesConfig = async () => {
    const drs = DynamicRemoteService.instance;
    // 获取远程主机配置列表，生成路由与组件名单
    await drs.build();
    // // 重设路由配置
    this.router.resetConfig([...this.router.config, ...drs.routers]);
    this.progress += 10;
  };

  getRouters = () => {
    console.log('routers, this.router.config', this);
  };

  // 获取应用程序配置
  getSettings = () => {
    console.log('init settings', this);
  };

  // 初始化应用程序
  init = () => {
    console.log(this);
  };
}

export const InitProvidersOps = {
  getRemotesConfig: {
    provide: APP_INITIALIZER,
    useFactory: (initService: InitializationService) => initService.getRemotesConfig,
    deps: [InitializationService],
    multi: true
  },
  getSettings: {
    provide: APP_INITIALIZER,
    useFactory: (initService: InitializationService) => initService.getSettings,
    deps: [InitializationService],
    multi: true
  },
  init: {
    provide: APP_INITIALIZER,
    useFactory: (initService: InitializationService) => initService.init,
    deps: [InitializationService],
    multi: true
  },
  getRouters: {
    provide: APP_INITIALIZER,
    useFactory: (initService: InitializationService) => initService.getRouters,
    deps: [InitializationService],
    multi: true
  }
};

// 将所有的配置挂载到模块的初始化令牌中
export const InitProviders = (ability: Array<keyof typeof InitProvidersOps>) => {
  const provides: Array<Provider | EnvironmentProviders> = [InitializationService];
  ability.forEach(key => provides.push(InitProvidersOps[key]));
  return provides;
};
