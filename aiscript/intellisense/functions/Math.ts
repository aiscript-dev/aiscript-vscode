import { languages, CompletionItem, CompletionItemKind } from 'vscode';
import { createCompletionItemKindMethod } from '../misc/createCompletionItemKindFn';

export default languages.registerCompletionItemProvider('aiscript', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.slice(0, position.character);
        if (!(/Math:$/).test(linePrefix)) {
            if (/(:|\.)[^)\s]*$/.test(linePrefix)) {
                return undefined;
            }
    
            const MathRoot = new CompletionItem('Math:');
            MathRoot.kind = CompletionItemKind.Class;
            MathRoot.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            return [MathRoot];
        }

        return [
            new CompletionItem('Infinity', CompletionItemKind.Constant),
            new CompletionItem('E', CompletionItemKind.Constant),
            new CompletionItem('LN2', CompletionItemKind.Constant),
            new CompletionItem('LN10', CompletionItemKind.Constant),
            new CompletionItem('LOG2E', CompletionItemKind.Constant),
            new CompletionItem('LOG10E', CompletionItemKind.Constant),
            new CompletionItem('PI', CompletionItemKind.Constant),
            new CompletionItem('SQRT1_2', CompletionItemKind.Constant),
            new CompletionItem('SQRT2', CompletionItemKind.Constant),

            createCompletionItemKindMethod('abs'),
            createCompletionItemKindMethod('sign'),
            createCompletionItemKindMethod('round'),
            createCompletionItemKindMethod('ceil'),
            createCompletionItemKindMethod('floor'),
            createCompletionItemKindMethod('trunc'),
            createCompletionItemKindMethod('min'),
            createCompletionItemKindMethod('max'),
            createCompletionItemKindMethod('sqrt'),
            createCompletionItemKindMethod('cbrt'),
            createCompletionItemKindMethod('hypot'),

            createCompletionItemKindMethod('sin'),
            createCompletionItemKindMethod('cos'),
            createCompletionItemKindMethod('tan'),
            createCompletionItemKindMethod('asin'),
            createCompletionItemKindMethod('acos'),
            createCompletionItemKindMethod('atan'),
            createCompletionItemKindMethod('atan2'),

            createCompletionItemKindMethod('sinh'),
            createCompletionItemKindMethod('cosh'),
            createCompletionItemKindMethod('tanh'),
            createCompletionItemKindMethod('asinh'),
            createCompletionItemKindMethod('acosh'),
            createCompletionItemKindMethod('atanh'),

            createCompletionItemKindMethod('pow'),
            createCompletionItemKindMethod('exp'),
            createCompletionItemKindMethod('expm1'),
            createCompletionItemKindMethod('log'),
            createCompletionItemKindMethod('log1p'),
            createCompletionItemKindMethod('log10'),
            createCompletionItemKindMethod('log2'),

            createCompletionItemKindMethod('rnd'),
            createCompletionItemKindMethod('gen_rng'),

            createCompletionItemKindMethod('clz32'),
            createCompletionItemKindMethod('fround'),
            createCompletionItemKindMethod('imul'),
        ];
    }
}, ':');