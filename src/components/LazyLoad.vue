<template>
  <div class="lazyLoad">
    <img v-lazyLoad="imgSrc1" />
    <img v-lazyLoad="imgSrc2" />
    <img v-lazyLoad="imgSrc3" />
  </div>
</template>

<script>
export default {
  name: "LazyLoad",
  data() {
    return {
      imgSrc1:
        "//u.thsi.cn/imgsrc/flashcms/571294597_92fe3b34d959f814457d2dc1aaa25bf0.jpg",
      imgSrc2:
        "http://u.thsi.cn/imgsrc/flashcms/571294597_dc12a786e788074090d6bb0c23cec2a3.jpg",
      imgSrc3:
        "https://cdn.wwads.cn/creatives/kFaueDHylNnKfvGAqrivtIPTTimk6WWvX4WZciJz.png",
    };
  },
  methods: {},
};
</script>

<style lang="less">
.lazyLoad {
  border: solid rgb(22, 9, 9) 1px;
  margin-bottom: 20px;
  padding: 10px 0;
  img {
    display: block;
    width: 600px;
    height: 400px;
    border: solid red 1px;
  }
}
</style>
