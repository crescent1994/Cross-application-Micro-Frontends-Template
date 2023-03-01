/**
 *  ---------------------------type.ts-------------------------
 *  @Example        使用示例代码
 *  @Description    说明
 *  @Version        0.0.1
 *  @Author         li xusheng
 *  @Date           2023/2/28
 *  @Param
 *  @Return
 *  @File           libs/creator/src/lib/dynamicCustomRemote type.ts
 *  @Update         [time:user] 某用户更新此文件
 * */
export abstract class DynamicRemoteEntry extends HTMLElement {
  // 初始化挂载的回调方法， 通常用于初始化框架
  abstract connectedCallback(): void;
}
