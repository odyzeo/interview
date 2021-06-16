<template>
  <div id="app">
    <Menu />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'app',
  components: {
    Menu
  },
};
</script>

<style>

#app {
  font-family: 'Lato', sans-serif;
}
html {
  height: 100%;
  overflow: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
