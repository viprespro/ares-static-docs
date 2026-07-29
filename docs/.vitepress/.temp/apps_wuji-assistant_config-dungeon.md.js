import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"副本打怪","description":"","frontmatter":{},"headers":[],"relativePath":"apps/wuji-assistant/config-dungeon.md","filePath":"apps/wuji-assistant/config-dungeon.md","lastUpdated":1785234825000}');
const _sfc_main = { name: "apps/wuji-assistant/config-dungeon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="副本打怪" tabindex="-1">副本打怪 <a class="header-anchor" href="#副本打怪" aria-label="Permalink to &quot;副本打怪&quot;">​</a></h1><p>副本打怪场景下，建议基于已存在的预设打死换怪-仅平推的情况下配置下新增一个新的预设 eg. 副本-逍遥。</p><h2 id="攻击模式" tabindex="-1">攻击模式 <a class="header-anchor" href="#攻击模式" aria-label="Permalink to &quot;攻击模式&quot;">​</a></h2><table tabindex="0"><thead><tr><th>攻击模式</th><th>适用场景</th><th>说明</th></tr></thead><tbody><tr><td>抢怪模式</td><td>小怪密集的副本</td><td>快速扫描攻击范围内所有怪物</td></tr><tr><td>打死换怪</td><td>BOSS 战副本</td><td>集中输出当前目标，避免频繁切怪</td></tr></tbody></table><h2 id="配置步骤" tabindex="-1">配置步骤 <a class="header-anchor" href="#配置步骤" aria-label="Permalink to &quot;配置步骤&quot;">​</a></h2><ol><li>在软件主界面，下拉配置预设，找到<code>打死换怪-仅平推</code>，选择后，点击使用，确定</li><li>进入「脚本设置」页，找到技能按键配置，选择是开启技能按键，根据提示配置对应门派的按键快捷键即可</li><li>回复设置，根据自身情况设置勾选及配置对应的快捷键</li><li>其他配置则根据实际情况调整预设参数即可，回到主界面，点击「保存」保存配置，弹框中输入预设名称比如<code>副本-逍遥</code>，点击确定保存即可，后续切换时可以直接选择<code>副本-逍遥</code>即可</li></ol><h3 id="推荐技能设置" tabindex="-1">推荐技能设置 <a class="header-anchor" href="#推荐技能设置" aria-label="Permalink to &quot;推荐技能设置&quot;">​</a></h3><ul><li><strong>攻击技能</strong>：优先配置核心输出技能，设置合适的冷却间隔，冷却时间建议1-10s左右即可 需要频繁触发就1s左右即可</li></ul><h2 id="主城内不执行按键-建议配置" tabindex="-1">主城内不执行按键（建议配置） <a class="header-anchor" href="#主城内不执行按键-建议配置" aria-label="Permalink to &quot;主城内不执行按键（建议配置）&quot;">​</a></h2><p>进入主城（如洛阳、苏州、大理）后自动暂停按键，避免误操作，副本或野外后自动恢复。</p><h2 id="挂机配置项" tabindex="-1">挂机配置项 <a class="header-anchor" href="#挂机配置项" aria-label="Permalink to &quot;挂机配置项&quot;">​</a></h2><p>副本打怪态下，不需要进行其他多余的状态检测，减少资源占用，提升效率。</p><hr><div class="warning custom-block"><p class="custom-block-title">注意</p><p>不同副本的怪物分布和地形差异较大，建议为常用副本分别创建配置预设，方便快速切换。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("apps/wuji-assistant/config-dungeon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const configDungeon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  configDungeon as default
};
