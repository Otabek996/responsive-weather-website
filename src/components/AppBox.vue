<template>
  <div class="box" v-for="(value, index) in boxValue" :key="index">
    <p class="box-title">
      {{ value[0] }}
    </p>
    <p class="box-description" v-if="index != 2">{{ value[1] }}</p>
    <p class="box-description" v-if="index === 2">
      {{ value[1][0] }} {{ value[1][1] }}
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
</style>
