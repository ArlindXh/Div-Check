const vscode = require("vscode");

function examineCode() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage("There is No Open Text Editor!");
    return;
  }
  const doc = editor.document;
  const text = doc.getText();
  const openingDiv = /<div/g;
  const closingDiv = /\/div>/g;
  // let singleDiv = /\/>/g;

  let openingDivArray = [];

  openingDivArray.push(...openingDiv.exec(text));
  openingDivArray.push(...closingDiv.exec(text));

  console.log(openingDivArray);
}

module.exports = examineCode;
