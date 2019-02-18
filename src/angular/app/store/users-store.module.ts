import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducer} from './reducers';
import {UsersEffects} from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('Users', reducer),
    EffectsModule.forFeature([UsersEffects]),
  ]
})
export class UsersStoreModule {}
