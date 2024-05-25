<template>
    <div class="registerFormContainer">
        <div class="formSection">
            <h2>Register a Donation</h2>
            <form>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12">
                            <h3>Let's see if there's a ride</h3>
                            <div class="mb-5">
                                <label for="donationState" class="form-label">State</label>
                                <select v-model="donationState" v-on:change="verifyRidesOnState" class="form-control"
                                    id="donationState">
                                    <option disabled value="">Pick a State</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">{{ messageAccordingRide }}</label>
                                <label for="message" class="form-label">To register items:</label>
                                <ol>
                                    <li>Set the number of items you want to send up to 5</li>
                                    <li>Group the items like: clothes, blankets, hats into a clothes group for example</li>
                                    <li>Submit the items</li>
                                    <li>Contact the Driver</li>
                                </ol>
                            </div>
                            <hr>
                            <div class="itemsContainer">
                                <div class="mb-3">
                                    <input class="form-control" type="number" max="5" v-model.number="itemCount" @input="adjustItems"
                                        placeholder="1" />
                                </div>
                                <button class="btn btn-success" @click.prevent="submitItems">Submit Items</button>
                                <div class="" v-for="(item, index) in items" :key="index">
                                    <div class="buttonsContainer">
                                        <input v-model="item.name" class="form-control" placeholder="Item name" />
                                        <input v-model="item.quantity" class="form-control" placeholder="Item Quantity" />
                                    </div>
                                    <div class="buttonsContainer">
                                        <input v-model="item.description" class="form-control" placeholder="Description" />
                                        <button class="btn btn-secondary" @click.prevent="removeItem(index)">Remove</button>
                                    </div>
                                    <hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttonsContainer">
                    <button type="button" class="btn btn-primary" @click="registerDonation">
                        Register Donation!
                    </button type="button">
                    <button type="button" class="btn btn-danger" @click="handleGoBack">
                        Cancel
                    </button type="button">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            messageAccordingRide: '',
            donationState: '',
            ridePicked: false,
            itemCount: 0,
            items: [],
        }
    },
    watch: {
        ridePicked(newValue) {
            if (newValue) {
                this.messageAccordingRide = 'You Picked a ride, please contact the person related and coordinate the pick up';
            } else {
                this.messageAccordingRide = 'There is no ride so, we will notify your e-mail when there is one available';
            }
        }
    },
    methods: {
        registerDonation() {
            if(this.items.length > 0) {
                // TODO post donation to back
            }
        },
        verifyRidesOnState() {
            // TODO check the rides on that state end point for that
        },
        adjustItems() {
        const currentCount = this.items.length;
        if (this.itemCount > currentCount) {
            for (let i = currentCount; i < this.itemCount; i++) {
            this.items.push({ name: '', description: '' });
            }
        } else {
            this.items.splice(this.itemCount);
        }
        },
        removeItem(index) {
            this.items.splice(index, 1);
            this.itemCount = this.items.length;
        },
        submitItems() {
            axios.post('/api/items', this.items)
                .then(response => {
                console.log('Items submitted successfully', response.data);
                // Handle success
                })
                .catch(error => {
                console.error('Error submitting items', error);
                // Handle error
                });
        },
        handleGoBack() {
            this.$router.push('/home');
        }
    }
}


</script>

<style scoped>
/* Your light theme styles */
.registerFormContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* height: 100vh; */
    width: 100%;
}

.formSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2em;
    width: 80%;
}

form {
    border: 0.5px solid #ccc;
    border-radius: .5em;
    width: 100%;
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
    margin-top: 1em;
}

.itemsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>