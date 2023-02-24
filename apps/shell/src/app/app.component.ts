import { Component } from '@angular/core';
import { ui } from '@tvp/ui';

@Component({
  selector: 'tvp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ui();
}
