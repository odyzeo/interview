<template>
  <div class="cart">
    <div
      :class="{
        'cart__icon--orange': cartNumber > 0
      }"
      class="cart__icon"
    />
    <div
      v-if="cartNumber > 0"
      class="cart__number-wrap"
    >
      <p
        class="number-wrap__number"
      >
        {{ cartNumber }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cartNumber: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      cartImg: require('../assets/cart.svg')
    }
  }
}
</script>

<style scoped>
.cart {
  position: relative;
  color: white;
}

.cart__icon {
  width: 20px;
  height: 20px;
  background-color: #9D9D9D;
  -webkit-mask: url(../assets/cart.svg) no-repeat center;
  mask: url(../assets/cart.svg) no-repeat center;
}

.cart__icon--orange {
  background-color: #ED4C2F;
}

.cart__number-wrap {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
}

.number-wrap__number {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ED4C2F;
  font-size: 12px;
}
</style>
