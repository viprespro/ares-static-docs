import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"刷马贼","description":"","frontmatter":{},"headers":[],"relativePath":"apps/wuji-assistant/config-horse.md","filePath":"apps/wuji-assistant/config-horse.md","lastUpdated":1785234825000}');
const _sfc_main = { name: "apps/wuji-assistant/config-horse.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="刷马贼" tabindex="-1">刷马贼 <a class="header-anchor" href="#刷马贼" aria-label="Permalink to &quot;刷马贼&quot;">​</a></h1><p>刷马贼功能专为野外刷马场景，队长拉跟随，自动识别马贼并攻击，玩家基本无需操作。</p><h2 id="功能概览" tabindex="-1">功能概览 <a class="header-anchor" href="#功能概览" aria-label="Permalink to &quot;功能概览&quot;">​</a></h2><p>刷马贼功能集成在「挂机设置」→「刷马贼检测」面板中，启用后可实现：</p><ul><li>自动同意邀请，勾选时自动接受组队邀请</li><li>不当队长，勾选时自动将队长移交给第二个队友</li><li>没队伍自动回苏州</li><li>验证码弹窗报警</li></ul><h2 id="验证码报警" tabindex="-1">验证码报警 <a class="header-anchor" href="#验证码报警" aria-label="Permalink to &quot;验证码报警&quot;">​</a></h2><p>刷马贼过程中弹窗验证码是常见问题，建议开启验证码报警：</p><ul><li>检测到验证码时，软件将持续播放报警音</li><li>验证码消失后报警自动停止</li><li>可先点击「测试」按钮试听报警音，确认音量合适</li><li>听到报警后及时手动完成验证码，避免进监狱</li></ul><h2 id="截图保存马贼" tabindex="-1">截图保存马贼 <a class="header-anchor" href="#截图保存马贼" aria-label="Permalink to &quot;截图保存马贼&quot;">​</a></h2><p>刷马贼的关键在于让软件准确识别马贼，需要通过截图保存马贼特征：</p><ol><li>在游戏中遇到马贼时，选中该马贼</li><li>点击软件上的「截图」按钮，保存马贼特征图片</li><li>截图后点击「管理」按钮，可在管理面板中看到刚截图的马贼图片，确认保存成功</li><li>后续软件将针对已保存的图片自动识别并优先攻击马贼</li></ol><h2 id="刷马贼推荐配置" tabindex="-1">刷马贼推荐配置 <a class="header-anchor" href="#刷马贼推荐配置" aria-label="Permalink to &quot;刷马贼推荐配置&quot;">​</a></h2><h3 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h3><table tabindex="0"><thead><tr><th>配置项</th><th>推荐值</th><th>说明</th></tr></thead><tbody><tr><td>打怪方式</td><td>打死换怪</td><td>必须</td></tr><tr><td>攻击对象</td><td>打特定怪</td><td>需要截图马贼图片（仅一次）</td></tr><tr><td>验证码报警</td><td>开启</td><td>弹窗验证码及时提醒</td></tr><tr><td>自动同意邀请</td><td>可选</td><td>自动同意他人邀请</td></tr><tr><td>不当队长自动移交</td><td>可选</td><td>避免带队责任</td></tr><tr><td>无队伍自动回苏州</td><td>可选</td><td>无人时回城等待</td></tr></tbody></table><h3 id="技能配置" tabindex="-1">技能配置 <a class="header-anchor" href="#技能配置" aria-label="Permalink to &quot;技能配置&quot;">​</a></h3><p>刷马贼建议使用高爆发技能配置，确保快速击杀：</p><ul><li>攻击技能冷却设置较小的间隔</li><li>增益技能全程保持</li><li>回复技能按需开启</li></ul><hr><div class="warning custom-block"><p class="custom-block-title">注意</p><p>建议提前确认游戏窗口为标准尺寸（1024x768），避免点击位置偏移。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("apps/wuji-assistant/config-horse.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const configHorse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  configHorse as default
};
