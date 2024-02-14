<template>
  <app-aside></app-aside>

  <div>
    <app-navbar></app-navbar>
  </div>
</template>

<script>
import AppAside from "./components/AppAside.vue";
import AppNavbar from "./components/AppNavbar.vue";
// import fetchData from "./data";

export default {
  name: "App",
  components: {
    AppAside,
    AppNavbar,
  },
};

// fetchData();
</script>

<style>
/*==================== GOOGLE FONTS ====================*/
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");

/*==================== VARIABLES ====================*/
:root {
  /*========== Colors ==========*/
  --body-background-color-white: #ffffff;
  --body-background-color-gray: #f6f6f8;
  --body-background-color-grayer: #d6d7da;
  --text-color-black: #000000;
  --text-color-gray: #aeaeae;
  --active-btn-background-color-black: #000000;
  --border-color-gray: #f6f6f8;

  /*========== Font and typography ==========*/
  --font-family-inconsolata: "Inconsolata", sans-serif;

  /*========== Font size ==========*/
  /*========== Line height ==========*/
  /*========== Font weight ==========*/
  --font-weight-regular: 400;
  --font-weight-bold: 700;
}

/*==================== BASE ====================*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: var(--font-family-inconsolata);
  font-optical-sizing: auto;
  font-weight: var(--font-weight-regular);
  font-style: normal;
  font-variation-settings: "wdth" 100;
  color: var(--text-color-black);
  background-color: var(--body-background-color-grayer);
}

/*==================== APP ====================*/
#app {
  display: flex;
  background-color: var(--body-background-color-gray);
  border-radius: 40px;
  margin: 70px;
}
</style>
