(function($){
	$.fn.extend({"ajaxJson":function(url, parame, async){
		var p = new promise.Promise();
		$.ajax({
			type: "POST",
			url: url,
			async: async,
			data: parame,
			contentType: "JSON",
			success: function(data) {
				p.done(data);
			},
			error: function() {
				alert("错误");
			}
		});
		return p;
	}});
})(jQuery);
function ajaxJson(url, parame, async){
	var p = new promise.Promise();
	$.ajax({
		type: "POST",
		url: url,
		async: async,
		data: parame,
		contentType: "JSON",
		success: function(data) {
			p.done(data);
		},
		error: function() {
			alert("错误");
		}
	});
	return p;
}
