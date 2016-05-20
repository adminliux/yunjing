<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="com.honey.vo.util.Commons" %>	
<%@ page import="java.util.List" %>	
<%@ page import="java.util.ArrayList" %>	
<%@ page import="java.util.Map" %>	
<%@ page import="org.apache.commons.lang.StringUtils" %>
<%@ page import="com.honey.vo.util.ClientENV" %>

<link href="/js/artDialog/skins/blue.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/js/myou.min.js"></script>
<script type="text/javascript" src="/js/artDialog/artDialog.js"></script>
<script type="text/javascript" src="/js/artDialog/plugins/iframeTools.js"></script>
<script type="text/javascript" src="/js/commons.js"></script>
<%
	ClientENV env = new ClientENV();
	env.setSession(session);
	boolean isLogin = env.getCurUser() != null;
%>
<div class="top">
    <div class="top_c">
    <div class="header"><p>您好，您正在访问浙江旅游管理学！</p><p><%if(isLogin){out.print(env.getCurUser() + "&nbsp;<a href=\"javascript:exit();\">退出</a>");}else{out.print("<a href=\"javascript:doLogin();\">登录</a>");} %></p></div>
    <div class="logoside">
    <div class="logo"><a href="/index.html"><img width="516" height="26" src="/skins/images/index/img_12.jpg"></a></div>
    </div>
    <div class="menu">
    <ul id="jsddm">
    <%
    	List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
    	list = Commons.getMenulist();
    	for(int i=0;i < list.size();i++ ){
    		Map<String,Object> map = list.get(i);
    		String name = (String)map.get("MENU_NAME");
    		String url = (String)map.get("URL");
    		if(!name.contains("首页")){
    			url = "javascript:void(0);";
    		}
    		String[] childMenuName = null;
    		if(StringUtils.isNotBlank((String)map.get("CHILD_MENU_NAME"))){
    			childMenuName = ((String)map.get("CHILD_MENU_NAME")).split(",");
    		}
    		String[] childMenuUrl = null;
    		if(StringUtils.isNotBlank((String)map.get("ULR_CHILD"))){
    			childMenuUrl = ((String)map.get("ULR_CHILD")).split(",");
    		}
    		
    %>
    	<li><a title="<%=name %>" href="<%=url%>"><%=name%></a>
    	<ul <%if("学科团队".equals(name)){out.print("style=\"visibility: hidden;\"");} %>>
    	<%
    		if(childMenuName != null){
    		if(("目标任务".equals(name) && isLogin) || !"目标任务".equals(name)){	
	    	for(int j=0;j < childMenuName.length;j++){
	    		String childname = childMenuName[j];
	    		String childurl = childMenuUrl[j];
	    	%>
	    			<li><a title="<%=childname %>" <%if(j!=childMenuName.length - 1){out.print("style=\"border-bottom:none;\"");} %> href="<%=childurl%>"><%=childname %></a></li>
	    <%}} }%>
	    </ul>
    	</li>
    	
    <%
    	} %>
    <!-- <li><a title="网站首页" href="/index.html">网站首页</a></li>
	<li><a title="目标任务" href="#">目标任务</a>
	<ul>
	<li><a title="行动计划" style="border-bottom:none;" href="#">行动计划</a></li>
	<li><a title="年度总结" href="#">年度总结</a></li></ul>
	</li>
    <li><a title="学科团队" href="/teachers/all/1.html">学科团队</a>
	<ul style="visibility: hidden;">
	<li><a title="专职队伍" style="border-bottom:none;" href="/teachers/0/1.html">专职队伍</a></li>
	<li><a title="兼职队伍" href="/teachers/1/1.html">兼职队伍</a></li></ul>
	</li>
     <li><a title="科研成果" href="#">科研成果</a>
	<ul>
	<li><a title="纵向课题" style="border-bottom:none;" href="#">纵向课题</a></li>
	<li><a title="横向课题" href="#">横向课题</a></li></ul>
	</li>
    <li><a title="科研成果" href="#">社会服务</a>
	<ul>
	<li><a title="咨询服务" style="border-bottom:none;" href="#">咨询服务</a></li>
    <li><a title="技术研发" style="border-bottom:none;" href="#">技术研发</a></li>
	<li><a title="人才培训" href="#">人才培训</a></li></ul>
	</li>
      <li><a title="人才培养" href="#">人才培养</a>
	<ul>
	<li><a title="专业建设" style="border-bottom:none;" href="#">专业建设</a></li>
    <li><a title="模式创新" style="border-bottom:none;" href="#">模式创新</a></li>
    <li><a title="课程教材" style="border-bottom:none;" href="#">课程教材</a></li>
	<li><a title="基地建设" href="#">基地建设</a></li></ul>
	</li>
       <li><a title="学术交流" href="#">学术交流</a>
	<ul>
	<li><a title="国际合作" style="border-bottom:none;" href="#">国际合作</a></li>
    <li><a title="学术会议" style="border-bottom:none;" href="#">学术会议</a></li>
    <li><a title="学术报告" style="border-bottom:none;" href="#">学术报告</a></li>
	<li><a title="学术活动" href="#">学术活动</a></li></ul>
	</li>
     <li><a title="文化传承" href="#">文化传承</a>
	<ul>
	<li><a title="科学普及" style="border-bottom:none;" href="#">科学普及</a></li>
    <li><a title="专业社团" style="border-bottom:none;" href="#">专业社团</a></li>
	<li><a title="校企合作" href="#">校企合作</a></li></ul>
	</li>
         <li><a title="保障体系" href="#">保障体系</a>
	<ul>
	<li><a title="科研管理" style="border-bottom:none;" href="#">科研管理</a></li>
    <li><a title="科研平台" style="border-bottom:none;" href="#">科研平台</a></li>
    <li><a title="制度建设" style="border-bottom:none;" href="#">制度建设</a></li>
	<li><a title="激励机制" href="#">激励机制</a></li></ul>
	</li>
      <li><a title="学术荣誉" href="#">学术荣誉</a>
	<ul>
	<li><a title="重要奖项" style="border-bottom:none;" href="#">重要奖项</a></li>
    <li><a title="知识产权" style="border-bottom:none;" href="#">知识产权</a></li>
	<li><a title="社会评价" href="#">社会评价</a></li></ul>
	</li> -->
	</ul>
    </div>
    </div>
    </div>