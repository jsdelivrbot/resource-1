<?php
/*
打印九九乘法表——本质就是三角形
*
**
***    3*1=1   3*2=6    3*3=9
****
*/

#思路：$j:控制行数1~9    $i:控制一行中第二乘数的个数1~$j
$j = 1;

while($j<=9){
	/////////输出每一行中的内容////////////		11:11
	$i = 1;
	while($i<=$j){
		echo "$j*$i=".$j*$i."&nbsp;&nbsp;";
		$i++;
	}
	echo "<br>";
	///////////////////////////////////////
	$j++;
}
