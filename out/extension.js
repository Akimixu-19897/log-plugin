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
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    console.log('Congratulations, your extension "log-plugin" is now active!');
    const disposable = vscode.commands.registerCommand("extension.logCompletion", () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const document = editor.document;
        const selection = editor.selection;
        const line = document.lineAt(selection.active.line);
        const lineText = line.text.trim();
        console.log("lineText", lineText);
        if (lineText.endsWith(".log")) {
            const logText = lineText.substring(0, lineText.length - 4).trimStart();
            const logStatement = `console.log("🚀这是${logText}的输出：",${logText});`;
            const indent = line.firstNonWhitespaceCharacterIndex;
            editor.edit((editBuilder) => {
                const newStartCharacter = line.range.start.character + indent;
                const newStart = new vscode.Position(line.range.start.line, newStartCharacter);
                const range = new vscode.Range(newStart, line.range.end);
                editBuilder.replace(range, logStatement);
            });
        }
        else {
            vscode.window.showInformationMessage(`No .log detected at the end of the line.`);
        }
    });
    context.subscriptions.push(disposable);
    context.subscriptions.push(
    // vscode.workspace.onDidChangeTextDocument((event) => {
    //   const editor = vscode.window.activeTextEditor;
    //   if (!editor) {
    //     return;
    //   }
    //   const document = event.document;
    //   const changes = event.contentChanges;
    //   if (changes.length === 1) {
    //     const change = changes[0];
    //     const text = change.text;
    //     console.log(
    //       change,
    //       "text",
    //       text,
    //       text === "\n",
    //       text === "\r\n",
    //       text === "\r"
    //     );
    //     if (text === "\n" || text === "\r\n" || text === "\r") {
    //       const line = document.lineAt(change.range.start.line);
    //       const lineText = line.text.trim();
    //       if (lineText.endsWith(".log")) {
    //         vscode.commands.executeCommand("extension.logCompletion");
    //       }
    //     }
    //   }
    // })
    vscode.workspace.onDidChangeTextDocument((event) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const document = event.document;
        const changes = event.contentChanges;
        for (const change of changes) {
            // 检查是否是插入操作
            if (change.rangeLength === 0 && change.text) {
                // 检查插入的文本是否是新行
                if (change.text.includes("\n") || change.text.includes("\r")) {
                    // 获取当前行的文本
                    const line = document.lineAt(change.range.start.line);
                    const lineText = line.text.trim();
                    // 检查当前行是否以.log结尾
                    if (lineText.endsWith(".log")) {
                        vscode.commands.executeCommand("extension.logCompletion");
                    }
                }
            }
        }
    }));
}
function deactivate() { }
//# sourceMappingURL=extension.js.map