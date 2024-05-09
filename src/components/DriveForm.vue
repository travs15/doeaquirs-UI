<template>
    <div class="registerDriveFormContainer">
        <h2>Register a Drive</h2>
        <form>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6">
                        <h3>Starting Point</h3>
                        <div class="mb-5">
                            <label for="startingState" class="form-label">State</label>
                            <select v-model="startingPoint.startingState" class="form-control" id="startingState">
                                <option disabled value="">Pick a State</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div class="mb-5">
                            <label for="startingAddress" class="form-label">Starting Address</label>
                            <input type="text" class="form-control" id="startingAddress" placeholder="address" v-model="startingPoint.startingAddress">
                        </div>
                        <div class="mb-5">
                            <label for="startingTime" class="form-label">Starting Time</label>
                            <input type="date" class="form-control" id="startingTime" placeholder="" v-model="startingPoint.startingTime">
                        </div>
                        <div class="mb-5">
                            <label for="startingNotes" class="form-label">Notes</label>
                            <textarea class="form-control" id="startingNotes" rows="3" v-model="startingPoint.startingNotes"></textarea>
                        </div>
                        <hr>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6">
                        <h3>Ending Point</h3>
                        <div class="mb-5">
                            <label for="endingState" class="form-label">State</label>
                            <select v-model="endingPoint.endingState" class="form-control" id="endingState">
                                <option disabled value="">Pick a State</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div class="mb-5">
                            <label for="endingAddress" class="form-label">Ending Address</label>
                            <input type="text" class="form-control" id="endingAddress" placeholder="address" v-model="endingPoint.endingAddress">
                        </div>
                        <div class="mb-5">
                            <label for="endingTime" class="form-label">Ending Time</label>
                            <input type="date" class="form-control" id="endingTime" placeholder="" v-model="endingPoint.endingTime">
                        </div>
                        <div class="mb-5">
                            <label for="endingNotes" class="form-label">Notes</label>
                            <textarea class="form-control" id="endingNotes" rows="3" v-model="endingPoint.endingNotes"></textarea>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="vehicletypeSelect" class="form-label">Vehicle Type</label>
                <select v-model="vehicleType" class="form-control" id="vehicletypeSelect">
                    <option disabled value="">Pick a type</option>
                    <option value="car">Car</option>
                    <option value="truck">Truck</option>
                    <option value="plane">Plane</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="driveDescription" class="form-label">Description</label>
                <textarea class="form-control" id="driveDescription" rows="3" v-model="driveDescription"></textarea>
            </div>
            <div class="buttonsContainer">
                <button type="button" class="btn btn-secondary" @click="registerDrive">
                    Register Drive!
                </button type="button">
                <button type="button" class="btn btn-danger" @click="emitCancel">
                    Cancel
                </button type="button">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vehicleType: '',
            driveDescription: '',
            startingPoint: {
                startingState: '',
                startingAddress: '',
                startingTime: '',
                startingNotes: '',
            },
            endingPoint: {
                endingState: '',
                endingAddress: '',
                endingTime: '',
                endingNotes: '',
            },
        }
    },
    methods: {
        registerDrive() {
            // TODO Implement registration functionality here
            this.$router.push('/home');
        },
        emitCancel() {
            // TODO post 
            this.$emit('cancel-post');
        },
    }
}


</script>

<style scoped>
/* Your light theme styles */
.registerDriveFormContainer {
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
    width: 80%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    margin: 1em;
    padding: 1em;
}

.buttonsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>