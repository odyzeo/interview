<template>
  <div
    id="app"
    class="app"
  >
    <menu-desktop
      v-if="!isMobile"
    />
    <menu-mobile
      v-if="isMobile"
    />
    <main
      class="app__main"
    >
      <button
        class="main__button"
        @click="subOne"
      >
        Cart--
      </button>
      <button
        class="main__button"
        @click="addOne"
      >
        Cart++
      </button>
    </main>
    <overlay
      :show="getSidebar"
      :absolute="true"
    />
    <sidebar />
  </div>
</template>

<script>
import MenuDesktop from './components/MenuDesktop'
import MenuMobile from './components/MenuMobile'
import Sidebar from './components/Sidebar'
import Overlay from './components/Overlay'

export default {
  components: {
    MenuDesktop,
    MenuMobile,
    Sidebar,
    Overlay
  },
  data () {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  },
  computed: {
    isMobile () {
      return this.window.width < 768
    },
    getSidebar () {
      return this.$store.state.sidebar.sidebar
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    addOne () {
      this.$store.commit('setCartMore')
    },
    subOne () {
      this.$store.commit('setCartLess')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
}

.app {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.app__main {
  margin-left: 1rem;
}

@media screen and (min-width: 768px) {
  .app__main {
    margin-left: 4rem;
  }
}
</style>
