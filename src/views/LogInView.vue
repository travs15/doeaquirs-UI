<template>
  <div class="authFormContainer">
    <h2>Bienvenido</h2>
    <form>
        <v-text-field
            v-model="email"
            label="E-mail"
            hint="Ingresa tu correo electrónico"
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            type="input"
            hint="Ingresa tu contraseña"
            required
        ></v-text-field>
      <!-- <button type="submit">Login</button> -->
        <v-btn class="button" @click="login">
            Ingresar
        </v-btn>
        <v-btn class="button" @click="register">
            Registrarse
        </v-btn>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

/** Global variables */
const router = useRouter();

const email = ref('');
const password = ref('');

const login = () => {
  // Implement login functionality here
  console.log('Logging in:', { email: email.value, password: password.value });
  router.push('/home');
};

const register = () => {
  // Implement login functionality here
  router.push('/register');
};

</script>

<style scoped>
/* Your light theme styles */
.authFormContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;   
    width: 100%;
}

form {
    border: 0.5px solid #ccc;
    border-radius: .5em;
    width: 40%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    margin: 1em;
    padding: 1em;
}

.button {
    margin: 0.5em;
    font-weight: 900;
    width: 40%;
}
</style>
