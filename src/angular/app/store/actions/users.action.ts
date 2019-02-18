import {Action} from '@ngrx/store';
import {Sort, User} from '../../Types';

export enum UsersActionTypes {
  GetUsers      = '[Users] Get',
  GetSuccess    = '[Users] GetSuccess',
  GetFailure    = '[Users] GetFailure',
  AppendUser    = '[Users] Append',
  AppendSuccess = '[Users] AppendSuccess',
  AppendFailure = '[Users] AppendFailure',
  RemoveUser    = '[Users] Remove',
  RemoveSuccess = '[Users] RemoveSuccess',
  RemoveFailure = '[Users] RemoveFailure',
  SortUsers     = '[Users] Sort',
  SortSuccess   = '[Users] SortSuccess',
  SortFailure   = '[Users] SortFailure',
}

export class GetUsers implements Action {
  readonly type = UsersActionTypes.GetUsers;
  constructor(public payload: {sort: Sort}) {}
}

export class GetSuccess implements Action {
  readonly type = UsersActionTypes.GetSuccess;
  constructor(public payload: {users: User[]}) {}
}

export class GetFailure implements Action {
  readonly type = UsersActionTypes.GetFailure;
  constructor(public payload?: {error: Error}) {}
}

export class AppendUser implements Action {
  readonly type = UsersActionTypes.AppendUser;
  constructor(public payload: {user: User}) {}
}

export class AppendSuccess implements Action {
  readonly type = UsersActionTypes.AppendSuccess;
}

export class AppendFailure implements Action {
  readonly type = UsersActionTypes.AppendFailure;
  constructor(public payload?: {error: Error}) {}
}

export class RemoveUser implements Action {
  readonly type = UsersActionTypes.RemoveUser;
  constructor(public payload: {id: String}) {}
}

export class RemoveSuccess implements Action {
  readonly type = UsersActionTypes.RemoveSuccess;
}

export class RemoveFailure implements Action {
  readonly type = UsersActionTypes.RemoveFailure;
  constructor(public payload?: {error: Error}) {}
}

export class SortUsers implements Action {
  readonly type = UsersActionTypes.SortUsers;
  constructor(public payload: {key: String}) {}
}

export class SortSuccess implements Action {
  readonly type = UsersActionTypes.SortSuccess;
  constructor(public payload: {users: User[]}) {}
}

export class SortFailure implements Action {
  readonly type = UsersActionTypes.SortFailure;
  constructor(public payload?: {error: Error}) {}
}

export type UsersActions = 
  | GetUsers
  | GetSuccess
  | GetFailure
  | AppendUser
  | AppendSuccess
  | AppendFailure
  | RemoveUser
  | RemoveSuccess
  | RemoveFailure
  | SortUsers
  | SortSuccess
  | SortFailure;
