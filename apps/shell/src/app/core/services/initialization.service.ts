import { APP_INITIALIZER, EnvironmentProviders, Injectable, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DynamicRemoteProcessing } from '@tvp/creator';
import { Router } from '@angular/router';

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
    // 获取远程主机配置列表，生成路由与组件名单
    await DynamicRemoteProcessing.instance.build();
    // 重设路由配置
    this.router.resetConfig([...this.router.config, ...DynamicRemoteProcessing.instance.routers]);
    this.progress += 10;
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

// 将所有的配置挂载到模块的初始化令牌中
export const InitProviders: Array<Provider | EnvironmentProviders> = [
  InitializationService,
  {
    provide: APP_INITIALIZER,
    useFactory: (initService: InitializationService) => initService.getRemotesConfig,
    deps: [InitializationService],
    multi: true
  },
  {
    provide: APP_INITIALIZER,
    useFactory: (initService: InitializationService) => initService.getSettings,
    deps: [InitializationService],
    multi: true
  }
];
