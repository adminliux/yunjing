<script>
	var p = {path:"${path}",apiHost:"http://test.cloudrace.cn"};

	p.json = function(url, parame, async) {
		var p = ajaxJson("http://test.cloudrace.cn"+url,parame,async);
		p.then(function(data){
			if(data.error_code !=null  && data.error_code !=0){
				alert(data.error_msg);
			}
		});
		return p;
	}

	p.jsonCheck =  function(data){
		if(data.error_code !=null  && data.error_code !=0){
			return false;
		}else{
			return true;
		}
	};
	(function(p){


	})(p);
</script>
