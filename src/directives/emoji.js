// 背景：开发中遇到的表单输入，往往会有对输入内容的限制，比如不能输入表情和特殊字符，只能输入数字或字母等。
// 以禁止输入表情和特殊字符为例。

let findEle = (parent, type) => {
  return parent.tagName.toLowerCase() === type
    ? parent
    : parent.querySelector(type);
};

const trigger = (el, type) => {
  const e = document.createEvent("HTMLEvents");
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
};

const emoji = {
  bind: function (el) {
    let regRule =
      /[^\u4E00-\u9FA5|\d|a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g;

    let $inp = findEle(el, "input");

    $inp.handle = function () {
      let val = $inp.value;
      $inp.value = val.replace(regRule, "");
      trigger($inp, "input");
    };
    $inp.addEventListener("keyup", $inp.handle);
    el.$inp = $inp;
  },
  unbind: function (el) {
    el.$inp.removeEventListener("keyup", el.$inp.handle);
  },
};

export default emoji;
