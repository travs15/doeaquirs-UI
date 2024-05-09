<template>
    <Modal :show="showUserOptionsModal" @close-modal="closeUserOptionsModal">
        <UserOptionsModal />
    </Modal>
    <button @click=""></button>
</template>


<script setup>
// with the setup tag we don't need to expose the variables or methods to the template by exporting them
import { onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Modal from '@/components/Modal.vue';
import UserOptionsModal from '@/components/UserOptionsModal.vue';
//service
import useApiService from '@/services/apiService';

/** Global variables */
const router = useRouter();
const apiService = useApiService();

/** Log in state and Log out User */
const isLoggedIn = ref(false);
let auth;

const data = {
  username: "bahs",
  name: "Boris",
  lastName: "Hurtado",
  email: "boris@test.com",
  birthDate: "03-11-1993",
  password: "123456789",
};

// hook lifecycle
onMounted(() => {
  apiService.post('api/v1/auth/register', data)
      .then(response => console.log(response))
      .catch(error => console.log(error))
});

const handleSignOut = () => {
  router.push('/login');
};

/** Modal Logic */
const showUserOptionsModal = ref(false);
const openUserOptionsModal = () => {
  showUserOptionsModal.value = true;
};
const closeUserOptionsModal = () => {
  showUserOptionsModal.value = false;
};


</script>

<style scoped>

</style>