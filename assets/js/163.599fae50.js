(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{521:function(t,a,s){"use strict";s.r(a);var e=s(44),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"centos7配置tomcat7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos7配置tomcat7"}},[t._v("#")]),t._v(" CentOS7配置Tomcat7")]),t._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("p",[s("strong",[t._v("环境：CentOS7")])]),t._v(" "),s("h3",{attrs:{id:"_1、下载tomcat7-linux下的安装包。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载tomcat7-linux下的安装包。"}},[t._v("#")]),t._v(" 1、"),s("a",{attrs:{href:"http://tomcat.apache.org/download-70.cgi",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),s("OutboundLink")],1),t._v("Tomcat7 linux下的安装包。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.oschina.net/uploads/img/201612/21163629_xNb3.png",alt:"输入图片说明"}})]),t._v(" "),s("h3",{attrs:{id:"_2、通过ftp-winscp-filezilla等-工具上传到-usr-local-tomcat-目录。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、通过ftp-winscp-filezilla等-工具上传到-usr-local-tomcat-目录。"}},[t._v("#")]),t._v(" 2、通过FTP（WinSCP,FileZilla等）工具上传到“/usr/local/tomcat”目录。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://static.oschina.net/uploads/img/201612/21164237_PS8i.png",alt:"输入图片说明"}})]),t._v(" "),s("h3",{attrs:{id:"_3、将安装包解压到当前目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、将安装包解压到当前目录"}},[t._v("#")]),t._v(" 3、将安装包解压到当前目录")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tar zxvf apache-tomcat-7.0.73.tar.gz\n")])])]),s("h3",{attrs:{id:"_4、进入bin目录-启动tomcat。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、进入bin目录-启动tomcat。"}},[t._v("#")]),t._v(" 4、进入bin目录，启动tomcat。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" cd apache-tomcat-7.0.73/bin\n./startup.sh\n")])])]),s("p",[s("img",{attrs:{src:"https://static.oschina.net/uploads/img/201612/21165145_aD8F.png",alt:"输入图片说明"}})]),t._v(" "),s("h3",{attrs:{id:"_5、如果tomcat启动正常但是访问不到tomcat首页-那就需要去关闭防火墙或开启防火墙8080端口。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、如果tomcat启动正常但是访问不到tomcat首页-那就需要去关闭防火墙或开启防火墙8080端口。"}},[t._v("#")]),t._v(" 5、如果tomcat启动正常但是访问不到tomcat首页，那就需要去关闭防火墙或开启防火墙8080端口。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭防火墙")]),t._v("\nsystemctl stop firewalld\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#开启8080端口（两种方法选一种即可）。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加 （--permanent永久生效，没有此参数重启后失效）")]),t._v("\nfirewall-cmd --zone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("/tcp --permanent    \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重新载入")]),t._v("\nfirewall-cmd --reload\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看")]),t._v("\nfirewall-cmd --zone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --query-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("/tcp\n")])])]),s("h3",{attrs:{id:"_6、停止tomcat。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、停止tomcat。"}},[t._v("#")]),t._v(" 6、停止tomcat。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("./shutdown.sh\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);