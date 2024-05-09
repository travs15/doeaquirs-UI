<template>
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
                            <a class="nav-link active" aria-current="page" href="#" @click="handleSignOut">Log-Out</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="buttonsContainer container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6">
                    <div class="sectionContainer">
                        <button type="button" class="btn btn-outline-success" @click="handlePostDonation">
                            <h3>Post Donation!</h3>
                        </button type="button">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6">
                    <div class="sectionContainer">
                        <button type="button" class="btn btn-outline-primary" @click="handlePostDrive">
                            <h3>Post Drive!</h3>
                        </button type="button">
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6">
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
export default {
    data() {
        return {
            // email: '',
            // password: '',
            isLoggedIn: false,
            showUserOptionsModal: false,
        }
    },
    methods: {
        openUserOptionsModal() {
            showUserOptionsModal.value = true;
        },
        closeUserOptionsModal() {
            showUserOptionsModal.value = false;
        },
        handleSignOut() {
            router.push('/login');
        },
        handlePostDonation() {
            // TODO show modal with form
        },
        handlePostDrive() {
            // TODO show modal with form
        }
    }
}
</script>

<style scoped>
.homeContainer {
    width: 100%;
    height: 100vh;
}

.buttonsContainer {
    display: flex;
    flex-direction: row;
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