import { defaultClient as apolloClient } from "../../main";
import { LOGIN_USER, GET_CURRENT_USER } from "../../api/queries.js";
import router from "../../router.js"

const state = {
  token: null,
  user: null


};




const getters = {
  getToken: state => state.token,
  getUser: state => state.user,

};


const actions = {
  getCurrentUser({ commit }) {
    commit("setLoading", true);
    apolloClient.query({
      query: GET_CURRENT_USER
    })
    .then(({ data }) => {
      commit("setLoading", false);
      commit("setUser", data.getCurrentUser);
      window.console.log(data.getCurrentUser);
    })
    .catch(err => {
      commit("setLoading", false);
      window.console.log(err);
    })

  },

  loginUser({ commit }, payload) {
     apolloClient
      .mutate({
        mutation: LOGIN_USER,
        variables: payload

      })
      .then(({ data }) => {
        commit("setToken", data.loginUser.token);
        window.localStorage.setItem("token", data.loginUser.token);
        router.go();

      })
      .catch(err => {

        window.console.log(err);
      })
  },
  async logoutUser({ commit }) {
    commit("clearUser");
    window.localStorage.setItem("token", "");
    await apolloClient.resetStore();
    router.push('/')
  }

};


const mutations = {
  setToken: (state, token) => {
    state.token = token
  },
  setUser: (state, user) => {
    state.user = user
  },
  clearUser: state => (state.user = null)

};


export default {
  state,
  getters,
  actions,
  mutations
}