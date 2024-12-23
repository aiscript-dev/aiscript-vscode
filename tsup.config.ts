import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'aiscript/intellisense/extension.ts',
        'aiscript/intellisense/server/index.ts',
    ],
    format: 'cjs',
    minify: true,
    clean: true,
    bundle: true,
    external: ['vscode'],
});
