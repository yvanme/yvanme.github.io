(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{512:function(s,t,n){"use strict";n.r(t);var a=n(27),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("k8s安装(使用kubeadm)")]),s._v(" "),n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),n("p",[s._v("[TOC]")]),s._v(" "),n("p",[n("strong",[s._v("主机配置:")])]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("主机名")]),s._v(" "),n("th",[s._v("IP地址")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("master")]),s._v(" "),n("td",[s._v("192.168.153.130")])]),s._v(" "),n("tr",[n("td",[s._v("node1")]),s._v(" "),n("td",[s._v("192.168.153.131")])]),s._v(" "),n("tr",[n("td",[s._v("node2")]),s._v(" "),n("td",[s._v("192.168.153.132")])])])]),s._v(" "),n("p",[n("strong",[s._v("系统：CentOS7")])]),s._v(" "),n("p",[n("strong",[s._v("docker版本：19.03.5")])]),s._v(" "),n("p",[n("strong",[s._v("k8s版本：1.9.0")])]),s._v(" "),n("p",[n("strong",[s._v("1. k8s安装")])]),s._v(" "),n("ul",[n("li",[s._v("安装kube-proxy报错")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行降级操作命令")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -Uvh --oldpackage iptables-1.4.21-24.el7.x86_64.rpm\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行完记得执行一下")]),s._v("\nldconfig\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#验证是否安装成功")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" iptables\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启 kube-proxy")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" kube-proxy restart\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看")]),s._v("\njournalctl -f -u kube-proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("iptables常用命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("systemctl start iptables "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动")]),s._v("\n\nsystemctl status iptables "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看运行状态")]),s._v("\n\nsystemctl restart iptables.service "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启")]),s._v("\n\nsystemctl stop iptables.service "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止")]),s._v("\n\nsystemctl "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" iptables.service "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置开机启动")]),s._v("\n\nsystemctl disable iptables.service "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止开机启动")]),s._v("\n\niptables -h "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询帮助")]),s._v("\n\niptables -L -n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#列出（filter表）所有规则")]),s._v("\n\niptables -L -n --line-number "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#列出（filter表）所有规则，带编号")]),s._v("\n\niptables -L -n -t nat "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#列出（nat表）所有规则")]),s._v("\n\niptables -F "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#清除（filter表）中所有规则")]),s._v("\n\niptables -F -t nat "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#清除（nat表）中所有规则")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables save "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#保存配置（保存配置后必须重启iptables）")]),s._v("\n\nsystemctl restart iptables.service "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止192.168.1.3 IP地址的所有类型数据接入")]),s._v("\niptables -A INPUT "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -s "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.3 -j DROP\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开放端口")]),s._v("\niptables -A INPUT -p tcp --dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -j ACCEPT "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开放80端口")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开放端口范围")]),s._v("\niptables -I INPUT -p tcp --dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":80 -j ACCEPT "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开发22-80范围的端口")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不允许80端口流出")]),s._v("\niptables -I OUTPUT -p tcp --dport "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -j DROP\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);