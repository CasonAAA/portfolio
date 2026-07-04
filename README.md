# 个人作品集网站

React + Vite 实现的视觉设计师 / AI 设计师 / 品牌设计师个人作品集基础版本。

## 运行方式

请先安装 Node.js，然后在当前目录运行：

```bash
npm install
npm run dev
```

页面启动后，终端会显示本地预览地址，通常是：

```bash
http://localhost:5173
```

## 后续替换内容

- 联系方式：修改 `src/main.jsx` 中的邮箱、Behance 链接和所在地。
- 个人经历：修改 `about` 模块中的介绍文案和项目数据。
- 作品图片：修改 `projects` 数组中的图片地址、项目名称和项目类型。
- 视频背景：替换首页 `video` 标签中的 `source` 地址。

## GitHub Pages

本项目已配置 GitHub Pages 自动发布。代码推送到 `main` 分支后，GitHub Actions 会自动构建并发布到：

```bash
https://CasonAAA.github.io/portfolio/
```
