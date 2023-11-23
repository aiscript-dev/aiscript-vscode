import * as vscode from "vscode";

import { LanguageClient, TransportKind } from "vscode-languageclient/node";

import string from "./primitive/string";
import array from "./primitive/array";
import number from "./primitive/number";
import AisTopLevel from "./functions/TopLevel";
import AisCore from "./functions/Core";
import AisUtil from "./functions/Util";
import AisDate from "./functions/Date";
import AisMath from "./functions/Math";
import AisNum from "./functions/Num";
import AisStr from "./functions/Str";
import AisObj from "./functions/Obj";
import AisError from "./functions/Error";
import AisAsync from "./functions/Async";
import MiTopLevel from "./misskey/TopLevel";
import MiMk from "./misskey/Mk";
import MiUi from "./misskey/Ui";
import MiComponents from "./misskey/Components";
import MiPlugin from "./misskey/Plugin";

export function activate(context: vscode.ExtensionContext) {
  const providers: vscode.Disposable[] = [
    // Primitive
    number,
    string,
    array,

    // Functions
    AisTopLevel,
    AisCore,
    AisUtil,
    AisDate,
    AisMath,
    AisNum,
    AisStr,
    AisObj,
    AisError,
    AisAsync,

    // Misskey
    MiTopLevel,
    MiMk,
    MiUi,
    MiComponents,
    MiPlugin,
  ];

  const client = new LanguageClient(
    "aiscript",
    {
      module: context.asAbsolutePath("./dist/server/index.js"),
      transport: TransportKind.stdio,
    },
    {
      documentSelector: [{ language: "aiscript" }],
    }
  );

  client.start();

  context.subscriptions.push(...providers);
}
