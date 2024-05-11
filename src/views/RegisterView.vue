<template>
    <div class="registerFormContainer">
        <h2>Register</h2>
        <div class="container-fluid">
            <div class="row justify-content-md-center">
                <div class="col-12 col-sm-10 col-md-6">
                    <form>
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Email Address</label>
                            <input v-model="newUser.email" type="email" class="form-control" id="emailInput"
                                placeholder="name@example.com">
                            <span class="invalid-feedback" v-show="v$.newUser.email.required.$response">required</span>
                            <span class="invalid-feedback" v-show="v$.newUser.email.email.$response">not a valid email</span>
                        </div>
                        <div class="mb-3">
                            <label for="nameInput" class="form-label">Name</label>
                            <input v-model="newUser.name" type="text" class="form-control" id="nameInput"
                                placeholder="">
                            <div class="input-errors" v-for="error of v$.newUser.name.$errors" :key="error.$uid">
                                <div class="invalid-feedback">{{ error.$message }}</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="lastNameInput" class="form-label">Last Name</label>
                            <input v-model="newUser.lastName" type="text" class="form-control" id="lastNameInput"
                                placeholder="">
                            <div class="input-errors" v-for="error of v$.newUser.lastName.$errors" :key="error.$uid">
                                <div class="invalid-feedback">{{ error.$message }}</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="phoneInput" class="form-label">Phone Number</label>
                            <input v-model="newUser.phoneNumber" type="tel" class="form-control" id="phoneInput"
                                placeholder="555-5555555">
                            <div class="input-errors" v-for="error of v$.newUser.phoneNumber.$errors" :key="error.$uid">
                                <div class="invalid-feedback">{{ error.$message }}</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="passwordInput" class="form-label">Password</label>
                            <input v-model="newUser.password" type="password" class="form-control" id="passwordInput"
                                placeholder="******">
                            <div class="input-errors" v-for="error of v$.newUser.password.$errors" :key="error.$uid">
                                <div class="invalid-feedback">{{ error.$message }}</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="passwordConfirmInput" class="form-label">Password Confirmation</label>
                            <input v-model="newUser.passwordConfirm" type="password" class="form-control"
                                id="passwordConfirmInput" placeholder="******">
                            <div class="input-errors" v-for="error of v$.newUser.passwordConfirm.$errors"
                                :key="error.$uid">
                                <div class="invalid-feedback">{{ error.$message }}</div>
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
import { useApiService } from '../services/apiService';
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs } from '@vuelidate/validators';

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
        console.log('v', this.v$.newUser);
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
                password: { required },
                passwordConfirm: { required, sameAsPassword: sameAs('password') },
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
</style>