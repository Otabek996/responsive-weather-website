<template>
  <div class="card">
    <p class="card-title">
      {{ ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek] }}
    </p>
    <img class="card-img" :src="dayIcon" alt="Sun" />
    <p class="card-temperature">
      <span v-if="usedTempValue === '°C'">
        <span class="card-temperature__morning"
          >{{ Math.ceil(maxTempC) }}°</span
        >
        <span class="card-temperature__evening"
          >{{ Math.ceil(minTempC) }}°</span
        >
      </span>
      <span v-if="usedTempValue === '°F'">
        <span class="card-temperature__morning"
          >{{ Math.ceil(maxTempF) }}°</span
        >
        <span class="card-temperature__evening"
          >{{ Math.ceil(minTempF) }}°</span
        >
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: [
    "dayOfWeek",
    "maxTempC",
    "minTempC",
    "maxTempF",
    "minTempF",
    "usedTempValue",
    "dayIcon",
  ],
};
</script>

<style scoped>
.card {
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  background-color: var(--body-background-color-white);
  border-radius: 10px;
  padding: 15px;
}

.card-title {
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  line-height: 16px;
}

.card-temperature {
  font-size: 14px;
  font-weight: var(--font-weight-bold);
  line-height: 16px;
}

.card-temperature__evening {
  color: var(--text-color-gray);
  margin-left: 5px;
}

.card-img {
  width: 100%;
}
</style>
