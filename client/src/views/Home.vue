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
        <div v-if="$apollo.loading">Loading...</div>
        <div v-else class="row plain-element">

          <ul v-for="post in getPosts" :key="post._id">
            <li>
              {{post.title}}
              {{post.imageUrl}}
              {{post.description}}

            </li>

          </ul>
          </div>
           <ApolloQuery :query="getPostsQuery">
           <template slot-scope="{ result: { loading, error, networkStatus, data  }}">
            <div v-if="loading">Loading...</div>
            <div v-else-if="error"> Error! {{ error.message }} </div>
            <div v-else-if="!loading"> NetworkStatus {{ networkStatus }} </div>
            <ul v-else v-for="post in data.getPosts" :key="post._id">
              <li>
                {{post.title}}
                {{post.imageUrl}}
                {{post.description}}
              </li>
            </ul>
           </template>


        </ApolloQuery>
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
  data() {
    return {
      getPostsQuery: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description

          }
        }
      `,
      result( args ) {
          window.console.dir(args);
      },
      error(err) {
        window.console.log("[ERROR!!]", err);
        window.console.dir(err);
      }
    }
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
      `,
      result( args ) {
          window.console.dir(args);
      },
      error(err) {
        window.console.log("[ERROR!!]", err);
        window.console.dir(err);
      }
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
