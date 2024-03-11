<template>
  <div class="box" v-for="(value, index) in boxValue" :key="index">
    <p class="box-title">
      {{ value[0] }}
    </p>

    <v-range-slider
      style="width: 150px"
      v-if="value[0] === 'UV Index'"
      v-model="this.value"
      :step="1"
      max="12"
      :ticks="seasons"
      show-ticks="always"
    ></v-range-slider>

    <div>
      <p class="box-description" v-if="index != 2">{{ value[1] }}</p>
      <p class="box-description" v-if="index === 2">
        {{ value[1][0] }} {{ value[1][1] }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["boxValue"],

  data() {
    return {
      value: [0, 12],
      seasons: {
        0: "0",
        3: "3",
        6: "6",
        9: "9",
        12: "12",
      },
    };
  },
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--body-background-color-white);
  border-radius: 10px;
  padding: 10px;
}
</style>
