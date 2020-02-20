<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen"
           class="sidebar-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
  import { store, mutations } from '@/store.js'

  export default {
    methods: {
      closeSidebarPanel: mutations.toggleNav
    },
    computed: {
      isPanelOpen () {
        return store.isNavOpen
      }
    }
  }
</script>
<style>
  .sidebar-backdrop {
    background-color: gray;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .sidebar-panel {
    overflow-y: auto;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    width: 280px;
  }
</style>
