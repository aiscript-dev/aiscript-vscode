import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Date:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const DateRoot = new CompletionItem('Date:');
            DateRoot.kind = CompletionItemKind.Class;
            DateRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [DateRoot];
        }

        return [
            createCompletionItemKindMethod('now'),
            createCompletionItemKindMethod('year'),
            createCompletionItemKindMethod('month'),
            createCompletionItemKindMethod('day'),
            createCompletionItemKindMethod('hour'),
            createCompletionItemKindMethod('minute'),
            createCompletionItemKindMethod('second'),
            createCompletionItemKindMethod('millisecond'),
            createCompletionItemKindMethod('parse'),
            createCompletionItemKindMethod('to_iso_str'),
        ];
    }
}, ':');
