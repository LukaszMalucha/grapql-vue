import Vuex from 'vuex';
import Vue from 'vue';
import posts from './modules/posts';
import user from './modules/user';



// Connect Vue with Vuex
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    posts,
    user,
  }
});