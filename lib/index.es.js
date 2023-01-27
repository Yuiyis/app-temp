import { defineComponent as o, onMounted as l, openBlock as a, createElementBlock as c, renderSlot as s, ref as r, createCommentVNode as _ } from "vue";
const u = { class: "test" }, m = /* @__PURE__ */ o({
  __name: "Face",
  props: {
    title: null,
    max: null
  },
  setup(n) {
    return l(() => {
      console.log("test");
    }), (e, t) => (a(), c("div", u, [
      s(e.$slots, "default")
    ]));
  }
}), p = /* @__PURE__ */ o({
  __name: "ClientOnly",
  setup(n) {
    const e = r(!1);
    return l(() => {
      e.value = !0;
    }), (t, d) => e.value ? s(t.$slots, "default", { key: 0 }) : _("", !0);
  }
}), f = [m, p], h = {
  install(n) {
    f.forEach((e) => {
      let t = e.__name;
      console.log(t), n.component(t, e);
    });
  }
};
export {
  p as ClientOnly,
  m as Face,
  h as default
};
