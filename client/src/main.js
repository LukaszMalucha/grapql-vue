import Vue from 'vue';
import App from './App.vue';
import router from './router';

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

import '../../resources/navbar.css';
import '../../resources/custom-styles.css';
import '../../resources/data.css';
import '../../resources/forms.css';

Vue.use(VueApollo);

const defaultClient = new ApolloClient({
   uri: 'http://localhost:4000/graphql'
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  router,
  render: h => h(App)
}).$mount('#app')


