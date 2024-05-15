<template>
    <div>
        <div class="back-bar">
            <a @click="goBack"><i class="pi pi-chevron-left"></i> Voltar</a>
        </div>
        <div class="search">
            <div class="search-box">
                <div class="search-line">
                    <div class="search-line-label">De</div>
                    <div class="search-line-input">
                        Tangamandápio, AC
                    </div>
                </div>
                <div class="search-line">
                    <div class="search-line-label">Transporte</div>
                    <div class="search-line-input">
                       Todos os tipos
                    </div>
                </div>
                <div class="search-line">
                    <div class="search-line-label">A partir de</div>
                    <div class="search-line-input">15/05/2024</div>
                </div>
            </div>
        </div>
        <div class="results-count-bar">
            Viagens encontradas: 2
        </div>
        <div class="results">
            <div class="result-card">
                <div class="trip-info">
                    <div class="trip-info-line">
                        <div class="trip-info-line-label">Origem</div>
                        <div class="trip-info-line-content highligh-text">06:00  Tangamandápio, AC</div>
                    </div>
                    <div class="trip-info-line">
                        <div class="trip-info-line-label">Paradas</div>
                        <div class="trip-info-line-content">18:00  Manaus, AM</div>
                    </div>
                    <div class="trip-info-line">
                        <div class="trip-info-line-label">Destino</div>
                        <div class="trip-info-line-content">Porto Alegre, RS</div>
                    </div>
                    <div class="trip-info-line">
                        <div class="trip-info-line-label">Transporte</div>
                        <div class="trip-info-line-content highlight-text">Caminhão</div>
                    </div>
                    <div class="trip-info-line">
                        <div class="trip-info-line-label"></div>
                        <div class="trip-info-line-content">
                            <a class="link-btn" href="#">Ver mais detalhes</a>
                        </div>
                    </div>
                </div>
                <div class="trip-actions">
                    <a href="#" class="btn btn-primary">Enviar minha doação</a>
                    <div>
                        Paulo
                        <img src="@/assets/avatar.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ChevronLeftIcon } from 'vue-feather-icons';

export default {
    components: {
        ChevronLeftIcon
    },
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
        },
        goBack() {
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss" scoped>
.back-bar {
    a {
        color: $text-color;
        
    }
    i {
        font-size: 0.8rem;
        margin-right: 6px;
    }
    margin-bottom: 1rem;
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
            height: 2rem;
            display: grid;
            grid-template-columns: 70px auto;

            .trip-info-line-label {
                display: flex;
                align-items: center;
                justify-content: end;
            }
            .trip-info-line-content {
                margin-left: 20px;
                display: flex;
                align-items: center;
            }
        }
        .trip-actions {
            margin-top: 1rem;
            display: grid;
            grid-template-columns: 50% 50%;

            .btn {
                letter-spacing: 0;
                font-size: 0.9rem;
            }

            div {
                display: flex;
                justify-content: end;
                align-items: center;
                font-weight: 400;
            }

            img {
                border-radius: 50%;
                height: 50px;
                margin-left: 10px;
            }
        }
    }
}

.search {
    margin-bottom: 1rem;

    .search-box {
        background-color: $highlight-background;
        box-shadow: $shadow;
        border-radius: 20px;
        border: $box-border;
        min-width: 320px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;

    }

    .search-box input[type=text],
    .search-box input[type=date],
    .search-box select {
        background-color: #FFFFFF;
        border: 0px;
        color: $text-color;

        &:focus {
        outline: none;
        }
    }

    .search-line {
        height: 2.6rem;
        border-bottom: $box-border;
        margin-left: 20px;
        margin-right: 20px;
        display: grid;
        grid-template-columns: 90px auto;

        &:last-of-type {
            border-bottom: 0px;
        }
    }

    .search-line-label {
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .search-line-input {
        display: flex;
        align-items: center;

        input[type=text] {
            padding-left: 4px;
        }

        input[type=text],
        input[type=date],
        select {
            width: 100%;
            height: 100%;
            font-size: 1rem;
            border-radius: 0;
            font-family: "Red Hat Display", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        
        }

        input[type=date] {
            text-align: left;
        }
    }
}
</style>
