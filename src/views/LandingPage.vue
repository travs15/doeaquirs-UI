<template>
    <header>
      <div class="container">
        <nav class="nav-header">
          <div>
            <img class="logo" src="@/assets/love.png" />
            <a href="/" class="name">doeaquirs</a>
          </div>
        
          <ul>
            <li><a href="#" @click="register">Cadastro</a></li>
            <li><a href="#" @click="login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div>
        <div class="hero">
            <p>Todos juntos enviando doações ao Rio Grande do Sul!</p>
        </div>
    </div>
    <div class="call">
        <p>Procure viagens solidárias em direção ao Rio Grande do Sul e envie sua doação através de motoristas solidários.</p> 
    </div>
    <div class="search">
        <div class="search-box">
            <div class="search-line">
                <div class="search-line-label">De</div>
                <div class="search-line-input">
                    <input type="text" v-model="cityOrState" placeholder="Digite sua cidade ou estado">
                </div>
            </div>
            <div class="search-line">
                <div class="search-line-label">Transporte</div>
                <div class="search-line-input">
                    <select name="" id="" v-model="transportationType">
                        <option value="">Todos os tipos</option>
                        <option value="truck">Caminhão</option>
                        <option value="car">Carro</option>
                        <option value="bus">Ônibus</option>
                        <option value="van">Van/Micro-ônibus</option>
                    </select>
                </div>
            </div>
            <div class="search-line">
                <div class="search-line-label">A partir de</div>
                <div class="search-line-input"><input type="date" value="" v-model="date"></div>

            </div>
            <div class="btn btn-primary btn-search" @click="handleSearchTrip">Pesquisar viagens solidárias</div>
        </div>
    </div>
    <div class="create-trip-panel call">
        <p  class="call">Você é um motorista indo pro RS e deseja oferecer sua viagem para que mais pessoas possam enviar suas doações através de você?</p>
        <div class="btn-container">
            <div class="btn btn-primary" @click="handlePostDonation">Oferecer viagem solidária</div>
        </div>
    </div>
    <div>
        <div class="faq-question">
            <h2>Como funciona?</h2>
            <p>
                Motoristas partindo em direção ao Rio Grande do Sul publicam suas viagens aqui no <strong>doeaquirs.org</strong>, 
                com os detalhes de local e horário da partida e pontos de parada. Doadores interessados em enviar ao estado suas 
                doações pesquisam por viagens cadastradas e através da plataforma podem registrar sua intenção de envio de doações 
                na viagem desejada, possibilitando assim um meio de contato entre motoristas e doadores.
            </p>
        </div>
        <div class="faq-question">
            <h2>Quero enviar minha doação</h2>
            <p>
                Pesquise por viagens indicando sua cidade, tipo de transporte procurado e data inicial para pesquisa. Escolha o 
                motorista desejado e cadastre os itens que deseja doar. O motorista entrará em contato com você para combinarem a 
                coleta de suau doação.
            </p>
        </div>
        <div class="faq-question">
            <h2>Quero oferecer uma viagem</h2>
            <p>
                Pesquise por viagens indicando sua cidade, tipo de transporte procurado e data inicial para pesquisa. Escolha o 
                motorista desejado e cadastre os itens que deseja doar. O motorista entrará em contato com você para combinarem 
                a coleta de suau doação.
            </p>
        </div>
        <div class="faq-question">
            <h2>É seguro?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dapibus lorem a vestibulum. Nullam 
                quis ligula vitae felis posuere semper sed nec nunc. Maecenas eget neque vel leo pretium commodo non sed lectus. 
                Fusce est sapien, aliquet nec massa non, tincidunt congue nunc. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Cras ullamcorper dapibus lorem a vestibulum. Nullam quis ligula vitae felis posuere semper sed 
                nec nunc. Maecenas eget neque vel leo pretium commodo non sed lectus. Fusce est sapien, aliquet nec massa non, 
                tincidunt congue nunc. 
            </p>
        </div>
        <div class="faq-question">
            <h2>Preciso pagar alguma coisa?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dapibus lorem a vestibulum. Nullam 
                quis ligula vitae felis posuere semper sed nec nunc. Maecenas eget neque vel leo pretium commodo non sed lectus. 
                Fusce est sapien, aliquet nec massa non, tincidunt congue nunc. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Cras ullamcorper dapibus lorem a vestibulum. Nullam quis ligula vitae felis posuere semper sed 
                nec nunc. Maecenas eget neque vel leo pretium commodo non sed lectus. Fusce est sapien, aliquet nec massa non, 
                tincidunt congue nunc. 
            </p>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
    data() {
        return {
            v$: useVuelidate(),
            cityOrState: null,
            transportationType: null,
            date: null,
        }
    },
    methods: {
        login() {
            this.$router.push('/login')
        },
        register(){
            this.$router.push('/register')
        },
        handleSearchTrip() {
            if(!this.v$.$invalid) {
                this.$router.push('/viagens')
            }
        },
        handlePostDonation() {
            this.$router.push('/viagens/oferecer')
        }
    },
    validations() {
        return {
            cityOrState: {required},
            transportationType: {required},
            date: {required},
        }
    }
}
</script>

<style lang="scss" scoped>

header {
    margin-bottom: 2em;
}

.hero {
    text-align: center;
    p {
        font-family: 'Salsa';
        font-size: 1.25rem;
        text-align: center;
    }
    img {
        height: 60px;
    }
    margin-bottom: 2rem;
}

.call {
    p {
        text-align: center;
    }
    margin-bottom: 1rem;
}

.search {
    margin-bottom: 2rem;

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
        height: 3rem;
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

.create-trip-panel {
    margin-bottom: 1.25rem;

    .btn-container {
        margin: 0 auto;
        max-width: 600px;
    }

}

.faq-question {
    margin-bottom: 0px;
    padding: 1rem;

    h2 {
        font-family: 'Salsa';
        margin-bottom: 0.8rem;
        font-size: 1.25rem;
    }
}
</style>
