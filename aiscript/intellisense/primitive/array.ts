import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/\]\.$/).test(linePrefix)) {
            return undefined;
        }

        return [
            new CompletionItem('len', CompletionItemKind.Variable),
            
            createCompletionItemKindMethod('push'),
            createCompletionItemKindMethod('unshift'),
            createCompletionItemKindMethod('pop'),
            createCompletionItemKindMethod('shift'),
            createCompletionItemKindMethod('concat'),
            createCompletionItemKindMethod('join'),
            createCompletionItemKindMethod('slice'),
            createCompletionItemKindMethod('incl'),
            createCompletionItemKindMethod('map'),
            createCompletionItemKindMethod('reduce'),
            createCompletionItemKindMethod('find'),
            createCompletionItemKindMethod('reverse'),
            createCompletionItemKindMethod('copy'),
            createCompletionItemKindMethod('sort'),
            createCompletionItemKindMethod('fill'),
            createCompletionItemKindMethod('repeat'),
        ];
    }
}, '.');