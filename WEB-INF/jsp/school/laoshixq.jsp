<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>老师详情</title>
<link href="/skins/css/global.css" rel="stylesheet" type="text/css" />
<link href="/skins/css/style.css" rel="stylesheet" type="text/css" />
<script src="/js/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript">
var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

function jsddm_open()
{	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');}

function jsddm_close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{	closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}

$(document).ready(function()
{	$('#jsddm > li').bind('mouseover', jsddm_open);
	$('#jsddm > li').bind('mouseout',  jsddm_timer);});

document.onclick = jsddm_close;
  </script>
<script language="javaScript" type="text/javascript">
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		if(menu != undefined && menu != null) menu.className=(i==cursel?"hover":"");
		if(con != undefined && con != null) con.style.display=(i==cursel?"block":"none");
	}
}
</script>
</head>
<body>
<div class="conbody">
   <jsp:include page="head.jsp" ></jsp:include>
  <div class="context">
    <div class="content">
      <div class="concon">
        <div class="banner"><img src="/skins/images/index/img_10.jpg" width="960" height="204" /></div>
        <div class="conone">
          <jsp:include page="left.jsp" ></jsp:include>
          <div class="conone_r">
          <div class="pingwei_t"><b>名师风采</b>
                <bdo><a href="/teachers/all/1.html" title="返回">返回</a></bdo>
              </div>
          <div class="list">
     <div class=" list_s">
     <div class="list_l">
     <dl>
     <dt><img src="${teacherMap.IMG }" width="131" /></dt>
     <dd><b>${teacherMap.NAME }</b></dd>
     <dd>${teacherMap.MESSAGE}</dd>
     </dl>
     </div>
     </div>
     <div class="list_x">
     <div class="list_x_div"><b>工作单位</b></div>
     <div class="list_x_div2">${teacherMap.COMPANY }</div>
     <div class="list_x_div"><b>项目成果</b></div>
     <div class="list_x_div2">${teacherMap.DELIVERABLE }</div>
     <div class="list_x_div"><b>曾获奖项</b></div>
     <div class="list_x_div2">
     <p>${teacherMap.AWARD }</p>
     </div>
     </div>
     </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <jsp:include page="foot.jsp" ></jsp:include>
</div>
</body>
</html>
	