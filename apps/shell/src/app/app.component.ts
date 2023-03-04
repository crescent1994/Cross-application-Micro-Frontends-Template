import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ui } from '@tvp/ui';
import { DynamicRemoteProcessing } from '@tvp/creator';

@Component({
  selector: 'tvp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  title = ui();

  ngAfterViewInit() {
    DynamicRemoteProcessing.instance.createComponentNyName(this.viewContainer, 'reactButton');
  }
}
