<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>首页</title>
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
	for(var i=1;i<=n;i++){
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
    <div class="zongxk">
    <div class="zongxk_t">
    <ul>
    <c:forEach items="${indexList }" var="result" varStatus="i" begin="1">
    <li id="one${i.count }" onclick="setTab('one',${i.count},4)" <c:if test="${i.count == 1 }">class="hover"</c:if>>${result.SET_NAME }</li>
    </c:forEach>
   <!--  <li id="one2" onclick="setTab('one',2,4)">滨水旅游</li>
    <li id="one3" onclick="setTab('one',3,4)">旅游营销</li>
    <li id="one4" onclick="setTab('one',4,4)">养生旅游</li> -->
    </ul>
    </div>
    <div class="zongxk_c">
   
    <div class="dd" id="con_one_1">
    <div class="zongxk_s"><b>负责人：${map2.PRINCIPAL }</b><bdo><a href="/teachers/all/1.html" title="更多团队成员"  target="_blank">更多团队成员</a></bdo>
    </div>
    <div class="zongxk_x">
    <div class="zongxk_l">
    <dl>
    <dt><img src="${map2.IMG }" width="131"/></dt>
    <dd><b>个人荣誉</b></dd>
    <dd>${map2.MESSAGE }</dd>
    </dl>
    </div>
    <div class="zongxk_r">
    <div class="zongxk_rs"><b>学科方向</b></div>
    <div class="zongxk_div">${map2.SUBJECT }</div>
    </div>
    </div>
    </div>
    <div class="dd" id="con_one_2" style="display:none;">
    <div class="zongxk_s"><b>负责人：${map3.PRINCIPAL }</b><bdo><a href="/teachers/all/1.html" title="更多团队成员"  target="_blank">更多团队成员</a></bdo>
    </div>
    <div class="zongxk_x">
    <div class="zongxk_l">
    <dl>
    <dt><img src="${map3.IMG }" width="131"/></dt>
    <dd><b>个人荣誉</b></dd>
    <dd>${map3.MESSAGE }</dd>
    </dl>
    </div>
    <div class="zongxk_r">
    <div class="zongxk_rs"><b>学科方向</b></div>
    <div class="zongxk_div">${map3.SUBJECT }</div>
    </div>
    </div>
    </div>
    <div class="dd" id="con_one_3" style="display:none;">
    <div class="zongxk_s"><b>负责人：${map4.PRINCIPAL }</b><bdo><a href="/teachers/all/1.html" title="更多团队成员"  target="_blank" >更多团队成员</a></bdo>
    </div>
    <div class="zongxk_x">
    <div class="zongxk_l">
    <dl>
    <dt><img src="${map4.IMG }" width="131" /></dt>
    <dd><b>个人荣誉</b></dd>
    <dd>${map4.MESSAGE }</dd>
    </dl>
    </div>
    <div class="zongxk_r">
    <div class="zongxk_rs"><b>学科方向</b></div>
    <div class="zongxk_div">${map4.SUBJECT }</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="yantao">
    <div class="titiletwo"><b>学科建设研讨</b><bdo><a href="/wenzhang/${yantaoMap.article.PK_ARTICLE }.html" title="详情">详情</a></bdo></div>
    <div class="yantao_c">
    <div class="yantao_div">${yantaoMap.article.CONTENT }</div></div>
    </div>
    <div class="yantao">
    <div class="titiletwo"><b>新闻动态</b><bdo><a href="/liebiao/1/1.html" target="_blank" title="更多">更多</a></bdo></div>
    <div class="xinwen">
    <c:forEach items="${newsList }" var="result">
    <div class="xinwen_div">
    <p><a href="/wenzhang/${result.PK_ARTICLE }.html" title=" ${result.TITLE }">${result.TITLE }</a></p>
    <bdo>${result.OPTERATE_TIME }</bdo><b><em style="color:#9e9e9e;">浏览次数：${result.VIEW_NUM }</em></b>
    </div>
    </c:forEach>
    </div>
    </div>
    <div class="yantao">
    <div class="titiletwo"><b>学术交流</b><bdo><a href="/liebiao/2/1.html" title="更多">更多</a></bdo></div>
    <div class="xinwen">
    <c:forEach items="${studyList }" var="result">
    <div class="xinwen_div">
    <p><a href="/wenzhang/${result.PK_ARTICLE }.html" title=" ${result.TITLE }">${result.TITLE }</a></p>
    <bdo>${result.OPTERATE_TIME }</bdo><b><em style="color:#9e9e9e;">浏览次数：${result.VIEW_NUM }</em></b>
    </div>
    </c:forEach>
    </div>
    </div>
    <div class="yantao">
    <div class="titiletwo"><b>学科概况</b><bdo><a href="/wenzhang/${xuekeMap.article.PK_ARTICLE }.html" title="详情">详情</a></bdo></div>
    <div class="yantao_c">
    <div class="yantao_div">${xuekeMap.article.CONTENT}</div>
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
	