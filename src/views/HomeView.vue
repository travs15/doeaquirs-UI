<template>
    <div class="homeContainer">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Doe Aqui RS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="handleFilter('news')"><span>News</span> </a>
                        </li>
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
                            <a class="nav-link active" aria-current="page" href="#" @click="handleSignOut">Log-Out</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12" v-show="displayNews">
                    <div class="sectionContainer">
                        <h4>Find A Trip</h4>
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-5">
                                     <div class="mb-5">
                                        <select v-model="startState" class="form-control"
                                            id="startState">
                                            <option disabled selected value="Origin"></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <label for="startState" class="form-label">Start State (required)</label>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-5">
                                     <div class="mb-5">
                                        <select v-model="arrivalState" class="form-control"
                                            id="arrivalState">
                                            <option disabled value="Destination">Pick a State</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                        <label for="arrivalState" class="form-label">Arrival State (optional)</label>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-12 col-md-2">
                                    <button class="btn btn-secondary">Search Trip!</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <h4>Upcoming Trips</h4>
                        <DriveCard></DriveCard>
                        <DriveCard></DriveCard>
                    </div>
                </div>
                <div class="col-12" v-show="displayDonations">
                    <div class="sectionContainer">
                        <button type="button" class="btn btn-outline-success" @click="openDonationForm">
                            Post A Donation!
                        </button type="button">
                    </div>
                </div>
                <div class="col-12" v-show="displayDrives">
                    <div class="sectionContainer">
                        <button type="button" class="btn btn-outline-primary" @click="openDriveForm">
                            Post A Drive!
                        </button type="button">
                        <DriveCard v-for="i in 3"></DriveCard>
                    </div>
                </div>
                <div class="col-12" v-show="displaySuppport">
                    <div class="sectionContainer">
                        <div class="alert alert-warning" role="alert">
                            Support Done!
                        </div>
                        <DriveCard></DriveCard>
                    </div>
                </div>
            </div>
        </div>
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
        openDriveForm() {
            this.$router.push('/drive');
        },
        openDonationForm() {
            this.$router.push('/donation');
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
            switch (show) {
                case 'news':
                        this.displayDonations = false;
                        this.displayDrives = false;
                        this.displaySuppport = false;
                        this.displayNews = true;
                    break;
                case 'donation':
                        this.displayDonations = true;
                        this.displayDrives = false;
                        this.displaySuppport = false;
                        this.displayNews = false;
                    break;
                case 'drive':
                        this.displayDonations = false;
                        this.displayDrives = true;
                        this.displaySuppport = false;
                        this.displayNews = false;
                    break;
                case 'support':
                        this.displayDonations = false;
                        this.displayDrives = false;
                        this.displaySuppport = true;
                        this.displayNews = false;
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
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
}

.buttonsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
}

.sectionContainer {
    border-radius: .5em;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin-top: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
}

.btn {
    padding: 0.4em;
}

</style>