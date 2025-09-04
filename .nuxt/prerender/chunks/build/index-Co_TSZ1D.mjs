import { _ as __nuxt_component_0 } from './nuxt-link-Bq2nhJrM.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/vue/server-renderer/index.mjs';
import { u as useAsyncData, q as queryContent } from './query-cPPbkAJY.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ohash/dist/index.mjs';
import './preview-LyWLH7bs.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/unified/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/remark-parse/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/remark-rehype/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/remark-gfm/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/rehype-raw/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/detab/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/github-slugger/index.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    cpu: {},
    title: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const { data: items } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`facet-${"cpu"}`, async () => {
      const all = await queryContent("/laptops").only(["cpu"]).find();
      const vals = Array.from(new Set(all.map((i) => i["cpu"]).filter(Boolean)));
      vals.sort((a, b) => String(a).localeCompare(String(b), "es"));
      return vals;
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "facet-list" }, _attrs))} data-v-a846328e><h1 data-v-a846328e>${ssrInterpolate(_ctx.title)}</h1><ul data-v-a846328e><!--[-->`);
      ssrRenderList(unref(items), (val) => {
        _push(`<li data-v-a846328e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/cpu/${encodeURIComponent(String(val))}`
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cpu/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a846328e"]]);

export { index as default };
//# sourceMappingURL=index-Co_TSZ1D.mjs.map
