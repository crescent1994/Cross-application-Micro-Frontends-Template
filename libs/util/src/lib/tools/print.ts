/**
 *  ---------------------------print.ts-------------------------
 *  @Example        使用示例代码
 *  @Description    说明
 *  @Version        0.0.1
 *  @Author         li xusheng
 *  @Date           2023/3/2
 *  @Param
 *  @Return
 *  @File           libs/util/src/lib/tools print.ts
 *  @Update         [time:user] 某用户更新此文件
 * */

export class Print {
  static Info(msg: any) {
    console.log(
      '%c消息: %o',
      'color: #009dff; border-bottom: 1px solid #009dff;font-weight: bold;',
      msg
    );
  }

  static Warn(msg: any) {
    console.warn(
      '%c警告: %o',
      'color: #FF6000FF; border-bottom: 1px solid #FF6000FF;font-weight: bold;',
      msg
    );
  }

  static Ero(msg: any) {
    console.error(
      '%c错误: %o',
      'color: #DE4156FF; border-bottom: 1px solid #DE4156FF;font-weight: bold;',
      msg
    );
  }

  static Custom(prefix: string, msg: any, color = 'cadetblue') {
    console.log(
      `%c${prefix}:%o`,
      `color: ${color}; border-bottom: 1px solid ${color};font-weight: bold;`,
      msg
    );
  }
}
