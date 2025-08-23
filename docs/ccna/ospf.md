id: ospf
title: OSPF 基本
sidebar_position: 1
tags: [ccna, ospf, routing]

bash showLineNumbers
conf t
router ospf 1
 network 192.168.10.0 0.0.0.255 area 0
interface g0/0
 ip ospf priority 100
DR/BDR・コスト・エリア設計の要点。

conf t
router ospf 1
 network 192.168.10.0 0.0.0.255 area 0
interface g0/0
 ip ospf priority 100

