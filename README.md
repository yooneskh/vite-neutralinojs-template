# Neutralino.js Template With Vite.js and Vue.js

## Neutralino.js
[Neutralino.js](https://github.com/neutralinojs/neutralinojs) is a new competitor to Electron.js which is smaller and consumes tiny amount of ram.

## Vite.js
[Vite.js](https://vitejs.dev/) is the new generation of build tools which loads up extremely fast and provides a lot out of the box.

## Vue.js
[Vue.js](https://vuejs.org/) is one of the newest javascript frameworks with extremely lean leanring curve and very fun to work with. Has become exceptionally better in version 3. This template uses [Vue.js version 3](https://v3.vuejs.org/)

This template brings all these together and gives you the starting point to make top notch desktop apps.

## Installation

- Clone this repository
- `cd` into the directory
- `yarn`
- `npx neu update`
- change these things according to your app
  - `name` and `description` in `package.json`
  - `applicationId`, `modes.window.title` and `cli.binaryName` in `neutralino.config.js`
  - `title` tag in `index.html`
  - `public/favicon.ico`
  - `public/icons/appIcon.png`

## Usage
- `yarn serve` starts the dev server of vite in `8080` port. (you can change it in the `vite.config.js`)
- develop your application in `src`
- `yarn serve:neu` builds your app and opens it in the `neu` window.
- after you are done, `yarn build` build the js app and packages it with `neu`
- your app binaries are at `dist`

## Upcoming
- Run dev server directly in Neutralino.js window (Vite.js must some how build on every change and then `neu listen`)