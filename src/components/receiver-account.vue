<template>
  <a-input-group compact>
    <a-select v-model="type" style="width: 130px" @change="handleTypeChange">
      <a-select-option value="alipay">支付宝</a-select-option>
      <a-select-option value="bank">银行账户</a-select-option>
    </a-select>
    <a-input
      style="width: calc(100% - 130px)"
      v-model="number"
      @change="handleNumberChange"
    />
  </a-input-group>
</template>

<script>
export default {
  data() {
    const { type, number } = this.value || {};
    return {
      type: type || "alipay",
      number: number || ""
    };
  },
  props: {
    value: {
      type: Object
    }
  },
  watch: {
    value(val) {
      Object.assign(this, val);
    }
  },

  components: {},

  computed: {},

  created() {},

  methods: {
    handleTypeChange(val) {
      this.$emit("change", { ...this.value, type: val });
    },
    handleNumberChange(e) {
      this.$emit("change", { ...this.value, number: e.target.value });
    }
  },

  mounted() {}
};
</script>
<style></style>
