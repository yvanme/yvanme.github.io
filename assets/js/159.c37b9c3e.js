(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{517:function(e,t,s){"use strict";s.r(t);var a=s(44),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"centos7-配置163-yum源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos7-配置163-yum源"}},[e._v("#")]),e._v(" CentOS7 配置163 yum源")]),e._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),s("p",[e._v("[TOC]")]),e._v(" "),s("p",[s("strong",[e._v("环境：CentOS7")])]),e._v(" "),s("p",[e._v("1）下载repo文件")]),e._v(" "),s("p",[e._v("wget http://mirrors.163.com/.help/CentOS7-Base-163.repo")]),e._v(" "),s("p",[e._v("2）备份并替换系统的repo文件")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" CentOS7-Base-163.repo /etc/yum.repos.d/\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /etc/yum.repos.d/\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" CentOS-Base.repo CentOS-Base.repo.bak\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" CentOS7-Base-163.repo CentOS-Base.repo\n")])])]),s("p",[e._v("3）执行yum源更新命令")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("yum clean all\nyum makecache\nyum update\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);