# Change Log

All notable changes to the "aiscript" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## 0.1.15
- ネームスペース関数の引数でテンプレートリテラルがハイライトされない問題を修正

## 0.1.14
- 依存パッケージを更新
- 関数の引数にテンプレート文字列を取るとハイライトされない問題を修正

## 0.1.13
- AiScriptロゴを追加
- 名前空間ブロックのハイライトに対応
- テンプレートリテラル内の波括弧のエスケープが効いていない問題を修正

## 0.1.12
- 関数のIntellisenseを追加
  - https://github.com/aiscript-dev/aiscript/pull/661 - `[].at()`

## 0.1.11
- 変数名に`let`や`var`などが含まれるときにハイライトに失敗する問題を修正

## 0.1.10
- tmLanguageの言語指定の後方互換性を追加

## 0.1.9
- `each`文が正しくhighlightされない問題を修正（#11）

## 0.1.8
- 関数のIntellisenseを追加
  - https://github.com/aiscript-dev/aiscript/pull/621 - `[].splice()`
  - https://github.com/aiscript-dev/aiscript/pull/622 - `[].flat()`, `[].flat_map()`
  - https://github.com/aiscript-dev/aiscript/pull/654 - `[].insert()`, `[].remove()`
  - https://github.com/aiscript-dev/aiscript/pull/608 - `Uri:` 系
  - https://github.com/aiscript-dev/aiscript/pull/653 - `''.pad_start()`, `''.pad_end()`

## 0.1.7
- 関数のIntellisenseを追加
  - https://github.com/aiscript-dev/aiscript/pull/620 - `[].every()`, `[].some()`
  - https://github.com/aiscript-dev/aiscript/pull/623 - `Date:to_iso_str()`

## 0.1.6
- 関数のIntellisenseを追加
  - https://github.com/aiscript-dev/aiscript/pull/411 … `[].index_of()`
  - https://github.com/aiscript-dev/aiscript/pull/372 … `Core:abort()`
  - https://github.com/aiscript-dev/aiscript/pull/486 … 文字列に関する関数 複数

## 0.1.5
- 関数のIntellisenseを追加
  - https://github.com/aiscript-dev/aiscript/pull/552 … `Date:millisecond()`
  - https://github.com/aiscript-dev/aiscript/pull/581 … `[].fill()`, `[].repeat()`, `Arr:create()`

## 0.1.4
- (fix) 依存関係を修正

## 0.1.3
- (change) AiScript Language Serverを更新  
  （このプログラムをパッケージとしてインストールした際にbinが存在しないというWARNが出てしまう問題を修正できるかも）

※拡張機能自体に更新はありません

## 0.1.2
- (change) tmLanguageの言語名設定を変更 (https://github.com/misskey-dev/misskey/issues/13204)

## 0.1.1
- (change) セキュリティ上の懸念があるAiScript関数に対しての入力補助機能を削除

## 0.1.0
- (add) Language Serverを統合（文法チェックが利用できるように）
- (enhance) バンドラとしてesbuildを使用するように
- (change) パッケージマネージャがnpmに変更されました

## 0.0.6
- (add) `Mk:nyaize`のIntellisenseを追加
- (fix) 複数行にわたるテンプレート文字列のハイライトに失敗する問題を修正

## 0.0.5
- (fix) namespaceの区切り文字のハイライトを修正
- (fix) ビルドエラーを修正

## 0.0.4
- (fix) Intellisenseの実装漏れ（`Core:`標準関数）
- (fix) `<:`のシンタックスハイライトがない

## 0.0.3
- (fix) ClassConstantのハイライトが正しく行われない問題を修正

## 0.0.2
- Intellisenseを追加（簡易版）

## 0.0.1

- Initial release
