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
   uri: 'http://localhost:4000/graphql',
//   Include auth token with request made to backend
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
//  if no token in localStorage, add it
  if (!localStorage.token) {
    localStorage.setItem('token', '');
  }


//    adds token to authorization header, which is sent to backend
    operation.setContext({
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      window.console.log('[networkError]', networkError);
    }

    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        window.console.log(err);
      }
    }

  }
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false

new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  render: h => h(App),
  created() {
//     execute getCurrentUser
    this.$store.dispatch('getCurrentUser');
  }
}).$mount('#app')


