<template>
  <div class="authFormContainer">
    <h2>Access the App</h2>
    <form>
        <div class="logIn">
            <div class="logIn-box">
                <div class="logIn-line">
                    <div class="logIn-line-label">Email</div>
                    <div class="logIn-line-input">
                        <input type="text" v-model.trim="v$.email.$model" placeholder="Digite sua email">
                    </div>
                </div>
                <div class="logIn-validationMessages">
                    <span
                        class="logIn-validationError"
                        v-show="v$.email.required.$invalid && v$.email.$dirty">
                        Enter an email
                    </span>
                    <span
                        class="logIn-validationError"
                        v-show="v$.email.email.$invalid && v$.email.$dirty">
                        Enter a valid email
                    </span>
                </div>
                <div class="logIn-line">
                    <div class="logIn-line-label">Password</div>
                    <div class="logIn-line-input">
                        <input type="password" v-model="v$.password.$model" placeholder="Digite sua password">
                    </div>
                </div>
                <div class="logIn-validationMessages">
                    <span class="logIn-validationError"
                        v-show="v$.password.required.$invalid && v$.password.$dirty">
                        Enter a password
                    </span>
                    <span class="logIn-validationError"
                        v-show="v$.password.minLength.$invalid && v$.password.$dirty">
                        Enter a password with a minimum of 6 characters
                    </span>
                </div>
            </div>
        </div>
        <div class="btn-container">
            <div class="btn btn-primary" @click="login">
                Log-In
            </div>
        </div>
        <div class="btn-container">
            <div class="btn btn-primary" @click="register">
                Register
            </div>
        </div>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength } from '@vuelidate/validators';

export default {
    data() {
        return {
            v$: useVuelidate(),
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            // TODO if its apporved go to the home page
            this.$router.push('/home')
        },
        register(){
            this.$router.push('/register')
        },
    },
    validations() {
        return {
            email: { required, email },
            password: { required, minLength: minLength(6) },
        }
    }
}
</script>

<style lang="scss" scoped>
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
    background-color: $highlight-background;
    box-shadow: $shadow;
    border-radius: 20px;
    border: $box-border;
    width: 40%;
    margin: 1em;
    padding: 1em;
}

.btn-container {
    padding: 0.3em;
}

.logIn {
    margin-bottom: 1rem;

    .logIn-box {
        background-color: $highlight-background;
        margin-left: auto;
        margin-right: auto;
    }

    .logIn-box input[type=text],
    .logIn-box input[type=password],
    .logIn-box select {
        background-color: #FFFFFF;
        border: 0px;
        color: $text-color;

        &:focus {
        outline: none;
        }
    }

    .logIn-line {
        height: 3rem;
        border-bottom: $box-border;
        margin-left: 20px;
        margin-right: 20px;
        display: grid;
        grid-template-columns: 90px auto;

        &:last-of-type {
            border-bottom: 0px;
        }
    }

    .logIn-line-label {
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .logIn-line-input {
        display: flex;
        align-items: center;

        input[type=text] {
            padding-left: 4px;
        }

        input[type=text],
        select {
            width: 100%;
            height: 100%;
            font-size: 1rem;
            border-radius: 0;
            font-family: "Red Hat Display", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        
        }

        input[type=date] {
            text-align: left;
        }
    }

    .logIn-validationMessages {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-items: flex-end;
    }

    .logIn-validationError {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 10px;
        color: rgb(165, 35, 35);
        font-size: 12px;
    }
}
</style>
