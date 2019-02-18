import {User, Sort} from '../../Types';
import {UsersActions, UsersActionTypes} from '../actions';

export interface State {
  list: User[],
  sort: Sort,
}

const initialState: State = {
  list: [],
  sort: {
    key: 'id',
    order: 'asc',
  },
};

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.GetSuccess:
    case UsersActionTypes.SortSuccess:
      return {...state, list: [...action.payload.users]};

    default:
      return state;
  }
}

export const getSort  = (state: State) => state.sort;
export const getUsers = (state: State) => state.list;
