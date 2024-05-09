Copy code
<template>
    <div class="optionsContainer">
        <h2 class="optionsElement--title">- - BetMe - -</h2>
        <div @click="" class="optionsElement">
            <button class="button" @click="login">
                Mi cuenta
                <!-- <v-icon :icon="mdiAccount" size="x-large"></v-icon> -->
            </button>
        </div>
        <div @click="" class="optionsElement">
            <button class="button" @click="login">
                Informacion de pago
                <!-- <v-icon :icon="mdiAccountCreditCard" size="x-large"></v-icon> -->
            </button>
        </div>
        <div @click="" class="optionsElement">
            <button class="button" @click="login">
                Cerrar Sesion
                <!-- <v-icon :icon="mdiCloseNetwork" size="x-large"></v-icon> -->
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style>
.optionsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;   
    width: 100%;
}

.button {
    width: 100%;
}

</style>