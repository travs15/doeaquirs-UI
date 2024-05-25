<template>
    <div class="homeContainer">
        <header>
            <div class="container">
                <nav class="nav-header">
                <div>
                    <img class="logo" src="@/assets/love.png" />
                    <a href="/" class="name">doeaquirs</a>
                </div>
                
                <ul>
                    <li><a href="#" @click="handleSignOut">Log-Out</a></li>
                </ul>
                </nav>
            </div>
        </header>
        <div>
            <router-view />
        </div>
        <nav class="menu-bottom">
            <ul class="ul-bottom">
                <li><a href="#" class="a-bottom"><i class="pi pi-bell" @click="handleFilter('notifications')"></i>Notificações</a></li>
                <li><a href="#" class="a-bottom"><i class="pi pi-truck" @click="openTripForm"></i>Minhas viagens</a></li>
                <li><a href="#" class="a-bottom"><i class="pi pi-gift" @click="openDonationForm"></i>Minhas doações</a></li>
                <li><a href="#" class="a-bottom"><i class="pi pi-user" @click="handleFilter('profile')"></i>Meu perfil</a></li>
            </ul>
        </nav>
    </div>
</template>


<script>
import Modal from '../components/Modal.vue';
import DriveCard from '../components/DriveCard.vue';

export default {
    components: {
        DriveCard,
        Modal,
    },
    data() {
        return {
            isLoggedIn: false,
            displayDonations: false,
            displayDrives: false,
            displaySuppport: false,
            displayNews: true,
            startState: null,
            arrivalState: null,
        }
    },
    mounted() {
        this.displayNews = true;
    },
    methods: {
        openTripForm() {
            this.$router.push('/home/trips');
        },
        openDonationForm() {
            this.$router.push('/home/donation');
        },
        handleSignOut() {
            this.$router.push('/');
        },
        handlePostDonation() {
            console.log('donation');
            // TODO show modal with form
        },
        handlePostDrive() {
            // TODO show modal with form
        },
    }
}
</script>

<style lang="scss" scoped>
header {
  background-color: $highlight-background;
  box-shadow: $shadow;
}

</style>