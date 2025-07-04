# DotLog Magic

[![DotLog Magic](https://sfile.chatglm.cn/pic_cache/672adc067c19b2b7e021680c/c559c5.png)](https://sfile.chatglm.cn/pic_cache/672adc067c19b2b7e021680c/c559c5.png)

一个神奇的 Visual Studio Code 插件，让你只需在变量后添加 `.log` 即可瞬间生成 `console.log` 语句，让调试变得简单而高效。

## 🚀 功能特性

- **⚡ 极速生成**：只需在变量后输入 `.log` 并按回车，瞬间生成完整的 console.log 语句
- **🎯 智能识别**：自动识别变量名并生成格式化的日志输出
- **🔥 即时触发**：支持实时监听，输入即转换
- **⌨️ 快捷键支持**：`Ctrl+Shift+L` (Windows/Linux) 或 `Cmd+Shift+L` (Mac) 快速生成
- **📝 格式化输出**：生成带有 🚀 标识和变量描述的日志语句
- **🌈 多语言支持**：完美支持 JavaScript、TypeScript 等语言

## 📦 安装方式

### 方式一：VS Code 扩展市场
1. 打开 VS Code
2. 按 `Ctrl+Shift+X` 打开扩展面板
3. 搜索 `DotLog Magic`
4. 点击安装

### 方式二：命令行安装
```bash
code --install-extension akimixu.dotlog-magic
```

## 🎮 使用方法

### 方法一：自动触发（推荐）
1. 编写代码，例如：`const userName = 'Alice'`
2. 在变量名后输入 `.log`：`userName.log`
3. 按回车键，自动转换为：
   ```javascript
   const userName = 'Alice';
   console.log("🚀这是userName的输出：", userName);
   ```

### 方法二：快捷键触发
1. 将光标放在包含 `.log` 的行上
2. 按 `Ctrl+Shift+L` (Windows/Linux) 或 `Cmd+Shift+L` (Mac)
3. 自动生成对应的 console.log 语句

## 📖 使用示例

### 基础用法
```javascript
// 输入
const apiResponse = await fetch('/api/data')
apiResponse.log

// 自动转换为
const apiResponse = await fetch('/api/data');
console.log("🚀这是apiResponse的输出：", apiResponse);
```

### 复杂表达式
```javascript
// 输入
const result = calculateTotal(items)
result.log

// 自动转换为
const result = calculateTotal(items);
console.log("🚀这是result的输出：", result);
```

## ⚙️ 支持的语言

- ✅ JavaScript (.js)
- ✅ TypeScript (.ts)
- ✅ JSX (.jsx)
- ✅ TSX (.tsx)
- ✅ Vue (.vue)
- ✅ 其他支持 console.log 的语言

## 🛠️ 配置选项

目前插件开箱即用，无需额外配置。未来版本将支持：
- 自定义日志格式
- 自定义触发关键字
- 输出样式配置

## 🤝 贡献指南

欢迎参与项目贡献！

1. Fork 项目
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交更改：`git commit -m 'Add some AmazingFeature'`
4. 推送到分支：`git push origin feature/AmazingFeature`
5. 提交 Pull Request

## 📝 更新日志

### v1.0.1
- 🎉 首次发布
- ✨ 支持 .log 后缀自动转换
- ⌨️ 添加快捷键支持
- 🎨 优化日志输出格式

## 🐛 问题反馈

遇到问题？欢迎反馈！

- [GitHub Issues](https://github.com/Akimixu-19897/log-plugin/issues)
- [功能建议](https://github.com/Akimixu-19897/log-plugin/issues/new?template=feature_request.md)

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证开源。

---

**享受高效的调试体验！** 🎯

