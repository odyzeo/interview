<!--DESKTOP MENU -->

<template>
  <div id="app">
    <div id="header">
      <div class="logo"><img src="./assets/logo@2x.png"></div>
      <div class="shoppingCart">
        <div class="shoppingIcon"><img src="./assets/cart.svg"></div>
        <div class="shoppingCartLabel"><p>Shopping cart</p></div>
        <div class="userImage"><img src="./assets/user.jpeg"></div>
      </div>
    </div>
    <menu-desktop></menu-desktop>
  </div>
</template>


<!-------------------------------------------------- MOBILE MENU -->

<!--<template>-->
<!--  <div id="app">-->
<!--    <div class="main-nav">-->
<!--      <div class="mobileLogo"><img src="./assets/mobileLogo.png" alt=""></div>-->
<!--      <div class="shoppingCartMobile">-->
<!--        <div class="shoppingIcon"><img src="./assets/cart.svg"></div>-->
<!--        <div class="shoppingCartLabel"><p>Shopping cart</p></div>-->
<!--        <menu-mobile></menu-mobile>-->
<!--      </div>-->
<!--    </div>-->

<!--    <menu-mobile-side>-->
<!--      <div class="headerMobile">-->
<!--        <div class="userMobile">-->
<!--          <div class="userImage">-->
<!--            <img src="./assets/user.jpeg"></div>-->
<!--          <div>Hi,Johnny!</div>-->
<!--        </div>-->
<!--        <div class="logOut">-->
<!--          <div><input type="button" onclick="location.href='#';" value="Logout"/>-->
<!--          </div>-->
<!--          <img src="https://img.icons8.com/small/16/000000/exit.png">-->
<!--        </div>-->
<!--      </div>-->
<!--      <hr>-->
<!--      <div class="search">-->
<!--        <img src="https://img.icons8.com/android/24/000000/search.png">-->
<!--        <input type="text" id="search" placeholder="Search">-->
<!--      </div>-->
<!--      <hr>-->
<!--      <ul class="sidebar-panel-nav">-->
<!--        <li>-->
<!--          <div>-->
<!--            <a href="#home">All departments</a>-->
<!--            <div><img src="https://img.icons8.com/metro/26/000000/chevron-right.png"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li>-->
<!--          <div>-->
<!--            <a href="#about">Toxic plastics</a>-->
<!--            <div><img src="https://img.icons8.com/metro/26/000000/chevron-right.png"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li>-->
<!--          <div>-->
<!--            <a href="#contact">Clothes</a>-->
<!--            <div><img src="https://img.icons8.com/metro/26/000000/chevron-right.png"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li>-->
<!--          <div>-->
<!--            <a href="#contact">Textiles</a>-->
<!--            <div><img src="https://img.icons8.com/metro/26/000000/chevron-right.png"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li>-->
<!--          <div>-->
<!--            <a href="#contact">Bread</a>-->
<!--            <div><img src="https://img.icons8.com/metro/26/000000/chevron-right.png"></div>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <div class="button-menu">-->
<!--        <div class="buttons-shopping&#45;&#45;recover">-->
<!--          <input class="shoppingCartButton" type="button" onclick="location.href='#';" value="SHOPPING CART"/>-->
<!--          <input class="recoverPasswordButton" type="button" onclick="location.href='#';" value="Recover password"/>-->
<!--        </div>-->
<!--      </div>-->

<!--    </menu-mobile-side>-->
<!--  </div>-->
<!--</template>-->

<script>
  import MenuDesktop from './components/MenuDesktop.vue';
  import MenuMobile from './components/MenuMobile';
  import MenuMobileSide from './components/MenuMobileSide';

  export default {
    components: {
      MenuMobileSide,
      MenuMobile,
      MenuDesktop,
    },
  };
</script>

<style lang="less">
  * {
    font-family: 'Lato', sans-serif;
  }

  body {
    border: 0;
    margin: 0;
    padding: 0;
  }

  ul div {
    display: flex;
    justify-content: space-between;
    padding: -0.7em 0;
    /*padding: 0.3em 0;*/

    img {
      width: 0.8em;
      height: 0.8em;
    }
  }

  .logOut {
    display: -webkit-inline-flex;

    input {
      border-style: none;
      color: #ccc;
      background: none;
      font-style: oblique;
    }

    div {
      margin: 0 0.5em 0 0;
    }

    img {
      filter: opacity(0.3);
    }
  }

  hr {
    border: none;
    background-color: #d1d1d1;
    height: 1px;
    margin: 0.7em -3em;
  }

  .button-menu {
    display: flex;
    justify-content: center;
  }

  .buttons-shopping--recover {
    display: inline-grid;
  }

  .recoverPasswordButton {
    border-style: none;
    color: #ef5030;
    background: none;
    text-decoration: underline;
    margin: 2em;
  }

  .shoppingCartButton {
    width: 15em;
    height: 3em;
    border-radius: 3px;
    background-color: #EF5030;
    border-style: none;
    color: white;
  }

  .search {
    display: flex;
    align-items: center;
    padding: 0.1em 0em 0.1em 1.7em;

    input {
      border: none;
      font-style: oblique;
    }

    img {
      width: 0.8em;
      height: 0.8em;
      margin: 0 0.5em 0 0;
    }
  }

  .userMobile {
    display: flex;
    align-items: center;
  }

  .headerMobile {
    display: flex;
    justify-content: space-between;
    font-style: oblique;
    align-items: center;
    color: rgb(209, 209, 209);
    font-size: small;
    margin: 1em 2em;
  }

  .shoppingCart {
    border: 1px solid rgb(209, 209, 209);
    padding: 4px 5px 1px 0;
    border-radius: 5em;
    display: flex;
    width: fit-content;
    align-items: center;

    img {
      width: 0.9em;
    }
  }

  .shoppingCartMobile {
    border: 1px solid rgb(209, 209, 209);
    padding: 4px 5px 1px 0;
    border-radius: 30px 0px 0px 30px;
    display: flex;
    width: fit-content;
    align-items: center;
    margin: 0 -5px 0 0;

    img {
      width: 0.9em;
    }
  }

  .logo img {
    width: 50%;
  }

  .mobileLogo img {
    width: 30%;
  }

  .shoppingCartLabel {
    padding: 0 1.7em 0 0.4em;
    font-style: oblique;
    color: rgb(209, 209, 209);
    font-size: x-small;
  }

  .shoppingIcon {
    padding: 0 0 0 0.6em;
  }

  .userImage > img {
    width: 3em;
    border-radius: 3em;
    /*margin: 0 1em 0 0;*/
  }

  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2em 3.7em 3em 3.7em;
  }

  .main-nav {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0 0.8rem 2.5rem;
    align-items: center;
  }

  ul.sidebar-panel-nav {
    list-style-type: none;
    margin: 2em 2em 4em -2em;
  }

  ul.sidebar-panel-nav > li > a {
    color: #000000;
    text-decoration: none;
    display: block;
    padding-bottom: 0.5em;
  }
</style>
