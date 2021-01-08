<template>
  <div id="wrapper">


    <div id="page-index">
      <div class="row plain-element">
        <div class="dashboard-cards">
          <div class="row row-cards">
              <div v-if="getLoading()" class="loader" id="loader"></div>
          </div>
          <div class="row row-cards">
            <slider v-if="posts.length > 0" animation="fade">
              <slider-item v-for="post in posts" :key="post._id">
                <img :src="post.imageUrl">
                <h1>{{ post.title }}</h1>
              </slider-item>
            </slider>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  name: "Home",
  components: {

  },

  methods: {
    ...mapGetters([ "getPosts", "getLoading"]),
    ...mapActions(['fetchPosts']),
    handleGetCarouselPosts() {

    }

  },


  computed: {
    posts() {
      return this.getPosts()
    },
    loading() {
      return this.getLoading()
    }
  },
  created() {
    this.fetchPosts();
  }
}
</script>

<style>

</style>
