import copy from "./copy";
import longpress from "./longpress";
import debounce from "./debounce";
import emoji from "./emoji";
import lazyLoad from "./lazyLoad";

const directives = {
  copy,
  longpress,
  debounce,
  emoji,
  lazyLoad,
};
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
