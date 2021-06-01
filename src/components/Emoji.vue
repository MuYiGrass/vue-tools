<template>
  <div class="emoji">
    <input type="text" v-model="note" v-emoji />
    {{ note }}
  </div>
</template>

<script>
export default {
  name: "Emoji",
  data() {
    return {
      note: "",
    };
  },
  methods: {},
};
</script>

<style scoped lang="less">
.emoji {
  border: solid rgb(22, 9, 9) 1px;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px 0;
}
</style>
