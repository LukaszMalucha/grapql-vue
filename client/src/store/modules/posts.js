import { defaultClient as apolloClient } from '../../main';

import { GET_POSTS } from "../../api/queries.js";


const state = {
  message: null,
  posts: [],
  loading: false,


};




const getters = {
  getMessage: state => state.message,
  getPosts: state => state.posts,
  getLoading: state => state.loading,
};


const actions = {
  async fetchPosts({ commit }) {
    commit("setLoading", true)
    apolloClient
      .query({
        query: GET_POSTS
      })
      .then(({ data }) => {
        commit("setPosts", data.getPosts);
        commit("setLoading", false);
      })
      .catch(err => {
        commit("setLoading", false);
        window.console.log(err)
      });
  }

};


const mutations = {
  setMessage: (state, message) => {
    state.message = message
  },
  setPosts: (state, posts) => {
    state.posts = posts
  },
  setLoading: (state, loading) => {
    state.loading = loading
  },
};


export default {
  state,
  getters,
  actions,
  mutations
}