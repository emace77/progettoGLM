<!-- eslint-disable -->
<!-- components/LogView.vue -->
<template>
  <div>
    <h2>Login</h2>
    <form class="form-signin mx-auto" @submit.prevent="onSubmit">
      <label for="inputEmail" class="sr-only">Email</label>
      <input id="inputEmail" type="email" class="form-control" placeholder="Email" v-model="email" required/>

      <label for="inputPassword" class="sr-only">Password</label>
      <input id="inputPassword" placeholder="Password" class="form-control" type="password" v-model="password" required />

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" v-model="remember"> Ricordami
        </label>
      </div>

      <button class="btn btn-blu btn-sm btn-block" type="submit">Entra</button>

      <!-- Messaggio registrazione avvenuta con successo -->
      <p v-if="accesso">{{ accesso }}</p>

       <!-- Messaggio di errore -->
       <p v-if="erroreLogin" class="errore">{{ erroreLogin }}</p>

      <p>
      Non hai un account? <a href="#">Registrati qui</a> <br>
      <a href="#">Hai dimenticato la password?</a>
      </p>
      </form>
  </div>
</template>
<!-- eslint-disable -->
<script>
export default {
  name: 'LogView',
  data() {
    return {
      // variabili
      email: null,
      password: null,
      remember: false,
      accesso: false,
      erroreLogin: '', 
    };
  },
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;

      // Verifica se i dati di accesso sono validi
      if (this.isLoginValid(email, password)) {
        this.accesso = true;
        this.accesso = 'Login avvenuto con successo!';
        this.erroreLogin = ''; // Resetta il messaggio di errore
      } else {
        this.accesso = false;
        this.erroreLogin = 'Email e/o password non validi. Riprova.';
      }
    },

    //Verificare la correttezza dei dati
    isLoginValid(email, password) {
      if (!email || !password) {
        return false;
      }
      if (password.length < 6) {
        return false;
      }
      return true;
    },
  },
};
</script>
<!-- eslint-disable -->
<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
}

.btn-blu {
  background-color: #006fba;
  color: #ffff;
}

.btn-blu:hover {
  background-color: #00aeef;
  color: #ffff;
}
.errore {
  color: red;
}
</style>
