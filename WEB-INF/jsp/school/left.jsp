<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="com.honey.vo.util.Commons" %>	
<%@ page import="java.util.List" %>	
<%@ page import="java.util.ArrayList" %>	
<%@ page import="java.util.Map" %>	
	<div class="conone_l">
    <div class="conbox">
    <div class="title">
    <b><img width="15" height="19" src="/skins/images/index/img_14.jpg"></b>
    <p>旅游管理学</p>
    </div>
    <div class="xueke">

    		 <dl>
    <dt>本学科负责人：</dt>
<dd>
张环宙教授，浙江外国语学院宣传部长。
</dd>
<dt>学科特色：</dt>
<dd>
1、滨水旅游（学科方向一）基于旅游、休闲、文化、创意等产业融合角度研究滨水旅游区的规划与开发问题，已取得大量理论和实践成果；<br />
2、养生旅游（学科方向二）以中国传统养生文化与旅游休闲产业的融合为切入点，紧扣当今旅游行业发展及全球消费文化趋势；<br />
3、旅游目的地营销（学科方向三）基于目的地整体视角，对旅游经济运行中的营销子要素进行系统研究，积累了大量前期研究成果。
</dd>
<dt>
学科优势：
</dt>
<dd>
1、在培养专业人才、开展科学研究、服务地方经济等方面已取得了大量优秀成果，社会反响较大；<br />
2、三个学科方向的研究力量及成果在省内同学科中具备独特的优势和知名度；<br />
3、符合旅游业国家宏观战略及浙江旅游业发展现实的迫切需要；<br />
4、学校旅游与小语种复合的优势与学校政策的大力支持。
</dd>
    </dl>
    	
    </div>
    </div>
    <div class="conboxtwo">
    <div class="title">
    <b><img width="16" height="19" src="/skins/images/index/img_16.jpg"></b>
    <p>实验室建设</p>
    </div>
    <div class="jianshe">
    <%
    List<Map<String,Object>> shiyanList = Commons.getShiyanList();
    System.out.print("!!!!!!" + shiyanList.size());
    if(shiyanList != null){
    	for(Map<String,Object> map : shiyanList){
    %>
    
    <div class="jianshe_div"><a title="<%=map.get("TITLE") %>" href="/wenzhang/<%=map.get("PK_ARTICLE") %>.html" target="_blank"><%=map.get("SHORT_TITLE") %></a></div>
   <%}} %>
    </div>
    </div>
    <div class="conboxtwo">
    <div class="title">
    <b><img width="16" height="21" src="/skins/images/index/img_22.jpg"></b>
    <p>学院荣誉</p>
    </div>
    <div class="rongyu">
    <div class="rongyu_img"><a href="javascript:void(0);"><img width="179" height="73" alt="学院荣誉" src="/skins/images/index/img_26.jpg"></a></div>
    <%
    List<Map<String,Object>> rongyuList = Commons.getRongyulist();
    if(rongyuList != null){
    	for(Map<String,Object> map : rongyuList){
    %>
    <div class="rongyu_div"><a title="<%=map.get("TITLE") %>" href="/wenzhang/<%=map.get("PK_ARTICLE") %>.html" target="_blank"><%=map.get("SHORT_TITLE") %></a></div>
    <% }} %>
    </div>
    </div>
    <div class="conboxtwo">
    <div class="title">
    <b><img width="18" height="22" src="/skins/images/index/img_24.jpg"></b>
    <p>友情链接</p>
    </div>
    <div class="jianshe">
    <div class="jianshe_div"><a title="中国旅游研究网" href="http://www.cotsa.com" target="_blank">中国旅游研究网</a></div>
    <div class="jianshe_div"><a title="中国旅游科学研究院" href="http://www.ctaweb.org" target="_blank">中国旅游科学研究院</a></div>
    <div class="jianshe_div"><a title="国家旅游局" href="http://www.cnta.gov.cn/" target="_blank">国家旅游局</a></div>
    <div class="jianshe_div"><a title="亚太旅游协会" href="http://www.patachina.org" target="_blank">亚太旅游协会</a></div>
    <div class="jianshe_div"><a title="国际旅游协会" href="http://www.gjly.org.cn/" target="_blank">国际旅游协会</a></div>
    <div class="jianshe_div"><a title="浙江省旅游局 " href="http://www.tourzj.gov.cn" target="_blank">浙江省旅游局 </a></div>
    <div class="jianshe_div"><a title="杭州市旅游委员会" href="http://www.gotohz.com/" target="_blank">杭州市旅游委员会</a></div>
    <div class="jianshe_div"><a title="北京第二外国语学院旅游学院" href="http://www.bisu.edu.cn/Category_951/Index.aspx" target="_blank">北京第二外国语学院旅游学院</a></div>
    <div class="jianshe_div"><a title="浙江工商大学旅游学院" href="http://lvyou.zjgsu.edu.cn/" target="_blank">浙江工商大学旅游学院</a></div>
    </div>
    </div>
    </div>