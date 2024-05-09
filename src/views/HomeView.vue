<template>
    <Modal
        v-bind:show-modal="displayDriveModal"
        v-on:close-modal="closeDriveFormModal">
        <DriveForm
            v-on:drive-posted="handlePostDrive"
            v-on:cancel-post="closeDriveFormModal"></DriveForm>
    </Modal>
    <Modal
        v-bind:show-modal="displayDonationModal"
        v-on:close-modal="closeDonnationFormModal">
        <DonationForm
            v-on:donation-posted="handlePostDonation"
            v-on:cancel-post="closeDonnationFormModal">
        </DonationForm>
    </Modal>
    <div class="homeContainer">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Doeaquirs!</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="handleFilter('donation')"><span>Donations</span> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="handleFilter('drive')"><span>Drives</span> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="handleFilter('support')"><span>Support Done</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="handleFilter('general')"><span>General</span> </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="handleSignOut">Log-Out</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6" v-show="displayDonations">
                    <div class="sectionContainer">
                        <button type="button" class="btn btn-outline-success" @click="openDonationFormModal">
                            <h3>Post Donation!</h3>
                        </button type="button">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6" v-show="displayDrives">
                    <div class="sectionContainer">
                        <button type="button" class="btn btn-outline-primary" @click="openDriveFormModal">
                            <h3>Post Drive!</h3>
                        </button type="button">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6" v-show="displaySuppport">
                    <div class="sectionContainer">
                        <div class="alert alert-warning" role="alert">
                            Support Done!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Modal from '../components/Modal.vue';
import DriveForm from '../components/DriveForm.vue';
import DonationForm from '../components/DonationForm.vue';

export default {
    components: {
        Modal,
        DriveForm,
        DonationForm,
    },
    data() {
        return {
            // email: '',
            // password: '',
            isLoggedIn: false,
            displayDriveModal: false,
            displayDonationModal: false,
            displayDonations: true,
            displayDrives: true,
            displaySuppport: true,
        }
    },
    methods: {
        openDriveFormModal() {
            this.displayDriveModal = true;
        },
        closeDriveFormModal() {
            this.displayDriveModal = false;
        },
        openDonationFormModal() {
            this.displayDonationModal = true;
        },
        closeDonnationFormModal() {
            this.displayDonationModal = false;
        },
        handleSignOut() {
            this.$router.push('/login');
        },
        handlePostDonation() {
            console.log('donation');
            // TODO show modal with form
        },
        handlePostDrive() {
            // TODO show modal with form
        },
        handleFilter(show) {
            console.log('show');
            switch (show) {
                case 'general':
                        this.displayDonations = true;
                        this.displayDrives = true;
                        this.displaySuppport = true;
                    break;
                case 'donation':
                        this.displayDonations = true;
                        this.displayDrives = false;
                        this.displaySuppport = false;
                    break;
                case 'drive':
                        this.displayDonations = false;
                        this.displayDrives = true;
                        this.displaySuppport = false;
                    break;
                case 'support':
                        this.displayDonations = false;
                        this.displayDrives = false;
                        this.displaySuppport = true;
                    break;
            }
        },
    }
}
</script>

<style scoped>
.homeContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
}

.buttonsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
}

.sectionContainer {
    border-radius: 3em;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    margin: 1em;
    padding: 1em;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
}
</style>