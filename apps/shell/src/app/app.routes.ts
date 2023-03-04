import { Route } from '@angular/router';

import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    title: '首页',
    component: NxWelcomeComponent
  }
];
