import {
  APP_INITIALIZER,
  EnvironmentProviders,
  Inject,
  Injectable,
  InjectionToken,
  Provider
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DynamicRemoteService } from '../dynamic-remote/dynamic-remote';

export const APP_CONFIG = new InjectionToken<any>('APP_CONFIG');

export enum InitProvidersOps {
  getRemotesConfig = 'getRemotesConfig',
  getSettings = 'getSettings',
  getRouters = 'getRouters'
}

/**
 * 项目初始化服务
 * 函数的顺序即为默认推荐的的初始化顺序
 */
@Injectable()
export class InitializationService {
  progress = 0;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    @Inject(APP_CONFIG) private config: any
  ) {}

  // 获取远程主机配置清单文件
  private [InitProvidersOps.getRemotesConfig] = async () => {
    const drs = DynamicRemoteService.instance;
    // 获取远程主机配置列表，生成路由与组件名单
    await drs.build();
    // // 重设路由配置
    this.router.resetConfig([...this.router.config, ...drs.routers]);
    this.progress += 10;
  };

  // 获取程序路由配置
  private [InitProvidersOps.getRouters] = async () => {
    console.log('routers, this.router.config', this);
  };

  // 获取应用程序配置
  private [InitProvidersOps.getSettings] = async () => {
    this.httpClient.get(`/assets/config.json`).subscribe(res => {
      this.config = res;
    });
  };

  /**
   * 初始化应用程序
   * @param ability 需要的功能列表
   */
  init = async (ability: Array<InitProvidersOps>) => {
    const { length } = ability;
    const step = 100 / length;
    for (let i = 0; i < length; i++) {
      // eslint-disable-next-line no-await-in-loop
      await this[ability[i]]();
      this.progress += step;
    }
  };
}

// 将所有的配置挂载到模块的初始化令牌中
export const createInitProviders = (ability: Array<InitProvidersOps>) => {
  const provides: Array<Provider | EnvironmentProviders> = [
    InitializationService,
    {
      provide: APP_CONFIG,
      useValue: {}
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (initService: InitializationService) => {
        return () => initService.init(ability);
      },
      deps: [InitializationService],
      multi: true
    }
  ];
  return provides;
};
