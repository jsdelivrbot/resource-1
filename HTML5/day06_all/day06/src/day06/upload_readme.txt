
上传文件
1:工作流程
  客户端有一张图片->通过浏览器发送-->服务器->文件夹
2:创建哪些程序和目录完成上传
  2.1:创建目录  uploads
  2.2:创建php  homework1.php
  2.3:创建html homework1.html

3:php 坑跳出去(上传文件不能太多 128MB)
copy php.ini-->php1.ini-->php2.ini
配置 php.ini 如下：
是否允许上传文件
file_uploads = On
上传文件的临时止录
upload_tmp_dir = "d:/fileuploadtmp"
上传文件最大值
upload_max_filesize = 50M
post上传文件最大值(大于上面值)
post_max_size = 100M
单个php执行时长
max_execution_time = 600
输入数据文件时长
max_input_time = 600
单个php使用内存最大值
memory_limit = 128M
