<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ include file="../common/import.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/11209/xhtml">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
		<title>认证信息</title>
		<link href="${pathView}/css/style.css" rel="stylesheet" type="text/css" />
	</head>

	<body>
		<div class="conbody">
			<div style="float:left; width:100%; height:107px;">
				<div class="contop">
					<%@ include file="../common/top.jsp"%>
					<div class="header">
						<p>
							<a href="#"><img src="${pathView}/images/pic/img_03.png" /></a>
						</p>
						<b>新增竞猜</b>
					</div>
				</div>
			</div>
			<form id="form1">
			<div class="concon">
				<div class="concon_div">
					<b><img src="${pathView}/images/pic/img_06.png" /></b>
					<p>龙大：</p>
					<input name="id_card" type="text" class="concon_box" value="30001022390239120383" />
				</div>
				<div class="concon_div">
					<p>手机号：</p>
					<input name="phone" type="text" class="concon_box" value="15987651300" />
				</div>
				<div class="concon_div">
					<p>保证金：</p>
					<input  type="text" class="concon_box"  /><b style="right:15px; top:7px; width:30px;"><img src="${pathView}/images/pic/img_07.png"/></b>
				</div>
				<div class="concon_div" style="background:none;">保证金额度关系到单个竞猜选项的参与额度上限，具体规则参 考发起竞猜规则
				</div>
				<div class="concon_div" style="background:none;"><input name="" type="button" value="下一步" class="concon_icon" /></div>
			</div>
		</form>
		</div>
		<script>
		/**
			p.json("/app/authentication_view.html").then(function(data) {
				alert(data)
			});**/
			var dataInfo = JSON.parse('{"id_card":"5511333021541251212","is_authen":"1","phone":"18757113775","pkUser":"5511333021541251212","gold_count":"3000","diamonds_count":"1000","has_newmsg":"1","error_code":"0","error_msg":"suc"}');
			if(p.jsonCheck(dataInfo)){
				$("#form1").find("input[name=id_card]").val(dataInfo.id_card);
					$("#form1").find("input[name=phone]").val(dataInfo.phone);
			}
		</script>
	</body>

</html>
