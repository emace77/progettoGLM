<!-- eslint-disable -->
<!-- components/LogView.vue -->
<template>
  <div>
    <h2>Login</h2>
    <form class="form-signin mx-auto" @submit.prevent="onSubmit">
      <div class="form-outline">
				<label for="inputEmail" class="sr-only">Email</label>
				<div class="input-group">
				<span class="icone_form align-items-center p-2 border rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006fba" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg></span>
				<input id="inputEmail" type="email" class="form-control" v-model="email" required/> 
				</div>

        <label for="inputPassword" class="sr-only">Password</label>
				<div class="input-group">
				<span class="icone_form align-items-center p-2 border rounded"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#006fba" class="bi bi-lock-fill" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg></span>
				<input id="inputPassword" type="password" class="form-control" v-model="password" required/> 
				</div>
			</div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" v-model="remember"> Ricordami
        </label>
      </div>
      <button class="btn btn-blu btn-lg btn-block btn-entra text-center mb-3" type="submit">Entra</button>
      
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
.icone_form {
  display: flex;
	background-color: #f8f9fa;
}
.btn-blu {
  background-color: #006fba;
  color: #ffff;
}

.btn-blu:hover {
  background-color: #00aeef;
  color: #ffff;
}

.btn-entra {
  width: 300px;
  height: 40px;
}
.errore {
  color: red;
}
</style>
