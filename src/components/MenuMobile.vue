<template>
  <div class="menu-container">
    <div
      class="menu-mobile"
      @mouseleave="isActive = 'all-departments'"
    >
      <div class="menu-mobile__top">
        <div
          class="top__image"
        >
          <img
            :src="companyIcon"
            alt="zlava-dnes"
          >
        </div>
        <profile-mobile />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileMobile from './ProfileMobile'

export default {
  name: 'MenuMobile',
  components: {
    ProfileMobile
  },
  data () {
    return {
      companyIcon: require('../assets/logo.png'),
      isActive: 'all-departments'
    }
  },
  computed: {
    getMenuItems () {
      return this.$store.state.menuItems.menuItems
    }
  },
  methods: {
    toggleSidebar () {
      this.$store.commit('setSidebar')
    },
    handleMouseenter () {
      this.$store.commit('setOverlay')
    },
    handleMouseover (el) {
      this.isActive = el
    }
  }
}
</script>

<style lang="less" scoped>
.menu-mobile {
  position: relative;
  width: 100%;
  padding-top: 1.5rem;
  z-index: 4;
}

.menu-mobile__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top__image {
  max-width: 30px;
  margin-left: 1rem;
  overflow: hidden;
}
</style>
