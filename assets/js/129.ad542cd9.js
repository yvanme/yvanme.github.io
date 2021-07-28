(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{487:function(a,t,s){"use strict";s.r(t);var n=s(44),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("Kibana安装")]),a._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("p",[a._v("[TOC]")]),a._v(" "),s("p",[s("strong",[a._v("主机配置:")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("主机名")]),a._v(" "),s("th",[a._v("IP地址")]),a._v(" "),s("th",[a._v("JDK")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("worker")]),a._v(" "),s("td",[a._v("192.168.153.130")]),a._v(" "),s("td",[a._v("1.8.0_201")])])])]),a._v(" "),s("p",[s("strong",[a._v("安装目录：/apps/hadoop-3.1.2")])]),a._v(" "),s("p",[s("strong",[a._v("备注：hadoop依赖java，因此在安装zookeeper之前需要安装好java环境")])]),a._v(" "),s("p",[a._v("​      "),s("strong",[a._v("1.集群安装规划")]),a._v("\n​      "),s("strong",[a._v("1.1 主机规划")])]),a._v(" "),s("p",[a._v("​      这里我们选择1台主机搭建Hadoop3高可用的分布式集群。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th"),a._v(" "),s("th",[a._v("worker")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("Namenode")]),a._v(" "),s("td",[a._v("是")])]),a._v(" "),s("tr",[s("td",[a._v("DataNode")]),a._v(" "),s("td",[a._v("是")])]),a._v(" "),s("tr",[s("td",[a._v("ResourceManager")]),a._v(" "),s("td",[a._v("是")])]),a._v(" "),s("tr",[s("td",[a._v("NodeManager")]),a._v(" "),s("td",[a._v("是")])]),a._v(" "),s("tr",[s("td",[a._v("Journalnode")]),a._v(" "),s("td",[a._v("是")])]),a._v(" "),s("tr",[s("td",[a._v("Zookeeper")]),a._v(" "),s("td",[a._v("是")])])])]),a._v(" "),s("p",[a._v("​      大家需要注意的是：从Hadoop3开始支持更多的Namenode，因为我们只有1台机器，所以这台机器配置Namenode，实际工作中Namenode也不宜过多，否则对集群造成压力。其他角色保持跟Hadoop2.x一致即可。")]),a._v(" "),s("p",[a._v("​      "),s("strong",[a._v("1.2")]),a._v(" "),s("strong",[a._v("软件规划")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("软件")]),a._v(" "),s("th",[a._v("版本")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("Jdk")]),a._v(" "),s("td",[a._v("Jdk1.8")])]),a._v(" "),s("tr",[s("td",[a._v("CentOS")]),a._v(" "),s("td",[a._v("CentOS7")])]),a._v(" "),s("tr",[s("td",[a._v("Zookeeper")]),a._v(" "),s("td",[a._v("Zookeeper3.4.14")])]),a._v(" "),s("tr",[s("td",[a._v("Hadoop")]),a._v(" "),s("td",[a._v("Hadoop3.2")])])])]),a._v(" "),s("p",[a._v("​     需要注意的是：Hadoop3最低支持Java8，如果大家还在使用Java7或者更低版本，请升级到Java8。\n​     "),s("strong",[a._v("1.3用户规划")]),a._v("\n​     出于权限考虑，Hadoop集群环境安装不要使用root用户，需要大家自己创建相关的用户和用户组，注意创建用户的时候需要设置密码。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("节点名称")]),a._v(" "),s("th",[a._v("用户组")]),a._v(" "),s("th",[a._v("用户")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("master")]),a._v(" "),s("td",[a._v("hadoop")]),a._v(" "),s("td",[a._v("hadoop")])]),a._v(" "),s("tr",[s("td",[a._v("slave1")]),a._v(" "),s("td",[a._v("hadoop")]),a._v(" "),s("td",[a._v("hadoop")])]),a._v(" "),s("tr",[s("td",[a._v("slave2")]),a._v(" "),s("td",[a._v("hadoop")]),a._v(" "),s("td",[a._v("hadoop")])])])]),a._v(" "),s("p",[s("strong",[a._v("1.4数据目录规划")])]),a._v(" "),s("p",[a._v("​      在搭建Hadoop集群之前，需要规划好所有的软件目录和数据存放目录，便于后期的管理与维护。")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("目录名称")]),a._v(" "),s("th",[a._v("绝对路径")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("所有软件存放目录")]),a._v(" "),s("td",[a._v("/apps/app")])]),a._v(" "),s("tr",[s("td",[a._v("所有数据与日志存放目录")]),a._v(" "),s("td",[a._v("/apps/data")])])])]),a._v(" "),s("p",[s("strong",[a._v("2. 集群安装")])]),a._v(" "),s("ul",[s("li",[a._v("配置主机名（永久修改主机名）")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("hostnamectl --static set-hostname <host-name>\n")])])]),s("ul",[s("li",[s("p",[a._v("关闭防火墙")]),a._v(" "),s("p",[a._v("查看防火墙状态")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("systemctl status firewalld \n")])])]),s("p",[a._v("临时关闭防火墙")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("systemctl stop firewalld\n")])])]),s("p",[a._v("永久关闭防火墙(需要重启才能生效)")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("systemctl disable firewalld\n")])])])]),a._v(" "),s("li",[s("p",[a._v("关闭selinux\nselinux是Linux一个子安全机制，学习环境可以将它禁用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vim /etc/sysconfig/selinux\n")])])]),s("p",[a._v("把SELINUX设置成disabled")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELINUX=disabled\n")])])])]),a._v(" "),s("li",[s("p",[a._v("设置节点间免密登陆")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("在master上生成公钥私钥")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ssh-keygen\n")])])])]),a._v(" "),s("li",[s("p",[a._v("查看公钥私钥")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ll -a\n")])])])]),a._v(" "),s("li",[s("p",[a._v("将公钥拷贝到自己")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("ssh-copy-id root@worker\n")])])])]),a._v(" "),s("li",[s("p",[a._v("其他两台机器重复此步骤")])])])]),a._v(" "),s("li",[s("p",[a._v("安装jdk1.8")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("使用解压命令解压到当前目录。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" zxvf jdk-8u221-linux-x64.tar.gz\n")])])])]),a._v(" "),s("li",[s("p",[a._v("修改etc/profile，在文件结尾追加如下命令：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#java environment")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/apps/jdk1.8.0_221\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/jre/lib/rt.jar:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/dt.jar:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/tools.jar \n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin\n")])])])]),a._v(" "),s("li",[s("p",[a._v("保存profile，使之生效")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])])])]),a._v(" "),s("li",[s("p",[a._v("检验是否安装成功")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("java -version\n")])])])])])]),a._v(" "),s("li",[s("p",[a._v("安装Zookeeper")])]),a._v(" "),s("li",[s("p",[a._v("Hadoop3分布式集群搭建")]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("下载解压Hadoop3")])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v("tar -zvxf hadoop-3.1.2.tar.gz\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("配置hadoop-env.sh")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/apps/jdk1.8.0_221\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HADOOP_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/apps/hadoop-3.1.2\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("配置core-site.xml")])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("fs.defaultFS"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("hdfs://mycluster"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--默认的HDFS路径--\x3e")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("hadoop.tmp.dir"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("/apps/hadoop/data/tmp"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--hadoop的临时目录，如果需要配置多个目录，需要逗号隔开--\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("配置hdfs-site.xml")])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[a._v('<?xml version="1.0" encoding="UTF-8"?>')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token prolog"}},[a._v('<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('\x3c!--\n  Licensed under the Apache License, Version 2.0 (the "License");\nyou may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License. See accompanying LICENSE file.\n--\x3e')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- Put site-specific property overrides in this file. --\x3e")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("dfs.replication"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("配置workers")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("worker\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("配置hadoop3环境变量，并使用source /etc/profile 使之生效")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#java environment")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/apps/jdk1.8.0_221\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/jre/lib/rt.jar:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/dt.jar:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/lib/tools.jar \n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ZOOKEEPER_INSTALL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/apps/zookeeper-3.4.14\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ZOOKEEPER_INSTALL")]),a._v("/bin\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HADOOP_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/apps/hadoop-3.1.2\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$HADOOP_HOME")]),a._v("/bin\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("格式化hdfs")])]),a._v(" "),s("p",[a._v("第一次安装hdfs的时候，需要对hdfs进行相关的格式化操作，以后就不需要了。")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("创建hadoop目录")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mkdir -p /apps/hadoop/data\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("在master节点上执行格式化")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("bin/hdfs namenode -format\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("启动HDFS")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sbin/start-dfs.sh\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("测试运行HDFS")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("http://worker:9870/explorer.html#/\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("备注")])]),a._v(" "),s("p",[a._v("启动HDFS报Attempting to operate on hdfs namenode as root，解决方案如下：")]),a._v(" "),s("p",[a._v("在/hadoop/sbin路径下：\n将start-dfs.sh，stop-dfs.sh两个文件顶部添加以下参数")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/usr/bin/env bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HDFS_DATANODE_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HADOOP_SECURE_DN_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("hdfs\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HDFS_NAMENODE_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HDFS_SECONDARYNAMENODE_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HDFS_JOURNALNODE_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HDFS_ZKFC_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n")])])]),s("p",[a._v("还有，start-yarn.sh，stop-yarn.sh顶部也需添加以下：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/usr/bin/env bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("YARN_RESOURCEMANAGER_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HADOOP_SECURE_DN_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yarn\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("YARN_NODEMANAGER_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n")])])])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("配置YARN")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("​\t"),s("strong",[a._v("配置mapred-site.xml")])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("mapreduce.framework.name"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("yarn"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("mapreduce.application.classpath"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" \n    /apps/hadoop-3.1.2/etc/*,\n        /apps/hadoop-3.1.2/etc/hadoop/*,\n    /apps/hadoop-3.1.2/lib/*,\n        /apps/hadoop-3.1.2/share/hadoop/common/*,\n        /apps/hadoop-3.1.2/share/hadoop/common/lib/*,\n        /apps/hadoop-3.1.2/share/hadoop/mapreduce/*,\n        /apps/hadoop-3.1.2/share/hadoop/mapreduce/lib-examples/*,\n        /apps/hadoop-3.1.2/share/hadoop/hdfs/*,\n        /apps/hadoop-3.1.2/share/hadoop/hdfs/lib/*,\n        /apps/hadoop-3.1.2/share/hadoop/yarn/*,\n        /apps/hadoop-3.1.2/share/hadoop/yarn/lib/*,\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("配置yarn-site.xml")])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[a._v('<?xml version="1.0"?>')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('\x3c!--\n  Licensed under the Apache License, Version 2.0 (the "License");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an "AS IS" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License. See accompanying LICENSE file.\n--\x3e')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- Site specific YARN configuration properties --\x3e")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("yarn.resourcemanager.hostname"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("worker"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("yarn.nodemanager.aux-services"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("mapreduce_shuffle"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" \n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("mapreduce.application.classpath"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        /apps/hadoop-3.1.2/etc/*,\n        /apps/hadoop-3.1.2/etc/hadoop/*,\n        /apps/hadoop-3.1.2/lib/*,\n        /apps/hadoop-3.1.2/share/hadoop/common/*,\n        /apps/hadoop-3.1.2/share/hadoop/common/lib/*,\n        /apps/hadoop-3.1.2/share/hadoop/mapreduce/*,\n        /apps/hadoop-3.1.2/share/hadoop/mapreduce/lib-examples/*,\n        /apps/hadoop-3.1.2/share/hadoop/hdfs/*,\n        /apps/hadoop-3.1.2/share/hadoop/hdfs/lib/*,\n        /apps/hadoop-3.1.2/share/hadoop/yarn/*,\n        /apps/hadoop-3.1.2/share/hadoop/yarn/lib/*,\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("启动yarn")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" sbin/start-yarn.sh\n")])])])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("通过Web查看YARN")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("http://worker:8088/cluster/apps\n")])])])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);