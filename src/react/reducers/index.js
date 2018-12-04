import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import * as ActionTypes from '../actionCreators';

const usersInitialState = {
  list: [],
  sort: {
    order: 'asc',
    key: 'id',
  },
};

const users = (state = usersInitialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return {...state, list: action.users};

    case ActionTypes.SET_SORT_ORDER:
      const sortkey = action.sortkey;
      const sort = {key: sortkey};

      if (state.sort.key === sortkey) {
        sort.order = state.sort.order === 'asc' ? 'desc' : 'asc';
      } else {
        sort.order = 'asc';
      }
      return {...state, sort};

    case ActionTypes.SORT_USERS:
      const list = [].concat(state.list);
      list.sort(
        (a, b) =>
          new Intl.Collator().compare(a[state.sort.key], b[state.sort.key]) * (state.sort.order === 'desc' ? -1 : 1)
      );
      return {...state, list};

    case ActionTypes.REMOVED_USER:
    case ActionTypes.APPENDED_USER:
      return {...state, list: action.users};

    default:
      return state;
  }
};

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    users,
  });
