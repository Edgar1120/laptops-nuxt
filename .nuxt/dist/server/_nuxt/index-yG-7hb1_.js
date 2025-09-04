import { _ as __nuxt_component_0 } from "./nuxt-link-Bq2nhJrM.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/hookable/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/unctx/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/radix3/dist/index.mjs";
import "C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/defu/dist/defu.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "grid" }, _attrs))} data-v-6358350f><div class="card" data-v-6358350f><h2 data-v-6358350f>Explorar por Marca</h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/brand" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ver marcas →`);
      } else {
        return [
          createTextVNode("Ver marcas →")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="card" data-v-6358350f><h2 data-v-6358350f>Explorar por Sistema Operativo</h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/os" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ver sistemas →`);
      } else {
        return [
          createTextVNode("Ver sistemas →")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="card" data-v-6358350f><h2 data-v-6358350f>Explorar por Tamaño de Pantalla</h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/screen" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ver tamaños →`);
      } else {
        return [
          createTextVNode("Ver tamaños →")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="card" data-v-6358350f><h2 data-v-6358350f>Explorar por Procesador</h2>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/cpu" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ver procesadores →`);
      } else {
        return [
          createTextVNode("Ver procesadores →")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6358350f"]]);
export {
  index as default
};
//# sourceMappingURL=index-yG-7hb1_.js.map
