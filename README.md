# log-plugin 插件

[![Log Generator Logo](https://sfile.chatglm.cn/pic_cache/672adc067c19b2b7e021680c/c559c5.png)](https://sfile.chatglm.cn/pic_cache/672adc067c19b2b7e021680c/c559c5.png)

这是一个用于生成变量 `console.log` 的 Visual Studio Code 插件。

## 功能特性

- **自动生成 `console.log`**：快速为代码中的变量生成调试语句。
- **即时反馈**：在输入 `.log` 后按回车键，立即得到 `console.log`。
- **智能忽略**：不会重复生成已存在的 `console.log` 语句。
- **易于使用**：通过简单的快捷方式即可生成日志语句。

## 安装

在 Visual Studio Code 扩展市场中搜索 `Log Generator` 并安装。

## 使用方法

1. 打开 JavaScript 或 TypeScript 文件。
2. 输入变量，例如 `let myVariable = 'test';`。
3. 在变量后输入 `.log` 后，按下回车键或者crtl+alt+h。
4. 插件将自动添加 `console.log(myVariable);`。

## 配置

- 目前无需配置，插件默认适用于所有 JavaScript 和 TypeScript 文件。

## 贡献指南

欢迎贡献和建议！请通过以下方式参与：

- 在 GitHub 上提交 [Issue](https://github.com/Akimixu-19897/log-plugin/issues)。
- 发起 [Pull Request](https://github.com/Akimixu-19897/log-plugin)。

## 许可证

本项目使用 MIT 许可证 - 请查看 [LICENSE](LICENSE) 文件了解详细信息。

---

