<template>
  <div class="waterMarker">
    <div
      v-waterMarker="{
        text: 'wjc版权所有',
        font: '28px Microsoft JhengHei',
        textColor: 'rgba(180, 180, 180, 0.4)',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "waterMarker",
};
</script>

<style scoped lang="less">
.waterMarker {
  border: solid rgb(22, 9, 9) 1px;
  height: 400px;
  margin-bottom: 20px;
  padding: 10px 0;
  div {
    height: 100%;
  }
}
</style>
