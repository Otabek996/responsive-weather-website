<template>
  <div class="box" v-for="(value, index) in boxValue" :key="index">
    <p class="box-title">
      {{ value[0] }}
    </p>

    <div v-if="index === 0">
      <p class="box-description">
        {{ value[1] }}
      </p>
      <p v-if="value[1] === 1 || value[1] === 2">Low</p>
      <p v-if="value[1] === 3 || value[1] === 4 || value[1] === 5">Moderate</p>
      <p v-if="value[1] === 6 || value[1] === 7">High</p>
      <p v-if="value[1] === 8 || value[1] === 9 || value[1] === 10">
        Very high
      </p>
      <p v-if="value[1] >= 11">Extreme</p>
    </div>

    <p class="box-description" v-if="index === 1">
      {{ value[1] }}<span class="box-description__text">km/h</span>
    </p>
    <p class="box-description sun-time" v-if="index === 2">
      <span class="sunText">
        <span class="sunIcon"><i class="ri-arrow-up-circle-line"></i></span>
        <span>{{ value[1][0] }}</span>
      </span>
      <span class="sunText">
        <span class="sunIcon"><i class="ri-arrow-down-circle-line"></i></span>
        <span>{{ value[1][1] }}</span>
      </span>
    </p>
    <p class="box-description" v-if="index === 3">
      {{ value[1] }}<span class="box-description__text">%</span>
    </p>
    <p class="box-description" v-if="index === 4">
      {{ value[1] }}<span class="box-description__text">km</span>
    </p>
    <p class="box-description" v-if="index === 5">
      {{ value[1] }}
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

.sunText {
  display: flex;
  align-items: center;
  gap: 5px;
}

.sunIcon {
  font-weight: var(--font-weight-regular);
}
</style>
