import { _ as __nuxt_component_0$1 } from './nuxt-link-Bq2nhJrM.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LaptopCard",
  __ssrInlineRender: true,
  props: {
    doc: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-a07d2d00><h3 data-v-a07d2d00>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/laptops/${_ctx.doc._path.split("/").pop()}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.doc.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.doc.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h3><p class="badge" data-v-a07d2d00>${ssrInterpolate(_ctx.doc.brand)}</p><ul data-v-a07d2d00><li data-v-a07d2d00>CPU: ${ssrInterpolate(_ctx.doc.cpu || "N/D")}</li><li data-v-a07d2d00>OS: ${ssrInterpolate(_ctx.doc.os || "N/D")}</li><li data-v-a07d2d00>Pantalla: ${ssrInterpolate((_a = _ctx.doc.screenInches) != null ? _a : "N/D")}\u2033</li><li data-v-a07d2d00>RAM: ${ssrInterpolate((_b = _ctx.doc.ramGB) != null ? _b : "N/D")} GB</li><li data-v-a07d2d00>Almacenamiento: ${ssrInterpolate((_c = _ctx.doc.storageMB) != null ? _c : "N/D")} MB</li>`);
      if (_ctx.doc.price) {
        _push(`<li data-v-a07d2d00>Precio: ${ssrInterpolate(_ctx.doc.price)}</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LaptopCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a07d2d00"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=LaptopCard-BtsaRxdU.mjs.map
