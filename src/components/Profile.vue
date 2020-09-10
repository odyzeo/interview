<template>
  <div class="profile">
    <cart
      :cartNumber="getCart"
      class="profile__cart profile--margin-right"
    />
    <p
      class="profile__text"
    >
      Shopping cart
    </p>
    <div
      class="profile__user-icon"
    />
  </div>
</template>

<script>
import Cart from './Cart'

export default {
  name: 'Profile',
  components: {
    Cart
  },
  computed: {
    getCart () {
      return this.$store.state.cart.cart
    }
  }
}
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px 6px 15px;
  border: 1px solid #d1d1d1;
  border-radius: 500px;
}

.profile__cart {
  height: 16px;
}

.profile__text {
  margin: 0 15px 3px 0;
  color: #9D9D9D;
  font-size: 14px;
  font-style: italic;
}

.profile__user-icon {
  width: 40px;
  height: 40px;
  background-color: #9D9D9D;
  border-radius: 50%;
}

.profile--margin-right {
  margin-right: 10px;
}
</style>
