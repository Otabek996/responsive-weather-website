<template>
  <div class="card">
    <p class="card-title">Sun</p>
    <img class="card-img" src="" alt="Sun" />
    <p class="card-temperature">
      <span class="card-temperature__morning">15°</span>
      <span class="card-temperature__evening">-3°</span>
    </p>
  </div>
</template>

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
