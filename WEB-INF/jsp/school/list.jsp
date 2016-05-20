<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="java.util.*"%>
<%@page import="com.honey.vo.util.Page"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>${curName}</title>
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
<%
	Page<Map<String,Object>> pages = (Page<Map<String,Object>>)request.getAttribute("page");
%>
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
    <div class="yantao" style="margin-top:0px;">
    <div class="titiletwo"><b>${curName }</b></div>
    <div class="xinwen">
    <c:forEach items="${page.result }" var="result">
    <div class="xinwen_div">
    <p><a href="/wenzhang/${result.PK_ARTICLE }.html" title="${result.TITLE  }">${result.TITLE }</a></p>
    <bdo>${result.OPTERATE_TIME }</bdo><b><em style="color:#9e9e9e;">浏览次数：${result.VIEW_NUM }</em></b>
    </div>
    </c:forEach>
    </div>
    </div>
    <div class="confanye">
    <ul class="pagedown">
         <li>
		<%
		int pageNo = (Integer)request.getAttribute("curPages");
		int totalPage = pages.getTotalPages();
		boolean needFirst = pageNo !=1 && totalPage != 0;
		out.println("<em><a " + (needFirst? " href='" + 1 + "' " : "") + ">首页</a></em>");
		if(needFirst){
			out.println("<em><a href ='" + (pageNo - 1) + "'>上一页</a></em>" );
		}
		// 循环页数与当前页比较,如果在其范围内(前三后三),将其连接显示出来
		for (int i = 1; i <= totalPage; i++){
			if (i > pageNo - 3 && i < pageNo + 3){
				boolean isHover = i == pageNo;
				out.println("<em><a " + i + (isHover ? " class='current' " : " href='" + i + "'") + ">"+i+"</a></em>");
			}
		}
		boolean needEnd = pageNo!=totalPage && totalPage != 0;
		if(needEnd && ((pageNo + 1) <= totalPage)){
			out.println("<em><a href ='" + (pageNo + 1) + "'>下一页</a></em>" );
		}
		out.println("<em><a "+ (needEnd? " href='" + totalPage + "' " : "") +">末页</a></em>");
		%>
		
		</li>
       </ul>
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
	