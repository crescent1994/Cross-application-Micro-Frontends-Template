import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InitializationService {
  constructor(private httpClient: HttpClient) {}

  // 获取应用程序配置
  getSettings() {}

  // 初始化angular程序
  init() {}
}
