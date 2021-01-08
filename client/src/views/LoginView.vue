<template>
<div class="row plain-element">
  <div id="page-index">
    <div class="form-container">
      <form class="form-user" @submit.prevent="handleLoginUser">
         <fieldset class="form-box">
          <div class="row plain-element center-align">
            <h3>Log In</h3>
            <div class="row row-oauth">
              <a href="/"> <i class="fab fa-twitter"></i> </a>
              <a href="/"> <i class="fab fa-github"></i> </a>
              <a href="/"> <i class="fab fa-google"></i> </a>
            </div>
          </div>
          <div class="row text-center row-form">
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="text" name="username" id="username" v-model="username" required>
                <label class="" for="id_login">Username</label>
              </div>
            </div>
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="password" name="password" id="id_password" v-model="password" required>
                <label class="" for="id_password">Password</label>
              </div>
            </div>
            <div class="row plain-element">
              <div class="input-field col s12">
                <div class="">
                  <label>
                    <input type="checkbox" name="remember" id="id_remember">
                    <span class="label-checkbox">Remember Me</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="row row-links">
            <p><a>Forgot Password</a>&nbsp; | &nbsp; <a href="{% url 'account_signup' %}">Create an Account</a></p>
          </div>
          <button type="submit" class="btn-login"><span>Continue <i class="far fa-arrow-alt-circle-right"></i></span>
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };

  },
  computed: {
    ...mapGetters(['getUser']),
  },
  watch: {
    getUser(value) {
//      if user value changes from null to object, redirect to home page
      if (value) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    handleLoginUser() {
      this.loginUser({username: this.username, password: this.password})
    }
  }

};
</script>


