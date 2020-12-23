import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '../../resources/navbar.css';
import '../../resources/custom-styles.css';
import '../../resources/data.css';
import '../../resources/forms.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


