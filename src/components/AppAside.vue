<template>
  <aside class="aside">
    <div class="aside-header">
      <div class="input-border">
        <i class="ri-search-line"></i>
        <input
          class="search-input"
          type="text"
          placeholder="Search for places ..."
        />
      </div>
      <button class="find-location">
        <i class="ri-user-location-line"></i>
      </button>
    </div>

    <div class="aside-body">
      <div class="aside-body__top">
        <img class="aside-icon" :src="asideIcon" alt="Weather icon" />
        <p class="aside-temperature" v-if="usedTempValue === '°C'">
          {{ asideTempC }}{{ usedTempValue }}
        </p>
        <p class="aside-temperature" v-if="usedTempValue === '°F'">
          {{ Math.ceil(asideTempF) }}{{ usedTempValue }}
        </p>
        <p class="aside-text">
          <span class="aside-text__day">{{
            [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ][asideDate]
          }}</span
          >,
          <span class="aside-text__time">{{ asideTime }}</span>
        </p>
      </div>

      <div class="aside-body__bottom">
        <div class="condition">
          <i class="ri-cloud-line"></i>
          <p class="condition-text">{{ asideText }}</p>
        </div>
        <div class="condition">
          <i class="ri-rainy-line"></i>
          <p class="condition-text">Rain - {{ asideRain }}%</p>
        </div>
      </div>
    </div>

    <div class="aside-footer">
      <p class="aside-city">{{ asideCity }}, {{ asideCountry }}</p>
    </div>
  </aside>
</template>

<script>
export default {
  props: [
    "asideIcon",
    "asideTempC",
    "asideTempF",
    "usedTempValue",
    "asideDate",
    "asideTime",
    "asideText",
    "asideRain",
    "asideCity",
    "asideCountry",
  ],
};
</script>

<style scoped>
.aside {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: var(--body-background-color-white);
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  padding: 40px;
}

.aside-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input-border {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: border-color 0.2s linear;
}

.input-border:hover {
  border-color: red;
}

.search-input {
  border: none;
}

.search-input:focus {
  outline: none;
}

.find-location {
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.2s linear;
  padding: 9px 11px;
  cursor: pointer;
}

.find-location:hover {
  border-color: red;
}

.aside-body__top {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 2px solid var(--border-color-gray);
  padding: 20px 0;
}

.aside-body__bottom {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
}

.condition {
  display: flex;
  align-items: center;
  gap: 5px;
}

.aside-temperature {
  font-size: 80px;
  font-weight: var(--font-weight-bold);
}
</style>
