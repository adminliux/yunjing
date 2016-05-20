<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
<!--
body,div,dl,dt,dd,ul,li,h1,h2,h3,h4,h5,h6,h7,h8,form,input,p,strong,em{ margin:0; padding:0; font-size:12px; color:#313131; font:Arial, Helvetica, sans-serif;}
ul,dl{ list-style:none}
img{ vertical-align:top;border:0;}
h1,h2,,h3,h4,h5,h6,p{border:0;}
body{ background:url(/images/pic_02.gif) repeat; margin:100px;}

#content2{ width:400px; height:200px; margin:0 auto;}
.center{ width:302px; margin:0 auto;}
.center_s{ padding-left:55px; float:left; width:243px;}
.center_s img{ float:left; margin-right:15px;}
.center_s b{ float:left; color:#bc1818; font-size:27px; font-family:黑体; margin-top:12px; font-weight:bold;}
.center_x{ width:298px; float:left; margin-top:15px; border:2px solid #b9b9b9;padding-bottom:32px; background:#fff;}
.divv1{ float:left; padding-top:32px; width:100%; text-align:center; font-size:14px; font-weight:bold; color:#4c4c4c; }
.divv2{ float:left; padding-top:10px; padding-left:30px; width:268px;}
.divv2 em{ font-style:normal; color:#d50e0e; text-decoration:underline;}
-->
</style></head>

<body>
		<div id="content2">
        <div class="center">
        <div class="center_s">
          <img src="/images/pic_suc.gif" width="53" height="60" />
          <b>执行成功</b>
          </div>
          <div class="center_x">
          <div class="divv1">${sucMsg}</div>
          <div class="divv2">请刷新界面以继续 </div>
          </div>
        </div>
        </div>
</body>
</html>