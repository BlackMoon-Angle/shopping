<?php

  // 解决中文乱码
  header('content-type: text/html;charset=utf-8;');

  //接收login.html中，input输入框所输入的参数
  $n = $_POST['username'];
  $pw = $_POST['password'];

  //链接数据库
  $link = mysqli_connect('localhost', 'root', 'root', 'login');
  //查看是否链接成功
//   print_r($link);

//执行匹配，查看输入框中的账号和密码是否与数据库中的数据相匹配
$select_n_pw = "SELECT * FROM `login2` WHERE `username`='$n' AND `password`='$pw'";
$n_pw = mysqli_query($link,$select_n_pw);

//解析匹配结果
$n_pw_result = mysqli_fetch_assoc($n_pw);

// var_dump($n_pw_result);


//判断匹配结果
if ($n_pw_result) {//如果结果为true

    header('location: ../pages/index.html');

  } 
  else {

    echo '用户名或密码错误!';

  }

//断开链接
mysqli_close($link);

?>
