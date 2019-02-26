import {Action} from '@ngrx/store';
import {Sort, User, UserInfoKey} from '../../Types';

export enum UsersActionTypes {
  GET_USERS = '[Users] Get',
  GET_SUCCESS = '[Users] GetSuccess',
  GET_FAILURE = '[Users] GetFailure',
  APPEND_USER = '[Users] Append',
  APPEND_SUCCESS = '[Users] AppendSuccess',
  APPEND_FAILURE = '[Users] AppendFailure',
  REMOVE_USER = '[Users] Remove',
  REMOVE_SUCCESS = '[Users] RemoveSuccess',
  REMOVE_FAILURE = '[Users] RemoveFailure',
  SORT_USERS = '[Users] Sort',
}

export class GetUsers implements Action {
  readonly type = UsersActionTypes.GET_USERS;
  constructor(public payload: {sort: Sort}) {}
}

export class GetSuccess implements Action {
  readonly type = UsersActionTypes.GET_SUCCESS;
  constructor(public payload: {users: User[]}) {}
}

export class GetFailure implements Action {
  readonly type = UsersActionTypes.GET_FAILURE;
  constructor(public payload?: {error: Error}) {}
}

export class AppendUser implements Action {
  readonly type = UsersActionTypes.APPEND_USER;
  constructor(public payload: {user: User}) {}
}

export class AppendSuccess implements Action {
  readonly type = UsersActionTypes.APPEND_SUCCESS;
  constructor(public payload: {users: User[]}) {}
}

export class AppendFailure implements Action {
  readonly type = UsersActionTypes.APPEND_FAILURE;
  constructor(public payload?: {error: Error}) {}
}

export class RemoveUser implements Action {
  readonly type = UsersActionTypes.REMOVE_USER;
  constructor(public payload: {id: string}) {}
}

export class RemoveSuccess implements Action {
  readonly type = UsersActionTypes.REMOVE_SUCCESS;
  constructor(public payload: {users: User[]}) {}
}

export class RemoveFailure implements Action {
  readonly type = UsersActionTypes.REMOVE_FAILURE;
  constructor(public payload?: {error: Error}) {}
}

export class SortUsers implements Action {
  readonly type = UsersActionTypes.SORT_USERS;
  constructor(public payload: {key: UserInfoKey}) {}
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
  | SortUsers;
