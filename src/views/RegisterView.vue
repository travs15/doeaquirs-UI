<template>
    <div class="registerFormContainer">
        <h2>Register</h2>
        <form>
            <div class="register">
                <div class="register-box">
                    <div class="register-line">
                        <div class="register-line-label">Email</div>
                        <div class="register-line-input">
                            <input type="email" v-model.trim="v$.newUser.email.$model" placeholder="Digite sua email">
                        </div>
                    </div>
                    <div class="register-validationMessages">
                        <span
                            class="register-validationError"
                            v-show="v$.newUser.email.required.$invalid && v$.newUser.email.$dirty">
                            Enter an email
                        </span>
                        <span
                            class="register-validationError"
                            v-show="v$.newUser.email.email.$invalid && v$.newUser.email.$dirty">
                            Enter a valid email
                        </span>
                    </div>
                    <div class="register-line">
                        <div class="register-line-label">Name</div>
                        <div class="register-line-input">
                            <input type="text" v-model.trim="v$.newUser.name.$model" placeholder="Name">
                        </div>
                    </div>
                    <div class="register-validationMessages">
                        <span
                            class="register-validationError"
                            v-show="v$.newUser.name.required.$invalid && v$.newUser.name.$dirty">
                            Enter your name
                        </span>
                    </div>
                    <div class="register-line">
                        <div class="register-line-label">Last Name</div>
                        <div class="register-line-input">
                            <input type="text" v-model.trim="v$.newUser.lastName.$model" placeholder="Last name">
                        </div>
                    </div>
                    <div class="register-validationMessages">
                        <span class="register-validationError"
                            v-show="v$.newUser.lastName.required.$invalid && v$.newUser.lastName.$dirty">
                            Enter your last name
                        </span>
                    </div>
                    <div class="register-line">
                        <div class="register-line-label">Phone Number</div>
                        <div class="register-line-input">
                            <input type="tel" v-model="v$.newUser.phoneNumber.$model" placeholder="55555555">
                        </div>
                    </div>
                    <div class="register-validationMessages">
                        <span class="register-validationError"
                            v-show="v$.newUser.phoneNumber.required.$invalid && v$.newUser.phoneNumber.$dirty">
                            Enter a phone number
                        </span>
                    </div>
                    <div class="register-line">
                        <div class="register-line-label">Password</div>
                        <div class="register-line-input">
                            <input type="password" v-model="v$.newUser.password.$model" placeholder="Enter a password">
                        </div>
                    </div>
                    <div class="register-validationMessages">
                        <span class="register-validationError"
                            v-show="v$.newUser.password.required.$invalid && v$.newUser.password.$dirty">
                            Enter a password
                        </span>
                        <span class="register-validationError"
                            v-show="v$.newUser.password.minLength.$invalid && v$.newUser.password.$dirty">
                            Enter a password with a minimum of 6 characters
                        </span>
                    </div>
                    <div class="register-line">
                        <div class="register-line-label">Password Confirmation</div>
                        <div class="register-line-input">
                            <input type="password" v-model="v$.newUser.passwordConfirm.$model" placeholder="Confirm your password">
                        </div>
                    </div>
                    <div class="register-validationMessages">
                        <span class="register-validationError"
                            v-show="v$.newUser.passwordConfirm.required.$invalid && v$.newUser.passwordConfirm.$dirty">
                            Enter the password confirmation
                        </span>
                        <span class="register-validationError"
                            v-show="v$.newUser.passwordConfirm.sameAsPassword.$invalid && v$.newUser.passwordConfirm.$dirty">
                            The passwords don't match
                        </span>
                    </div>
                </div>
            </div>
            <div class="btn-container">
                <div type="button" class="btn btn-primary" @click="register"
                    :disabled="this.isDisabled">
                    Register
                </div>
            </div>
            <div class="btn-container">
                <div type="button" class="btn btn-primary" @click="login">
                    Go to Log-In
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs, minLength } from '@vuelidate/validators';

import { useApiService } from '../services/apiService';
import { useUserStore } from '../store/user';

export default {
    data() {
        return {
            v$: useVuelidate(),
            newUser: {
                email: '',
                name: '',
                lastName: '',
                phoneNumber: '',
                password: '',
                passwordConfirm: '',
            },
            apiService: '',
            userStore: null,
        }
    },
    mounted() {
        this.apiService = useApiService();
        this.userStore = useUserStore();
    },
    computed: {
        isDisabled() {
            return this.v$.newUser.$invalid;
        }
    },
    methods: {
        register() {
            const data = {
                name: `${this.newUser.name} ${this.newUser.lastName}`,
                phone: this.newUser.phoneNumber,
                email: this.newUser.email,
                password: this.newUser.passwordConfirm,
            };
            this.apiService.post('/api/v1/users', data)
                .then((response) => {
                    console.log(response.status);
                    // TODO add feedback to user
                    if(response.status === 200) {
                        this.$router.push('/register');
                    }
                });
        },
        login() {
            this.$router.push('/login');
        },
    },
    validations() {
        return {
            newUser: {
                email: { required, email },
                name: { required },
                lastName: { required },
                phoneNumber: { required },
                password: { required, minLength: minLength(6) },
                passwordConfirm: { required, sameAsPassword: sameAs(this.newUser.password) },
            }
        }
    }
}


</script>

<style lang='scss' scoped>
.registerFormContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.formSection {
    display: flex;
    flex-direction: column;
    align-items: center;
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

.register {
    margin-bottom: 1rem;

    .register-box {
        background-color: $highlight-background;
        margin-left: auto;
        margin-right: auto;
    }

    .register-box input[type=text],
    .register-box input[type=password],
    .register-box input[type=email],
    .register-box input[type=tel],
    .register-box select {
        background-color: #FFFFFF;
        border: 0px;
        color: $text-color;

        &:focus {
        outline: none;
        }
    }

    .register-line {
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

    .register-line-label {
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .register-line-input {
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

    .register-validationMessages {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-items: flex-end;
    }

    .register-validationError {
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 10px;
        color: rgb(165, 35, 35);
        font-size: 12px;
    }
}
</style>