import { _ as __nuxt_component_0 } from './LaptopCard-BtsaRxdU.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { u as useAsyncData, q as queryContent } from './query-cPPbkAJY.mjs';
import './nuxt-link-Bq2nhJrM.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/h3/dist/index.mjs';
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
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/klona/dist/index.mjs';
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
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/ohash/dist/index.mjs';
import './preview-LyWLH7bs.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/ealva/OneDrive/Escritorio/laptops-nuxt/node_modules/nuxt/node_modules/ohash/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[value]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const value = decodeURIComponent(String(route.params.value || ""));
    const { data: docs } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `facet-os-` + value,
      () => queryContent("/laptops").where({ os: value }).find(),
      "$fcYYr9HtrM"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LaptopCard = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "facet-detail" }, _attrs))} data-v-4bdee91e><h1 data-v-4bdee91e>Sistema Operativo: ${ssrInterpolate(unref(value))}</h1><div class="grid" data-v-4bdee91e><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/os/[value].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _value_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4bdee91e"]]);

export { _value_ as default };
//# sourceMappingURL=_value_-BQMf1oI4.mjs.map
