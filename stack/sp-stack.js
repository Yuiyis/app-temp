import { defineComponent as o, openBlock as a, createElementBlock as s, normalizeClass as r, renderSlot as l, ref as c, onMounted as u, nextTick as m, createCommentVNode as p } from "vue";
const d = /* @__PURE__ */ o({
  __name: "HelloWorld",
  props: {
    size: {
      type: String,
      default: "middle"
    },
    type: {
      type: String,
      default: "default"
    }
  },
  setup(t) {
    return (e, n) => (a(), s("button", {
      class: r(["muk-btn", [t.size, t.type]])
    }, [
      l(e.$slots, "default")
    ], 2));
  }
}), f = /* @__PURE__ */ o({
  __name: "ClientOnly",
  setup(t) {
    const e = c(!1);
    return u(() => {
      m(() => {
        e.value = !0;
      });
    }), (n, _) => e.value ? l(n.$slots, "default", { key: 0 }) : p("", !0);
  }
}), i = [d, f], k = {
  install(t) {
    i.forEach((e) => {
      t.component(e.name, e);
    });
  }
};
export {
  f as cOnly,
  k as default,
  d as hButton
};
