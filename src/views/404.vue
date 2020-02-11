<template>
  <div>
    <img :src="Logo1" style="width:100px;height:100px" />
  </div>
</template>

<script>
// import Logo from "@/assets/logo.svg";
export default {
  data() {
    return {
      Logo1: require("@/assets/logo.svg")
    };
  }
};
</script>

<style></style>
