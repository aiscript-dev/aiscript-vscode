import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Core:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const CoreRoot = new CompletionItem('Core:');
            CoreRoot.kind = CompletionItemKind.Class;
            CoreRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [CoreRoot];
        }

        return [
            new CompletionItem('v', CompletionItemKind.Constant),
            
            createCompletionItemKindMethod('type'),
            createCompletionItemKindMethod('to_str'),
            createCompletionItemKindMethod('sleep'),
        ];
    }
}, ':');