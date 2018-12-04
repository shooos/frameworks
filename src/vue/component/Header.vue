<template>
  <div :style="styles">
    <div class="header">
      <span class="back" :title="LABELS.BACK_TO_TOP" @click="backToTop"></span>
      <h1>{{LABELS.HEADER_TITLE}}</h1>
    </div>
    <join></join>
    <switcher></switcher>
  </div>
</template>

<script>
import 'vue-style-loader?modules!common/less/header.less';
import LABELS from 'common/constants/LABELS.json';
import Join from './Join.vue';
import Switcher from './Switcher.vue';

export default {
  data() {
    return {
      LABELS: LABELS,
    };
  },
  props: ['styles'],
  methods: {
    backToTop() {
      location.href = '/';
    },
  },
  components: {
    join: Join,
    switcher: Switcher,
  },
};
</script>
