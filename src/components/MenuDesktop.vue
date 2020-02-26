<template>
  <div>
    <!--MENU HERE-->
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>interview</title>
    <link href="style.css" rel="stylesheet" type="text/css">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  </head>
  <body>
    <noscript>
      <strong>We're sorry but interview doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
      <header>
        <span id="navbar-toggle">
          <i class="fas fa-bars"></i>
        </span>
        <img alt="ZlavaDnes" src="src/assets/logo@2x.png">
        <img class="mobileLogo" alt="ZlavaDnes" src="src/assets/logo_mobile.png">
        <nav id="menu-desktop">
          <ul id="main-nav">
            <li class="ListAll">All&nbsp;&nbsp;departments</li>
            <li><a>Bags&nbsp;&nbsp;<i id="arrow"></i></a>
              <ul>
                <li><a href="">Prime video</a></li>
                <li><a href="">Music, CDs & Vinyl</a></li>
                <li><a href="">Digital Music</a></li>
                <li><a href="">Kindle Store</a></li>
                <li><a href="">Arts & Crafts</a></li>
                <li><a href="">Automotive</a></li>
                <li><a href="">Baby</a></li>
                <li><a href="">Beauty & Personal Cares</a></li>
              </ul>
            </li>
            <li><a>Clothes&nbsp;&nbsp;<i id="arrow"></i></a>
              <ul>
                <li><a href="">Prime video</a></li>
                <li><a href="">Music, CDs & Vinyl</a></li>
                <li><a href="">Digital Music</a></li>
                <li><a href="">Kindle Store</a></li>
                <li><a href="">Arts & Crafts</a></li>
                <li><a href="">Automotive</a></li>
                <li><a href="">Baby</a></li>
                <li><a href="">Beauty & Personal Cares</a></li>
              </ul>
            </li>
            <li><a>Textiles&nbsp;&nbsp;<i id="arrow"></i></a>
              <ul>
                <li><a href="">Prime video</a></li>
                <li><a href="">Music, CDs & Vinyl</a></li>
                <li><a href="">Digital Music</a></li>
                <li><a href="">Kindle Store</a></li>
                <li><a href="">Arts & Crafts</a></li>
                <li><a href="">Automotive</a></li>
                <li><a href="">Baby</a></li>
                <li><a href="">Beauty & Personal Cares</a></li>
              </ul>
            </li>
            <li><a>Textiles&nbsp;&nbsp;<i id="arrow"></i></a>
              <ul>
                <li><a href="">Prime video</a></li>
                <li><a href="">Music, CDs & Vinyl</a></li>
                <li><a href="">Digital Music</a></li>
                <li><a href="">Kindle Store</a></li>
                <li><a href="">Arts & Crafts</a></li>
                <li><a href="">Automotive</a></li>
                <li><a href="">Baby</a></li>
                <li><a href="">Beauty & Personal Cares</a></li>
              </ul>
            </li>
            <li><a>Bread&nbsp;&nbsp;<i id="arrow"></i></a>
              <ul>
                <li><a href="">Prime video</a></li>
                <li><a href="">Music, CDs & Vinyl</a></li>
                <li><a href="">Digital Music</a></li>
                <li><a href="">Kindle Store</a></li>
                <li><a href="">Arts & Crafts</a></li>
                <li><a href="">Automotive</a></li>
                <li><a href="">Baby</a></li>
                <li><a href="">Beauty & Personal Cares</a></li>
              </ul>
            </li>
            <li><a>Weapons&nbsp;&nbsp;<i id="arrow"></i></a>
              <ul>
                <li><a href="">Prime video</a></li>
                <li><a href="">Music, CDs & Vinyl</a></li>
                <li><a href="">Digital Music</a></li>
                <li><a href="">Kindle Store</a></li>
                <li><a href="">Arts & Crafts</a></li>
                <li><a href="">Automotive</a></li>
                <li><a href="">Baby</a></li>
                <li><a href="">Beauty & Personal Cares</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <footer></footer>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
    crossorigin="anonymous"></script>
    <script src="main.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.js"integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="crossorigin="anonymous"></script>
    <!-- built files will be auto injected -->
  </body>
</html>

  </div>
</template>

<script>
  export default {};
  let mainNav=document.getElementById('main-nav');
let navbarToggle=document.getElementById('navbar-toggle');



navbarToggle.addEventListener('click',function(){

    if(this.classList.contains('active')){
        mainNav.style.display="none";
        this.classList.remove('active');
    }
    else{
        mainNav.style.display="flex";
        this.classList.add('active');

    }
});
</script>

