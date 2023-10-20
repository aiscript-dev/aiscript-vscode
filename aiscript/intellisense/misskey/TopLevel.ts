import { languages, CompletionItem, CompletionItemKind } from 'vscode';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
            return undefined;
        }

        return [
            new CompletionItem('USER_ID', CompletionItemKind.Constant),
            new CompletionItem('USER_NAME', CompletionItemKind.Constant),
            new CompletionItem('USER_USERNAME', CompletionItemKind.Constant),
            new CompletionItem('CUSTOM_EMOJIS', CompletionItemKind.Constant),
            new CompletionItem('LOCALE', CompletionItemKind.Constant),
            new CompletionItem('SERVER_URL', CompletionItemKind.Constant),
            new CompletionItem('THIS_URL', CompletionItemKind.Constant),
            new CompletionItem('THIS_ID', CompletionItemKind.Constant),
        ];
    }
});