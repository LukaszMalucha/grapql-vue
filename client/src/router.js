import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginView from "./views/LoginView.vue";
import SignupView from "./views/SignupView.vue";
import AddPost from "./views/AddPost.vue";
import Posts from "./views/Posts.vue";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/post/add",
      name: "add-post",
      component: AddPost
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts
    },
  ]
})

