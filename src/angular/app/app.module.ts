import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {APP_BASE_HREF} from '@angular/common';

import {reducer} from './store/reducers/users.reducer';
import {UsersEffects} from './store/effects/users.effect';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './components/app.component';
import {HeaderComponent} from './components/header.component';
import {TableComponent} from './components/table.component';
import {SwitcherComponent} from './components/switcher.component';
import {CardComponent} from './components/card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      Users: reducer,
    }),
    EffectsModule.forRoot([UsersEffects]),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, HeaderComponent, SwitcherComponent, TableComponent, CardComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/angular'}],
})
export class AppModule {}
