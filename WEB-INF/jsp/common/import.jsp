<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 全局变量 -->
<%
	String path = request.getContextPath();
	StringBuffer url = request.getRequestURL();
	String basePath = url.delete(url.length() - request.getRequestURI().length(), url.length()).append("/")
			.toString();
	String pathView = path + "/skins";
	//项目路径
	request.setAttribute("path", path);
	//全路径
	request.setAttribute("basePath", basePath);
	//资源文件路径
	request.setAttribute("pathView", pathView);
%>
<script src='${pathView }/js/jquery.min.js'></script>
<script src='${pathView }/js/promise.min.js'></script>
<script src='${pathView }/js/jquery.ajax.js'></script>
<script src='${pathView }/js/project.ajax.js'></script>
<%@ include file="js.jsp"%>
