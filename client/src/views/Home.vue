<template>
  <div id="wrapper">
    <nav class="row navbar navbar-default top-navbar" role="navigation">
      <div class="navbar-header">
        <router-link class="navbar-brand" :to="{ name: 'home'}" >
          <img src="https://septellar.s3-eu-west-1.amazonaws.com/img/septellar-md.png" alt="Logo"
               class="img-logo"/>
        </router-link>
      </div>
      <div class="col s10 m4 l5 plain-element center-align">
        <div class="row searchbox-wrapper searchbox-long">
          <form>
            <input class="form-control" id="searchbox" type="text" placeholder="Image Search"
                   aria-label="Search">
            <button class="btn-transparent" type="submit"><i class="fas fa-search search-icon"></i></button>
          </form>
        </div>
      </div>
      <div class="col s4 m5 l5 plain-element">
        <ul class="nav navbar-top-links navbar-right">
          <li><router-link  :to="{ name: 'posts'}" class="nav-link" href="">Posts</router-link></li>
          <li><router-link  :to="{ name: 'login'}" class="nav-link" href="">Log In</router-link></li>
          <li><router-link  :to="{ name: 'signup'}" class="nav-link" href="">Sign Up</router-link></li>
        </ul>
      </div>
    </nav>

    <div id="page-index">
      <div class="row plain-element">
        <div class="dashboard-cards">
        <ul v-for="post in getPosts" :key="post._id">
          <li>
            {{post.title}}
            {{post.imageUrl}}
            {{post.description}}

          </li>

        </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { gql } from 'apollo-boost';

export default {
  name: "Home",
  components: {

  },
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description

          }
        }
      `
    }
  },

  computed: {

  }
}
</script>

<style>
    @import "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css";
    @import "https://use.fontawesome.com/releases/v5.4.2/css/all.css";
</style>
