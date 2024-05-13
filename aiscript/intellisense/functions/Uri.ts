import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Uri:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const UriRoot = new CompletionItem('Uri:');
            UriRoot.kind = CompletionItemKind.Class;
            UriRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [UriRoot];
        }

        return [
            createCompletionItemKindMethod('encode_full'),
            createCompletionItemKindMethod('encode_component'),
            createCompletionItemKindMethod('decode_full'),
            createCompletionItemKindMethod('decode_component'),
        ];
    }
}, ':');