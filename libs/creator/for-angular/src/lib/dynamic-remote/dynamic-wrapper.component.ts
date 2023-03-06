import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Print } from '@tvp/util';
import { AsyncSubject } from 'rxjs';

/**
 *  ---------------------------dynamic-wrapper.component.ts-------------------------
 *  @Example        使用示例代码
 *  @Description    说明
 *  @Version        0.0.1
 *  @Author         li xusheng
 *  @Date           2023/3/4
 *  @Param
 *  @Return
 *  @File           libs/creator/src/lib/forAngular/dynamic-remote_last dynamic-wrapper.component.ts
 *  @Update         [time:user] 某用户更新此文件
 * */
@Component({
  selector: 'tvp-dynamic-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<div #vc></div>`,
  encapsulation: ViewEncapsulation.None
})
export class DynamicWrapperComponent implements AfterContentInit {
  // 远程组件的配置项
  @Input() options!: any;

  // 传递给组件的参数
  @Input() elementProps: any;

  @ViewChild('vc', { read: ElementRef, static: true })
  container?: ElementRef;

  private element!: HTMLElement;

  private isCompleted = new AsyncSubject();

  ngAfterContentInit() {
    try {
      const { elementName = 'div' } = this.options;
      this.element = document.createElement(elementName);
      if (this.elementProps) this.populateProps();
      this.isCompleted.next(true);
      this.isCompleted.complete();
      this.container?.nativeElement.appendChild(this.element);
    } catch (e) {
      Print.Ero(e);
    }
  }

  private populateProps() {
    Print.Info('正在为远端组件创建PROPS...');
    this.element.setAttribute('props', JSON.stringify(this.elementProps));
  }

  addEventListener(keyword: keyof HTMLElementEventMap, handler: (...args: any[]) => void) {
    if (this.isCompleted.closed) {
      this.element.addEventListener(keyword, handler);
    } else {
      this.isCompleted.subscribe(() => {
        this.element.addEventListener(keyword, handler);
      });
    }
  }
}
