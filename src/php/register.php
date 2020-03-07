<?php

// 解决中文乱码
header('content-type: text/html;charset=utf-8;');

//接收register.html中，input输入框所输入的参数
$n = $_POST['username'];
$pw = $_POST['password'];
$cc = $_POST['codecheck'];
$cc2 = $_POST['codecheck2'];

//链接数据库
$link = mysqli_connect('localhost', 'root', 'root', 'login');
//查看是否链接成功
//   print_r($link);


//判断
if ($cc = $cc2) { //如果结果为true

  //添加数据到数据库
  $new_user = mysqli_query($link, "INSERT INTO `login2` VALUES(null, '$n', '$pw')");

  if ($new_user) {

    echo "<script>alert('操作成功');parent.location.href='../pages/login.html';</script>";
  }
} else {
  echo "<script>alert('验证码不正确，请重新输入！');parent.location.href='../pages/register.html';</script>";
}
