import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {reducer} from './store/reducers/users.reducer';
import {AppComponent} from './components/app.component';
import {UsersEffects} from './store/effects/users.effect';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      Users: reducer,
    }),
    EffectsModule.forRoot([UsersEffects]),
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [],
})
export class AppModule {}
