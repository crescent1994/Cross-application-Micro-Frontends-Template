import { bootstrap } from '@angular-architects/module-federation-tools';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppModule, {
  production: environment.production,
  appType: 'shell'
}).catch(e => console.error(e));
