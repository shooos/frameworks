import {UsersActions, UsersActionTypes} from '../actions/users.action';
import {Users} from '../models/users.model';
import {createSelector, createFeatureSelector} from '@ngrx/store';

const initialState: Users = {
  list: [],
  sort: {
    key: 'id',
    order: 'asc',
  },
};

export function reducer(state: Users = initialState, action: UsersActions): Users {
  switch (action.type) {
    case UsersActionTypes.GET_SUCCESS:
      return {...state, list: [...action.payload.users]};

    case UsersActionTypes.SORT_USERS:
      return {...state, sort: {order: state.sort.order === 'asc' ? 'desc' : 'asc', key: action.payload.key}};

    default:
      return state;
  }
}

export const getFeatureState = createFeatureSelector<Users>('Users');
export const getSort = createSelector(
  getFeatureState,
  (state) => state.sort
);
export const getList = createSelector(
  getFeatureState,
  (state) => state.list
);
