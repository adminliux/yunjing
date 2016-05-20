<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="../common/import.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/11209/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
<title>货币兑换</title>
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
	<b>货币兑换</b>
    </div>
    </div>
    </div>
    <div class="concon">
    <div class="duihuan">兑换比例：100金币=1钻石</div>
    <div class="concon_div">
    <p style="width:32%;">兑换金币数：</p>
    <input name="" type="text" class="concon_box" value="5000" style="width:50%;; color:#f1b74c;"  /></b>
    </div>
    <div class="duihuan">可兑换数量：1000金币</div>
    <div class="duihuan">
    <p><em>本次消耗：1000金币</em><img src="${pathView}/images/pic/img_07.png"/></p>
    <bdo><em>换的1000钻石</em><img src="${pathView}/images/pic/img_28.png" /></bdo>
    </div>
    <div class="concon_div" style="background:none;"><input name="" type="button" value="确认" class="concon_icon" onclick="javascript:void(0);controlColl();"/></div>
    <div class="duihuan"  style="padding-top:5px; font-size:14px;">点击“确认”按钮即表示您同意《用户使用协议》</div>
    </div>
    <div style="position:relative; float:left; width:100%;">
 <div class="shanchu2">
<div class="xialatwo" style="display: none;" id="Coll">
	<div class="chacha"><a href="#" onclick="controlColl();"><img src="${pathView}/images/pic/img_19.png"/></a></div>
    <div class="bg" style="top:15px;"><img src="${pathView}/images/pic/img_21.jpg"/></div>
    <div class="xialatwo_a"><img src="${pathView}/images/pic/img_29.png"/></div>
     <div class="xialatwo_a" style="width:20%; left:40%; top:36%;"><img src="${pathView}/images/pic/img_28.png"  style="width:70px;"/></div>
    <div class="xialatwo_a" style="top:57%;"><p>获得：5000钻石</p></div>
    <div class="xialatwo_b" style="top:70%;">
 <input type="button"  class="xialatwo_icon2" value="继续兑换" onclick="controlColl();" style="padding-left:12%; padding-right:12%;"/>
  <input type="button"  class="xialatwo_icon3" value="去换奖品" onclick="controlColl();" style="padding-left:12%; padding-right:12%;"/>
 </div>
    </div>
    </div>
<div class="shanchu" style="display: none;" id="sharebig" ></div>
<script type="text/javascript">
/**
 * 控制分享提示层
 *
 * */
function controlColl(){
	var obj = document.getElementById('Coll').style.display;
	if(obj == 'none'){
		document.getElementById('Coll').style.display = 'block';
	}else{
		document.getElementById('Coll').style.display = 'none';
	}

	var obj2 = document.getElementById('sharebig').style.display;
	if(obj2 == 'none'){
		document.getElementById('sharebig').style.display = 'block';
	}else{
		document.getElementById('sharebig').style.display = 'none';
	}
}
</script>
</div>
</div>
</body>
</html>
