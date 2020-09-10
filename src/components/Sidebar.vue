<template>
  <transition
    name="swing"
  >
    <div
      v-if="getSidebar"
      class="sidebar"
    >
      <div class="sidebar__profile">
        <div class="profile__user">
          <div class="user__image" />
          <div class="user__name">
            <p
              class="profile__text"
            >
              Hi, Johhny
            </p>
          </div>
        </div>
        <div class="profile__logout">
          <p
            class="profile__text"
          >
            Logout
          </p>
          <div class="logout__icon" />
        </div>
      </div>
      <div class="sidebar__search">
        <div class="search__icon" />
        <div class="search__text">
          <input
            class="text__input"
            type="text"
            placeholder="Search"
          >
        </div>
      </div>
      <div class="sidebar__menu">
        <div
          v-for="item in getMenuItems"
          :key="item.name"
          @click="isActive = item.name"
          :class="{
            'menu__item--active': isActive === item.name
          }"
          class="menu__item"
        >
          <div class="item__wrapper">
            <p>
              {{ item.name }}
            </p>
            <i
              v-if="item.items"
              class="menu-item__arrow"
            />
          </div>
          <ul
            class="menu__list"
            v-show="item.name === isActive"
          >
            <li
              v-for="li in item.items"
              :key="li"
              class="list__item"
            >
              <p
                class="item__text"
              >
                {{ li }}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar__bottom">
        <button class="bottom__button">
          shopping cart
        </button>
        <a
          class="bottom__link"
          href="#"
        >
          Recover password
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      isActive: 'all-departments'
    }
  },
  computed: {
    getSidebar () {
      return this.$store.state.sidebar.sidebar
    },
    getMenuItems () {
      return this.$store.state.menuItems.menuItems
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.height = '0';
    },
    enter (el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave (el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave (el) {
      el.style.height = '0';
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  z-index: 10;
  background-color: white;
  transition: all 0.3s ease;
}

p {
  margin: 0;
}

ul {
  max-height: 500px;
  padding: 0 0 0 1rem;
  margin: 0;
  list-style-type: none;
}

.sidebar__profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 1.5rem;
  margin-top: 0.5rem;
}

.profile__user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.user__image {
  width: 30px;
  height: 30px;
  margin-right: 0.7rem;
  background-color: grey;
  border-radius: 50%;
}

.profile__logout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.profile__text {
  color: #9D9D9D;
  font-style: italic;
  font-size: 13px;
  margin-right: 5px;
}

.logout__icon {
  width: 20px;
  height: 20px;
  margin-top: 3px;
  background-color: #9D9D9D;
  -webkit-mask: url(../assets/logout.svg) no-repeat center;
  mask: url(../assets/logout.svg) no-repeat center;
}

.sidebar__search {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1.5rem;
  margin-top: 0.5rem;
  height: 50px;
  border: solid lightgrey;
  border-width: 1px 0 1px 0;
}

.search__icon {
  width: 20px;
  height: 20px;
  margin: 3px 0.5rem 0 0;
  background-color: #9D9D9D;
  -webkit-mask: url(../assets/search.svg) no-repeat center;
  mask: url(../assets/search.svg) no-repeat center;
}

.search__text {
  font-style: italic;
  color: grey;
}

.text__input {
  border: none;
}

.text__input::placeholder {
  font-size: 16px;
  font-style: italic;
}

.sidebar__menu {
  height: calc(100% - 220px);
  padding: 0 1.5rem;
  overflow: auto;
}

.menu__item {
  font-size: 22px;
  margin-top: 1rem;
  text-transform: capitalize;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.item__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu__item--active .item-text {
  color: white;
}

.menu__list {
  transition: all 0.3s ease;
}

.menu__item:hover {
  color: #ED4C2F;
}

.menu__item--active {
  color: #ED4C2F;
}

.menu-item__arrow {
  display: inline-block;
  padding: 2.5px;
  margin: 0 0 3px 10px;
  transform: rotate(315deg);
  border: solid grey;
  border-width: 0 1px 1px 0;
  transition: transform 0.3s ease;
}

.menu__item--active .menu-item__arrow {
  margin-top: 5px;
  transform: rotate(225deg);
  border-color: #ED4C2F;
}

.item__text {
  font-size: 18px;
  margin-top: 0.5rem;
  color: black;
  transition: all 0.3s ease;
}

.item__text:hover {
  color: #ED4C2F;
}

.sidebar__bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
}

.bottom__button {
  height: 40px;
  width: 75%;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Lato', sans-serif;
  background-color: #ED4C2F;
  border-radius: 2px;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.bottom__button:hover {
  background-color: #ff7b63;
}

.bottom__link {
  margin-top: 0.8rem;
  font-size: 13px;
  color: #ED4C2F;
}

.swing-enter,
.swing-leave-to {
  transform: translateX(-250px);
}
</style>
