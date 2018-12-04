<template>
  <div class="switcher">
    <span @click="switching('table')" class="table">{{LABELS.TABLE_VIEW}}</span>
    <span @click="switching('card')" class="card">{{LABELS.CARD_VIEW}}</span>
  </div>
</template>

<script>
import 'vue-style-loader?modules!common/less/switcher.less';
import LABELS from 'common/constants/LABELS.json';

export default {
  data() {
    return {
      LABELS: LABELS,
    };
  },
  methods: {
    switching(mode) {
      this.$router.push(`/${mode}`);
    },
  },
};
</script>
