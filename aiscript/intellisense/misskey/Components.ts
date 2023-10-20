import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Ui:(C:)?[^)\s]*$/).test(linePrefix)) {
            return undefined;
        }
        
        if ((/Ui:$/).test(linePrefix)) {
            const ComponentsRoot = new CompletionItem('C:');
            ComponentsRoot.kind = CompletionItemKind.Class;
            ComponentsRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [ComponentsRoot];
        }

        return [
            createCompletionItemKindMethod('container'),
            createCompletionItemKindMethod('text'),
            createCompletionItemKindMethod('mfm'),
            createCompletionItemKindMethod('textarea'),
            createCompletionItemKindMethod('textInput'),
            createCompletionItemKindMethod('numberInput'),
            createCompletionItemKindMethod('button'),
            createCompletionItemKindMethod('buttons'),
            createCompletionItemKindMethod('switch'),
            createCompletionItemKindMethod('select'),
            createCompletionItemKindMethod('folder'),
            createCompletionItemKindMethod('postFormButton'),
            createCompletionItemKindMethod('postForm'),
        ];
    }
}, ':');