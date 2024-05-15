<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div>
    <header>
      <div class="container">
        <nav class="nav-header">
          <div>
            <img class="logo" src="@/assets/love.png" />
            <a href="/" class="name">doeaquirs</a>
          </div>
        
          <ul>
            <li><a href="/">Cadastro</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <footer>
      <div class="container">
        <p>© 2024 Doe Aqui RS. Todos os direitos reservados.</p>
        <p>Serviço sem fins lucrativos, desenvolvido por voluntários.</p>
      </div>
    </footer>
    <nav class="menu-bottom">
      <ul class="ul-bottom">
        <li><a href="/" class="a-bottom"><i class="pi pi-bell"></i>Notificações</a></li>
        <li><a href="/" class="a-bottom"><i class="pi pi-truck"></i>Minhas viagens</a></li>
        <li><a href="/" class="a-bottom"><i class="pi pi-gift"></i>Minhas doações</a></li>
        <li><a href="/" class="a-bottom"><i class="pi pi-user"></i>Meu perfil</a></li>
      </ul>
    </nav>
  </div>
    
</template>

<style lang="scss">


/* ========= ELEMENTS ========= */

html {
  height: 100%;
}

header {
  background-color: $highlight-background;
  box-shadow: $shadow;
}

main {
  padding-top: 2rem;
  padding-bottom: 2rem;
  min-height: calc(100vh - 200px);
}

footer {
  // background-color: $highlight-background;
  // box-shadow: $shadow-inverted;
  text-align: center;
  padding: 30px;
  margin-bottom: 80px;
}

footer p {
  font-size: 0.9rem;
}

.nav-header {
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;

    li {
      letter-spacing: 1px;
    }

    a {
      text-decoration: none;
      color: $text-color;
      transition: 0.3s;
      margin-left: 1rem;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 50px;
    margin-right: 1rem;
  }

  .name {
    font-family: "Salsa", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5rem;
    text-decoration: none;
    color: $text-color;
    letter-spacing: 2px;
  }
}


/* ========= CLASSES ========= */

/* General */

.container {
  width: $container-widht;
  max-width: $container-max-widht;
  margin-left: auto;
  margin-right: auto;
}

.menu-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: $shadow-inverted;
  height: 80px;
  
  align-content: center;
  transition: 0.3s;
  width: 100%;
  background-color: #FFFFFF;
  

    .ul-bottom, .a-bottom {
      display: flex;
    }
    li {
      margin-left: 0;
    }

    .a-bottom {
      flex-direction: column !important;
      align-items: center;
      justify-content: center;
      font-weight: 300;
      font-size: 0.8rem;
      color: $text-color;
    }

    .ul-bottom {
      justify-content: space-around;
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
      list-style: none;
      
    }

    i {
      font-size: 1.5rem;
    }
  

  
}

/* Header */


</style>
