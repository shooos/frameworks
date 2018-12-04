<template>
  <div style="position: relative;" :style="styles">
    <div class="card-container">
      <div v-for="user in users" :key="user.id">
        <p v-for="item in items" :key="item" :class="item">
          <template v-if="item !== 'gender' && item !== 'authority'">{{user[item]}}</template>
          <span v-if="item === 'gender'" :class="user[item]"></span>
          <span v-if="item === 'authority'" :class="user[item]" :title="user[item]"></span>
        </p>
        <span class="remove" :title="LABELS.REMOVE_USER" @click="removeUser(user.id)"></span>
      </div>
      <div class="ghost" v-for="(ghost, i) in Array(6)" :key="i"></div>
    </div>
    <div class="sorter">
      <span
        v-for="item in items"
        :key="item"
        :class="{sorted: sort.key === item}"
        @click="execSort(item)"
      >
        <span v-if="item === sort.key" class="icon" :class="sort.order"></span>
        {{USER[item].label}}
      </span>
    </div>
    <div class="indicator" v-show="indicator"></div>
  </div>
</template>

<script>
import 'vue-style-loader?modules!common/less/card.less';
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
