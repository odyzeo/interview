<template>
  <div class='sidebar'>
    <div
      class='sidebar__backdrop'
      @click='closeSidebarPanel'
      v-if='isPanelOpen'
    ></div>
    <transition name='slide'>
      <div v-if='isPanelOpen' class='sidebar__panel'>
        <div class='header'>
          <img
            alt='profile-picture'
            class='header__icon'
            src='@/assets/profile-icon.png'
          />
          <div class='header__text'>
            Hi, Johnny
          </div>
          <span class='header__logout-text'>Logout</span>
          <Logout class='header__logout-icon' />
        </div>
        <div class='search'>
          <Search class='search__icon' />
          <span class='search__text'>Search</span>
        </div>
        <ul class="menu">
          <li class="menu__item" v-for="item in data.navbarData" :key="item.name">
            <div class="menu__item-name">{{ item.name }}</div>
            <Arrow class="menu__item-arrow" />
          </li>
        </ul>
        <div class="buttons">
          <div class="buttons__cart">
            SHOPPING CART
          </div>
          <div class="buttons__recover-password">
            Recover password
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Logout from '@/components/shared/icons/Logout.vue';
import Search from '@/components/shared/icons/Search.vue';
import Arrow from '@/components/shared/icons/Arrow.vue';
import navbarData from '@/data/navigationMenu.js';
import { store, mutations } from '@/store.js';

export default {
  data: function () {
    return {
      data: navbarData
    };
  },
  components: {
    Logout,
    Search,
    Arrow
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav
  },
  computed: {
    isPanelOpen () {
      return store.isNavOpen;
    }
  }
};
</script>
<style lang='less'>

.header {
  display: flex;
  color: @text-gray-dark;
  border-bottom: 1px @gray-spacer solid;
  padding: 0 30px 20px 30px;
  font-style: italic;
  &__icon {
    width: 20%;
    height: 20%;
  }
  &__text {
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 15px;
  }
  &__logout-icon {
    height: 18px;
    width: 18px;
    fill: @text-gray;
    margin-top: auto;
    margin-bottom: auto;
    padding-top: 1px;
  }
  &__logout-text {
    margin-top: auto;
    margin-bottom: auto;
    padding: 2px 10px 0 0;
  }
}

.search {
  display: flex;
  font-style: italic;
  font-size: 20px;
  padding: 20px 30px 20px 30px;
  color: @text-gray-dark;
  border-bottom: 1px @gray-spacer solid;
  &__icon {
    width: 26px;
    fill: @text-gray-light;
    margin-top: auto;
    margin-bottom: auto;
  }
  &__text {
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 10px;
  }
}

.menu {
  color: black;
  list-style-type: none;
  font-size: 25px;
  padding: 0 20px 0 30px;
  &__item {
      display: flex;
      padding: 12px 0 12px 0;
    &-name {
      margin-bottom: auto;
      margin-top: auto;
    }
    &-arrow {
      margin-bottom: auto;
      margin-top: auto;
      margin-left: auto;
      fill: @text-gray;
      transform: rotate(270deg);
      height: 35px;
      widows: 35px;
    }
  }
}

.buttons {
  padding: 60px 30px 30px 30px;
  display: block;
  text-align: center;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  &__cart {
    background-color: @text-orange ;
    color: white;
    padding: 15px 82px 15px 82px;
    border-radius: 3px;
  }
  &__recover-password {
    color: @text-orange;
    text-decoration: underline;
    margin-top: 30px;
  }
}

.sidebar {
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }
    &__panel {
    overflow-y: auto;
    background-color: white;
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    padding-top: 20px;
    width: 350px;
  }
}

</style>