<style lang="less">
  /* STYLES HERE */
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap&subset=latin-ext');

body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Lato',sans-serif;
  }
#app header  #navbar-toggle {
    position: absolute;
    top: 66px;
    right: 100px;
    cursor: pointer;
    color: #ed4c2f;
    font-size: 24px;
    display: none;
  }
#app header  #navbar-toggle:hover {
   font-size: 26px;
   transition: 0.1s ease all;
   -webkit-transition: 0.1s ease all;
   -moz-transition: 0.1s ease all;
   -ms-transition: 0.1s ease all;
   -o-transition: 0.1s ease all;
}
#app header {
     margin: 4rem 6rem;
  }
#app header img {
    display: block;
    margin-bottom: 5rem;
}
#app header img.mobileLogo {
    display: none;
}  
#app header #menu-desktop {
    /*
    display: none;
    */
}
#app header #menu-desktop ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
#app header #menu-desktop ul li {
    list-style: none;
    cursor: pointer;
}
#app header #menu-desktop ul li.ListAll {
    font-size: 1.6em;
    position: relative;
    top: 30px;
    left: 6px;
    cursor: none;
}
#app header #menu-desktop ul li a:nth-of-type(1) {
    /*padding-left: 0;*/
}
#app header #menu-desktop ul li a i {
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    position: relative;
    top: -8px;
    left: 6px;
}
#app header #menu-desktop ul li a {
    display: block;
    font-weight: 500;
    font-size: 1.6em;
    padding: 30px 40px;
    text-decoration: none;
}
#app header #menu-desktop ul li.ListAll {
    margin-bottom: 4rem;
}
#app header #menu-desktop ul li a:hover {
    color: #ed4c2f;
    transition: 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
    -webkit-transition: 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
    -moz-transition: 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
    -ms-transition: 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
    -o-transition: 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
}
#app header #menu-desktop ul li a #arrow {
   transform: rotate(45deg);
   -webkit-transform: rotate(45deg);
   -moz-transform: rotate(45deg);
   -ms-transform: rotate(45deg);
   -o-transform: rotate(45deg);
   cursor: pointer;
   transition: 0.2s;
   -webkit-transition: 0.2s;
   -moz-transition: 0.2s;
   -ms-transition: 0.2s;
   -o-transition: 0.2s;
}  
#app header #menu-desktop ul li a:hover > #arrow {
    position: relative;
    top: -2px;
    cursor: pointer;
    border: solid #ed4c2f;
    border-width: 0 2.5px 2.5px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transition: 0.08s ease-in all;
    -webkit-transition: 0.08s ease-in all;
    -moz-transition: 0.08s ease-in all;
    -ms-transition: 0.08s ease-in all;
    -o-transition: 0.08s ease-in all;
}
#app header #menu-desktop ul li ul {
    display: block;
    min-width: 250px;
    position: absolute;
    margin-top: 1px;
    margin-left: 0.7rem;
    /*box-shadow: 0 2px 5px rgba(0,0,0, .5);
    */opacity: 0;
    visibility: hidden;
    transition: .2s ease-in all;
    transform: translateY(40px);
    -webkit-transition: .2s ease-in all;
    -moz-transition: .2s ease-in all;
    -ms-transition: .2s ease-in all;
    -o-transition: .2s ease-in all;
}
#app header #menu-desktop ul li:hover ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
}
#app header #menu-desktop ul li ul li a {
    padding: 10px 30px;
    font-size: 1.2em;
    font-weight: 400;
    color: black;
}
#app header #menu-desktop ul li:hover ul li a {
    font-size: 1.2em;
    font-weight: 400;
    color: black;
}
footer {
  
    background-color: #4c4a4b;
    border-top: 5px solid #3c3c3c;
    margin-top: 24rem;
    height: 40vh;
}

@media screen and (max-width: 768px) {

        #app header {
            margin: 4rem 6rem;
         }
        #app header img {
            display: none;
        }
        #app header img.mobileLogo {
            display: block;
        } 
        #app header #menu-desktop {
            /*
            display: block;
            */
        }
        #app header  #menu-desktop ul  {
            flex-direction: column;
            align-items: center;
        }
        #app header  #navbar-toggle {
            display: block;
          }
          #app header #menu-desktop ul li a {
              font-size: 1.3em;
              padding: 10px 40px;
          }
          #app header #menu-desktop ul li ul {
              position: absolute;
              top: 210px;
              right: 40px;
           }
}
</style>
