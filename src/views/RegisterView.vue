<template>
  <div class="registerFormContainer">
    <h2>Registro</h2>
    <form>
        <v-text-field
            v-model="email"
            label="E-mail"
            hint="Ingresa tu correo electrónico"
            required
        ></v-text-field>
        <v-text-field
            v-model="name"
            label="Nombre"
            hint="Ingresa tu nombre"
            required
        ></v-text-field>
        <v-text-field
            v-model="lastName"
            label="Apellido"
            hint="Ingresa tu apellido"
            required
        ></v-text-field>
        <v-text-field
            v-model="userName"
            label="Nombre de usuario"
            hint="Ingresa tu nombre de usuario"
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            type="input"
            hint="Ingresa tu contraseña"
            required
        ></v-text-field>
        <div class="dateContainer">
            <v-date-picker v-model="birthDate" color="primary" title="Día de nacimiento" header="Fecha" width="90%"></v-date-picker>
        </div>
        <v-btn class="button" @click="register">
            Registrarse
        </v-btn>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const name = ref('');
const lastName = ref('');
const userName = ref('');
const birthDate = ref(new Date());

const register = () => {
    // Implement registration functionality here
    console.log('Registering:', { email: email.value, password: password.value });
    router.push('/home');
};

</script>

<style scoped>
/* Your light theme styles */
.registerFormContainer {
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
    width: 30%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    margin: 1em;
    padding: 1em;
}

.button {
    margin: 0.5em;
    font-weight: 900;
    width: 40%;
}

.dateContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>