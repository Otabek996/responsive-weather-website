<template>
  <div class="card">
    <p class="card-title">
      {{ ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek] }}
    </p>
    <img class="card-img" src="" alt="Sun" />
    <p class="card-temperature">
      <span class="card-temperature__morning">{{ Math.ceil(maxTempC) }}°</span>
      <span class="card-temperature__evening">{{ Math.ceil(minTempC) }}°</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["dayOfWeek", "maxTempC", "minTempC", "maxTempF", "minTempF"],
};
</script>

<style scoped>
.card {
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--body-background-color-white);
  border-radius: 10px;
  padding: 10px;
}
</style>
