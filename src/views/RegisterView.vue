<template>
    <div class="registerFormContainer">
        <h2>Register</h2>
        <div class="container-fluid">
            <div class="row justify-content-md-center">
                <div class="col-12 col-sm-10 col-md-6">
                    <form>
                        <div class="mb-3">
                            <!-- <label for="emailInput" class="form-label">Email Address</label> -->
                            <input
                                type="email" class="form-control" id="emailInput"
                                placeholder="name@example.com"
                                v-model.trim="v$.newUser.email.$model"
                            >
                            <div class="validationMessages">
                                <span
                                    class="validationError"
                                    v-show="v$.newUser.email.required.$invalid && v$.newUser.email.$dirty">
                                    Enter an email
                                </span>
                                <span
                                    class="validationError"
                                    v-show="v$.newUser.email.email.$invalid && v$.newUser.email.$dirty">
                                    Enter a valid email
                                </span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <!-- <label for="nameInput" class="form-label">Name</label> -->
                            <input
                                type="text" class="form-control" id="nameInput"
                                placeholder="Name"
                                v-model.trim="v$.newUser.name.$model"
                            >
                            <div class="validationMessages">
                                <span
                                    class="validationError"
                                    v-show="v$.newUser.name.required.$invalid && v$.newUser.name.$dirty">
                                    Enter your name
                                </span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <!-- <label for="lastNameInput" class="form-label">Last Name</label> -->
                            <input
                                type="text" class="form-control" id="lastNameInput"
                                placeholder="Last Name"
                                v-model.trim="v$.newUser.lastName.$model"
                            >
                            <div class="validationMessages">
                                <span class="validationError"
                                    v-show="v$.newUser.lastName.required.$invalid && v$.newUser.lastName.$dirty">
                                    Enter your last name
                                </span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <!-- <label for="phoneInput" class="form-label">Phone Number</label> -->
                            <input type="tel" class="form-control" id="phoneInput"
                                placeholder="555-5555555"
                                v-model="v$.newUser.phoneNumber.$model"
                            >
                            <div class="validationMessages">
                                <span class="validationError"
                                    v-show="v$.newUser.phoneNumber.required.$invalid && v$.newUser.phoneNumber.$dirty">
                                    Enter a phone number
                                </span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="passwordInput" class="form-label">Password</label>
                            <input
                                type="password" class="form-control" id="passwordInput"
                                placeholder="******"
                                v-model="v$.newUser.password.$model"
                                >
                            <div class="validationMessages">
                                <span class="validationError"
                                    v-show="v$.newUser.password.required.$invalid && v$.newUser.password.$dirty">
                                    Enter a password
                                </span>
                                <span class="validationError"
                                    v-show="v$.newUser.password.minLength.$invalid && v$.newUser.password.$dirty">
                                    Enter a password with a minimum of 6 characters
                                </span>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="passwordConfirmInput" class="form-label">Password Confirmation</label>
                            <input
                                type="password" class="form-control" id="passwordConfirmInput"
                                placeholder="******"
                                v-model="v$.newUser.passwordConfirm.$model"
                            >
                            <div class="validationMessages">
                                <span class="validationError"
                                    v-show="v$.newUser.passwordConfirm.required.$invalid && v$.newUser.passwordConfirm.$dirty">
                                    Enter the password confirmation
                                </span>
                                <span class="validationError"
                                    v-show="v$.newUser.passwordConfirm.sameAsPassword.$invalid && v$.newUser.passwordConfirm.$dirty">
                                    The passwords don't match
                                </span>
                            </div>
                        </div>
                        <div class="buttonsContainer">
                            <button type="button" class="btn btn-secondary" @click="register"
                                :disabled="this.isDisabled">
                                Register
                            </button type="button">
                            <button type="button" class="btn btn-secondary" @click="login">
                                Go to Log-In
                            </button type="button">
                        </div>
                    </form>
                </div>
            </div>
        </div>
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
                        this.$router.push('/login');
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

<style scoped>
.registerFormContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100%;    */
    width: 100%;
}

.formSection {
    display: flex;
    flex-direction: column;
    align-items: center;
}

form {
    border: 0.5px solid #ccc;
    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    margin: 1em;
    padding: 1em;
}

.buttonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.validationMessages {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center
}

.validationError {
    margin-top: 10px;
    color: rgb(165, 35, 35);
    font-size: 12px;
}
</style>