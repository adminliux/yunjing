<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="../common/import.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/11209/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
<title>水哥发起的竞猜</title>
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
	<b>水哥发起的竞猜</b>
    </div>
    </div>
    </div>
    <div class="concon">
   <div class="concon_p" style="margin-top:10px;">
   <div class="concon_e"><b>竞猜中</b><img src="${pathView}/images/pic/img_17.png"  /><p><a href="#"><img src="${pathView}/images/pic/img_26.png" /></a></p>
   </div>
   <div class="concon_v">03/04 WCA小组赛 15:00</div>
   <ul>
   <li><img src="${pathView}/images/pic/img_10.png" /><p>Sk</p></li>
   </ul>
   <div class="concon_zi">
   <p style="margin-top:15px; font-size:20px;"><strong style="margin-right:10px;">2</strong>VS<strong style=" margin-left:10px;">0</strong></p>
    <p style="margin-top:12px;">BO3</p>
   </div>
   <ul style="padding-left:0px; padding-right:5%;">
   <li><img src="${pathView}/images/pic/img_11.png" /><p>M3</p></li>
   </ul>
   </div>
   <div class="concon_p" style="margin-top:10px;">
   <div class="concon_e"><b>竞猜中</b><img src="${pathView}/images/pic/img_17.png"  /><p><a href="#"><img src="${pathView}/images/pic/img_31.png" /></a></p>
   </div>
   <div class="concon_v">04/10 城市争霸赛 12:00</div>
   <ul>
   <li><img src="${pathView}/images/pic/img_32.png" /><p>Sk</p></li>
   </ul>
   <div class="concon_zi">
   <p style="margin-top:15px; font-size:20px;"><strong style="margin-right:10px;">2</strong>VS<strong style=" margin-left:10px;">0</strong></p>
    <p style="margin-top:12px;">BO3</p>
   </div>
   <ul style="padding-left:0px; padding-right:5%;">
   <li><img src="${pathView}/images/pic/img_33.png" /><p>M3</p></li>
   </ul>
   </div>
   <div class="concon_p" style="margin-top:10px;">
   <div class="concon_e"><b>未通过</b><img src="${pathView}/images/pic/img_18.png"  /><p><a href="#"><img src="${pathView}/images/pic/img_31.png" /></a></p>
   </div>
   <div class="concon_v">03/04 WCA小组赛 15:00</div>
   <ul>
   <li><img src="${pathView}/images/pic/img_32.png" /><p>Sk</p></li>
   </ul>
   <div class="concon_zi">
   <p style="margin-top:15px; font-size:20px;"><strong style="margin-right:10px;">2</strong>VS<strong style=" margin-left:10px;">0</strong></p>
    <p style="margin-top:12px;">BO3</p>
   </div>
   <ul style="padding-left:0px; padding-right:5%;">
   <li><img src="${pathView}/images/pic/img_33.png" /><p>M3</p></li>
   </ul>
   </div>
    </div>
</div>
<script>
	var quizList = (function(){
		function init() {
			laodList();
		}

		function laodList(){
			$.json("/app/index/guess.html").then(function(data) {

			});
		}
		return {init:init};
	})();
	quizList.init();
</script>
</body>
</html>
