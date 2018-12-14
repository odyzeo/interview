<template>
  <div id="app">
    <img alt="ZlavaDnes" src="./assets/logo.png">
    <menu-desktop></menu-desktop>
  </div>
</template>

<script>
  import MenuDesktop from './components/MenuDesktop.vue';

  export default {
    components: {
      MenuDesktop,
    },
  };
</script>

<style lang="less">
  /* STYLES HERE */

  /* STYLES HERE */
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>
