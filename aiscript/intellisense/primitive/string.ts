import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/(?='|"|`)('|"|`)\.$/).test(linePrefix)) {
            return undefined;
        }

        return [
            new CompletionItem('len', CompletionItemKind.Variable),
            
            createCompletionItemKindMethod('to_num'),
            createCompletionItemKindMethod('pick'),
            createCompletionItemKindMethod('incl'),
            createCompletionItemKindMethod('slice'),
            createCompletionItemKindMethod('split'),
            createCompletionItemKindMethod('replace'),
            createCompletionItemKindMethod('index_of'),
            createCompletionItemKindMethod('trim'),
            createCompletionItemKindMethod('upper'),
            createCompletionItemKindMethod('lower'),
            createCompletionItemKindMethod('codepoint_at'),
            createCompletionItemKindMethod('charcode_at'),
            createCompletionItemKindMethod('to_arr'),
            createCompletionItemKindMethod('to_unicode_arr'),
            createCompletionItemKindMethod('to_unicode_codepoint_arr'),
            createCompletionItemKindMethod('to_char_arr'),
            createCompletionItemKindMethod('to_charcode_arr'),
            createCompletionItemKindMethod('to_utf8_byte_arr'),
            createCompletionItemKindMethod('pad_start'),
            createCompletionItemKindMethod('pad_end'),
            createCompletionItemKindMethod('starts_with'),
            createCompletionItemKindMethod('ends_with'),
        ];
    }
}, '.');