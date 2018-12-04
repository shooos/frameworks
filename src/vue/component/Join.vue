<template>
  <div class="join" :class="{open: isOpen}" @transitionend="buttonChange">
    <form name="user-info" @submit.stop.prevent>
      <div class="items" v-for="item in items" :key="item">
        <span v-if="USER[item].require" class="require">*</span>
        <label>{{USER[item].label}}</label>
        <input
          @input="inputInfo(item, $event)"
          :value="userInfo[item]"
          :name="item"
          v-bind="validation(USER[item])"
        >
      </div>
    </form>
    <div class="btn-join" @mousedown="open" v-if="button === 'open'"></div>
    <div class="btn-register" v-if="button === 'register'">
      <span class="cancel" @mousedown="close"></span>
      <span class="register" @click="register"></span>
    </div>
  </div>
</template>

<script>
import 'vue-style-loader?modules!common/less/join.less';
import USER from 'common/constants/USER.json';
import MESSAGES from 'common/constants/MESSAGES.json';
import ActionTypes from '../store/actions';
import GetterTypes from '../store/getters';

export default {
  data() {
    return {
      USER: USER,
      items: Object.keys(USER),
      isOpen: false,
      button: 'open',
      userInfo: {},
    };
  },
  methods: {
    validation(item) {
      if (item.require) return {required: 'required'};
    },
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
      this.button = 'open';
    },
    buttonChange() {
      if (this.isOpen) {
        this.button = 'register';
      }
    },
    inputInfo(key, e) {
      this.userInfo[key] = e.target.value;

      if (key === 'id') {
        if (this.$store.getters[GetterTypes.IS_DUPLICATED](this.userInfo[key])) {
          this.form[key].setCustomValidity(MESSAGES.DUPLICATED_ID);
        } else {
          this.form[key].setCustomValidity('');
        }
      }
    },
    register() {
      if (this.form.reportValidity()) {
        this.$store.dispatch(ActionTypes.APPEND_USER, this.userInfo);
        this.close();
        Object.keys(this.userInfo).forEach(key => (this.userInfo[key] = ''));
      }
    },
  },
  mounted() {
    this.form = document.forms['user-info'];
  },
};
</script>
