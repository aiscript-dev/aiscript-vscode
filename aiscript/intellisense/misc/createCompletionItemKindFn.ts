import { CompletionItem, CompletionItemKind } from "vscode";

export function createCompletionItemKindMethod(label: string, defaultVal?: string) {
    const c = new CompletionItem(label, CompletionItemKind.Method);
    c.insertText = defaultVal ?? `${label}()`;
    return c;
}