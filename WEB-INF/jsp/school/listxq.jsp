<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>新闻详情</title>
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

function iFrameHeight() {   
var ifm= document.getElementById("iframepage");   
var subWeb = document.frames ? document.frames["iframepage"].document : ifm.contentDocument;   
if(ifm != null && subWeb != null) {
   ifm.height = subWeb.body.scrollHeight;
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
    <div class="zixunxq_zi">
    <div class="zixunxq_zib"><strong>${article.TITLE }</strong></div>
	<div class="zixunxq_zib"><span>作者：${article.AUTHER }  发布日期：${article.OPTERATE_TIME }  浏览量：${article.VIEW_NUM }次</span></div>
	<iframe frameborder="1" style="width:100%;heigth:100%;" scrolling="no" src="/content.html?code=${code }" id="iframepage" onload="iFrameHeight();"></iframe>
	</div>
    <div class="yantao">
    <div class="titiletwo"><b>相关资讯</b><bdo><a href="/liebiao/${article.PK_ARTICLE_TYPE }/1.html" title="更多">更多</a></bdo></div>
    <div class="xinwen">
    <c:forEach items="${commonList }" var="result">
    <div class="xinwen_div">
    <p><a href="/wenzhang/${result.PK_ARTICLE }.html" title="${result.TITLE  }">${result.TITLE  }</a></p>
    <bdo>${result.OPTERATE_TIME }</bdo><b><em style="color:#9e9e9e;">浏览次数：${result.VIEW_NUM }</em></b>
    </div>
    </c:forEach>
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
	