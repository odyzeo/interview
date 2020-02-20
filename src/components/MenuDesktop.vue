<template>
  <div>
    <ul id="navigation" class="navigation">
      <li v-for="item in navList">
        <template v-if="item.children">
          <div class="menuArrow">
            <a
              :href="item.url" :title="item.name" @click="isOpen = !isOpen, active = !active" :class="{ active }">
              {{ item.name }}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.927 10.345">
                <path d="M3.472,0H0L5.208,6.983,0,13.927H3.472L8.719,6.983Z" transform="translate(14.427 1) rotate(90)"
                      stroke="rgba(0,0,0,0)" stroke-width="1"></path>
              </svg>
            </a>
          </div>

          <div :class="{ isOpen }" class="dropdown">
            <ul>
              <li
                v-for="{ url, name, index } in item.children" :key="index">
                <a :href="url" :title="name">{{ name }}</a>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <a
            :href="item.url"
            :title="item.name">{{ item.name }}</a>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    components: {},
    props: ['item'],
    data () {
      return {
        isOpen: false,
        active: false,
        navList: [
          { url: '#', name: 'All departmens' },
          {
            url: '#', name: 'Bags',
            children: [
              {
                url: '#',
                name: 'Prime Video',
              },
              {
                url: '#',
                name: 'Music, CDs & Vinyl',
              },
              {
                url: '#',
                name: 'Digital Music',
              },
              {
                url: '#',
                name: 'Kindle Store',
              },
              {
                url: '#',
                name: 'Arts & Crafts',
              },
              {
                url: '#',
                name: 'Automotive',
              },
              {
                url: '#',
                name: 'Baby',
              },
              {
                url: '#',
                name: 'Beauty & Personal Care',
              },
            ]
          },
          { url: '#', name: 'Clothes' },
          { url: '#', name: 'Textiles' },
          { url: '#', name: 'Engines' },
          { url: '#', name: 'Bread' },
          { url: '#', name: 'Weapons' }
        ]
      };
    }
  };
</script>

<style lang="less">
  .menu {
    display: flex;
  }

  .menuArrow {
    display: flex;
  }

  .menuArrow svg {
    width: 0.6em;
    margin-left: 0.1em;
    padding: 0 0 0.1em 0;
    -webkit-transition: -webkit-transform 150ms ease-in-out;
    transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;
  }

  a.active svg {
    transform: scale(1, -1);
    margin: 0 0 0.1em 0.1em;
    fill: #ff7904;
  }


  ul {
    list-style-type: none;

    li {
      position: relative;
      margin: 0.25em;

      a {
        display: block;
        padding: 0em 0em 0.5em 1em;
        text-decoration: none;
        transition: all 200ms ease;
        font-weight: 900;
        color: black;

        &:hover {
          color: rgba(39, 36, 41, 0.65);
        }

        &.active {
          color: #ff7904;
        }
      }
    }
  }

  .navigation {
    display: flex;
  }

  .dropdown {
    position: absolute;
    left: 90%;
    transform: translatex(-50%) rotatex(90deg) scale(0);
    margin-top: 0.55em;
    visibility: hidden;
    opacity: 0;
    transition: all 200ms linear;

    a {
      font-size: small;
    }

    &.isOpen {
      transform: translatex(-50%);
      visibility: visible;
      opacity: 1;
      width: max-content;
    }
  }
</style>
