<template>
  <div class="registerFormContainer">
    <h2>Register</h2>
    <form>
        <div class="mb-3">
            <label for="emailInput" class="form-label">Email Address</label>
            <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="nameInput" class="form-label">Name</label>
            <input type="text" class="form-control" id="nameInput" placeholder="">
        </div>
        <div class="mb-3">
            <label for="lastNameInput" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastNameInput" placeholder="">
        </div>
        <div class="mb-3">
            <label for="phoneInput" class="form-label">Phone Number</label>
            <input type="tel" class="form-control" id="phoneInput" placeholder="555-5555555">
        </div>
        <div class="mb-3">
            <label for="passwordInput" class="form-label">Password</label>
            <input type="password" class="form-control" id="passwordInput" placeholder="******">
        </div>
        <div class="mb-3">
            <label for="passwordConfirmInput" class="form-label">Password Confirmation</label>
            <input type="password" class="form-control" id="passwordConfirmInput" placeholder="******">
        </div>
        <div class="buttonsContainer">
            <button type="button" class="btn btn-secondary" @click="register">
                Register
            </button type="button">
            <button type="button" class="btn btn-secondary" @click="login">
                 Go to Log-In
            </button type="button">
        </div>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            name: '',
            lastName: '',
            phoneNumber: '',
            password: '',
            passwordConfirm: '',
        }
    },
    methods: {
        register() {
            // TODO Implement registration functionality here
            this.$router.push('/home');
        },
        login() {
            this.$router.push('/login')
        },
    }
}


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

.buttonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>