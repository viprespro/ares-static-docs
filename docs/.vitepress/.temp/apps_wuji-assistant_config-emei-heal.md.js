import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"峨眉加血","description":"","frontmatter":{},"headers":[],"relativePath":"apps/wuji-assistant/config-emei-heal.md","filePath":"apps/wuji-assistant/config-emei-heal.md","lastUpdated":null}');
const _sfc_main = { name: "apps/wuji-assistant/config-emei-heal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="峨眉加血" tabindex="-1">峨眉加血 <a class="header-anchor" href="#峨眉加血" aria-label="Permalink to &quot;峨眉加血&quot;">​</a></h1><p>峨眉作为治疗门派，在副本和组队场景中承担加血辅助职责。使用峨眉加血功能，只需在配置预设中选择「我是峨眉」，然后根据实际需要增强配置即可。</p><h2 id="功能概览" tabindex="-1">功能概览 <a class="header-anchor" href="#功能概览" aria-label="Permalink to &quot;功能概览&quot;">​</a></h2><p>峨眉加血功能专为峨眉门派设计，开启后软件会自动识别队友血量并释放治疗技能，确保团队生存能力：</p><ul><li>自动检测队友血量，低血量时优先治疗</li><li>支持配置治疗技能快捷键及释放间隔</li><li>可配合攻击技能，实现边打边加</li></ul><h2 id="配置步骤" tabindex="-1">配置步骤 <a class="header-anchor" href="#配置步骤" aria-label="Permalink to &quot;配置步骤&quot;">​</a></h2><ol><li>在软件主界面，下拉「配置预设」，找到「我是峨眉」，选择后点击「使用」，确定</li><li>进入「脚本设置」页，找到技能按键配置，开启技能按键</li><li>根据提示配置峨眉治疗技能的快捷键（如清心普善咒等）</li><li>根据需要配置攻击技能快捷键及冷却间隔</li><li>回复设置中，根据自身情况勾选及配置对应快捷键</li><li>其他配置根据实际情况调整预设参数</li><li>回到主界面，点击「保存」保存配置，弹框中输入预设名称如<code>峨眉-加血</code>，点击确定保存即可，后续切换时直接选择该预设</li></ol><h3 id="推荐技能设置" tabindex="-1">推荐技能设置 <a class="header-anchor" href="#推荐技能设置" aria-label="Permalink to &quot;推荐技能设置&quot;">​</a></h3><ul><li><strong>治疗技能</strong>：优先配置核心治疗技能（如清心普善咒），冷却间隔建议设置为 1-3s，确保及时加血</li><li><strong>增益技能</strong>：配置峨眉专属增益 BUFF，保持全程覆盖</li><li><strong>攻击技能</strong>：根据需要配置输出技能，冷却间隔可适当放宽，避免影响治疗节奏</li></ul><h2 id="挂机配置项建议" tabindex="-1">挂机配置项建议 <a class="header-anchor" href="#挂机配置项建议" aria-label="Permalink to &quot;挂机配置项建议&quot;">​</a></h2><table tabindex="0"><thead><tr><th>配置项</th><th>推荐值</th><th>说明</th></tr></thead><tbody><tr><td>打怪方式</td><td>打死换怪</td><td>峨眉以治疗为主，稳定输出即可</td></tr><tr><td>攻击对象</td><td>不打玩家</td><td>避免误伤，专注治疗和打怪</td></tr><tr><td>技能按键</td><td>开启</td><td>必须开启才能使用治疗技能</td></tr><tr><td>定点打怪</td><td>可选</td><td>建议开启，避免走位过远脱离队友</td></tr></tbody></table><h2 id="主城内不执行按键-建议配置" tabindex="-1">主城内不执行按键（建议配置） <a class="header-anchor" href="#主城内不执行按键-建议配置" aria-label="Permalink to &quot;主城内不执行按键（建议配置）&quot;">​</a></h2><p>进入主城（如洛阳、苏州、大理）后自动暂停按键，避免误操作，副本或野外后自动恢复。</p><hr><div class="tip custom-block"><p class="custom-block-title">提示</p><p>建议将峨眉加血配置保存为独立预设，方便在不同副本间快速切换。如果队伍中有多个峨眉，可以协调治疗技能的释放节奏，避免重复加血。</p></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>峨眉加血功能需要前台操作支持，请确保游戏窗口处于前台且未被遮挡，否则可能影响技能释放的准确性。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("apps/wuji-assistant/config-emei-heal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const configEmeiHeal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  configEmeiHeal as default
};
