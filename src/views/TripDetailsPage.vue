<template>
    <div>
        <div class="back-bar">
            <a @click="goBack"><i class="pi pi-chevron-left"></i> Voltar</a>
        </div>
        <div class="results">
            <div class="result-card">
                <div class="trip-info">

                    <div class="trip-info-line">
                        <div class="trip-info-line-label">Origem</div>
                        <div class="trip-info-line-content">
                            <div class="city highlight-text"><i class="pi pi-map-marker pi-small"></i>Tangamandápio, AC
                            </div>
                            <div class="address">Centro</div>
                            <div class="time">16/05/2024 • 08:00</div>
                        </div>
                    </div>
                    <div class="trip-info-line">
                        <div class="trip-info-line-label">Paradas</div>
                        <div class="trip-info-line-content">
                            <div class="stop">
                                <div class="city"><i class="pi pi-map-marker pi-small"></i>Manaus, AC</div>
                                <div class="address">Centro</div>
                                <div class="time">16/05/2024 • 16:00</div>
                            </div>
                            <div class="stop">
                                <div class="city"><i class="pi pi-map-marker pi-small"></i>Curitiba, PR</div>
                                <div class="address">Centro</div>
                                <div class="time">17/05/2024 • 17:00</div>
                            </div>
                        </div>
                    </div>
                    <div class="trip-info-line">
                        <div class="trip-info-line-label">Destino</div>
                        <div class="trip-info-line-content">
                            <div class="city highlight-text"><i class="pi pi-map-marker pi-small"></i>Porto Alegre, RS
                            </div>
                            <div class="address">Humaitá</div>
                            <div class="time">20/05/2024 • 08:00</div>
                        </div>
                    </div>
                    <div class="trip-info-line">
                        <div class="trip-info-line-label">Transporte</div>
                        <div class="trip-info-line-content highlight-text">Caminhão</div>
                    </div>
                    <div class="trip-info-line">
                        <div class="trip-info-line-label">Descrição</div>
                        <div class="trip-info-line-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dapibus lorem a
                            vestibulum. Nullam quis ligula vitae felis posuere semper sed nec nunc. Maecenas eget neque
                            vel leo pretium commodo non sed lectus. Fusce est sapien, aliquet nec massa non, tincidunt
                            congue nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dapibus
                            lorem a vestibulum.
                        </div>
                    </div>
                    <div class="trip-info-line">
                        <div class="trip-info-line-label">Motorista</div>
                        <div class="trip-info-line-content">
                            <div class="driver-details">

                                <img src="@/assets/avatar.png" alt="">
                                <div>
                                    <div class="driver-name highlight-text">Paulo</div>
                                    <div class="driver-trips">Viagens oferecidas: 1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <router-link class="btn btn-primary" to="#">Transporte minha doação</router-link>
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
        }
    },
    methods: {
        login() {
            this.$router.push('/login')
        },
        register() {
            this.$router.push('/register')
        },
        handlePostRide() {
            this.$router.push('/login')
        },
        handlePostDonation() {
            this.$router.push('/login')
        },
        goBack() {
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss" scoped>


.pi-small {
    font-size: 0.8rem;
    width: 1.2rem;
}

.address,
.time {
    font-size: 0.9rem;
    padding-left: 1.2rem;
}

.results-count-bar {
    text-align: center;
}

.results {
    .result-card {
        margin-top: 1rem;
        background-color: $highlight-background;
        box-shadow: $shadow;
        border-radius: 20px;
        border: $box-border;
        padding: 20px;

        .trip-info-line {
            margin-bottom: 0.5rem;

            display: grid;
            grid-template-columns: 70px auto;

            .trip-info-line-label {
                display: flex;
                align-items: start;
                justify-content: end;
            }

            .trip-info-line-content {
                margin-left: 20px;
            }
        }

        .driver-details {
            display: flex;
            justify-content: start;
            align-items: center;

            .driver-trip {
                font-size: 0.9rem;
            }

            img {
                border-radius: 50%;
                height: 50px;
                margin-right: 1rem;
            }
        }

        .trip-actions {
            display: grid;
            grid-template-columns: 50% 50%;
            margin-bottom: 1rem;

            .btn {
                letter-spacing: 0;
                font-size: 0.9rem;
            }

            div {
                display: flex;
                justify-content: start;
                align-items: center;
                font-weight: 400;
            }

            img {
                border-radius: 50%;
                height: 50px;
                margin-right: 10px;
            }
        }
    }
}

.stop {
    margin-bottom: 0.5rem;

    &:last-of-type {
        margin-bottom: 0;
    }
}

</style>
