# AiScript Highlighting VSCode Extension (Experimental)

[日本語](https://github.com/aiscript-dev/aiscript-vscode/blob/main/README.ja.md)

![Screenshot](./readme-assets/screenshot.png)

## Features

AiScript Highlighting is an extension for Visual Studio Code that provides syntax highlighting for AiScript.

- Syntax highlighting for AiScript ~~that just works~~
- Intellisense for all AiScript features, not just a snippet
  - (Comes with Misskey-related properties!)

## How to Install

Head to the [releases page](https://github.com/aiscript-dev/aiscript-vscode/releases) and download the latest version of the `.vsix` file.

## Requirements

Works with Visual Studio Code v1.83.0 or later

## Release Notes

Please refer to CHANGELOG.md

## Development

### Build Locally

Run:

```bash
# Install dependencies
$ npm i

# Pack into .vsix file using VSCE
$ npx @vscode/vsce package

# (If command above didn't work, try below)
$ npm install -g @vscode/vsce
$ vsce package
```
