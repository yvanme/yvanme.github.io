(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{426:function(s,a,t){"use strict";t.r(a);var e=t(27),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos7下spark环境搭建-单机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7下spark环境搭建-单机"}},[s._v("#")]),s._v(" Centos7下Spark环境搭建（单机）")]),s._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("[TOC]")]),s._v(" "),t("p",[t("strong",[s._v("安装环境：")])]),s._v(" "),t("p",[t("strong",[s._v("system：CentOS7")])]),s._v(" "),t("p",[t("strong",[s._v("jdk:jdk-8u201")])]),s._v(" "),t("p",[t("strong",[s._v("hadoop:hadoop-2.7.7")])]),s._v(" "),t("p",[t("strong",[s._v("scala:scala-2.13.0")])]),s._v(" "),t("p",[t("strong",[s._v("spark:spark-2.4.3-bin-hadoop2.7")])]),s._v(" "),t("h2",{attrs:{id:"jdk安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk安装"}},[s._v("#")]),s._v(" jdk安装")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("解压jdk包")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[s._v("tar -zvxf jdk-8u201-linux-x64.tar.gz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置环境变量")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#修改/etc下profile文件，加入以下配置并使用source /etc/profile命令使之生效\n\n#Java\nexport JAVA_HOME=/apps/jdk1.8.0_201\nexport CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar \nexport PATH=$PATH:$JAVA_HOME/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"spark安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spark安装"}},[s._v("#")]),s._v(" Spark安装")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("解压spark包")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[s._v("tar -zvxf spark-2.4.3-bin-hadoop2.7.tgz\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置环境变量")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("#修改/etc下profile文件，加入以下配置并使用source /etc/profile命令使之生效\n#Spark\nexport SPARK_HOME=/apps/spark-2.4.3-bin-hadoop2.7\nexport PATH=$PATH:${SPARK_HOME}/bin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("配置Spark")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("进入 ${SPARK_HOME}/conf 目录")])]),s._v(" "),t("li",[t("p",[s._v("执行如下命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cp spark-env.sh.template spark-env.sh\ncp slaves.template slaves\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("编辑 "),t("a",{attrs:{href:"http://spark-env.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("spark-env.sh"),t("OutboundLink")],1),s._v("，在末尾添加")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#JAVA_HOME：指定的是 Java 的安装目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/apps/jdk1.8.0_201\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SPARK_MASTER_IP：指定的是 Spark 集群的 Master 节点的 IP 地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SPARK_MASTER_IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SPARK_WORKER_MEMOERY：指定的 Worker 节点能够最大分配给 Excutors 的内存大小")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SPARK_WORKER_MEMORY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])])]),s._v(" "),t("li",[t("p",[s._v("启动Spark")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("进入${SPARK_HOME}/sbin 目录，执行如下命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("./start-all.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])]),s._v(" "),t("li",[t("p",[s._v("浏览器访问http://localhost:8080/")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);