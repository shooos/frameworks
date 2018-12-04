import api from 'common/api/users';
import ActionTypes from '../actions';
import GetterTypes from '../getters';
import MutationTypes from '../mutations';

const state = {
  list: [],
  sort: {
    order: 'asc',
    key: 'id',
  },
};

const mutations = {
  [MutationTypes.SET_USERS](state, {users}) {
    state.list.splice(0, state.list.length, ...users);
  },
  [MutationTypes.SET_SORT_ORDER](state, sort) {
    Object.assign(state.sort, sort);
  },
};

const getters = {
  [GetterTypes.IS_DUPLICATED]: (state) => (id) => {
    return state.list.some((user) => user.id === id);
  },
};

const actions = {
  [ActionTypes.GET_USERS]({commit, state}) {
    api
      .getUsers(state.sort)
      .then((users) => commit(MutationTypes.SET_USERS, {users}))
      .catch((reason) => console.error(reason));
  },
  [ActionTypes.APPEND_USER]({commit, state}, userInfo) {
    api
      .pushUser(userInfo)
      .then(() => api.getUsers(state.sort))
      .then((users) => commit(MutationTypes.SET_USERS, {users}))
      .catch((reason) => console.error(reason));
  },
  [ActionTypes.REMOVE_USER]({commit, state}, userId) {
    api
      .removeUser(userId)
      .then(() => api.getUsers(state.sort))
      .then((users) => commit(MutationTypes.SET_USERS, {users}))
      .catch((reason) => console.error(reason));
  },
  [ActionTypes.SORT_USERS]({dispatch, commit}, sortkey) {
    const sort = {};

    if (state.sort.key === sortkey) {
      sort.order = state.sort.order === 'asc' ? 'desc' : 'asc';
    } else {
      sort.key = sortkey;
      sort.order = 'asc';
    }

    commit(MutationTypes.SET_SORT_ORDER, sort);
    dispatch(ActionTypes.GET_USERS);
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
