---
id: basics
title: Python 基本文法メモ
sidebar_position: 1
tags: [python, basics]
---
最短の基本文法メモ。

```python showLineNumbers
x: int = 10
name: str = "Alice"
squares = [i*i for i in range(5)]
try:
    1/0
except ZeroDivisionError as e:
    print(e)
