import { _ as __nuxt_component_0 } from "./LaptopCard-BtsaRxdU.js";
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
import { u as useAsyncData, q as queryContent } from "./query-cPPbkAJY.js";
import "./nuxt-link-Bq2nhJrM.js";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/hookable/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/unctx/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/radix3/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/defu/dist/defu.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ohash/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/klona/dist/index.mjs";
import "./preview-LyWLH7bs.js";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/destr/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[value]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const value = decodeURIComponent(String(route.params.value || ""));
    const { data: docs } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `facet-screenInches-` + value,
      () => queryContent("/laptops").where({ screenInches: value }).find(),
      "$8nYLow04Sh"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LaptopCard = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "facet-detail" }, _attrs))} data-v-e5925b9d><h1 data-v-e5925b9d>Pantalla: ${ssrInterpolate(unref(value))}″</h1><div class="grid" data-v-e5925b9d><!--[-->`);
      ssrRenderList(unref(docs), (d) => {
        _push(ssrRenderComponent(_component_LaptopCard, {
          key: d._path,
          doc: d
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/screen/[value].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _value_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e5925b9d"]]);
export {
  _value_ as default
};
//# sourceMappingURL=_value_-CoNajYd1.js.map
