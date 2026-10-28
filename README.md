# 数商桃乡 · 数字媒体赛独立站

这是 2026-10-29 从数字媒体赛线上源码一次性复制的独立网站。

- 代码单独维护；不向原仓库推送、不配置双向同步。
- 平台使用手动部署；后续原站或本站修改均不会自动更新另一份。
- 使用独立数据库与会话密钥；浏览器存储与 Cookie 使用独立名称。
- 环境变量、数据快照和模型密钥不提交仓库。
- 前台 `/`，管理后台 `/admin/`，体验后台 `/demo/admin/`。
- 公开体验账号 `test1` / `123456`。

部署使用仓库内的 Dockerfile，容器端口 8787，健康检查 `/health`。
必须设置 `APP_URL`、`DATABASE_URL`、`SESSION_SECRET`、`DATABASE_IDENTITY_SHA256`、`SITE_INSTANCE_ID`。
`SITE_INSTANCE_ID` 固定为 `digital-media-independent-20261029`。
`DATABASE_IDENTITY_SHA256` 对数据库主机和数据库名的 SHA-256 指纹做校验，防止误接旧站数据库。

启动 `npm start`；验证 `npm test`。
模型接口在平台私有环境变量中独立设置；是否沿用同一个供应商账号不影响站点数据隔离。
