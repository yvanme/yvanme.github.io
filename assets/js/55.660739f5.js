(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{420:function(s,a,e){"use strict";e.r(a);var t=e(27),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos7下livy环境搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7下livy环境搭建"}},[s._v("#")]),s._v(" Centos7下Livy环境搭建")]),s._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),e("p",[s._v("[TOC]")]),s._v(" "),e("p",[e("strong",[s._v("安装环境：")])]),s._v(" "),e("p",[e("strong",[s._v("system：CentOS7")]),s._v(" "),e("strong",[s._v("Livy:livy-0.6.0")])]),s._v(" "),e("h2",{attrs:{id:"livy安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#livy安装"}},[s._v("#")]),s._v(" Livy安装")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("解压Livy包")]),s._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[s._v("unzip apache-livy-0.6.0-incubating-bin.zip\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("livy-env.sh")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export SPARK_HOME=/apps/spark-2.4.3-bin-hadoop2.7\nexport HADOOP_CONF_DIR=/apps/hadoop-3.1.2/etc/hadoop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("创建目录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" mkdir -p /apps/apache-livy-0.6.0-incubating-bin/logs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("启动Spark")]),s._v(" "),e("p",[s._v("进入${LIVY_HOME}/sbin 目录，执行如下命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#前台模式，可观察程序运行日志\n./livy-server\n#后台模式\n./livy-server start\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("访问web")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("http://worker:8998\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("p",[s._v("备注：")]),s._v(" "),e("p",[s._v("当报 Cannot write log directory /apps/apache-livy-0.6.0-incubating-bin/logs错误")]),s._v(" "),e("p",[s._v("解决方法：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir logs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);