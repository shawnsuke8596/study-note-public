---
id: normalization
title: 正規化の要点（第1〜第3正規形）
sidebar_position: 1
tags: [db, normalization]
---

```
•	1NF: 原子性
•	2NF: 部分関数従属の排除（複合主キー時）
•	3NF: 推移的関数従属の排除

顧客(顧客ID, 氏名, 郵便番号, 住所, 市区町村名)
→ 郵便番号→住所→市区町村名 が推移的従属 ⇒ 市区町村は別表に切り出し

