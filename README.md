## 基于模块联合的微前端架构
<small>基于NX管理工具的MONOREPO库，本模板包含基于模块联合的微前端架构</small>

#### 此项目模板中包含以下技术：
  - monorepo单存储库的管理工具NX的使用
  - 模块联合webpack与vite插件的使用
  - 跨应用级微前端调用，包含页面，组件

#### 脚本：
  - 初始化系统：
    ```` 
    pnpm install
    ```` 
  - 启动项目：
    ````
    pnpm run dev                 #所有配有dev脚本的项目
    pnpm run start:shell         #启动单独项目
    pnpm run commit              #提交git变更
    pnpm run build:shell         #打包单独项目
    pnpm run e2e:shell           #运行E2E项目测试

    #需要自行增加命令时 请参考NX或相关技术文档
    ````
    
#### 结构：
  - apps: 应用程序文件夹
  - libs: 公共库文件夹
    - creator:  应用程序创建工具集
    - data-access: 
      ````
       数据访问库包含充当服务器层 API 的客户端委托层的代码。
      与状态管理相关的所有文件也驻留在一个文件夹中
      ````
    - feature: 
      ```` 
        功能库包含一组文件，用于配置应用程序中的业务用例或页面。
        此类库中的大多数组件都是与数据源交互的智能组件。
        这种类型的库还包含大多数UI逻辑、表单验证代码等。
        功能库几乎总是特定于应用程序的，通常是延迟加载的。
      ````
    - ui: 相关表示组件的集合。通常没有注入到这些组件中的服务（它们所需的所有数据都应来自输入）
    - util: 程序库包含许多库使用的低级代码。通常没有特定于框架的代码，库只是实用程序或纯函数的集合

#### 项目中推荐的目录结构：
  ```
  project
  ├── .tsconfig.*.ts             # ts 配置文件
  ├── .eslintrc.*                # eslint 配置文件
  ├── webpack.*.js               # webpack 配置文件
  ├──src
      ├── app                    # 源码主目录
          ├── components         # 项目组件库
          ├── pages              # 项目页面库
          ├── utils              # 项目工具库
          ├── store || +state    # 项目状态管理库
          ├── app.*              # 顶层组件
      ├── assets                 # 静态文件，打包时不做处理的资源
      ├── remote-components      # 暴露给主机程序的组件
      ├── environments           # 环境变量（用于文件替换逻辑）
      ├── main.*                 # 入口文件
      ├── bootstrap.*            # 启动模块联合时的异步入口
      ├── index.html             # 启动模板文件
      ├── style.scss             # 全局的样式表
  ```


#### 更多：  

NX文档：<img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45" alt='nx'>Visit the [Nx Documentation](https://nx.dev) to learn more. ✨

模块联合：<a href="https://juejin.cn/post/7005450458009600036">掘金</a>
