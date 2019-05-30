<template>
  <div>
    <Header />
    <Footer />
    <slider-menu></slider-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import SliderMenu from "./slider-menu";
export default {
  components: {
    Header,
    Footer,
    SliderMenu
  }
};
</script>

<style></style>
