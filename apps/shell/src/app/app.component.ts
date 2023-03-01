import { Component } from '@angular/core';
import { ui } from '@tvp/ui';
import { Router } from '@angular/router';

@Component({
  selector: 'tvp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {}

  title = ui();
}
