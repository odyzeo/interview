<template>
  <div id="app">
    <menu-desktop></menu-desktop>

  </div>
</template>

<script>
  import 'normalize.css';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

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
    height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>
