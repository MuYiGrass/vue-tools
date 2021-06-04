<template>
  <div class="Draggable">
    <div class="el-dialog" v-draggable></div>
  </div>
</template>

<script>
export default {
  name: "Draggable",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
.Draggable {
  border: solid rgb(22, 9, 9) 1px;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px 0;
  .el-dialog {
    width: 50px;
    height: 50px;
    border: solid red 1px;
    display: inline-block;
  }
}
</style>
