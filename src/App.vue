<template>
  <div id="app">
    <menu-box></menu-box>
  </div>
</template>

<script>
  import 'normalize.css';
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  import MenuBox from './components/Menu.vue';

  export default {
    components: {
      MenuBox,
    },
  };
</script>

<style lang="less">
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
  }
  @import "../assets/less/style";
</style>
