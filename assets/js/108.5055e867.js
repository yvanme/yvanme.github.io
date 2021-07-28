(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{473:function(s,a,t){"use strict";t.r(a);var e=t(27),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"oracle创建表空间和用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle创建表空间和用户"}},[s._v("#")]),s._v(" Oracle创建表空间和用户")]),s._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("[TOC]")]),s._v(" "),t("h3",{attrs:{id:"_1、创建表空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建表空间"}},[s._v("#")]),s._v(" 1、创建表空间")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#dctm为表空间名称，路径自己来命名。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tablespace")]),s._v(" dctm datafile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/u01/app/oracle/dctm.ora'")]),s._v(" size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_2、创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建用户"}},[s._v("#")]),s._v(" 2、创建用户")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#dmadmin 为用户名，dctm1234为密码，dctm 为表空间名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" dmadmin identified "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" dctm1234 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tablespace")]),s._v(" dctm quota "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("m "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_3、授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、授权"}},[s._v("#")]),s._v(" 3、授权")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#给dmadmin用户授权")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("privileges")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" dmadmin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"_4、登陆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、登陆"}},[s._v("#")]),s._v(" 4、登陆")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://static.oschina.net/uploads/img/201803/09234501_zKfW.png",alt:"输入图片说明"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);