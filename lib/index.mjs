import { defineComponent as o, openBlock as a, createElementBlock as l, normalizeClass as r, renderSlot as s, ref as c, onMounted as u, nextTick as m, createCommentVNode as p } from "vue";
const f = /* @__PURE__ */ o({
  __name: "test",
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
    return (e, n) => (a(), l("button", {
      class: r(["muk-btn", [t.size, t.type]])
    }, [
      s(e.$slots, "default")
    ], 2));
  }
}), i = /* @__PURE__ */ o({
  __name: "ClientOnly",
  setup(t) {
    const e = c(!1);
    return u(() => {
      m(() => {
        e.value = !0;
      });
    }), (n, _) => e.value ? s(n.$slots, "default", { key: 0 }) : p("", !0);
  }
}), d = [f, i], k = {
  install(t) {
    d.forEach((e) => {
      t.component(e.name, e);
    });
  }
};
export {
  i as ClientOnly,
  f as Test,
  k as default
};
