<template>
  <app-aside
    @information-event="handleInformation"
    :asideIcon="icon"
    :asideTempC="tempC"
    :asideTempF="tempF"
    :usedTempValue="usedTemp"
    :asideDate="new Date(date * 1000).getDay()"
    :asideText="text"
    :asideRain="rain"
    :asideCity="city"
    :asideCountry="country"
    :countryTime="locationTime"
  ></app-aside>

  <div class="wrapper">
    <app-navbar
      :onClickC="emitMutationC"
      :onClickF="emitMutationF"
      :usedTempValue="usedTemp"
      :isActiveValueC="isActiveC"
      :isActiveValueF="isActiveF"
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
          :dayIcon="day.day.condition.icon"
        ></app-card>
      </div>

      <h2 class="main-title">Today's Highlights</h2>

      <div class="box-wrapper">
        <app-box :boxValue="Object.entries(allBoxValue)"></app-box>
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
      receivedInformation: "Tashkent",
      icon: "",
      tempC: "",
      tempF: "",
      date: "",
      text: "",
      rain: "",
      city: "",
      country: "",
      locationTime: null,
      forecastDays: null,
      usedTemp: "°C",
      isActiveC: true,
      isActiveF: false,
      uvIndex: 0,
      windStatusKph: null,
      sunriseTime: null,
      sunsetTime: null,
      humidityPercent: 0,
      visibilityKm: 0,
      airQualityPm25: 0,
      allBoxValue: {
        "UV Index": [""],
        "Wind Status": [""],
        "Sunrise & Sunset": ["", ""],
        Humidity: [""],
        Visibility: [""],
        "Air Quality": [""],
      },
    };
  },

  mounted() {
    this.getWeather();
  },

  methods: {
    getWeather() {
      axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=8b684208e7b74e8592c102618231904&q=${this.receivedInformation}&days=7&aqi=yes&alerts=no`
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
          this.locationTime = res.data.location.localtime.split(" ")[1];

          this.forecastDays = res.data.forecast.forecastday;

          this.uvIndex = res.data.current.uv;
          this.windStatusKph = res.data.current.wind_kph;
          this.sunriseTime = res.data.forecast.forecastday[0].astro.sunrise;
          this.sunsetTime = res.data.forecast.forecastday[0].astro.sunset;
          this.humidityPercent = res.data.current.humidity;
          this.visibilityKm = res.data.current.vis_km;
          this.airQualityPm25 = res.data.current.air_quality.pm2_5;

          this.allBoxValue["UV Index"] = this.uvIndex;
          this.allBoxValue["Wind Status"] = this.windStatusKph;
          this.allBoxValue["Sunrise & Sunset"][0] = this.sunriseTime;
          this.allBoxValue["Sunrise & Sunset"][1] = this.sunsetTime;
          this.allBoxValue["Humidity"] = this.humidityPercent;
          this.allBoxValue["Visibility"] = this.visibilityKm;
          this.allBoxValue["Air Quality"] = this.airQualityPm25;

          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    emitMutationC() {
      this.usedTemp = "°C";
      this.isActiveC = true;
      this.isActiveF = false;
    },

    emitMutationF() {
      this.usedTemp = "°F";
      this.isActiveF = true;
      this.isActiveC = false;
    },

    handleInformation(info) {
      this.receivedInformation = info;
      this.getWeather();
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
  margin: 45px 125px;
}

.wrapper {
  width: 100%;
}

.main {
  padding: 0 40px 40px 40px;
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
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
}

/*=============== BREAKPOINTS ===============*/
/* For large devices */
@media screen and (max-width: 1137px) {
  .box-wrapper {
    grid-template-columns: repeat(2, auto);
  }
}
</style>
