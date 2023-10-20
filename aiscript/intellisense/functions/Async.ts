import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Async:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const AsyncRoot = new CompletionItem('Async:');
            AsyncRoot.kind = CompletionItemKind.Class;
            AsyncRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [AsyncRoot];
        }

        return [
            createCompletionItemKindMethod('interval'),
            createCompletionItemKindMethod('timeout'),
        ];
    }
}, ':');