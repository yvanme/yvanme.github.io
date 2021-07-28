(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{518:function(s,n,r){"use strict";r.r(n);var e=r(27),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,r=s._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"centos7修改文件及文件夹权限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#centos7修改文件及文件夹权限"}},[s._v("#")]),s._v(" CentOS7修改文件及文件夹权限")]),s._v(" "),r("h2",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),r("p",[s._v("[TOC]")]),s._v(" "),r("p",[r("strong",[s._v("环境：CentOS7")])]),s._v(" "),r("p",[s._v("Linux一般将文件可存取访问的身份分为3个类别，分别是owner、group、others，且3种身份各有read、write、execute等权限。每个账号都可以有多个用户组支持。")]),s._v(" "),r("ul",[r("li",[s._v("/etc/passwd，默认情况下所有系统上的账号与一般身份用户还有root的相关信息，都记录在这个文件夹中。")]),s._v(" "),r("li",[s._v("/etc/shadow，个人密码记录在这个文件夹中。")]),s._v(" "),r("li",[s._v("/etc/group，所有的组名记录在这个文件夹中。")])]),s._v(" "),r("p",[r("strong",[s._v("Linux文件权限概念")])]),s._v(" "),r("p",[r("strong",[s._v("Linux文件属性")])]),s._v(" "),r("p",[s._v("$ls -al，ls是“list”的意思，重点在显示文件的文件名与相关属性。参数“-al”则表示列出所有的文件详细权限与属性（包含隐藏文件，就是文件名第一个字符为“.”的文件）")]),s._v(" "),r("p",[s._v("显示的每一行会有如下格式，例如：")]),s._v(" "),r("p",[s._v("-rw-r--r--        1           root           root          42304          Sep 4 18:26        install.log，分别表示：")]),s._v(" "),r("p",[s._v("权限          连接        所有者         用户组        文件容量          修改日期             文件名")]),s._v(" "),r("p",[s._v("权限-rw-r--r--中拥有10个字符，分别代表如下：")]),s._v(" "),r("p",[s._v("第1个字符代表文件的类型。“d”代表目录，“-”代表文件，“l”代表链接文件（linkfile），“b”表示设备文件里面的可供存储的接口设备，“c”表示设备文件里面的串行端口设备，例如鼠标键盘（一次性读取设备）。")]),s._v(" "),r("p",[s._v("接 下来的字符，以3个为一组，且均为“rwx”的3个参数组合，“r”表示可读，“w”表示可写，“x”表示可执行（execute），这三个权限的位置不 会改变，如果没有权限，则以减号“-”代替。第一组为文件所有者的权限，第二组为同用户组的权限，第三组为其他非本用户组的权限。")]),s._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("-rw-------    (600) 只有所有者才有读和写的权限  \n\n-rw-r--r--    (644) 只有所有者才有读和写的权限，组群和其他人只有读的权限  \n\n-rwx------    (700) 只有所有者才有读，写，执行的权限  \n\n-rwxr-xr-x    (755) 只有所有者才有读，写，执行的权限，组群和其他人只有读和执行的权限  \n\n-rwx--x--x    (711) 只有所有者才有读，写，执行的权限，组群和其他人只有执行的权限  \n\n-rw-rw-rw- (666) 每个人都有读写的权限  \n\n-rwxrwxrwx (777) 每个人都有读写和执行的权限  \n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br"),r("span",{staticClass:"line-number"},[s._v("11")]),r("br"),r("span",{staticClass:"line-number"},[s._v("12")]),r("br"),r("span",{staticClass:"line-number"},[s._v("13")]),r("br")])]),r("p",[r("strong",[s._v("如何改变文件属性与权限")])]),s._v(" "),r("ul",[r("li",[r("p",[r("strong",[s._v("chgrp，改变文件所属用户组")])]),s._v(" "),r("p",[s._v("chgrp就是change group的简称，使用该指令时，要被改变的组名必须在/etc/group文件内存在才行。")]),s._v(" "),r("p",[s._v("#chgrp [-R] group filename(or dirname)，其中R表示进行递归（recursive）的持续更改，也即连同子目录下的所有文件、目录。所以当修改一个目录中所有文件的用户组（所有者与权限也一样）时，要加上-R。")]),s._v(" "),r("p",[s._v("例如将文件install.log改到users用户组")]),s._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[s._v("chgrp")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("users")]),s._v(" install.log\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])])]),s._v(" "),r("li",[r("p",[r("strong",[s._v("chown，改变文件所有者")])]),s._v(" "),r("p",[s._v("chown就是change owner的简称。")]),s._v(" "),r("p",[s._v("#chown [-R] user filename(or dirname)，改变file的文件所有者为user。")]),s._v(" "),r("p",[s._v("#chown [-R] .group filename(or dirname)，改变file的用户组为group（注意加点）。")]),s._v(" "),r("p",[s._v("#chown [-R] user.group filename(or dirname)，改变file的文件所有者为user，用户组为group。为避免“.”引起的系统误判，通常用一下命令表示该句：\n#chown [-R] user:group filename(or dirname)")]),s._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改a.txt文件所属用户（jay）和用户组（fefjay）：")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" jay:fefjay a.txt "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改文件所属用户为jay，所属用户组为fefjay")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只改文件夹本身所属用户和用户组，不改子文件（夹）")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#仅修改文件夹my本身所属用户（jay）和用户组（fefjay）：")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" jay:fefjay my "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改文件所属用户为jay，所属用户组为fefjay")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#改变文件夹及所有子文件（夹）所属用户和用户组")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#递归修改文件夹my及包含的所有子文件（夹）的所属用户（jay）和用户组（fefjay）：")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R jay:fefjay my "),r("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改文件所属用户为jay，所属用户组为fefjay")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br"),r("span",{staticClass:"line-number"},[s._v("4")]),r("br"),r("span",{staticClass:"line-number"},[s._v("5")]),r("br"),r("span",{staticClass:"line-number"},[s._v("6")]),r("br"),r("span",{staticClass:"line-number"},[s._v("7")]),r("br"),r("span",{staticClass:"line-number"},[s._v("8")]),r("br"),r("span",{staticClass:"line-number"},[s._v("9")]),r("br"),r("span",{staticClass:"line-number"},[s._v("10")]),r("br")])])]),s._v(" "),r("li",[r("p",[r("strong",[s._v("chmod，改变文件的权限。")])]),s._v(" "),r("p",[s._v("chmod就是change mode bits的简称。")]),s._v(" "),r("p",[s._v("数字类型改变文件权限：")]),s._v(" "),r("p",[s._v("#chmod [-R] xyz fileordir，其中x代表owner权限，y代表group权限，z代表others权限。")]),s._v(" "),r("p",[s._v("r=4，w=2，x=1，上面三种身份的权限是r+w+x的和，如果没有相应的权限，则值为0。")]),s._v(" "),r("p",[s._v("例如：install.log文件，owner=rwx=4+2+1=7，group=rwx=4+2+1=7，others=---=0+0+0=0，所以这个文件的将改变权限值为770：")]),s._v(" "),r("p",[s._v("#chmod 770 install.log。")])]),s._v(" "),r("li",[r("p",[r("strong",[s._v("符号类型改变文件权限")])]),s._v(" "),r("p",[s._v("我们可以用u，g，o三个参数来代表user，group，others 3种身份的权限。")]),s._v(" "),r("p",[s._v("a代表all，也即全部的身份。")]),s._v(" "),r("p",[s._v("读写的权限就可以写成r，w，x。")]),s._v(" "),r("p",[s._v("+，-，=分别代表加入，出去，设置一个权限。")]),s._v(" "),r("p",[s._v("加入要设置一个文件的权限成“-rwxr-xr-x，指令为：")]),s._v(" "),r("p",[s._v("#chmod u=rwx,go=rx filename，注意加上那个逗号。")]),s._v(" "),r("p",[s._v("要给一个文件的全部身份加上x权限，则指令为：")]),s._v(" "),r("p",[s._v("#chmod a+x filename。")])])]),s._v(" "),r("p",[r("strong",[s._v("目录与文件的权限意义")])]),s._v(" "),r("ul",[r("li",[r("p",[r("strong",[s._v("权限对文件的作用")])]),s._v(" "),r("p",[s._v("文件是实际含有数据的地方，包括一般文本文件、数据库内容文件、二进制可执行文件（binary program）等。")]),s._v(" "),r("p",[s._v("r（read）：可读取此文件实际内容。")]),s._v(" "),r("p",[s._v("w（write）：可以编辑、新增或者是修改该文件的内容（不能删除该文件）。")]),s._v(" "),r("p",[s._v("x（execute）：可以被系统执行。")])]),s._v(" "),r("li",[r("p",[r("strong",[s._v("权限对目录的作用")])]),s._v(" "),r("p",[s._v("r（read contemts in directory）可读取目录结构列表，可利用ls命令将该目录结构列表中的文件名显示出来（仅能显示文件名）。")]),s._v(" "),r("p",[s._v("w（modify contents of directory）可更改目录结构列表，如新建、删除、重命名、转移文件或目录。")]),s._v(" "),r("p",[s._v("x（access directory）可进入该目录成为工作目录（就是目前所在的目录），当登陆Linux时所在的~（即主文件夹）就是当前工作目录。")])])]),s._v(" "),r("p",[s._v("工作目录对于命令的执行非常重要，如果对一个目录不具有x权限，则无法使该目录称为工作目录，也就无法执行该目录下的任何命令。")]),s._v(" "),r("p",[s._v("要开放目录给任何人浏览时，应该至少给予r和x的权限，但w的权限不可以随便给。")]),s._v(" "),r("p",[s._v("如果具有对一个目录的w权限，那么该目录下的任何文件都可以删除，不管要删除的文件的所有者和用户组是什么。")]),s._v(" "),r("p",[r("strong",[s._v("Linux文件种类与扩展名")])]),s._v(" "),r("p",[r("strong",[s._v("文件种类")])]),s._v(" "),r("ul",[r("li",[r("p",[s._v("普通文件（regular file）：[-]")]),s._v(" "),r("p",[s._v("纯文本文件（ASCⅡ）：Linux中最多的一种文件类型。可以执行下列命令来查看一个隐藏文件：")]),s._v(" "),r("p",[s._v("$cat ~/.bashrc，cat是将一个文件内容读出来的命令。")]),s._v(" "),r("p",[s._v("二进制文件（binary）：Linux中的可执行文件就是这种格式的（scripts、文字批处理文件不算），.bashrc就是这种格式。")])]),s._v(" "),r("li",[r("p",[s._v("目录（directory）：[d]")])]),s._v(" "),r("li",[r("p",[s._v("链接文件（link）：[l]，有点类似windows下的快捷方式。")])])]),s._v(" "),r("p",[s._v("设 备与设备文件（device）通常分为一下两种：块（block）设备文件，[ d]，就是一些存储数据以提供系统随机访问的接口设备，如硬盘等。可以随机地在硬盘的不同块读写，这种设备就是成组设备；字符（character）设备 文件，就是一些串行端口的接口设备，如键盘鼠标，特点是“一次性读取”，不能够阶段输出，比如鼠标不可能跳到另一个地方，只能划过去。")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("套接字（sockets）：[s]，通常被用在网络上的数据连接。我们可以启动一个程序来监听客户端的请求，而客户端就可以通过这个socket来进行书序的通信。通常在/var/run这个目录中就能看到。")])]),s._v(" "),r("li",[r("p",[s._v("管道（FIFO，pipe）：[p]，主要目的在解决多一个程序同时访问一个文件所造成的错误问题。FIFO是first-in-first-out的缩写。")])])]),s._v(" "),r("p",[s._v("上面的套接字和管道都与进程比较有关，可以通过man  fifo及man socket来查阅。")]),s._v(" "),r("p",[s._v("一个Linux文件能不能被执行，与它的第一列的10个属性有关，与文件名一点关系都没有。")]),s._v(" "),r("p",[s._v("x权限代表这个文件具有可执行的能力，但能不能执行成功，要看该文件的内容。")]),s._v(" "),r("p",[s._v("我们希望可以通过扩展名了解该文件时什么东西，所以还是会使用适当的扩展名来表示该文件是什么种类的。")]),s._v(" "),r("p",[s._v("*.sh：脚本或批处理文件（scripts），因为批处理文件用shell写成的，所以扩展名就是.sh。")]),s._v(" "),r("p",[r("em",[s._v("Z、")]),s._v(".tar、*tar.gz、"),r("em",[s._v("zip、")]),s._v(".tgz：经过打包的压缩文件。由于不同的压缩软件而取其相关的扩展名。")]),s._v(" "),r("p",[r("em",[s._v(".html、")]),s._v(".php：网页相关文件，分别代表HTML语法与PHP语法的网页文件。.html的文件可以使用网页浏览器来直接启动；.php的文件，可以通过客户端的浏览器来服务端浏览，以得到运算后的网页结果。")]),s._v(" "),r("p",[s._v("从网络上传送到你的Linux系统中，文件的属性与权限可能是会改变的。")]),s._v(" "),r("p",[s._v("在Linux下，使用默认的Ext2/Ext3文件系统时，针对文件的文件名长度限制为：单一文件或目录的最大容许文件名为255个字符；包含完整路径名称及目录（/）的完整文件名为4096个字符。")]),s._v(" "),r("p",[s._v("由于Linux在文字界面下的一些命令操作的关系，在设置文件名时，最好能避免一些特殊的字符，如：*?><;&![]|'\"`(){}。")])])}),[],!1,null,null,null);n.default=a.exports}}]);