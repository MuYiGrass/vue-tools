<template>
  <div class="debounce">
    <button v-debounce="debounceFunc">防抖</button>
  </div>
</template>

<script>
export default {
  name: "Debounce",
  data() {
    return {};
  },
  methods: {
    debounceFunc() {
      console.log("防抖");
    },
  },
};
</script>

<style scoped lang="less">
.debounce {
  border: solid rgb(22, 9, 9) 1px;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px 0;
}
</style>
