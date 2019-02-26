import {Injectable} from '@angular/core';
import {Action, Store, State} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of, forkJoin} from 'rxjs';
import {map, switchMap, catchError, withLatestFrom} from 'rxjs/operators';

import {UsersService} from '../../services/users.service';
import {
  UsersActionTypes,
  GetUsers,
  GetSuccess,
  GetFailure,
  RemoveUser,
  RemoveSuccess,
  RemoveFailure,
  AppendSuccess,
  AppendFailure,
  AppendUser,
} from '../actions/users.action';
import {Users} from '../models/users.model';

@Injectable()
export class UsersEffects {
  @Effect()
  getUsers$: Observable<Action> = this.actions$.pipe(
    ofType<GetUsers>(UsersActionTypes.GET_USERS),
    map((action) => action.payload),
    switchMap((payload) => {
      const {sort} = payload;
      return this.usersService.getUsers(sort).pipe(
        map((result) => new GetSuccess({users: [...result]})),
        catchError((error) => of(new GetFailure({error})))
      );
    })
  );

  @Effect()
  appendUser$: Observable<Action> = this.actions$.pipe(
    ofType<AppendUser>(UsersActionTypes.APPEND_USER),
    withLatestFrom(this.store$.select((state) => state.Users.sort)),
    switchMap(([action, sort]) => forkJoin([of(sort), this.usersService.pushUser(action.payload.user)])),
    switchMap(([sort]) => {
      return this.usersService.getUsers(sort).pipe(
        map((result) => new AppendSuccess({users: [...result]})),
        catchError((error) => of(new AppendFailure({error})))
      );
    })
  );

  @Effect()
  removeUser$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveUser>(UsersActionTypes.REMOVE_USER),
    withLatestFrom(this.store$.select((state) => state.Users.sort)),
    switchMap(([action, sort]) => forkJoin([of(sort), this.usersService.removeUser(action.payload.id)])),
    switchMap(([sort]) => {
      return this.usersService.getUsers(sort).pipe(
        map((result) => new RemoveSuccess({users: [...result]})),
        catchError((error) => of(new RemoveFailure({error})))
      );
    })
  );

  constructor(private actions$: Actions, private store$: Store<{Users: Users}>, private usersService: UsersService) {}
}
