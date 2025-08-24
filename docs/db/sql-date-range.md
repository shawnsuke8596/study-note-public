---
id: sql-date-range
title: SQLの日付範囲指定（方言別）
sidebar_position: 2
tags: [db,sql,date]
---
代表的な例。
```sql
-- PostgreSQL / MySQL 8+
SELECT * FROM orders
WHERE order_date >= DATE '2025-01-01'
  AND order_date <  DATE '2025-02-01';

-- SQLite
SELECT * FROM orders
WHERE order_date >= '2025-01-01'
  AND order_date <  '2025-02-01';

-- SQL Server
SELECT * FROM orders
WHERE order_date >= '2025-01-01'
  AND order_date <  '2025-02-01';

