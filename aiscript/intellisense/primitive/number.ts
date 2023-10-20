import { languages } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/[0-9]\.$/).test(linePrefix)) {
            return undefined;
        }

        return [
            createCompletionItemKindMethod('to_str'),
        ];
    }
}, '.');