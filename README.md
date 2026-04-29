# ちば看護 LP (tiba-kango)

千葉県看護師転職サポートのランディングページ。Create React App + TypeScript + MUI v7 で構築されています。

## デプロイ先

- 本番 URL: https://lp.chiba-kango.com/ （SSL 設定後）
- 移行前: Vercel
- 移行後: **Xserver**（2026-04-25 移行）

## サーバー情報

| 項目               | 値                                                                    |
| ------------------ | --------------------------------------------------------------------- |
| サーバー           | Xserver                                                               |
| FTP ホスト         | `sv17004.xserver.jp`                                                  |
| FTP ユーザー       | `chiba-kango-ftp@chiba-kango.com`                                     |
| FTP パスワード     | ※ 1Password 等の社内シークレット管理に保管。README には記載しないこと |
| サーバー IP        | `85.131.213.125`                                                      |
| ドキュメントルート | `/public_html/lp.chiba-kango.com/`（FTP ホームディレクトリ起点）      |
| DNS 管理           | お名前.com（ネームサーバー: `01.dnsv.jp` 〜 `04.dnsv.jp`）            |

---

## デプロイ手順（再デプロイ時）

### 1. 本番ビルド

```bash
npm install
npm run build
```

`build/` ディレクトリが生成される。

### 2. Xserver へアップロード

`build/` の中身を FTP で `/public_html/lp.chiba-kango.com/` に配置する（`build` フォルダごとではなく中身）。

#### FileZilla を使う場合

1. ホスト `sv17004.xserver.jp` / ユーザー `chiba-kango-ftp@chiba-kango.com` / ポート 21 で接続
2. リモート `/public_html/lp.chiba-kango.com/` を開く
3. ローカル `build/` の中身を全選択してドラッグ＆ドロップ
4. 既存ファイルは上書き

#### コマンドラインで一括アップロード（curl）

```bash
# ~/.netrc に認証情報を保存（mode 600）してから実行
curl -S --netrc -T 'build/index.html' "ftp://sv17004.xserver.jp/public_html/lp.chiba-kango.com/index.html"

# build/ 全体を一括アップロードする例
find build -type f ! -name '*.map' | while read -r f; do
  rel="${f#build/}"
  curl -sS --netrc -T "$f" --ftp-create-dirs \
    "ftp://sv17004.xserver.jp/public_html/lp.chiba-kango.com/$rel"
done
```

`~/.netrc` の形式:

```
machine sv17004.xserver.jp
login chiba-kango-ftp@chiba-kango.com
password （実際のパスワード — Git 管理しないこと）
```

### 3. 動作確認

```bash
curl -sI https://lp.chiba-kango.com/ | head -5
```

ブラウザで https://lp.chiba-kango.com/ を開いて表示・操作確認。

---

## 移行作業ログ（2026-04-25 実施）

### 完了済み

- [x] 移行先 Xserver にサブドメイン `lp.chiba-kango.com` を作成
- [x] お名前.com の DNS に A レコードを追加（`lp.chiba-kango.com → 85.131.213.125`）
  - 既存の `chiba-kango.com → 76.76.21.21`（Vercel）は触っていない
  - 既存の `_acme-challenge.www...` TXT レコードも触っていない
- [x] DNS 伝播確認（権威 DNS / Google DNS / Cloudflare DNS で `85.131.213.125` 解決）
- [x] `npm run build` で本番ビルド生成
- [x] `build/` の 27 ファイルを `public_html/lp.chiba-kango.com/` に FTP アップロード（`.map` ファイルは除外）
- [x] HTTP で動作確認（HTML / JS / CSS / 画像すべて 200 OK）

### 残タスク

- [ ] **Xserver で `lp.chiba-kango.com` の無料独自 SSL を有効化**
  - サーバーパネル → SSL設定 → `chiba-kango.com` 選択 → 「独自SSL設定追加」タブ → サイト `lp.chiba-kango.com` を選択して追加
  - 反映まで最大 1 時間
- [ ] HTTPS で動作確認（`https://lp.chiba-kango.com/`）
- [ ] HTTP → HTTPS リダイレクトを `.htaccess` に追加（SSL 有効化後）

  ```apache
  RewriteEngine On
  RewriteCond %{HTTPS} !=on
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
  ```

- [ ] Vercel プロジェクトの停止/削除（不要になった時点で）

---

## 注意点

- このプロジェクトは Vercel 固有機能（API Routes、ISR、Edge Functions など）を一切使っていない純粋な静的 SPA のため、Xserver でそのまま動作します。
- React Router 等のクライアントサイドルーティングは未使用。今後導入する場合は `.htaccess` に SPA フォールバックを追加すること:

  ```apache
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  ```

- `build/` は Git 管理対象外。デプロイのたびにビルドする。
- ソースマップ (`*.map`) は本番にアップロードしない（ソースコード露出防止）。

---

## 開発

### `npm start`

開発モードで起動（http://localhost:3000）

### `npm test`

テストを watch モードで実行

### `npm run build`

本番ビルド（`build/` に出力）

### `npm run eject`

CRA の eject（**一方向操作・非推奨**）

詳細は [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) を参照。
