# mihomo-config

最简 mihomo 配置 `config.yaml`：TUN 模式（redir-host + 域名嗅探），内网和国内直连，其余走代理。

- DNS：默认系统 DNS，国外域名（geosite:geolocation-!cn）经代理走 1.1.1.1 / 8.8.8.8 DoH
- 分组：节点选择（落地 / 代理，默认落地，兜底规则走这里）、代理、落地、Bybit、香港、日本、韩国、新加坡、美国、其他；落地节点来自单独的落地订阅，以「代理」组为前置（dialer-proxy）
- GEO 数据：官方 meta-rules-dat，jsdelivr 镜像，每天自动更新
- 订阅链接是占位符 `{{机场订阅链接}}`、`{{落地订阅链接}}`，手动替换或用下面的 Sub-Store 脚本替换

## Sub-Store 脚本

`substore-script.js` 加在 Sub-Store 文件上（文件来源填 config.yaml 的链接），通过参数替换订阅占位符：

```
https://raw.githubusercontent.com/rkongzy/mihomo-config/refs/heads/main/substore-script.js#airport_url=机场订阅链接&landing_url=落地订阅链接
```

订阅链接建议用 `target=ClashMeta`；链接里有 `&` 或 `#` 时先做 URL 编码。
