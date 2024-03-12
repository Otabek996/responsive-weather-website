<template>
  <div class="box" v-for="(value, index) in boxValue" :key="index">
    <p class="box-title">
      {{ value[0] }}
    </p>

    <p class="box-description" v-if="index === 0 || index === 5">
      {{ value[1] }}
    </p>
    <p class="box-description" v-if="index === 1">
      {{ value[1] }}<span class="box-description__text">km/h</span>
    </p>
    <p class="box-description sun-time" v-if="index === 2">
      <span>{{ value[1][0] }}</span>
      <span>{{ value[1][1] }}</span>
    </p>
    <p class="box-description" v-if="index === 3">
      {{ value[1] }}<span class="box-description__text">%</span>
    </p>
    <p class="box-description" v-if="index === 4">
      {{ value[1] }}<span class="box-description__text">km</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["boxValue"],
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--body-background-color-white);
  border-radius: 10px;
  padding: 20px;
}

.box-title {
  font-size: 18px;
  font-weight: var(--font-weight-regular);
  line-height: 20px;
  color: var(--text-color-gray);
}

.box-description {
  font-size: 45px;
  font-weight: var(--font-weight-bold);
  line-height: 47px;
  color: var(--text-color-black);
}

.box-description__text {
  font-size: 25px;
  font-weight: var(--font-weight-regular);
}

.sun-time {
  font-size: 20px;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
