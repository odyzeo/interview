<template>
  <div>
    <ul class='navigation-menu'>
      <li
        class='navigation-menu__item'
        v-for='item in data.navbarData'
        :key='item.name'
        @mouseover='selectIndex(item.name)'
        @mouseout='ItemIndex = null'
      >
        <div class='navigation-menu__item-name' href=''>{{ item.name }}</div>
        <div v-if='item.subMenu.length'>
          <Arrow class='navigation-menu__item-arrow' />
          <transition name='fade'>
            <ul class='sub-navigation-menu' v-show='ItemIndex == item.name'>
              <li
                class='sub-navigation-menu__item'
                v-for='subMenu in item.subMenu'
                :key='subMenu.name'
              >
                {{ subMenu.name }}
              </li>
            </ul>
          </transition>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import navbarData from '@/data/navigationMenu.js';
import Arrow from '@/components/shared/icons/Arrow.vue';

export default {
  data: function () {
    return {
      data: navbarData,
      ItemIndex: null
    };
  },
  components: { Arrow },
  methods: {
    selectIndex (Index) {
      this.ItemIndex = Index;
    }
  }
};
</script>

<style lang='less'>
.navigation-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding: 0 60px 0 60px;
  &__item {
    font-size: 25px;
    float: left;
    cursor: pointer;
    padding: 10px 0 0 30px;
    display: flex;
    &-name {
      color: black;
      transition: 0.2s;
      display: block;
      text-align: center;
      text-decoration: none;
    }
    &-arrow {
      padding-left: 5px;
      transition: 0.2s;
      margin-bottom: auto;
      height: 27px;
      widows: 27px;
    }
    &:hover > &-name {
      color: @text-orange;
      transition: 0.2s;
    }
    &:hover > div > &-arrow {
      transform: rotate(180deg);
      transition: 0.2s;
      fill: @text-orange;
    }
  }
}

.sub-navigation-menu {
  position: absolute;
  margin-left: -90px;
  list-style-type: none;
  padding-top: 10px;
  font-size: 16px;
  transition: 0.2s;
  &__item {
    padding: 5px 0 5px 0;
    &:hover {
      color: @text-orange;
      transition: 0.2s;
    }
  }
}
</style>
