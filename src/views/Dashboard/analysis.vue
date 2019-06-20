<template>
  <div>分析页</div>
</template>

<script>
export default {
  created() {
    console.log("script start");
    setTimeout(() => {
      console.log("settimeout");
    }, 0);
    this.async1();
    new Promise(resolve => {
      console.log("promise1");
      resolve();
    }).then(function() {
      console.log("promise2");
    });
    console.log("script end");
  },
  methods: {
    async async1() {
      console.log("async1 start");
      await this.async2();
      console.log("async1 end");
    },
    async async2() {
      console.log("async2");
    }
  }
};
</script>

<style></style>
