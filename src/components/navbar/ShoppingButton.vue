<template>
  <div class='button-container'>
    <div class='cart-button'>
      <Cart class='cart-button__cart-icon'></Cart>
      <span class='cart-button__badge'>2</span>
    </div>
    <div class='button-container__text'>Shopping cart</div>
    <div
      v-if="$mq === 'screenPhone'"
      id='burger'
      :class='{ active: isBurgerActive }'
      @click.prevent='toggle'
    >
      <div class='burger-button' title='Menu'>
        <span class='burger-button__bar burger-button__bar--1'></span>
        <span class='burger-button__bar burger-button__bar--2'></span>
        <span class='burger-button__bar burger-button__bar--3'></span>
      </div>
    </div>
    <img
      v-else
      class='button-container__profile-icon'
      src='@/assets/profile-icon.png'
    />
  </div>
</template>
<script>
import Cart from '@/components/shared/icons/Cart.vue';
import { store, mutations } from '@/store.js';

export default {
  components: {
    Cart
  },
  computed: {
    isBurgerActive () {
      return store.isNavOpen;
    }
  },
  methods: {
    toggle () {
      mutations.toggleNav();
    }
  }
};
</script>
<style lang='less'>
.button-container {
  padding: 3px 5px 3px 10px;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  .media-phone(
    {padding: 10px; border-top: 1px solid rgba(0, 0, 0, 0.1) ; border-bottom: 1px
      solid rgba(0, 0, 0, 0.1) ; border-left: 1px solid rgba(0, 0, 0, 0.1) ; border-right:
      0; border-radius: 50px 0 0 50px;}
  );
  &__profile-icon {
    height: 44px;
    width: 46px;
    margin: auto;
  }
  &__text {
    padding: 0 10px 0 10px;
    margin: auto;
    color: @text-gray;
  }
}

.cart-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  color: #ffffff;
  &__cart-icon {
    fill: @text-orange;
    width: 20px;
    height: 20px;
  }
  &__badge {
    position: absolute;
    border: white 2px solid;
    font-size: 12px;
    top: 2px;
    .media-phone({top: -1px;});
    right: -8px;
    width: 15px;
    height: 15px;
    background: @text-orange;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
}

.burger-button {
  cursor: pointer;
  position: relative;
  padding: 5px 0 5px 0;
  display: flex;
  height: 30px;
  width: 32px;
  margin-right: 15px;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  &__bar {
    background-color: @text-orange;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    &--1 {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    &--2 {
      transform-origin: 100% 50%;
      transform: scaleX(1);
    }
    &--3 {
      transform: translateY(6px);
    }
  }
}
</style>
