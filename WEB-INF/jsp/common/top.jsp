<div class="top">
	<ul>
		<li><b><a href="#"><img src="/yunjing/skins/images/pic/img_01.png"></a></b>
			<p name="gold_count">2819</p><bdo><a href="#"><img src="/yunjing/skins/images/pic/img_04.png"></a></bdo>
		</li>
		<li style="margin-right:0px;"><b><a href="#"><img src="/yunjing/skins/images/pic/img_02.png" style="width:24px; margin-top:5px;"></a></b>
			<p name="diamonds_count">3597</p><bdo><a href="#"><img src="/yunjing/skins/images/pic/img_05.png"></a></bdo>
		</li>
	</ul>
	<em><a href="#"><img src="/yunjing/skins/images/pic/img_08.png"></a></em>
</div>
<script>
	var data = JSON.parse('{"id_card":"55113330215,41251212","is_authen":"1","phone":"18757113775","pkUser":"5511333021541251212","gold_count":"3000","diamonds_count":"1000","has_newmsg":"1","error_code":"0","error_msg":"suc"}');
	if(p.jsonCheck(data)){
		fill($(".top"),data);
	}
	function fill(ele,data){
		for(var one in data){
			ele.find("*[name="+one+"]").text(data[one]);
		}

	}
</script>
