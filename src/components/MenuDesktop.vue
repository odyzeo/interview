<template>
  <div>
    <!--MENU HERE-->
    <nav class="header">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="logo d-flex flex-column justify-content-center">
            <img
              v-if="!isMobile"
              alt="ZlavaDnes"
              src="../assets/logo.png"
            >
            <img
              v-if="isMobile"
              alt="ZlavaDnes"
              src="../assets/mobile-logo.jpg"
            >
          </div>
          <div class="cart d-flex justify-content-between">
            <span class="small-text">
              <span class="cart-counter text-center flex-column justify-content-center">2</span>
              <span class="icon-cart"></span>Shopping cart
            </span>
            <div
              v-if="!isMobile"
              class="avatar"
            ></div>
            <span
              v-if="isMobile"
              class="icon-menu"
            ></span>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="main-nav">
          <ul class="d-lg-flex main-nav-wrapper m-0">
            <li
              v-if="isMobile"
              class="bottom-bordered"
            >
              <div class="user-toolbar d-flex justify-content-between">
                <div class="user-toolbar-info d-inline-flex align-items-center">
                  <div class="avatar"></div>
                  <p class="small-text m-0">Hi, Zombi</p>
                </div>
                <div class="user-toolbar-logout small-text d-inline-flex align-items-center">
                  Logout
                  <span class="icon-log-out"></span>
                </div>
              </div>
            </li>
            <li
              v-if="isMobile"
              class="bottom-bordered"
            >
              <div class="input-group search-input">
                <div class="input-group-prepend">
                  <span class="input-group-text py-0 pl-0" id="addon-search">
                    <span class="icon-search"></span>
                  </span>
                </div>
                <input type="text" class="form-control p-0" placeholder="Search" aria-label="Search" aria-describedby="addon-search">
              </div>
            </li>
            <li class="main-nav-title">All departments</li>
            <li class="main-nav-item"
                v-for="(item, index) in menuItems"
                :key="index"
                @click="toggleSubnav"
            >
            <span class="main-nav-item_title">
              {{ item.title }}
              <span class="icon-angle-right"></span>
            </span>

              <ul class="main-nav-item_subitem">
                <li v-for="(subitem, index) in item.subitems"
                    :key="index">
                  {{ subitem }}
                </li>
              </ul>
            </li>
            <li v-if="isMobile">
              <a href="#" class="btn btn-red">Shopping cart</a>
              <a href="#" class="text-link text-center d-block">Recover password</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import 'dom-slider';

  export default {
      data () {
          return {
              isActive: false,
              window: {
                  width: 0,
                  height: 0
              },
              isMobile: false,
              menuItems: [{
                  'title': 'bags',
                  'subitems': ['Small bag', 'Mid bag', 'Large bag']
              }, {
                  'title': 'clothes',
                  'subitems': ['T-shirt', 'Pants', 'Socks']
              }, {
                  'title': 'textiles',
                  'subitems': ['Wool', 'Cotton']
              }, {
                  'title': 'armors',
                  'subitems': ['Heavy', 'Medium', 'Light']
              }, {
                  'title': 'pets',
                  'subitems': ['Dog', 'Dragon', 'Doby']
              }, {
                  'title': 'weapons',
                  'subitems': ['Swords', 'Shields', 'Bows']
              }],
          };
      },
      created () {
          window.addEventListener('resize', this.handleResize);
          this.handleResize();
      },
      destroyed () {
          window.removeEventListener('resize', this.handleResize);
      },
      mounted () {
          document.addEventListener('click', function (element) {
              let elementClass = element.target.classList,
                  header = document.querySelector('.main-nav-wrapper'),
                  elementParent = element.target.closest('.main-nav');

              if (elementClass.contains('icon-menu')) {
                  header.classList.toggle('main-nav-wrapper-open');
              }
              if (elementParent == null && !elementClass.contains('icon-menu')) {
                  header.classList.remove('main-nav-wrapper-open')
              }
          })
      },
      methods: {
          handleResize () {
              this.window.width = window.innerWidth;
              if (this.window.width < 991) {
                this.isMobile = true;
              } else {
                  this.isMobile = false
              }
          },
          toggleSubnav (e) {
              const element = e.target.parentNode;
              let navItem = element.closest('.main-nav-item');

              if (navItem) {
                  const { slideDown, slideUp, slideToggle } = domSlider;
                  const box = navItem.querySelector('.main-nav-item_subitem');

                  navItem.classList.toggle('open');

                  slideToggle({ element: box })

                  slideUp({ element: box, slideSpeed: 1200 })

                  slideDown({ element: box, slideSpeed: 800, easing: 'easeInOut' })

                  // Promises (or async/await)
                  slideDown({ element: box, slideSpeed: 500 }).then(() => {
                      slideUp({ element: box, slideSpeed: 300 })
                  })
              }
          }
      }
  };
</script>

<style lang="less">
  /* STYLES HERE */
  @import "../assets/less/style";
</style>
