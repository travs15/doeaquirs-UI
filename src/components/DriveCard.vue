<template>
    <div class="driveCard">
        <div class="leftSection">
            <span class="card-text">Time</span>
            <span class="card-text">Type</span>
            <span>Img Card</span>
            <span class="card-text">Driver Name LastName</span>
        </div>
        <div class="rightSection">
            <div class="rideDescription">
                <div class="information">
                    <div class="locationInfo">
                        <span>Origin</span>-
                        <span>Arrival</span>
                    </div>
                    <span class="infoDescription">Ride information At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias </span>
                </div>
                <div class="status">
                    <span>Status</span>
                </div>
            </div>
            <div class="rideButtons">
                <button class="btn btn-secondary">Details</button>
                <button class="btn btn-secondary">Send Here</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // prop to get all the info displayed
        drive: {
            type: Object,
            required: false
        }
    },
    methods: {
    }
}

</script>

<style>
.driveCard {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5em;
    margin: 0.5em;
    border: 1px solid gray;
    border-radius: .5em;
}

.leftSection {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: .5em;
    margin-right: .5em;
}

.rightSection {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 13px;
}

.rideDescription {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-right: 0.5em;
}

.infoDescription {
    text-align: justify;
}

.status {
    height: 100%;
    border: 1px solid gray;
    border-radius: .5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.locationInfo {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    font-size: 16px;
    font-weight: 600;
}

.rideButtons {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}
.rideButtons .btn {
    margin-left: 5px;
    margin-top: 5px;
    padding: 0.2em;
}

.card-text {
    text-align: center;
}
</style>