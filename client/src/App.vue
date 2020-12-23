<template>
    <div id="app">

        <body>

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
                  <li><router-link  :to="{ name: 'home'}" class="nav-link" href="">Posts</router-link></li>
                  <li><router-link  :to="{ name: 'login'}" class="nav-link" href="">Log In</router-link></li>
                  <li><router-link  :to="{ name: 'signup'}" class="nav-link" href="">Sign Up</router-link></li>
                </ul>
              </div>
            </nav>



          </div>

          <router-view/>


        <div class="footer">
          <p><a target="_blank" href="https://www.freeprivacypolicy.com/privacy/view/9b972ff9a2aaeda03f07216c15625791/">Privacy
            Policy</a> • © 2019 - 2020 www.unflasked.com - All Rights Reserved • Powered by Septellar &trade;</p>
        </div>

        </body>
    </div>
</template>

<script>


export default {
    name: "App",
    components: {
    },
    methods: {

    },
    computed: {

    },
}
</script>

