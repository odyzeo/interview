# Odyzeo Interview

## Assignment
Design and implement header with simple menu. Designs for desktop are `/src/assets/menu.jpg` 
and `/src/assets/menu-open.jpg`. For mobile `/src/assets/menu-mobile.jpg` and 
`/src/assets/menu-mobile-open.jpg`. Interaction and animations are up to you :)

Font we use is
[Lato](https://fonts.google.com/specimen/Lato?selection.family=Lato).

We are fans of [BEM](http://getbem.com/), [Vue](https://vuejs.org/v2/style-guide/),
[Icomoon](https://icomoon.io/app/#/select), [normalize.css](https://github.com/necolas/normalize.css/).

Create GitHub account if you don't have one and send your account to [Zombi](mailto:tomas.zamba@odyzeo.com), he will give you access.

Push your assignment as branch `feature/{firstname.lastname}` to this repo and create pull request.

If you need help or have any questions ask [Zombi](mailto:tomas.zamba@odyzeo.com).

Keep it simple and GLHF.

## Results
- 00:09:33: Project init
- 00:21:38: Basic Structure
- 00:38:17: Basic Styles
- 00:57:30: Import global styles - had to google this one
- 01:24:15: Stopped - many problems appeared, description bellow (checked some tutorials, continue next day)
- 02:09:11: Split menu on mobile and desktop component
- 02:40:14: Finish Desktop design
- 03:59:32: Finish Mobile design
- 04:37:34: Finish Menu open animation
- 05:03:15: Update fonts size, colors, add missing hover effects

## Problems/Workarounds during development
- Long downloading time during first init - Cypress was downloaded multiple time for some reason (long project init part)
- Had to check how global styles are imported
- Compare diffetences between .less and .scss (first project in .less)
- Create copy of logo - cut Z character for mobile resolution
- Missing user image - downloaded blank image used as template
- Could not find free desired chevron icons on [Icomoon](https://icomoon.io/app/#/select), used [Ionicons](https://ionicons.com/), (later I found them, this was purely my mistake)
- Close menu on click outside - created directive for this, but could not make it work (directive is still included in main.js)
- As login service is not part of this project, login is simulated by clicking on **Login** or **Cart-icon**
- **Mobile side menu open** - click on brand logo or hamburger icon


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
