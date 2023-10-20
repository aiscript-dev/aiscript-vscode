import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
            return undefined;
        }

        return [
            createCompletionItemKindMethod('print'),
            createCompletionItemKindMethod('readline'),
        ];
    }
});