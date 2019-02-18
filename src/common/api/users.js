const USERS_STORAGE_KEY = 'users';

const saveUsers = async (users) => {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (e) {
    throw e;
  }
};

export default {
  async getUsers(sort) {
    let users;

    try {
      users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY));
      users.sort((a, b) => new Intl.Collator().compare(a[sort.key], b[sort.key]) * (sort.order === 'desc' ? -1 : 1));
    } catch (e) {
      return [];
    }

    return users || [];
  },

  async pushUser(user) {
    try {
      const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY));
      users.push(user);
      await saveUsers(users);
    } catch (e) {
      throw e;
    }
  },

  async removeUser(id) {
    try {
      const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY));
      await saveUsers(users.filter((user) => user.id !== id));
    } catch (e) {
      throw e;
    }
  },
};
