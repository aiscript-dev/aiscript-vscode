import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Plugin:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const PluginRoot = new CompletionItem('Plugin:');
            PluginRoot.kind = CompletionItemKind.Class;
            PluginRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [PluginRoot];
        }

        return [
            new CompletionItem('config', CompletionItemKind.Constant),

            createCompletionItemKindMethod('register_post_form_action'),
            createCompletionItemKindMethod('register_user_action'),
            createCompletionItemKindMethod('register_note_action'),
            createCompletionItemKindMethod('register_note_view_interruptor'),
            createCompletionItemKindMethod('register_note_post_interruptor'),
            createCompletionItemKindMethod('register_page_view_interruptor'),
            createCompletionItemKindMethod('open_url'),
        ];
    }
}, ':');