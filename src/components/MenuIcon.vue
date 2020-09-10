<template>
  <div
    class="menu-icon"
    @click="$emit('click')"
  >
    <div class="menu-icon__bar" />
    <div class="menu-icon__bar" />
    <div class="menu-icon__bar" />
  </div>
</template>

<script>
export default {
  name: 'MenuIcon'
}
</script>

<style scoped>
.menu-icon {
  cursor: pointer;
}

.menu-icon__bar {
  width: 20px;
  height: 2px;
  margin-top: 4px;
  background-color: #ED4C2F;
}

.menu-icon__bar:first-child {
  margin-top: 0;
}
</style>
