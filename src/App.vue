<template>
  <div id="app">
    <menu-desktop
      v-if="windowWidth > 768"
      :categories="categories"
    />
    <menu-mobile
      v-if="windowWidth <= 768"
      :categories="categories"
    />
  </div>
</template>

<script>
  import MenuDesktop from './components/MenuDesktop.vue';
  import MenuMobile from './components/MenuMobile.vue';

  export default {
    components: {
      MenuDesktop,
      MenuMobile,
    },
    data: () => ({
      windowWidth: window.innerWidth,
      categories: [
        {
          id: 1,
          text: 'All departments',
          path: '/all'
        },
        {
          id: 2,
          text: 'Bags',
          path: '/bags',
          subcategory: [
            {
              text: 'Sport Bags'
            },
            {
              text: 'School Bags'
            },
            {
              text: 'Nature, Hiking Bags'
            }
          ]
        },
        {
          id: 3,
          text: 'Clothes',
          path: '/clothes',
          subcategory: [
            {
              text: 'Prime Video'
            },
            {
              text: 'Music, CDs & Vinil'
            },
            {
              text: 'Digital Music'
            },
            {
              text: 'Kindle Store'
            },
            {
              text: 'Arts & Crafts'
            }
          ]
        },
        {
          id: 4,
          text: 'Textiles',
          path: '/textiles',
        },
        {
          id: 5,
          text: 'Bread',
          path: '/bread',
        },
        {
          id: 6,
          text: 'Weapons',
          path: '/weapons',
        }
      ]
    }),
    mounted () {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.onResize);
    }
  };
</script>

<style lang="less">
  @import './styles/variables.less';

  /* STYLES HERE */

  /* STYLES HERE */
  body {
    font-family: "Lato", sans-serif;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: @grey-dark;
  }
</style>
