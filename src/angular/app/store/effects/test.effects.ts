import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

@Injectable()
export class TestEffects {
  constructor(private actions$: Actions) {
    this.actions$;
  }
}
