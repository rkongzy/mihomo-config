# mihomo-config

最简 mihomo 配置 `config.yaml`：TUN 模式（redir-host + 域名嗅探），内网和国内直连，其余走代理。

- DNS：默认系统 DNS，国外域名（geosite:geolocation-!cn）经代理走 1.1.1.1 / 8.8.8.8 DoH
- 分组：代理、落地、Bybit、香港、日本、韩国、新加坡、美国、其他；落地节点来自单独的落地订阅，以「代理」组为前置（dialer-proxy）
- GEO 数据：官方 meta-rules-dat，jsdelivr 镜像，每天自动更新
- 用前把 `proxy-providers` 里机场和落地两个订阅链接换成自己的
