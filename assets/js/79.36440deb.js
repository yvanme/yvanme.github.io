(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{444:function(s,a,e){"use strict";e.r(a);var t=e(27),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos7下mysql安装与配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7下mysql安装与配置"}},[s._v("#")]),s._v(" CentOS7下MySQL安装与配置")]),s._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),e("p",[s._v("[TOC]")]),s._v(" "),e("p",[s._v("安装环境：CentOS7 64位 MINI版，安装MySQL5.7")]),s._v(" "),e("h3",{attrs:{id:"_1、配置yum源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、配置yum源"}},[s._v("#")]),s._v(" 1、配置YUM源")]),s._v(" "),e("p",[s._v("在MySQL官网中下载YUM源rpm安装包：http://dev.mysql.com/downloads/repo/yum/\n"),e("img",{attrs:{src:"images/160918124758191.png",alt:"MySQL YUM源下载地址"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 下载mysql源安装包\nshell> wget http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm\n# 安装mysql源\nshell> yum localinstall mysql57-community-release-el7-8.noarch.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("检查mysql源是否安装成功")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('shell> yum repolist enabled | grep "mysql.*-community.*"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"images/160918124758192.png",alt:"检查mysql源安装是否正确"}}),s._v("\n看到上图所示表示安装成功。\n可以修改"),e("code",[s._v("vim /etc/yum.repos.d/mysql-community.repo")]),s._v("源，改变默认安装的mysql版本。比如要安装5.6版本，将5.7源的enabled=1改成enabled=0。然后再将5.6源的enabled=0改成enabled=1即可。改完之后的效果如下所示：\n"),e("img",{attrs:{src:"images/160918124758197.jpg",alt:"这里写图片描述"}})]),s._v(" "),e("h3",{attrs:{id:"_2、安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装mysql"}},[s._v("#")]),s._v(" 2、安装MySQL")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("shell> yum install mysql-community-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3、启动mysql服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、启动mysql服务"}},[s._v("#")]),s._v(" 3、启动MySQL服务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("shell> systemctl start mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看MySQL的启动状态")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("shell> systemctl status mysqld\n● mysqld.service - MySQL Server\n   Loaded: loaded (/usr/lib/systemd/system/mysqld.service; disabled; vendor preset: disabled)\n   Active: active (running) since 五 2016-06-24 04:37:37 CST; 35min ago\n Main PID: 2888 (mysqld)\n   CGroup: /system.slice/mysqld.service\n           └─2888 /usr/sbin/mysqld --daemonize --pid-file=/var/run/mysqld/mysqld.pid\n\n6月 24 04:37:36 localhost.localdomain systemd[1]: Starting MySQL Server...\n6月 24 04:37:37 localhost.localdomain systemd[1]: Started MySQL Server.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"_4、开机启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、开机启动"}},[s._v("#")]),s._v(" 4、开机启动")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("shell> systemctl enable mysqld\nshell> systemctl daemon-reload\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"_5、修改root本地登录密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、修改root本地登录密码"}},[s._v("#")]),s._v(" 5、修改root本地登录密码")]),s._v(" "),e("p",[s._v("mysql安装完成之后，在/var/log/mysqld.log文件中给root生成了一个默认密码。通过下面的方式找到root默认密码，然后登录mysql进行修改：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("shell> grep 'temporary password' /var/log/mysqld.log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"images/160918124758193.png",alt:"root默认密码"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("shell> mysql -uroot -p\nmysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!'; \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("或者")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> set password for 'root'@'localhost'=password('MyNewPass4!'); \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("注意：mysql5.7默认安装了密码安全检查插件（validate_password），默认密码检查策略要求密码必须包含：大小写字母、数字和特殊符号，并且长度不能少于8位。否则会提示ERROR 1819 (HY000): Your password does not satisfy the current policy requirements错误，如下图所示：\n"),e("img",{attrs:{src:"images/160918124758194.png",alt:"密码策略提示"}})]),s._v(" "),e("p",[s._v("通过msyql环境变量可以查看密码策略的相关信息：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> show variables like '%password%';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"images/160918124758195.png",alt:"mysql密码策略"}}),s._v("\nvalidate_password_policy：密码策略，默认为MEDIUM策略\nvalidate_password_dictionary_file：密码策略文件，策略为STRONG才需要\nvalidate_password_length：密码最少长度\nvalidate_password_mixed_case_count：大小写字符长度，至少1个\nvalidate_password_number_count ：数字至少1个\nvalidate_password_special_char_count：特殊字符至少1个\n"),e("em",[s._v("上述参数是默认策略MEDIUM的密码检查规则。")])]),s._v(" "),e("p",[s._v("共有以下几种密码策略：")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("策略")]),s._v(" "),e("th",[s._v("检查规则")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("0 or LOW")]),s._v(" "),e("td",[s._v("Length")])]),s._v(" "),e("tr",[e("td",[s._v("1 or MEDIUM")]),s._v(" "),e("td",[s._v("Length; numeric, lowercase/uppercase, and special characters")])]),s._v(" "),e("tr",[e("td",[s._v("2 or STRONG")]),s._v(" "),e("td",[s._v("Length; numeric, lowercase/uppercase, and special characters; dictionary file")])])])]),s._v(" "),e("p",[s._v("MySQL官网密码策略详细说明：http://dev.mysql.com/doc/refman/5.7/en/validate-password-options-variables.html#sysvar_validate_password_policy")]),s._v(" "),e("h4",{attrs:{id:"修改密码策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改密码策略"}},[s._v("#")]),s._v(" 修改密码策略")]),s._v(" "),e("p",[s._v("在/etc/my.cnf文件添加validate_password_policy配置，指定密码策略")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 选择0（LOW），1（MEDIUM），2（STRONG）其中一种，选择2需要提供密码字典文件\nvalidate_password_policy=0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("如果不需要密码策略，添加my.cnf文件中添加如下配置禁用即可：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("validate_password = off\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("重新启动mysql服务使配置生效：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl restart mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_6、添加远程登录用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、添加远程登录用户"}},[s._v("#")]),s._v(" 6、添加远程登录用户")]),s._v(" "),e("p",[s._v("默认只允许root帐户在本地登录，如果要在其它机器上连接mysql，必须修改root允许远程连接，或者添加一个允许远程连接的帐户，为了安全起见，我添加一个新的帐户：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> GRANT ALL PRIVILEGES ON *.* TO 'yangxin'@'%' IDENTIFIED BY 'Yangxin0917!' WITH GRANT OPTION;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_7、配置默认编码为utf8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、配置默认编码为utf8"}},[s._v("#")]),s._v(" 7、配置默认编码为utf8")]),s._v(" "),e("p",[s._v("修改/etc/my.cnf配置文件，在[mysqld]下添加编码配置，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[mysqld]\ncharacter_set_server=utf8\ninit_connect='SET NAMES utf8'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("重新启动mysql服务，查看数据库默认编码如下所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"images/160918124758196.png",alt:"mysql默认编码"}})]),s._v(" "),e("hr"),s._v(" "),e("p",[e("strong",[s._v("默认配置文件路径：")]),s._v("\n配置文件：/etc/my.cnf\n日志文件：/var/log//var/log/mysqld.log\n服务启动脚本：/usr/lib/systemd/system/mysqld.service\nsocket文件：/var/run/mysqld/mysqld.pid")])])}),[],!1,null,null,null);a.default=r.exports}}]);