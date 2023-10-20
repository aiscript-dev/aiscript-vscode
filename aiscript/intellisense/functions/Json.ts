import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Json:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const JsonRoot = new CompletionItem('Json:');
            JsonRoot.kind = CompletionItemKind.Class;
            JsonRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [JsonRoot];
        }

        return [
            createCompletionItemKindMethod('stringify'),
            createCompletionItemKindMethod('parse'),
            createCompletionItemKindMethod('parsable'),
        ];
    }
}, ':');