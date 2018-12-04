import 'vue-style-loader?modules!common/less/common.less';
import Vue from 'vue';
import App from './component/App.vue';
import store from './store';
import Table from './component/Table.vue';
import Card from './component/Card.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const styles = {
  flex: '1 1 auto',
  padding: '40px 30px',
  overflowX: 'hidden',
  overflowY: 'auto',
};

const routes = [
  {path: '/', redirect: '/table'},
  {path: '/table', component: Table, props: {styles}},
  {path: '/card', component: Card, props: {styles}},
];
const router = new VueRouter({mode: 'history', base: '/vue', routes});

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App),
});
