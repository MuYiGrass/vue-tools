// 需要给<img>设置默认src defaultSrc；同时注意设置<img>的高度，防止未加载图片，图片全在视口内，不触发懒加载
// 如果需要设置defaultSrc, vue.use(LazyLoad,'xxxx.XXX.png')设置
function init(el, val, def) {
  el.setAttribute("data-src", val);
  el.setAttribute("src", def);
}
function observe(el) {
  var io = new IntersectionObserver((entries) => {
    const realSrc = el.dataset.src;
    if (entries[0].isIntersecting && realSrc) {
      el.src = realSrc;
      el.removeAttribute("data-src");
    }
  });
  io.observe(el);
}
function listenerScroll(el) {
  const handler = throttle(load, 300);
  load(el);
  window.addEventListener("scroll", () => {
    handler(el);
  });
}
function throttle(fn, delay) {
  let timer;
  let prevTime;
  return function (...args) {
    const currTime = Date.now();
    const context = this;
    if (!prevTime) prevTime = currTime;
    clearTimeout(timer);

    if (currTime - prevTime > delay) {
      prevTime = currTime;
      fn.apply(context, args);
      clearTimeout(timer);
      return;
    }

    timer = setTimeout(function () {
      prevTime = Date.now();
      timer = null;
      fn.apply(context, args);
    }, delay);
  };
}
function load(el) {
  const windowHeight = document.documentElement.clientHeight;
  const elTop = el.getBoundingClientRect().top;
  const elBtm = el.getBoundingClientRect().bottom;
  const realSrc = el.dataset.src;
  if (elTop - windowHeight < 0 && elBtm > 0) {
    if (realSrc) {
      el.src = realSrc;
      el.removeAttribute("data-src");
    }
  }
}

const LazyLoad = {
  bind(el, binding) {
    let defaultSrc = "https://unmc.cdn.bcebos.com/1612186430903_1218647705.jpg";
    init(el, binding.value, defaultSrc);
  },
  inserted(el) {
    if (IntersectionObserver) {
      observe(el);
    } else {
      listenerScroll(el);
    }
  },
};

export default LazyLoad;

// const LazyLoad = {
//     // install方法
//     install(Vue, options) {
//       const defaultSrc = options.default
//       Vue.directive('lazy', {
//         bind(el, binding) {
//           LazyLoad.init(el, binding.value, defaultSrc)
//         },
//         inserted(el) {
//           if (IntersectionObserver) {
//             LazyLoad.observe(el)
//           } else {
//             LazyLoad.listenerScroll(el)
//           }
//         },
//       })
//     },
//     // 初始化
//     init(el, val, def) {
//       el.setAttribute('data-src', val)
//       el.setAttribute('src', def)
//     },
//     // 利用IntersectionObserver监听el
//     observe(el) {
//       var io = new IntersectionObserver((entries) => {
//         const realSrc = el.dataset.src
//         if (entries[0].isIntersecting) {
//           if (realSrc) {
//             el.src = realSrc
//             el.removeAttribute('data-src')
//           }
//         }
//       })
//       io.observe(el)
//     },
//     // 监听scroll事件
//     listenerScroll(el) {
//       const handler = LazyLoad.throttle(LazyLoad.load, 300)
//       LazyLoad.load(el)
//       window.addEventListener('scroll', () => {
//         handler(el)
//       })
//     },
//     // 加载真实图片
//     load(el) {
//       const windowHeight = document.documentElement.clientHeight
//       const elTop = el.getBoundingClientRect().top
//       const elBtm = el.getBoundingClientRect().bottom
//       const realSrc = el.dataset.src
//       if (elTop - windowHeight < 0 && elBtm > 0) {
//         if (realSrc) {
//           el.src = realSrc
//           el.removeAttribute('data-src')
//         }
//       }
//     },
//     // 节流
//     throttle(fn, delay) {
//       let timer
//       let prevTime
//       return function (...args) {
//         const currTime = Date.now()
//         const context = this
//         if (!prevTime) prevTime = currTime
//         clearTimeout(timer)

//         if (currTime - prevTime > delay) {
//           prevTime = currTime
//           fn.apply(context, args)
//           clearTimeout(timer)
//           return
//         }

//         timer = setTimeout(function () {
//           prevTime = Date.now()
//           timer = null
//           fn.apply(context, args)
//         }, delay)
//       }
//     },
//   }

//   export default LazyLoad
