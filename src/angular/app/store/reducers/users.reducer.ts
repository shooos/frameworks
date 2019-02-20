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
    case UsersActionTypes.SORT_SUCCESS:
      return {...state, list: [...action.payload.users]};

    default:
      return state;
  }
}

export const getFeatureState = createFeatureSelector<Users>('Users');
export const getSort = createSelector(getFeatureState, (state) => state.sort);
