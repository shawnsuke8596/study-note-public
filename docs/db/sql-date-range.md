id:sql-date-range
title:SQLの日付範囲指定（方言別）
sidebar_position:2
tags:[db,sql,date]

SELECT * FROM orders
WHERE order_date >= DATE '2025-01-01'
  AND order_date <  DATE '2025-02-01';



