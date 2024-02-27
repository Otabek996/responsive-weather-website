<template>
  <app-aside :asideCity="city"></app-aside>

  <div class="wrapper">
    <app-navbar></app-navbar>

    <main class="main">
      <app-card></app-card>

      <h2 class="main-title">Today's Highlights</h2>

      <div class="box-wrapper">
        <app-box></app-box>
        <app-box></app-box>
        <app-box></app-box>
      </div>
    </main>
  </div>
</template>

<script>
import AppAside from "./components/AppAside.vue";
import AppNavbar from "./components/AppNavbar.vue";
import AppCard from "./components/AppCard.vue";
import AppBox from "./components/AppBox.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    AppAside,
    AppNavbar,
    AppCard,
    AppBox,
  },
  city: "",

  data() {
    return {
      city: "",
    };
  },

  mounted() {
    this.getWeather();
  },

  methods: {
    getWeather() {
      axios
        .get(
          "http://api.weatherapi.com/v1/forecast.json?key=8b684208e7b74e8592c102618231904&q=Tashkent&days=1&aqi=yes&alerts=no"
        )
        .then((res) => {
          this.city = res.data.location.name;
        });
    },
  },
};
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
  --text-color-white: #ffffff;
  --text-color-black: #000000;
  --text-color-gray: #aeaeae;
  --active-btn-background-color-black: #000000;
  --nonactive-btn-background-color-white: #ffffff;
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

.wrapper {
  width: 100%;
}

.main {
  padding: 0 40px;
}

.main-title {
  margin: 50px 0 20px 0;
}

.box-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
