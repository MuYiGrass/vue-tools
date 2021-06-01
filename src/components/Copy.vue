<template>
  <div class="copy">
    <button @click="changeCopyText">修改复制值</button>
    <p v-copy="copyText">点击复制</p>
  </div>
</template>

<script>
export default {
  name: "Copy",
  data() {
    return {
      copyText: "a copy directives",
    };
  },
  methods: {
    changeCopyText() {
      this.copyText = "修改后的复制值";
    },
  },
};
</script>

<style scoped lang="less">
.copy {
  border: solid rgb(22, 9, 9) 1px;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px 0;
}
</style>
