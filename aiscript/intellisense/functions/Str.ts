import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Str:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const StrRoot = new CompletionItem('Str:');
            StrRoot.kind = CompletionItemKind.Class;
            StrRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [StrRoot];
        }

        return [
            new CompletionItem('lf', CompletionItemKind.Constant),

            createCompletionItemKindMethod('lt'),
            createCompletionItemKindMethod('gt'),
            createCompletionItemKindMethod('from_codepoint'),
        ];
    }
}, ':');