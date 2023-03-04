import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'entry',
          loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule)
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    BoardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
