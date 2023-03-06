import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicRemoteService, DynamicWrapperComponent } from '@tvp/creator/for-angular';

@Component({
  selector: 'tvp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  ngOnInit() {
    DynamicRemoteService.instance.getComponentsByRemoteName('remote-react').then(result => {
      if (result) {
        const { data } = result;
        const wrapper = this.viewContainer.createComponent(DynamicWrapperComponent);
        wrapper.instance.options = data;
        wrapper.instance.elementProps = { data: '测试数据' };
      }
    });
  }
}
