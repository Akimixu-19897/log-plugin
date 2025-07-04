import * as vscode from "vscode";

/**
 * 生成console.log语句
 * @param variableName 变量名
 * @returns 格式化的console.log语句
 */
function generateConsoleLog(variableName: string): string {
  return `console.log("🚀这是${variableName}的输出：", ${variableName});`;
}

/**
 * 处理.log转换的核心逻辑
 * @param editor 当前编辑器
 */
function handleLogCompletion(editor: vscode.TextEditor): void {
  const document = editor.document;
  const selection = editor.selection;
  const line = document.lineAt(selection.active.line);
  const lineText = line.text.trim();

  if (!lineText.endsWith(".log")) {
    vscode.window.showInformationMessage("当前行未以 .log 结尾");
    return;
  }

  // 提取变量名（去掉.log后缀）
  const variableName = lineText.substring(0, lineText.length - 4).trim();

  if (!variableName) {
    vscode.window.showInformationMessage("无法识别变量名");
    return;
  }

  // 生成console.log语句
  const logStatement = generateConsoleLog(variableName);
  const indent = line.firstNonWhitespaceCharacterIndex;

  // 替换当前行内容
  editor.edit((editBuilder) => {
    const startPosition = new vscode.Position(
      line.range.start.line,
      line.range.start.character + indent
    );
    const range = new vscode.Range(startPosition, line.range.end);
    editBuilder.replace(range, logStatement);
  });
}

/**
 * 检查文档变化并自动触发.log转换
 * @param event 文档变化事件
 */
function handleDocumentChange(event: vscode.TextDocumentChangeEvent): void {
  const editor = vscode.window.activeTextEditor;
  if (!editor || event.document !== editor.document) {
    return;
  }

  // 检查是否有新行输入
  for (const change of event.contentChanges) {
    if (
      change.rangeLength === 0 &&
      change.text &&
      (change.text.includes("\n") || change.text.includes("\r"))
    ) {
      const line = event.document.lineAt(change.range.start.line);
      const lineText = line.text.trim();

      if (lineText.endsWith(".log")) {
        vscode.commands.executeCommand("extension.logCompletion");
        break;
      }
    }
  }
}

export function activate(context: vscode.ExtensionContext) {
  console.log("Console Log Generator 扩展已激活");

  // 注册命令
  const logCompletionCommand = vscode.commands.registerCommand(
    "extension.logCompletion",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage("请先打开一个文件");
        return;
      }
      handleLogCompletion(editor);
    }
  );

  // 注册文档变化监听器
  const documentChangeListener =
    vscode.workspace.onDidChangeTextDocument(handleDocumentChange);

  // 添加到订阅列表
  context.subscriptions.push(logCompletionCommand, documentChangeListener);
}

export function deactivate() {
  console.log("Console Log Generator 扩展已停用");
}
