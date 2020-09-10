<template>
  <div class="menu-container">
    <div
      class="menu-desktop"
      @mouseleave="isActive = 'all-departments'"
    >
      <div class="menu-desktop__top">
        <img
          :src="companyIcon"
          alt="zlava-dnes"
          class="top__image"
        >
        <profile />
      </div>
      <div class="menu-desktop__bottom">
        <div
          v-for="m in getMenuItems"
          :key="m.name"
          :id="'menu-item-' + m.name"
          :class="{
            'bottom__menu-item--active': isActive === m.name
          }"
        >
          <p
            class="bottom__menu-item"
            @mouseenter="handleMouseenter"
            @mouseover="handleMouseover(m.name)"
          >
            {{ m.name }}
            <i
              v-if="m.items"
              class="menu-item__arrow"
            />
          </p>
          <transition
            name="slide"
          >
            <ul
              v-if="isActive === m.name"
              class="menu-item__dropdown"
            >
              <li
                v-for="li in m.items"
                :key="li"
                class="dropdown__list-item"
              >
                {{ li }}
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
    <overlay
      :show="isActive !== 'all-departments'"
      :zIndex="3"
    />
  </div>
</template>

<script>
import Profile from './Profile'
import Overlay from './Overlay'

export default {
  name: 'MenuDesktop',
  components: {
    Profile,
    Overlay
  },
  data () {
    return {
      companyIcon: require('../assets/logo@2x.png'),
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
.menu-desktop {
  position: relative;
  width: 100%;
  z-index: 4;
}

.menu-desktop__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
}

.top__image {
  max-height: 40px;
}

.menu-desktop__bottom {
  display: flex;
  padding: 1rem 4rem;

  p {
    margin-right: 1rem;
    text-transform: capitalize;
  }
}

.bottom__menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 5px 0;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.bottom__menu-item--active {
  color: #ED4C2F;
}

.menu-item__arrow {
  display: inline-block;
  padding: 2.5px;
  margin: 0 0 3px 10px;
  transform: rotate(45deg);
  border: solid black;
  border-width: 0 1px 1px 0;
  transition: transform 0.3s ease;
}

.bottom__menu-item--active .menu-item__arrow {
  margin-top: 5px;
  transform: rotate(225deg);
  border-color: #ED4C2F;
}

.menu-item__dropdown {
  width: 0 !important;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  list-style-type: none;
  transition: all 0.3s ease;
}

.dropdown__list-item {
  margin-top: 7px;
  color: black;
  transition: all 0.2s ease;
  cursor: pointer;
}

.dropdown__list-item:hover {
  color: #ED4C2F;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-leave-active {
  transition: none;
}
</style>
