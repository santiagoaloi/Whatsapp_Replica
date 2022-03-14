import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './plugins';

// Main Theme SCSS
import './assets/scss/theme.scss';

// Styles amd Animations
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;
Vue.config.performance = true;

// Register a global custom directive called `v-blur` that blurs after element click.
Vue.directive('blur', {
  inserted(el) {
    el.onclick = (ev) =>
      setTimeout(() => {
        ev.target.blur();
      }, 40);
    el.onmouseout = (ev) =>
      setTimeout(() => {
        ev.target.blur();
      }, 40);
  },
});

// Register a global custom directive called `v-escape-blur` that blurs after escape key.
Vue.directive('escape-blur', {
  inserted(el) {
    el.onkeydown = (ev) => (ev.key === 'Escape' ? ev.target.blur() : null);
  },
});

new Vue({
  router,
  store,
  vuetify,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount('#app');
