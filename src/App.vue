<template>
  <div id="app">
    <Copy></Copy>
    <LongPress></LongPress>
    <Debounce></Debounce>
    <Emoji></Emoji>
    <LazyLoad></LazyLoad>
    <WaterMarker></WaterMarker>
    <Draggable></Draggable>
  </div>
</template>

<script>
import Copy from "./components/Copy";
import LongPress from "./components/LongPress";
import Debounce from "./components/Debounce";
import Emoji from "./components/Emoji";
import LazyLoad from "./components/LazyLoad";
import WaterMarker from "./components/WaterMarker";
import Draggable from "./components/Draggable";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Copy,
    LongPress,
    Debounce,
    Emoji,
    LazyLoad,
    WaterMarker,
    Draggable,
  },
  methods: {},
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
