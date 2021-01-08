import store from './store';


export default (to, from, next) => {
  if (!store.getters.getUser) {


      window.console.log(store.getters.getUser)

  } else {
    next();
  }
}