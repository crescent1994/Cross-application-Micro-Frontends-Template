import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { createInitProviders, InitProvidersOps } from '@tvp/creator/for-angular';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HeaderComponent
  ],
  providers: [
    ...createInitProviders([InitProvidersOps.getRemotesConfig, InitProvidersOps.getSettings])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
