<template>
  <div style="position: relative;" :style="styles">
    <table class="users-table">
      <thead>
        <tr>
          <th v-for="item in items" :key="item" @click="execSort(item);">
            {{ USER[item].label }}
            <span
              class="sort"
              :class="{hidden: sort.key !== item, asc: sort.order === 'asc', desc: sort.order === 'desc'}"
            ></span>
          </th>
          <th>{{LABELS.REMOVE_USER}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td v-for="item in items" :key="item">{{user[item]}}</td>
          <td class="remove">
            <span :title="LABELS.REMOVE_USER" @click="removeUser(user.id)"></span>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="indicator" v-show="indicator"></div>
  </div>
</template>

<script>
import 'vue-style-loader?modules!common/less/table.less';
import USER from 'common/constants/USER.json';
import LABELS from 'common/constants/LABELS.json';
import {mapState} from 'vuex';
import ActionTypes from '../store/actions';

export default {
  data() {
    return {
      USER: USER,
      LABELS: LABELS,
      items: Object.keys(USER),
      indicator: false,
    };
  },
  props: ['styles'],
  computed: mapState({
    users: state => state.users.list,
    sort: state => state.users.sort,
  }),
  methods: {
    execSort(key) {
      this.indicator = true;

      setTimeout(() => {
        this.$store.dispatch(ActionTypes.SORT_USERS, key);
        this.indicator = false;
      }, 50);
    },
    removeUser(userId) {
      this.$store.dispatch(ActionTypes.REMOVE_USER, userId);
    },
  },
};
</script>
