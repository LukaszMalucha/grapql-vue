



const state = {
  message: null


};




const getters = {
  getMessage: state => state.message,
};


const actions = {
  async getPosts({ commit }) {
    commit("setMessage", "XXX")
    window.console.log("zxc")
  }

};


const mutations = {

  setMessage: (state, message) => {
    state.message = message
  }

};


export default {
  state,
  getters,
  actions,
  mutations
}