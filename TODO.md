# trussc.org TODO

## ナビゲーション統一
- 全ページにコピペされてるナビHTMLを `nav.js` 等に集約
- 言語 × ページ数の掛け算を解消（現状: ナビ変更 → 全ファイル手動編集が必要）
- referenceページは独自topbarで別デザインになっている — 統一するか検討

## referenceページ多言語対応
- `trussc-api.js` に `desc_ja` / `desc_ko` / `name_ja` / `name_ko` は入っている
- referenceページ (`reference/index.html`) は `desc` のみ使用、多言語未対応
- URLまたはUIから言語を検出して切り替える仕組みが必要

## 言語セレクター
- ナビに言語切り替えUIを追加
- 現状: en / ja / ko の3言語（`jp/` `kr/` はリダイレクト用）
- for-of-usersページの `guide.js` は既にURL pathベースで言語検出済み

## Worksページ
- みんなが作った作品・プロジェクトを一覧できるページ
- クリックで詳細表示
- **投稿の仕組みが課題:**
  - CMS的にすると重たい
  - 管理者が全部やると投稿のハードルが上がる（気軽に投稿しようと思ってもらえない）
  - **候補:**
    - JSON/YAML + PR方式（awesome-*リスト型。開発者コミュニティ向きで軽量）
    - GitHub Issues/Discussions テンプレ投稿 → ビルドスクリプトでJSON化（PRより敷居低い）
    - Google Form → スプレッドシート → JSON（非開発者も可、仕組みが増える）
  - 画像/スクショの管理方法も要検討（リポジトリに含めるか、URL指定か）

## Addonsページ
- tcxアドオンの一覧ページ、GitHubリポジトリへのリンク付き
- **直近で必要になりそう**
- 検討事項:
  - 採用基準（公式/コミュニティの区別？品質基準？）
  - 自動クローリングするか（GitHub topicベースの自動検出 e.g. `trussc-addon` タグ）
  - 手動キュレーションとの併用？
  - アドオンのREADMEや説明をどこまで引っ張るか

## リファクタ
- referenceページのCSS/JSがインラインで800行 — 外部ファイル化（ナビ統一と合わせて）
- `jp/` `kr/` はリダイレクト用で残す価値あり（外部リンク対策）
- ~~`tcscript/` は sketch/ へのリダイレクトのみ — 削除済み~~
- 生成ファイルのクロスリポジトリ依存: trussc の yaml → generate-docs.js → trussc.org/generated/ に出力。再生成忘れが起きやすい構造（CI や hook で自動化を検討）
