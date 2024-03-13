<template>
  <aside class="aside">
    <div class="aside-header">
      <div class="input-border">
        <i class="ri-search-line"></i>
        <input
          class="search-input"
          type="text"
          placeholder="Search for places ..."
          v-model="inputText"
          @keyup.enter="getTextFromInput"
        />
      </div>
      <button
        class="find-location"
        type="button"
        @click="getTextFromInput"
        :disabled="!Boolean(inputText)"
      >
        <i class="ri-crosshair-line"></i>
      </button>
    </div>

    <div class="aside-body">
      <div class="aside-body__top">
        <img class="aside-icon" :src="asideIcon" alt="Weather icon" />
        <p class="aside-temperature" v-if="usedTempValue === '°C'">
          {{ Math.ceil(asideTempC) }}{{ usedTempValue }}
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
          <span class="aside-text__time" v-if="asideCity === 'Tashkent'">{{
            this.currentTime
          }}</span>
          <span class="aside-text__time" v-if="asideCity != 'Tashkent'">{{
            countryTime
          }}</span>
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
    "asideText",
    "asideRain",
    "asideCity",
    "asideCountry",
    "countryTime",
  ],

  data() {
    return {
      inputText: "",
      currentTime: "",
    };
  },

  mounted() {
    this.getCurrentTime();
    setInterval(this.getCurrentTime, 30000);
  },

  methods: {
    getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      this.currentTime = `${hours}:${minutes}`;
    },

    getTextFromInput() {
      if (this.inputText != "") {
        this.$emit("information-event", this.inputText);
        this.inputText = "";
      }
    },
  },
};
</script>

<style scoped>
/*=============== APP ASIDE ===============*/
.aside {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  border-color: #d6d7da;
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
  border-color: #d6d7da;
}

.aside-body__top {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 2px solid var(--border-color-gray);
  /* padding: 20px 0; */
  padding: 0 0 20px 0;
}

.aside-text {
  font-size: 21px;
  font-weight: var(--font-weight-regular);
  line-height: 23px;
}

.aside-text__time {
  color: var(--text-color-gray);
}

.aside-body__bottom {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
}

.condition {
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  line-height: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.aside-temperature {
  font-size: 80px;
  font-weight: var(--font-weight-bold);
}

.aside-city {
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  line-height: 18px;
}

/*=============== BREAKPOINTS ===============*/
/* For large devices */
@media screen and (max-width: 1137px) {
  .aside {
    width: 330px;
  }

  .aside-footer {
    margin-top: auto;
  }
}

@media screen and (max-width: 1010px) {
  .search-input {
    width: 130px;
  }
}

/* For medium devices */
@media screen and (max-width: 830px) {
  .aside {
    width: 100%;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom-left-radius: 0;
  }

  .input-border {
    width: 100%;
  }

  .aside-icon {
    width: 220px;
    margin: 0 auto;
  }
}

/* For small devices */
@media screen and (max-width: 560px) {
  .aside-icon {
    width: 100%;
  }
}
</style>
