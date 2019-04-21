const vscode = require("vscode");
const examineCode = require("./examineCode");
/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  console.log("Activating Extension!");

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "extension.divCheck",
    function() {
      examineCode();
      // vscode.window.showInformationMessage("JOOOOOOO BAAAL!");
    }
  );
  context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
