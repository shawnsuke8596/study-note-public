---
id: add-md-guide
title: githubへのアップロード
sidebar_position: 1
tags: [add, md, github]
---

# Markdownファイル追加手順（Docusaurus + GitHub Pages 運用）

## 1. 新しい記事ファイルを作成
- `docs/<カテゴリ名>/` 配下に Markdown ファイルを追加
- ファイル名は半角英数字推奨（例: `venv.md`）

```bash
# 例: Python 仮想環境の記事を追加
cd docs/python
nano venv.md
```

内容例:
```markdown
---
id: venv
title: Python 仮想環境
sidebar_position: 3
tags: [python, venv]
---

Python で仮想環境を作成する方法。

```bash
python3 -m venv .venv
source .venv/bin/activate
deactivate
```
```

---

## 2. 開発サーバーで確認
- サーバー起動中なら保存後にブラウザをリロードすれば反映
- サーバーを止めている場合は再起動

```bash
npm run start
```

---

## 3. Git でファイルをステージング
状況に応じてコマンドを使い分ける。

### フォルダ内の .md を全部
```bash
git add docs/python/*.md
```

### 複数ファイルを指定
```bash
git add docs/python/venv.md docs/linux/network.md docs/db/index.md
```

### すべての変更をまとめて
```bash
git add .
```

---

## 4. コミット & プッシュ
```bash
git commit -m "add Python 仮想環境記事"
git push origin main
```

→ GitHub Actions が動き、数分後に GitHub Pages が更新される。

---

## ✅ まとめ
1. `docs/<カテゴリ>/` に Markdown を追加  
2. `npm run start` で確認  
3. `git add` でステージング（状況に応じて方法を選択）  
4. `git commit` → `git push` で公開  

