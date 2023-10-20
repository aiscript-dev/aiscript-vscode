import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Error:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const ErrorRoot = new CompletionItem('Error:');
            ErrorRoot.kind = CompletionItemKind.Class;
            ErrorRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [ErrorRoot];
        }

        return [
            createCompletionItemKindMethod('create'),
        ];
    }
}, ':');