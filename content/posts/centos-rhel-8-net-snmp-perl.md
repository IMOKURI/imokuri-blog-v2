---
title: CentOS/RHEL 8 での net-snmp-perl 問題
slug: centos-rhel-8-net-snmp-perl
date: 2020-07-04
updated:
published: true
tags:
    - Linux
    - Zabbix
    - SNMP
    - SNMPTT
series: false
canonical_url: false
description: "CentOS/RHEL 8 で net-snmp-parl をビルドする方法です"
---

CentOS/RHEL 8 では、 net-snmp-perl パッケージが標準のレポジトリで提供されなくなりました。

そのため、SNMPTTを `net_snmp_perl_enable` で利用することができなくなってしまいました。

SNMPTTは handler に `snmptthandler` を使うか `snmptthandler-embedded` を使うかで、性能が格段に違うので、
これは、Zabbix などで SNMPTTを使う人にとっては致命的な感じです。

> SNMPTT 自体、開発が長いこと止まっているので、そろそろ代替のソリューションを考えないといけない、
> ということもあるはあります。

そこで、 net-snmp を Github Actions でビルドして、 net-snmp-perl を含む net-snmp パッケージを
ビルドできるようにしたので、ご紹介です。

[ビルドした `net-snmp-5.8-14.el8.x86_64`](https://github.com/IMOKURI/build-net-snmp/releases) はこちらです。

ビルドの流れは以下のとおりです。

- CentOS 8 の Docker コンテナを起動する。以下の処理をコンテナの中で実行する。
- ビルドに必要なパッケージをインストール。
- [CentOSのnet-snmpのレポジトリ](https://git.centos.org/rpms/net-snmp)からソースをダウンロード。
- CentOS 8 のブランチをチェックアウト。
- net-snmp をビルド。

ビルドした net-snmp のパッケージの中から以下を利用したいサーバーにインストールすれば、
SNMPTTを `net_snmp_perl_enable` で利用することができます。

- `net-snmp-5.8-14.el8.x86_64.rpm`
- `net-snmp-agent-libs-5.8-14.el8.x86_64.rpm`
- `net-snmp-devel-5.8-14.el8.x86_64.rpm`
- `net-snmp-libs-5.8-14.el8.x86_64.rpm`
- `net-snmp-perl-5.8-14.el8.x86_64.rpm`
- `net-snmp-utils-5.8-14.el8.x86_64.rpm`


---

参考:

- https://forums.centos.org/viewtopic.php?t=73376#p314200
