<template>
  <div class="LongPress">
    <button v-longpress="longPressCall">长按</button>
  </div>
</template>

<script>
export default {
  name: "LongPress",
  data() {
    return {};
  },
  methods: {
    longPressCall() {
      console.log(123);
    },
  },
};
</script>

<style scoped lang="less">
.LongPress {
  border: solid rgb(22, 9, 9) 1px;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px 0;
}
</style>
