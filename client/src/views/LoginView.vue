<template>
<div class="row plain-element">
  <div id="page-index">
    <div class="form-container">
      <form class="form-user">
        <fieldset class="form-box">
           <div class="row plain-element center-align">
            <h3>Log In</h3>
            <div class="row row-oauth">
                <a href="/accounts/twitter/login/?process=login"> <i class="fab fa-twitter"></i> </a>
                <a href="/accounts/github/login/?process=login"> <i class="fab fa-github"></i> </a>
                <a href="/accounts/google/login/?process=login"> <i class="fab fa-google"></i> </a>
            </div>
          </div>
          <div class="row text-center row-form">
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="text" name="email" v-model="email" required id="id_email">
                <label class="" for="id_email">Email</label>
              </div>
            </div>
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="password" name="password" v-model="password" required id="id_password">
                <label class="" for="id_password">Password</label>
              </div>
            </div>

          </div>
          <div class="row row-links">
            <p>Create an Account</p>
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


export default {
  name: "LoginView",

};
</script>
