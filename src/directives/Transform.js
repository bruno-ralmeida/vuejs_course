import Vue from "vue";

Vue.directive("transform-custom", {
  bind(el, binding, vnode) {
    let value = !binding.arg ? 0 : 1.5;
    let effect = !binding.arg ? `rotate(${value}deg)` : `scale(${value})`;

    if (!binding.arg || binding.arg == "rotate") {
      const rotateValue = binding.value.rotateValue || 90;

      binding.modifiers.reverse
        ? (value -= rotateValue)
        : (value += rotateValue);
    }

    if (binding.modifiers.animate) el.style.transition = "all .5s";

    el.addEventListener("dblclick", () => {
      el.style.transform = effect;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = binding.arg ? `rotate(0deg)` : `scale(1.0)`;
      
    });
  }
});
