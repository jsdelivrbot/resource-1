<?php
/*
  练习：使用for循环输出0/1/2...99		
  练习：使用for循环输出99/98...0
  练习：使用for循环输出0/2/4..98
  练习：使用for循环输出95/90/85...5/0
*/
#思路：
#循环条件：$i=0   $i<100
#循环主体：echo $i

#for(;;){			#while(true){

for($i=0; $i<100; $i++){
	echo $i."/";
}

echo "<hr>";


#思路：
#循环条件：$i=99   $i>=0
#循环主体：echo $i

for($i=99; $i>=0; $i--){
	echo "$i/";
}


echo "<hr>";


#思路：
#循环条件：$i=0   $i<100
#循环主体：echo $i

for($i=0; $i<100; $i+=2){
	echo "$i/";
}

echo "<hr>";
#思路：
#循环条件：$i=95   $i>=0
#循环主体：echo $i

for($i=95; $i>=0; $i-=5){
	echo "$i/";
}

