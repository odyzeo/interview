<template>
  <div class="desktop-menu-wrapper">
    <div class="main-nav">
      <span class="logo" @click="toggleNav"/>
      <div class="cart-wrapper">
        <div class="cart" @click="toggleCart()" :class="{active:cartItems}">
          <img class="shopping-cart" alt="kosik" src="./../assets/cart.svg">
          <span class="cart-info">2</span>
        </div>
        <div>Shopping cart</div>
        <img v-if="cartItems" class="user-icon" alt="pouzivatel" src="./../assets/user-icon.png">
        <span v-else class="hamburger">
          <ion-icon name="menu-outline" @click="toggleNav"></ion-icon>
        </span>
      </div>
    </div>
    <nav class="menu" ref="nav">
      <div v-for="category in categories" :key="category.id" class="category" @click="toggleCategory(category.id)" :class="{active:categoryOpen == category.id}">
        <div class="main">
          {{category.text}}
          <span v-if="category.subcategory">
            <ion-icon v-if="categoryOpen == category.id"  name="chevron-up-outline"></ion-icon>
            <ion-icon v-else name="chevron-down-outline"></ion-icon>
          </span>
        </div>
        <ul v-if="category.subcategory">
          <li v-for="subcategory in category.subcategory" :key="subcategory.text">{{subcategory.text}}</li>
        </ul>
      </div>
    </nav>
  </div>
  <!--MENU HERE-->
</template>

<script>
  export default {
    props: ['categories'],
    data: () => ({
      cartItems: false,
      categoryOpen: undefined,
      menuOpen: false
    }),
    methods: {
      toggleCategory (id) {
        if (this.categoryOpen === id) {
          this.categoryOpen = undefined
        } else {
          this.categoryOpen = id
        }
      },
      toggleCart (id) {
        this.cartItems = !this.cartItems
      },
      toggleNav () {
        this.menuOpen = !this.menuOpen
        const nav = this.$refs.nav.classList
        nav.contains('open') ? nav.remove('open') : nav.add('open')
      }
    }
  };
</script>

<style lang="less">
  @import './../styles/variables.less';
  /* STYLES HERE */
  @orange:   #F13A38;

  .desktop-menu-wrapper {
    position: absolute;
    background-color: @white;
    width: 100%;
    top: 0;
    left: 0;
    padding-bottom: 20px;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    .main-nav {
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding: 30px 40px 0;
      margin-bottom: 50px;
      .logo {
        cursor: pointer;
        width: 200px;
        height: 30px;
        align-self: center;
        background-image: url('./../assets/logo@2x.png');
        background-size: contain;
        background-repeat: no-repeat;
      }
      .cart-wrapper {
        cursor: pointer;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        border-radius: 25px;
        border: 1px solid @grey-light;
        color: @grey;
        padding: 5px 5px 5px 15px;
        .cart {
          position: relative;
          img {
            width: 25px;
            margin-right: 10px;
          }
          .cart-info {
            display: none;
          }
          &.active {
            img {
              filter: invert(0.4) sepia(1) saturate(16.8) hue-rotate(327.6deg) brightness(1.1);
            }
            .cart-info {
              display: block;
              position: absolute;
              top: -10px;
              left: 20px;
              padding: 0 4px;
              border-radius: 50%;
              border: 2px solid @white;
              font-size: 0.7rem;
              color: white;
              background-color: @orange;
            }
          }
        }
        .user-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-left: 10px;
          margin-right: 0;
        }
        .hamburger {
          color: @orange;
          position: relative;
          top: 3px;
          height: 40px;
          width: 40px;
          margin-left: 10px;
          font-size: 2rem;
        }
      }
    }
    .menu {
      display: flex;
      flex-direction: row;
      padding: 0 40px;
      .category {
        padding: 10px 10px 0;
        .main {
          font-size: 1.1rem;
          cursor: pointer;
        }
        ul {
          white-space: nowrap;
          width: 0;
          height: 120px;
          display: none;
          padding: 0;
          li {
            color: @grey-dark;
            list-style-type: none;
            margin-bottom: 10px;
            &:hover {
              transition: 0.4s;
              color: @orange;
              cursor: pointer;
            }
          }
        }
        &:hover, &.active {
          .main {
            transition: 0.4s;
            color: @orange;
          }
        }
        &.active {
          ul {
            display: block;
          }
        }
      }
    }
  }

</style>
