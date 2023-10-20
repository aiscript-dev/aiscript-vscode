import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Obj:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const ObjRoot = new CompletionItem('Obj:');
            ObjRoot.kind = CompletionItemKind.Class;
            ObjRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [ObjRoot];
        }

        return [
            createCompletionItemKindMethod('keys'),
            createCompletionItemKindMethod('vals'),
            createCompletionItemKindMethod('kvs'),
            createCompletionItemKindMethod('get'),
            createCompletionItemKindMethod('set'),
            createCompletionItemKindMethod('has'),
            createCompletionItemKindMethod('copy'),
            createCompletionItemKindMethod('merge'),
        ];
    }
}, ':');