<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/title";

import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
  data() {
    return {};
  },

  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    option(val) {
      this.chart.setOption(val);
    }
    // option: {
    //     handler(val) {
    //         this.chart.setOption(val);
    //     },
    //     deep: true
    // }
  },
  components: {},

  computed: {},

  created() {
    this.resize = debounce(this.resizeCustomize, 300);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  },

  methods: {
    resizeCustomize() {
      console.log("resize");
      // echartinstance.resize调整尺寸
      this.chart.resize();
    },
    renderChart() {
      this.chart = echarts.init(this.$refs.chartDom);
      this.chart.setOption(this.option);
    }
  },

  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resizeCustomize);
  }
};
</script>
<style lang="less" scoped></style>
