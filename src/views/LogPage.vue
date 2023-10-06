<!-- eslint-disable -->
<!-- components/LogPage.vue -->
<template>
  <div>
    <h2>Login</h2>
    <form class="form-signin">
      <label for="inputEmail" class="sr-only">Email</label>
      <input id="inputEmail" type="email" class="form-control" placeholder="Email" v-model="email" required/>

      <label for="inputPassword" class="sr-only">Password</label>
      <input id="inputPassword" placeholder="Password" class="form-control" type="password" v-model="password" required />

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" v-model="remember"> Ricordami
        </label>
      </div>

      <button class="btn btn-sm btn-primary btn-block" type="submit">Entra</button>

      <p>
        Non hai un account? <a href="#">Registrati qui</a> <br>
        <a href="#">Hai dimenticato la password?</a>
      </p>
    </form>
  </div>
</template>
<!-- eslint-disable -->
  <script>
  /* eslint-disable */
  export default {
  name: 'LogPage',
  data() {
    return {
      email: null,
      password: null,
      remember: false,
    };
  },
};
  </script>
<style>
.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
</style>
