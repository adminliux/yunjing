<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="../common/import.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/11209/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
<title>兑奖</title>
<link href="${pathView}/css/style.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="conbody">
    <div style="float:left; width:100%; height:107px;">
    <div class="contop">
    <div class="top">
    <ul>
    <li><b><a href="#"><img src="${pathView}/images/pic/img_01.png" /></a></b><p>2819</p><bdo><a href="#"><img src="${pathView}/images/pic/img_04.png" /></a></bdo>
    </li>
    <li style="margin-right:0px;"><b><a href="#"><img src="${pathView}/images/pic/img_02.png" style="width:24px; margin-top:5px;" /></a></b><p>3597</p><bdo><a href="#"><img src="${pathView}/images/pic/img_05.png" /></a></bdo>
    </li>
    </ul>
    <em><a href="#"><img src="${pathView}/images/pic/img_08.png" /></a></em>
    </div>
    <div class="header">
    <p><a href="#"><img src="${pathView}/images/pic/img_03.png" /></a></p>
	<b>消费记录</b>
    </div>
    </div>
    </div>
    <div class="concon">
    <div class="list">
    <div class="list_t">奖品信息</div>
    <div class="duijiang">
    <dl>
    <dt><img src="${pathView}/images/pic/img_40.jpg" /></dt>
    <dd style="padding-top:0px;">赏金猎人爱玛小姐
    <p><img src="${pathView}/images/pic/img_35.png"/><bdo>40</bdo></p>
    </dd>
    <dd>库存：10件</dd>
    <dd><a href="#"><img src="${pathView}/images/pic/img_41.jpg" /></a><input name="" type="text" class="duijiang_box" value="1" /><a href="#"><img src="${pathView}/images/pic/img_42.jpg"  style="border-left:none; border-right:1px solid #b2baee;"/></a></dd>
    <dd><em>当前钻石余额不足</em></dd>
    </dl>
    </div>
    </div>
    <div class="list">
    <div class="list_t">收货人信息</div>
    <div class="concon_div">
    <p>姓名</p>
    <input name="" type="text" class="concon_box" />
    </div>
    <div class="concon_div">
    <p>手机</p>
    <input name="" type="text" class="concon_box" />
    </div>
    <div class="concon_div">
    <p>说明</p>
    <textarea name="" cols="" rows="" class="concon_text"></textarea>
    </div>
    </div>
    </div>
    <div style="float:left; width:100%; height:49px;">
	<div class="bottom">
    <p><img src="${pathView}/images/pic/img_35.png" /></p>
    <p>钻石总额：200</p>
    <input name="" type="button" class="bottom_icon" value="确认兑奖" />
     </div>
	</div>
</div>
</body>
</html>
