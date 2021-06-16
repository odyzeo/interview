<template>
  <div>
    <nav>
      <div class="logo">
        <img
          alt="logo"
          class="logo__img"
          :src="require(`@/assets/${logoImage}.png`)"
        />
      </div>
      <ShoppingButton />
    </nav>
    <SideMenu />
    <NavigationMenu v-if="$mq === 'screenDesktop'" />
  </div>
</template>

<script>
import ShoppingButton from '@/components/navbar/ShoppingButton.vue';
import SideMenu from '@/components/navbar/SideMenu.vue';
import NavigationMenu from '@/components/navbar/NavigationMenu.vue';

export default {
  name: 'app',
  components: {
    ShoppingButton,
    SideMenu,
    NavigationMenu
  },
  computed: {
    logoImage () {
      return this.$mq === 'screenDesktop' ? 'logo' : 'logo-mobile';
    }
  }
};
</script>

<style lang="less">
nav {
  display: flex;
  justify-content: space-between;
  padding: 60px 60px 60px 60px;
  .media-phone({padding: 30px 0 20px 20px;});
}

.logo {
  margin-top: auto;
  margin-bottom: auto;
  padding: 5px 0 5px 20px;
  &__img {
    width: 80%;
  }
}
</style>
