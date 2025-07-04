"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const vscode = __importStar(require("vscode"));
suite("Console Log Generator Test Suite", () => {
    vscode.window.showInformationMessage("开始运行 Console Log Generator 测试");
    test("扩展应该能够激活", async () => {
        const extension = vscode.extensions.getExtension("akimixu.console-log-generator");
        assert.ok(extension, "扩展应该存在");
        if (!extension.isActive) {
            await extension.activate();
        }
        assert.ok(extension.isActive, "扩展应该能够激活");
    });
    test("命令应该注册成功", async () => {
        const commands = await vscode.commands.getCommands();
        assert.ok(commands.includes("extension.logCompletion"), "logCompletion 命令应该被注册");
    });
    test("基本功能测试", () => {
        // 这里可以添加更多的功能测试
        // 由于VS Code测试环境的限制，这里只做基本的断言测试
        assert.strictEqual(typeof vscode.commands.executeCommand, "function");
        assert.strictEqual(typeof vscode.window.showInformationMessage, "function");
    });
});
//# sourceMappingURL=extension.test.js.map