(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{545:function(s,a,e){"use strict";e.r(a);var t=e(27),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos7mini安装vm-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7mini安装vm-tools"}},[s._v("#")]),s._v(" CentOS7mini安装vm-tools")]),s._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),e("p",[s._v("[TOC]")]),s._v(" "),e("p",[e("strong",[s._v("环境：CentOS7")])]),s._v(" "),e("h2",{attrs:{id:"一、安装依赖包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、安装依赖包"}},[s._v("#")]),s._v(" 一、安装依赖包")]),s._v(" "),e("p",[s._v("1、依赖安装")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" perl gcc gcc-c++ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" cmake kernel kernel-headers kernel-devel net-tools\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2、重启电脑")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#主要是为了确保kernel安装成功")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"二、加载vmware-tools-到centos7光驱cd-rom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、加载vmware-tools-到centos7光驱cd-rom"}},[s._v("#")]),s._v(" 二、加载vmware tools 到CentOS7光驱CD-ROM")]),s._v(" "),e("p",[s._v("1、通常情况下都是将设备目录 /dev/crrom 挂载到 /mnt/cdrom 目录,如果 /mnt 目录下不存在 cdrom 目录则创建")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不存在 /mnt/cdrom 则创建")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /mnt/cdrom\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#挂载目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -t auto /dev/cdrom /mnt/cdrom\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("2、拷贝安装包到用户家目录")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /mnt/cdrom/VMwareTools-10.3.21-14772444.tar.gz ~\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3、解除挂载")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /dev/cdrom\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4、解压安装包")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf VMwareTools-10.3.21-14772444.tar.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"三、安装vmware-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、安装vmware-tools"}},[s._v("#")]),s._v(" 三、安装"),e("code",[s._v("VMware Tools")])]),s._v(" "),e("p",[s._v("1、安装VMware Tools")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vmware-tools-distrib/\n./vmware-install.pl \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);