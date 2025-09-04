import _sfc_main$1 from "./ContentDoc-Cz9yLo1k.js";
import _sfc_main$2 from "./ContentRenderer-CZHNOaqh.js";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ufo/dist/index.mjs";
import "./ContentQuery-Bx5hJfPg.js";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ohash/dist/index.mjs";
import "./query-cPPbkAJY.js";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/hookable/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/klona/dist/index.mjs";
import "./preview-LyWLH7bs.js";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/h3/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/destr/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "./v3-kYtGNNxN.js";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "./ContentRendererMarkdown-BLazoUPM.js";
import "scule";
import "property-information";
import "./node-yHY0X6Y7.js";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/radix3/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/defu/dist/defu.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = _sfc_main$1;
  const _component_ContentRenderer = _sfc_main$2;
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "laptop-detail" }, _attrs))} data-v-4d63544e>`);
  _push(ssrRenderComponent(_component_ContentDoc, { path: "" }, {
    default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 data-v-4d63544e${_scopeId}>${ssrInterpolate(doc.title)}</h1><p class="badge" data-v-4d63544e${_scopeId}>${ssrInterpolate(doc.brand)}</p>`);
        _push2(ssrRenderComponent(_component_ContentRenderer, { value: doc }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("h1", null, toDisplayString(doc.title), 1),
          createVNode("p", { class: "badge" }, toDisplayString(doc.brand), 1),
          createVNode(_component_ContentRenderer, { value: doc }, null, 8, ["value"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/laptops/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4d63544e"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-Bi87oEUB.js.map
