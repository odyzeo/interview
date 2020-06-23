<template>
  <div class="mobile-menu-wrapper">
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
      <div class="user-settings center-v">
        <div v-if="cartItems" class="row center-v">
            <img class="user-icon" alt="pouzivatel" src="./../assets/user-icon.png">
            <span>Hi, Johnny</span>
        </div>
        <div class="row center-v clickable" @click="toggleCart()">
            <span v-if="cartItems" class="row center-v login">
                <span style="margin-right: 10px">Logout</span>
                <ion-icon name="exit-outline"></ion-icon>
            </span>
            <span v-else style="margin-left: 10px">Login</span>
        </div>
      </div>
      <div class="search">
          <ion-icon name="search-outline" @click="focusElement()"></ion-icon>
          <input type="text" placeholder="Search" ref="search">
      </div>
      <div v-for="category in categories" :key="category.id" class="category" @click="toggleCategory(category.id)" :class="{active:categoryOpen == category.id}">
        <div class="main">
          {{category.text}}
          <span v-if="category.subcategory">
            <ion-icon v-if="categoryOpen == category.id"  name="chevron-down-outline"></ion-icon>
            <ion-icon v-else name="chevron-forward-outline"></ion-icon>
          </span>
        </div>
        <ul v-if="category.subcategory">
          <li v-for="subcategory in category.subcategory" :key="subcategory.text">{{subcategory.text}}</li>
        </ul>
      </div>
      <div class="bottom-panel">
        <button class="btn-cart">SHOPPING CART</button>
        <a href="#" class="password">Recover password</a>
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
      toggleNav (close) {
          if (close === true) {
              this.menuOpen = !this.menuOpen
          } else {
              this.menuOpen = !this.menuOpen
              const nav = this.$refs.nav.classList
              nav.contains('open') ? nav.remove('open') : nav.add('open')
          }
      },
      focusElement () {
        this.$refs.search.focus();
      }
    }
  };
</script>

<style lang="less">
  @import './../styles/variables.less';
  /* STYLES HERE */

  .mobile-menu-wrapper {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    .main-nav {
      padding: 5px 0 10px 10px;
      background-color: @white;
      display: flex;
      justify-content: space-between;
      .logo {
        cursor: pointer;
        width: 50px;
        height: 30px;
        align-self: center;
        background-image: url('./../assets/logo-mobile.png');
        background-size: contain;
        background-repeat: no-repeat;
      }
      .cart-wrapper {
        cursor: pointer;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border: 1px solid @grey-light;
        border-right: transparent;
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
        .hamburger {
          color: @orange;
          position: relative;
          top: 3px;
          height: 40px;
          width: 40px;
          margin: 0 10px;
          font-size: 2rem;
        }
      }
    }
    .menu {
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 300px;
        left: -300px;
        top: 0;
        height: 100vh;
        background-color: @white;
        transition: 0.3s ease all;
        box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.5);
        &.open {
            left: 0;
        }
        .user-settings {
            color: @grey;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px;
            height: 40px;
            font-size: 0.9rem;
        }
        .search {
            color: @grey;
            position: relative;
            border-bottom: 1px solid @grey-light;
            border-top: 1px solid @grey-light;
            width: 100%;
            ion-icon {
                position: absolute;
                cursor: pointer;
                top: 16px;
                left: 20px;
            }
            input {
                border: 0;
                padding: 15px 0 15px 50px;
                font-size: 1.1rem;
            }
        }
        .category {
            color: @grey-dark;
            padding: 5px 20px;
            .main {
                font-size: 1.4rem;
                cursor: pointer;
                display: flex;
                justify-content: space-between;
                span {
                    color: @grey-light;
                }
            }
            ul {
                display: none;
                padding: 0;
                margin: 0;
                li {
                    margin: 5px 0;
                    list-style-type: none;
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
                    span {
                        color: @orange;
                    }
                }
            }
            &.active {
                ul {
                    display: block;
                }
            }
        }
        .bottom-panel {
            position: absolute;
            bottom: 50px;
            width: 280px;
            display: flex;
            flex-direction: column;
            padding: 10px;
            margin-top: 150px;
            text-align: center;
            .btn-cart {
                background-color: @orange;
                color: @white;
                border: 1px transparent;
                border-radius: 3px;
                padding: 15px;
                font-weight: bold;
                margin-bottom: 30px;
                cursor: pointer;
                &:hover {
                    opacity: 0.9;
                    transition: 0.4s;
                }
            }
            .password {
                color: @orange;
            }
        }
    }
  }

.user-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px;
}

.login {
    ion-icon {
        font-size: 1.2rem;
    }
}

  /* STYLES HERE */
</style>
