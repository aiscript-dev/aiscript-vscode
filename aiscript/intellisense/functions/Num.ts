import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Num:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const NumRoot = new CompletionItem('Num:');
            NumRoot.kind = CompletionItemKind.Class;
            NumRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [NumRoot];
        }

        return [
            createCompletionItemKindMethod('to_hex'),
            createCompletionItemKindMethod('from_hex'),
        ];
    }
}, ':');