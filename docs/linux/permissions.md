---
id: permissions
title: 権限と所有権(chmld/chown)
sidebar_position: 2
tags: [linux,permisßsions]
---

```bash showLineNumbers
# rwx を 8進で
chmod 755 script.sh      # = rwxr-xr-x
chmod u+x script.sh

# 所有者/グループ変更
sudo chown user:group /srv/app -R

