import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
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
import {JoinComponent} from './components/join.component';

@NgModule({
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      Users: reducer,
    }),
    EffectsModule.forRoot([UsersEffects]),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, HeaderComponent, SwitcherComponent, JoinComponent, TableComponent, CardComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/angular'}],
})
export class AppModule {}
