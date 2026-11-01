# Google账号与Gmail注册指南

网站：https://chatgptchongzhi.github.io/googlezhuce/

本项目使用无第三方依赖的 Node.js 静态生成器。文章正文和 SEO 标签直接包含在 HTML 中，不依赖客户端 JavaScript。

## 发布文章

1. 将正文 Markdown 放入 `content/posts/`。
2. 在 `content/index.json` 添加标题、摘要、稳定路径及真实发布/修改日期。
3. 运行 `node build.cjs` 与 `node check.cjs`。
4. 推送 main；GitHub Actions 自动生成首页、标签页、文章和 Sitemap，验证后部署 Pages。

设置 Pages 的 Source 为 GitHub Actions。不要修改已发布文章的路径，除非同时处理迁移。

`robots.txt` 位于项目子路径，只作配置参考；Google 的抓取规则读取域名根目录 `/robots.txt`。本项目文件不会覆盖整个域名规则。

部署成功不等于 Google 已收录。Search Console 应添加本项目 URL 前缀资源并提交 `sitemap.xml`。
