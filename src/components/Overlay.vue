<template>
  <transition
    name="woosh"
  >
    <div
      v-if="show"
      @click="toggle"
      :style="{zIndex: zIndex}"
      :class="{
        'overlay--absolute': absolute
      }"
      class="overlay"
    />
  </transition>
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 5
    },
    absolute: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getSidebar () {
      return this.$store.state.sidebar.sidebar
    }
  },
  methods: {
    toggle () {
      if (this.getSidebar) {
        this.$store.commit('setSidebar')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.overlay {
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.overlay--absolute {
  position: absolute;
  top: 0;
  left: 0;
}

.woosh-enter,
.woosh-leave-to {
  opacity: 0;
}
</style>
