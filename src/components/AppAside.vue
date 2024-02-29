<template>
  <aside class="aside">
    <div class="aside-header"></div>

    <div class="aside-body">
      <div class="aside-body__top">
        <img class="aside-icon" :src="asideIcon" alt="Weather icon" />
        <p class="aside-temperature">{{ asideTemp }}°C</p>
        <p class="aside-text">
          <span class="aside-text__day">{{ asideDate }}</span
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
      <p class="aside-city">{{ asideCity }}</p>
    </div>
  </aside>
</template>

<script>
export default {
  props: [
    "asideIcon",
    "asideTemp",
    "asideDate",
    "asideTime",
    "asideText",
    "asideRain",
    "asideCity",
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
