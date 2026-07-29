import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"设置说明","description":"","frontmatter":{},"headers":[],"relativePath":"apps/wuji-assistant/settings.md","filePath":"apps/wuji-assistant/settings.md","lastUpdated":1781451218000}');
const _sfc_main = { name: "apps/wuji-assistant/settings.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="设置说明" tabindex="-1">设置说明 <a class="header-anchor" href="#设置说明" aria-label="Permalink to &quot;设置说明&quot;">​</a></h1><p>通过设置中心，您可以根据个人需求定制无极助手的行为。</p><h2 id="打开设置" tabindex="-1">打开设置 <a class="header-anchor" href="#打开设置" aria-label="Permalink to &quot;打开设置&quot;">​</a></h2><p>点击主界面右上角的&quot;设置&quot;按钮，或使用快捷键 <code>Ctrl + ,</code> 打开设置面板。</p><h2 id="基础设置" tabindex="-1">基础设置 <a class="header-anchor" href="#基础设置" aria-label="Permalink to &quot;基础设置&quot;">​</a></h2><h3 id="外观设置" tabindex="-1">外观设置 <a class="header-anchor" href="#外观设置" aria-label="Permalink to &quot;外观设置&quot;">​</a></h3><ul><li><strong>主题模式</strong>：选择浅色或深色主题</li><li><strong>界面语言</strong>：支持中文、英文等</li><li><strong>字体大小</strong>：调整界面字体大小</li></ul><h3 id="存储设置" tabindex="-1">存储设置 <a class="header-anchor" href="#存储设置" aria-label="Permalink to &quot;存储设置&quot;">​</a></h3><ul><li><strong>数据存储路径</strong>：设置数据文件的保存位置</li><li><strong>自动备份</strong>：开启/关闭自动备份功能</li><li><strong>备份间隔</strong>：设置自动备份的时间间隔</li></ul><h3 id="性能设置" tabindex="-1">性能设置 <a class="header-anchor" href="#性能设置" aria-label="Permalink to &quot;性能设置&quot;">​</a></h3><ul><li><strong>启动选项</strong>：设置是否开机自启动</li><li><strong>内存优化</strong>：调整内存使用策略</li><li><strong>缓存管理</strong>：清理或管理应用缓存</li></ul><h2 id="高级设置" tabindex="-1">高级设置 <a class="header-anchor" href="#高级设置" aria-label="Permalink to &quot;高级设置&quot;">​</a></h2><h3 id="网络设置" tabindex="-1">网络设置 <a class="header-anchor" href="#网络设置" aria-label="Permalink to &quot;网络设置&quot;">​</a></h3><ul><li><strong>代理配置</strong>：如需使用代理，在此配置</li><li><strong>连接超时</strong>：设置网络请求超时时间</li></ul><h3 id="日志设置" tabindex="-1">日志设置 <a class="header-anchor" href="#日志设置" aria-label="Permalink to &quot;日志设置&quot;">​</a></h3><ul><li><strong>日志级别</strong>：选择记录的日志详细程度</li><li><strong>日志路径</strong>：设置日志文件保存位置</li></ul><h3 id="快捷键设置" tabindex="-1">快捷键设置 <a class="header-anchor" href="#快捷键设置" aria-label="Permalink to &quot;快捷键设置&quot;">​</a></h3><p>您可以自定义各个功能的快捷键：</p><ol><li>进入&quot;快捷键设置&quot;页面</li><li>点击要修改的功能</li><li>按下新的快捷键组合</li><li>点击&quot;保存&quot;</li></ol><h2 id="数据管理" tabindex="-1">数据管理 <a class="header-anchor" href="#数据管理" aria-label="Permalink to &quot;数据管理&quot;">​</a></h2><h3 id="导出数据" tabindex="-1">导出数据 <a class="header-anchor" href="#导出数据" aria-label="Permalink to &quot;导出数据&quot;">​</a></h3><p>可以将应用数据导出为文件，便于备份或迁移。</p><h3 id="导入数据" tabindex="-1">导入数据 <a class="header-anchor" href="#导入数据" aria-label="Permalink to &quot;导入数据&quot;">​</a></h3><p>从备份文件中恢复数据。</p><h3 id="重置设置" tabindex="-1">重置设置 <a class="header-anchor" href="#重置设置" aria-label="Permalink to &quot;重置设置&quot;">​</a></h3><p>将所有设置恢复为默认值。</p><div class="danger custom-block"><p class="custom-block-title">警告</p><p>重置设置将清除所有自定义配置，此操作不可撤销！</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("apps/wuji-assistant/settings.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const settings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  settings as default
};
