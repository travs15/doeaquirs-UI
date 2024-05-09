<template>
  <div class="authFormContainer">
    <h2>Access the App</h2>
    <form>
        <div class="mb-3">
            <label for="emailInput" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="passwordInput" class="form-label">Email address</label>
            <input type="password" class="form-control" id="passwordInput" placeholder="name@example.com">
        </div>
        <div class="buttonsContainer">
            <button type="button" class="btn btn-secondary" @click="login">
                Log-In
            </button type="button">
            <button type="button" class="btn btn-secondary" @click="register">
                Register
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
    }
}
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

.buttonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>
