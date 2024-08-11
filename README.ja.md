# AiScript VSCode 拡張機能

![Screenshot](./readme-assets/screenshot.png)

## 特徴

**AiScript VSCode 拡張機能** は、AiScriptのシンタックスハイライティングなどを提供するVisual Studio Code向けの拡張機能です。

- フツーに動く、VSCode向けのAiScriptシンタックスハイライト
- 単なるスニペットではなくIntellisense（VSCodeの予測変換機能）としてAiScriptの全機能を網羅
  - （Misskey関連のプロパティにも対応！）

## インストールのやりかた

[Releases ページ](https://github.com/aiscript-dev/aiscript-vscode/releases) に移動し、拡張子が `.vsix` のファイルをダウンロード・インストールしてください。

## 動作環境

Visual Studio Code v1.83.0 以降

## リリースノート

CHANGELOG.md をご覧ください

## 開発環境の構築

### ローカルでビルドする

以下のコマンドを実行してください

```bash
# 依存関係のインストール
$ npm i

# VSCEを使いvsixパッケージ化
$ npx @vscode/vsce package

# もしnpxでうまくいかなければ、以下をお試しください：
$ npm install -g @vscode/vsce
$ vsce package
```
