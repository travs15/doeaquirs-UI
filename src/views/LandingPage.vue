<template>
    <div class="landingContainer">
        <div class="landingStart">
            <div class="navBarContainer">
            </div>
            <div class="startImgContainer">
                <!-- <img :src="imgUrl" alt=""> -->
            </div>
        </div>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Doe Aqui RS!</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click="login">Log-in</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="register">Register</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="landingAboutContainer">
            <h1>Welcome!</h1>
            <h3>Thanks for beign here whiling to help each other</h3>
            <div class="landingAboutContent">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                            <button type="button" class="btn btn-primary" @click="handlePostRide"><h4>Post a Ride</h4></button>
                            <h4 class="aboutSection">
                                This app will let you post your rides in order to transport food, clothes, supplies, donations... everything the people will need to help get us through this though time.
                            </h4>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                            <button type="button" class="btn btn-success" @click="handlePostDonation"><h4>Post a Donation</h4></button>
                            <h4 class="aboutSection">
                                If you have donations we could help you contacting the drive that will be available to carry the supplies that you donate and help the ones in need!
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="landingAboutContentInverse">
                <h2>Useful things!</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h4 class="aboutSection">
                                <ul>
                                    <li>Tents, mattresses, and blankets.</li>
                                    <li>Medicines and bottled water.</li>
                                    <li>Hygiene kits and cleaning supplies. </li>
                                </ul>
                            </h4>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                            <h4 class="aboutSection">
                                <ul>
                                    <li>Non-perishable food items.</li>
                                    <li>Clothing and footwear.</li>
                                </ul>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="featuresContainer">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // email: '',
            // password: '',
        }
    },
    methods: {
        login() {
            this.$router.push('/login')
        },
        register(){
            this.$router.push('/register')
        },
        handlePostRide() {
            this.$router.push('/login')
        },
        handlePostDonation() {
            this.$router.push('/login')
        }
    },
}
</script>

<style scoped>
.landingContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    color: #575757;
}

/* first part of the content */

v-container {
    padding: 0 !important;
}

.landingStart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background-color: #D9E2E1;
}

.navBarContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    background-color: #5C3A8E;
}

.title {
    font-weight: 900;
    padding: 0.4em;
    color: #F8B548;
}

.newsButton {
    margin-top: 1em;
}

.insideButtons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0% 0% 100% 100%;
    background-color: white;
    color: black;
}

.insideButton{
    cursor: pointer;
    font-weight: 700;
}
.insideButton:hover{
    color: #F8B548;
    font-weight: 900;
}

.startImgContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    background-color: #5C3A8E;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px; */
}

.startImgContainer img {
    width: 100%;
}

/* about content */
.landingAboutContainer {
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}

.landingAboutContent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    background-color: white;
    border-radius: 3em;
    padding: 3em;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    text-align: center;
}

.aboutSection {
    padding: 1em;
}

.landingAboutContentInverse {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: white;
    border-radius: 3em;
    padding: 6em;
    margin: 1em;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    text-align: center;
}

/* features container */
.featuresContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: 4em;
}

.container {
    margin: 0 !important;
}
</style>
