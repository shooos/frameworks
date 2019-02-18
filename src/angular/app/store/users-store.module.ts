import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
// import {EffectsModule} from '@ngrx/effects';
import {reducer} from './reducers/users.reducer';
// import {UsersEffects} from './effects/users.effect';

@NgModule({
  imports: [StoreModule.forFeature('Users', reducer)],
})
export class UsersStoreModule {}
