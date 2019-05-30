<template>
  <div>
    <header />
    <footer />
    <slider-menu></slider-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./header";
import footer from "./footer";
import sliderMenu from "./slider-menu";
export default {
  components: {
    /* eslint-disable vue/no-unused-components */
    header,
    footer,
    sliderMenu
  }
};
</script>

<style></style>
