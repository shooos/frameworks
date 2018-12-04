<template>
  <div class="page">
    <vue-header :styles="headerStyle"></vue-header>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import ActionTypes from '../store/actions';
import Header from './Header.vue';

export default {
  data() {
    return {
      current: '',
      headerStyle: {
        minHeight: '60px',
        flexBasis: '60px',
      },
    };
  },
  computed: {
    ...mapState({
      users: state => state.users.list,
    }),
  },
  created() {
    this.$store.dispatch(ActionTypes.GET_USERS);

    this.current = 'vue-table';
  },
  components: {
    vueHeader: Header,
  },
};
</script>
