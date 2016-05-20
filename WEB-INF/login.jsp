<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>登录</title>
<link href="/skins/css/global.css" rel="stylesheet" type="text/css" />
<link href="/skins/css/denglu.css" rel="stylesheet" type="text/css" />
<link href="/skins/css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/js/myou.min.js"></script>
<script type="text/javascript">
/**  验证码  */
function loadimage(){
	var img=document.getElementById("randImage");
		img.src="/security/jcaptcha.html?"+Math.round(Math.random()*100000);				
}

function login(){
	var name = get('name').value;
	var password = get('password').value;
	var j_captcha = get('j_captcha').value;
	if(name == "" || password == ""){
		alert("账号密码不能为空");
		return;
	}
	if(j_captcha == ""){
		alert("请输入验证码");
		return;
	}
	myou.ajax({
		url : '/memberLogin.json',
		data : {
			name : name,
			password : password,
			j_captcha : j_captcha,
		},
		success : function(text) {
			if (text == "suc") {
				parent.location.reload();
			}else if(text == "codeError"){
				alert("验证码错误");
				loadimage();
			}else{
				alert("账户或密码错误，请重新输入");
				loadimage();
			}
		}
	});
}
</script>
</head>
<body>
<div class="denglucon_r">
    <div class="hydenglu">
    <div class="hydenglu_s">
    <b>会员登录</b>
    </div>
    <div class="hydenglu_div"><p><em>账户名：</em></p><input id="name" type="text"  class="hydenglu_box"/></div>
    <div class="hydenglu_div"><p><em>登录密码：</em></p><input id="password" type="password"  class="hydenglu_box"/></div>
    <div class="hydenglu_div"><p><em>验证码：</em></p><input id="j_captcha" type="text"  class="hydenglu_box2"/>
    <a href="javascript:loadimage();"><img src="/security/jcaptcha.html" width="72" height="28" id="randImage"/></a></div>
    <div class="hydenglu_x">
    <input name="" type="button" onclick="login();" class="hydenglu_icon"/>
    </div>
    </div>
    </div>
</body>
</html>
