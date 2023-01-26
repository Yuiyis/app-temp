import { openBlock as r, createElementBlock as a, renderSlot as s, defineComponent as l, ref as _, onMounted as f, nextTick as u, createCommentVNode as d } from "vue";
const m = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, c] of e)
    n[o] = c;
  return n;
}, p = {}, i = { class: "test" };
function v(t, e) {
  return r(), a("div", i, [
    s(t.$slots, "default")
  ]);
}
const k = /* @__PURE__ */ m(p, [["render", v]]), C = /* @__PURE__ */ l({
  __name: "Client",
  setup(t) {
    const e = _(!1);
    return f(() => {
      u(() => {
        e.value = !0;
      });
    }), (n, o) => e.value ? s(n.$slots, "default", { key: 0 }) : d("", !0);
  }
}), h = [k, C], x = {
  install(t) {
    h.forEach((e) => {
      console.log("___", e.__name), console.log(e.name), t.component(e.name, e);
    });
  }
};
export {
  C as Client,
  k as TestClient,
  x as default
};
