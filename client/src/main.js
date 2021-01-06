import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import EasySlider from "vue-easy-slider";

import '../../resources/navbar.css';
import '../../resources/custom-styles.css';
import '../../resources/data.css';
import '../../resources/forms.css';

Vue.use(EasySlider);
Vue.use(VueApollo);

export const defaultClient = new ApolloClient({
   uri: 'http://localhost:4000/graphql'
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App)
}).$mount('#app')


