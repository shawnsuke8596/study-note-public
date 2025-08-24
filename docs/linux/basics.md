---
id: linux-basics
title: Linux基本コマンド
sidebar_position: 1
tags: [linux,shell]
---
頻出コマンド最小セット。

```bash showLineNumbers
pwd; whoami; uname -a
ls -lah
cat /etc/os-release
grep -R "pattern" .
find . -type f -name "*.conf"
tar -czf backup.tgz ./dir
