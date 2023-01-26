import { defineComponent as n, openBlock as o, createElementBlock as l, normalizeClass as a, renderSlot as r } from "vue";
const s = /* @__PURE__ */ n({
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
  setup(e) {
    return (t, m) => (o(), l("button", {
      class: a(["muk-btn", [e.size, e.type]])
    }, [
      r(t.$slots, "default")
    ], 2));
  }
}), c = [s], u = {
  install(e) {
    c.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  s as Button,
  u as default
};
