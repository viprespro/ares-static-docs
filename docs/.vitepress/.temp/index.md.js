import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"无极助手","text":"游戏辅助工具使用指南","tagline":"感谢您的支持，这里提供详细的使用说明","actions":[{"theme":"brand","text":"查看说明","link":"/apps/wuji-assistant/"}]},"features":[{"icon":"🎮","title":"无极助手","details":"天龙八部游戏辅助工具，支持自动打怪、峨眉加血、定点打怪、死亡回点、刷马贼检测、配置预设等丰富功能","link":"/apps/wuji-assistant/","linkText":"查看说明"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1785234825000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
