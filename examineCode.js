const vscode = require("vscode");

function examineCode() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage("There is No Open Text Editor!");
    return;
  }
  const doc = editor.document;
  const text = doc.getText();
  const fullText = text.split("\n");
  const openingDiv = /<div/;
  const closingDiv = /\/div>/;

  let divCount = 0;

  for (let word of fullText) {
    if (openingDiv.test(word) == true) {
      divCount++;
    }
    if (closingDiv.test(word) == true) {
      divCount++;
    }
  }
  let checkDiv = divCount % 2 === 0 ? true : false;
  checkDiv === false
    ? vscode.window.showInformationMessage("You have unclosed divs")
    : null;

  // TODO : checking divs is now working, gotta add support for end-line closing divs (<div />)
}

module.exports = examineCode;
