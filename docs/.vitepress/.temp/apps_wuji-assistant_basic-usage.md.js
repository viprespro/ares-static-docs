import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/noChat.CiHsbBjG.jpg";
const _imports_1 = "/assets/autoTarget.DPwoizDx.jpg";
const __pageData = JSON.parse('{"title":"基础使用","description":"","frontmatter":{},"headers":[],"relativePath":"apps/wuji-assistant/basic-usage.md","filePath":"apps/wuji-assistant/basic-usage.md","lastUpdated":1784479412000}');
const _sfc_main = { name: "apps/wuji-assistant/basic-usage.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h1><p>本章节介绍无极助手的基本使用方法。</p><h2 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h2><p>使用软件前，请先完成以下基础配置：</p><h3 id="游戏设置" tabindex="-1">游戏设置 <a class="header-anchor" href="#游戏设置" aria-label="Permalink to &quot;游戏设置&quot;">​</a></h3><ol><li><p><strong>游戏设置非聊模式</strong></p><ul><li><code>esc</code>进入系统选项 -&gt; 游戏性设置 -&gt; 勾选非聊天模式 -&gt; 确定</li></ul><p><img${ssrRenderAttr("src", _imports_0)} alt="非聊天模式设置"></p></li><li><p><strong>自定义快捷键-自动选择目标</strong></p><ul><li><code>esc</code>进入系统选项 -&gt; 自定义快捷键 -&gt; 自动选择目标, 设置为F2，熟悉软件后可灵活调节</li></ul><p><img${ssrRenderAttr("src", _imports_1)} alt="自动选择目标设置"></p></li><li><p><strong>检查游戏快捷键F1是否为门派普通攻击</strong></p><ul><li>例如：星宿的普通攻击为蓝砂手</li></ul></li></ol><h3 id="脚本设置" tabindex="-1">脚本设置 <a class="header-anchor" href="#脚本设置" aria-label="Permalink to &quot;脚本设置&quot;">​</a></h3><ol><li>预设配置选中打死换怪-仅平推，点击使用。</li><li>绑定游戏窗口， 绑定步骤见下</li></ol><p><strong>方式一：</strong>（推荐）</p><ol><li>长按主界面的红色&quot;准星图标&quot;不松开</li><li>将图标拖动到游戏窗口上</li><li>松开鼠标</li><li>软件会自动识别并绑定</li><li>状态栏显示&quot;已绑定窗口：《天龙八部》 xxx&quot;表示成功</li></ol><p><strong>方式二：</strong></p><ol><li>主界面存在一键绑定按钮，直接点击即可绑定</li><li>注意，这种方式适合只有一个游戏窗口的情况，实现快速绑定。</li></ol><p><strong>至此，设置完成，可以走到怪物附近，运行软件就可以进行最基础的打死换怪了。</strong></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("apps/wuji-assistant/basic-usage.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const basicUsage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  basicUsage as default
};
