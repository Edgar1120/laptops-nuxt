import { _ as __nuxt_component_0 } from "./nuxt-link-Bq2nhJrM.js";
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as useAsyncData, q as queryContent } from "./query-cPPbkAJY.js";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ufo/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/hookable/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ohash/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/klona/dist/index.mjs";
import "./preview-LyWLH7bs.js";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/h3/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/destr/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/radix3/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/defu/dist/defu.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    os: {},
    title: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const { data: items } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`facet-${"os"}`, async () => {
      const all = await queryContent("/laptops").only(["os"]).find();
      const vals = Array.from(new Set(all.map((i) => i["os"]).filter(Boolean)));
      vals.sort((a, b) => String(a).localeCompare(String(b), "es"));
      return vals;
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "facet-list" }, _attrs))} data-v-4ba4f8f9><h1 data-v-4ba4f8f9>${ssrInterpolate(_ctx.title)}</h1><ul data-v-4ba4f8f9><!--[-->`);
      ssrRenderList(unref(items), (val) => {
        _push(`<li data-v-4ba4f8f9>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/os/${encodeURIComponent(String(val))}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(val)}`);
            } else {
              return [
                createTextVNode(toDisplayString(val), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/os/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ba4f8f9"]]);
export {
  index as default
};
//# sourceMappingURL=index-BxqKwq4y.js.map
