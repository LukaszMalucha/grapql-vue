<template>
<div class="row plain-element">
  <div id="page-index">
    <div class="form-container">
      <form class="form-user">
        <fieldset class="form-box">
          <div class="row plain-element center-align">
            <h3>Sign Up</h3>
          </div>
          <div class="row text-center row-form">
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="text" name="email" id="id_email" v-model="email" required>
                <label class="" for="id_email">Email</label>
              </div>
            </div>
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="password" name="password1" id="id_password1" v-model="password1" required>
                <label class="" for="id_password1">Password</label>
              </div>
            </div>
            <div class="row plain-element">
              <div class="input-field col s12">
                <input type="password" name="password2" id="id_password2" v-model="password2" required>
                <label class="" for="id_password2">Confirm Password</label>
              </div>
            </div>

          </div>
          <div class="row row-links">
            <p><router-link :to="{ name: 'login'}"> Already have an account?  Log in</router-link></p>
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
  name: "SignupView"

}

</script>