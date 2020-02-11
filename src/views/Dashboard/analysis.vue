<template>
  <div>
    <Chart :option="chartOption" style="height: 400px" />
    <a-date-picker>
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </a-date-picker>
  </div>
</template>

<script>
import Chart from "../../components/chart";
// import request from "../../utils/request";
import { clearInterval } from "timers";
export default {
  data() {
    return {
      chartOption: {}
    };
  },
  created() {},
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  components: {
    Chart
  },
  methods: {
    getChartData() {
      this.$http({
        url: "/api/dashboard/chart",
        method: "get",
        params: { ID: 12345 }
      }).then(response => {
        this.chartOption = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: response.data
            }
          ]
        };
      });
    }
  }
};
</script>

<style></style>
