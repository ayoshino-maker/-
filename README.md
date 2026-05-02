# ちば看護 LP (tiba-kango)

千葉県看護師転職サポートのランディングページ。Create React App + TypeScript + MUI v7 で構築されています。

## デプロイ先

- 本番 URL: https://lp.chiba-kango.com/
- ホスティング: **Xserver**（2026-04-25 移行 / Vercelから移設）
- デプロイ方式: **GitHub Actions による自動デプロイ**（main への push をトリガー）

## 技術スタック

- React 19 + TypeScript 4.9
- Create React App (`react-scripts` 5.0.1)
- MUI v7 (`@mui/material`, `@emotion`)
- スタイリング: MUI sx prop / Emotion
- ルーティング: なし（単一ページ静的SPA）

---

## 現在の構成（2026-05-02 時点）

### LPセクション構成

| # | セクション | 主なコンポーネント |
|---|---|---|
| 1 | Header | sticky半透明ヘッダー + LINE CTA |
| 2 | Hero | 393px設計 + cqi スケール（0417デザイン）写真6点・コールアウト・リボン・緑LINE CTA・チェックバッジ・吹き出し |
| 3 | 千葉県特化エージェント | `SecondCard` x3（水色フレーム + undraw.coイラスト） |
| 4 | こんなお悩みありませんか？ | `ThirdCard` x4（点線ボーダー + 非対称角丸） |
| 5 | お悩みピル | 「その転職のお悩み」+ 千葉県特化見出し |
| 6 | 千葉県特化だからできること | `FifthCard` x3（青ピルタイトル + 箇条書き） |
| 7 | ちば看護が選ばれる理由 | `SixthCard` x4 |
| 8 | 転職成功事例 | `SeventhCard` x2 |
| 9 | 転職までの流れ | `EighthCard` x5（STEP 1〜5） |
| 10 | よくある質問 | `NinthCard` x3（Q/A） |
| 11 | 最終CTA | `tenthSection` |
| - | Footer | コピーライト |

### ディレクトリ

```
src/
├── App.tsx                     ルートレイアウト + Hero
├── assets/img/                 画像アセット（SVG/PNG）
└── components/
    ├── second/SecondCard.tsx
    ├── third/ThirdCard.tsx
    ├── fifth/FifthCard.tsx
    ├── sixth/SixthCard.tsx
    ├── seventh/SeventhCard.tsx
    ├── eighth/EighthCard.tsx
    ├── ninth/NinthCard.tsx
    └── shared/
        ├── buttons/CustomButton.tsx
        └── footer/Footer.tsx
```

---

## 自動デプロイ

### 仕組み

`main` ブランチへの push をトリガーに、`.github/workflows/deploy-xserver.yml` が以下を実行：

1. `npm ci` で依存解決
2. `npm run build` でビルド
3. `build/` 配下を **FTPS** で `sv17004.xserver.jp:/public_html/lp.chiba-kango.com/` にアップロード（差分のみ）

手動実行も可能：GitHub の Actions タブ → "Deploy LP to Xserver" → "Run workflow"。

### 必要な GitHub Secrets

| Secret 名 | 内容 |
|---|---|
| `XSERVER_FTP_HOST` | `sv17004.xserver.jp` |
| `XSERVER_FTP_USER` | `chiba-kango-ftp@chiba-kango.com` |
| `XSERVER_FTP_PASSWORD` | （社内シークレット管理に保管） |

`server-dir` は project 固有のため workflow に直接記述（`./public_html/lp.chiba-kango.com/`）。

---

## サーバー情報

| 項目 | 値 |
|---|---|
| サーバー | Xserver |
| FTP ホスト | `sv17004.xserver.jp` |
| FTP ユーザー | `chiba-kango-ftp@chiba-kango.com` |
| FTP パスワード | ※ 1Password 等の社内シークレット管理に保管 |
| サーバー IP | `85.131.213.125` |
| ドキュメントルート | `/public_html/lp.chiba-kango.com/`（FTPホーム起点） |
| DNS 管理 | お名前.com（ネームサーバー: `01.dnsv.jp` 〜 `04.dnsv.jp`） |

---

## ローカル開発

### セットアップ

```bash
npm install
```

### 開発サーバー起動

```bash
npm start
```

http://localhost:3000 で起動。

### 本番ビルド（手動確認用）

```bash
npm run build
```

`build/` ディレクトリに成果物が生成されます。本番反映は GitHub Actions が行うので、通常はローカルでビルドする必要はありません。

### テスト

```bash
npm test
```

---

## 緊急時：手動デプロイ手順

GitHub Actions が動かない場合のフォールバック：

1. ローカルで `npm run build` 実行
2. `build/` の中身を FileZilla 等で `sv17004.xserver.jp` にアップロード
   - リモートディレクトリ: `/public_html/lp.chiba-kango.com/`
   - 既存ファイルは上書き
3. https://lp.chiba-kango.com/ で表示確認

---

## 移行履歴

### 2026-05-02 (0417デザイン全面リニューアル + 自動デプロイ化)

- LP TOPページを Figma 0417 版デザインに全面更新
  - Hero全面リビルド（緑LINE CTA、コールアウトカード、写真6点、各種バッジ）
  - 各セクションの色・コピー・レイアウト調整
- GitHub Actions で main push 時の自動デプロイを構築
- 未使用画像11枚を削除

### 2026-04-25 (Vercel → Xserver 移設)

- Xserver にサブドメイン `lp.chiba-kango.com` 作成
- お名前.com に A レコード追加（`lp.chiba-kango.com → 85.131.213.125`）
- 初回手動デプロイ（HTTP動作確認済み）

---

## 参考

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [Figma デザイン](https://www.figma.com/design/fu7jqW8fJge3GfKjW44Yb0/)
- [SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action)
