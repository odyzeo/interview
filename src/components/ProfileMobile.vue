<template>
  <div class="profile">
    <cart
      :cartNumber="getCart"
      class="profile__cart"
    />
    <p
      class="profile__text"
    >
      Shopping cart
    </p>
    <menu-icon
      @click="handleSidebar"
    />
  </div>
</template>

<script>
import MenuIcon from './MenuIcon'
import Cart from './Cart'

export default {
  name: 'Profile',
  components: {
    MenuIcon,
    Cart
  },
  data () {
    return {
      cartIcon: require('../assets/cart.svg')
    }
  },
  computed: {
    getCart () {
      return this.$store.state.cart.cart
    }
  },
  methods: {
    handleSidebar () {
      this.$store.commit('setSidebar')
    }
  }
}
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 55px 13px 15px;
  margin-right: -2rem;
  border: solid #d1d1d1;
  border-width: 1px 0 1px 1px;
  border-radius: 500px;
}

.profile__cart {
  margin-right: 0.5rem;
}

.profile__text {
  margin: 0 15px 3px 0;
  color: #9D9D9D;
  font-size: 14px;
  font-style: italic;
}

.profile--margin-right {
  margin-right: 10px;
}
</style>
