// Sub-Store 文件脚本：把 config.yaml 里的订阅链接占位符换成真实链接
// 用法：Sub-Store 文件来源填 config.yaml 的链接，脚本操作填本脚本链接并带参数
//   airport_url  机场订阅链接，替换 {{机场订阅链接}}
//   landing_url  落地订阅链接，替换 {{落地订阅链接}}
// 链接里有 & 或 # 时先做 URL 编码
const ARGS = typeof $arguments === 'object' && $arguments ? $arguments : {};
const dec = v => { try { return decodeURIComponent(v); } catch (e) { return v; } };
const map = {
  '{{机场订阅链接}}': ARGS.airport_url,
  '{{落地订阅链接}}': ARGS.landing_url,
};
let text = $content;
for (const [key, val] of Object.entries(map)) {
  if (!text.includes(key)) continue;
  if (!val) throw new Error(`缺少参数，无法替换 ${key}`);
  text = text.replaceAll(key, dec(val).replace(/"/g, '%22'));
}
$content = text;
