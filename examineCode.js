const vscode = require("vscode");

function examineCode() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage("There is No Open Text Editor!");
    return;
  }
  const doc = editor.document;
  const text = doc.getText();
  let wordArray = text.split(" ");
  console.log(wordArray);
}

module.exports = examineCode;
