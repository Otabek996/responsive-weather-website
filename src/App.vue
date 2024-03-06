<template>
  <app-aside
    :asideIcon="icon"
    :asideTempC="tempC"
    :asideTempF="tempF"
    :usedTempValue="usedTemp"
    :asideDate="new Date(date * 1000).getDay()"
    :asideText="text"
    :asideRain="rain"
    :asideCity="city"
    :asideCountry="country"
  ></app-aside>

  <div class="wrapper">
    <app-navbar
      :onClickC="emitMutationC"
      :onClickF="emitMutationF"
    ></app-navbar>

    <main class="main">
      <div class="card-wrapper">
        <app-card
          v-for="(day, index) in forecastDays"
          :key="index"
          :dayOfWeek="new Date(day.date_epoch * 1000).getDay()"
          :maxTempC="day.day.maxtemp_c"
          :minTempC="day.day.mintemp_c"
          :maxTempF="day.day.maxtemp_f"
          :minTempF="day.day.mintemp_f"
          :usedTempValue="usedTemp"
        ></app-card>
      </div>

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
  icon: "",
  tempC: "",
  tempF: "",
  date: "",
  text: "",
  rain: "",
  city: "",
  country: "",
  forecastDays: null,
  usedTemp: "",

  data() {
    return {
      icon: "",
      tempC: "",
      tempF: "",
      date: "",
      text: "",
      rain: "",
      city: "",
      country: "",
      forecastDays: null,
      usedTemp: "°C",
    };
  },

  mounted() {
    this.getWeather();
  },

  methods: {
    getWeather() {
      axios
        .get(
          "http://api.weatherapi.com/v1/forecast.json?key=8b684208e7b74e8592c102618231904&q=Tashkent&days=7&aqi=yes&alerts=no"
        )
        .then((res) => {
          this.icon = res.data.current.condition.icon;
          this.tempC = res.data.current.temp_c;
          this.tempF = res.data.current.temp_f;
          this.date = res.data.current.last_updated_epoch;
          this.text = res.data.current.condition.text;
          this.rain = res.data.forecast.forecastday[0].day.daily_chance_of_rain;
          this.city = res.data.location.name;
          this.country = res.data.location.country;

          this.forecastDays = res.data.forecast.forecastday;

          console.log(res);
        });
    },

    emitMutationC() {
      this.usedTemp = "°C";
    },

    emitMutationF() {
      this.usedTemp = "°F";
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

.card-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

.box-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
