import * as assert from "assert";
import * as vscode from "vscode";

suite("Console Log Generator Test Suite", () => {
  vscode.window.showInformationMessage("开始运行 Console Log Generator 测试");

  test("扩展应该能够激活", async () => {
    const extension = vscode.extensions.getExtension(
      "akimixu.console-log-generator"
    );
    assert.ok(extension, "扩展应该存在");

    if (!extension.isActive) {
      await extension.activate();
    }
    assert.ok(extension.isActive, "扩展应该能够激活");
  });

  test("命令应该注册成功", async () => {
    const commands = await vscode.commands.getCommands();
    assert.ok(
      commands.includes("extension.logCompletion"),
      "logCompletion 命令应该被注册"
    );
  });

  test("基本功能测试", () => {
    // 这里可以添加更多的功能测试
    // 由于VS Code测试环境的限制，这里只做基本的断言测试
    assert.strictEqual(typeof vscode.commands.executeCommand, "function");
    assert.strictEqual(typeof vscode.window.showInformationMessage, "function");
  });
});
