<template>
  <app-aside></app-aside>
</template>

<script>
import AppAside from "./components/AppAside.vue";
import fetchData from "./data";

export default {
  name: "App",
  components: {
    AppAside,
  },
};

fetchData();
</script>

<style>
/*==================== GOOGLE FONTS ====================*/
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap");

/*==================== VARIABLES CSS ====================*/
/*==================== BASE ====================*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
