import api from 'common/api/users';

export const GET_USERS = 'GET_USERS';

const fetchUsers = (users) => ({
  type: GET_USERS,
  users,
});

export const getUsers = () => (dispatch, getState) => {
  api
    .getUsers(getState().users.sort)
    .then((response) => dispatch(fetchUsers(response)))
    .catch((reason) => console.error(reason));
};

export const APPENDED_USER = 'APPENDED_USER';

const appendedUser = (users) => {
  return {type: APPENDED_USER, users};
};

export const appendUser = (user) => (dispatch, getState) => {
  console.log(getState());
  api
    .pushUser(user)
    .then(() => api.getUsers(getState().users.sort))
    .then((response) => dispatch(appendedUser(response)))
    .catch((reason) => console.error(reason));
};

export const REMOVED_USER = 'REMOVED_USER';

const removedUser = (users) => {
  return {type: REMOVED_USER, users};
};

export const removeUser = (id) => (dispatch, getState) => {
  api
    .removeUser(id)
    .then(() => api.getUsers(getState().users.sort))
    .then((response) => dispatch(removedUser(response)))
    .catch((reason) => console.error(reason));
};

export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const SORT_USERS = 'SORT_USERS';

const setSortOrder = (key) => {
  return {
    type: SET_SORT_ORDER,
    sortkey: key,
  };
};

export const sortUsers = (key) => (dispatch) => {
  dispatch(setSortOrder(key));
  dispatch(getUsers());
};
