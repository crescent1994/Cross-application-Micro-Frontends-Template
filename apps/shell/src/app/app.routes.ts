import { Route } from '@angular/router';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions
} from '@angular-architects/module-federation-tools';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'remote-react',
      exposedModule: './Module',
      elementName: 'remote-react'
    } as WebComponentWrapperOptions
  },
  {
    path: 'vue',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:8081/remoteEntry.js',
      remoteName: 'vue',
      exposedModule: './web-components',
      elementName: 'vue-element'
    } as WebComponentWrapperOptions
  }
];
