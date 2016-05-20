function get( id , parent) {
		return ( parent || document).getElementById( id );
 }
//此方法用于获取 更新的jsp元素
 function updatequeryDateForIframe(page) {
 	var ifr = getPageLoader();
 	ifr.setAttribute('src', (page.indexOf('?') > -1) ? page + '&d=' + new Date() : page + '?d=' + new Date());
 	   ifr.onload = ifr.onreadystatechange = function() {
	 	var ifrDom = getIFrameDOM('WIN_FRAMEID');
 		if (ifrDom.readyState === "complete") {
 			try {
 				get('rechargeemiframe').innerHTML = get("rechargeemiframe", ifrDom).innerHTML;
 				get('recharge_boxiframe').innerHTML = get("recharge_boxiframe", ifrDom).innerHTML;
 			} catch (e) {
 				get('recharge_boxiframe').innerHTML="对不起，您的查询结果不存在";
 			};
 		}
 	};
 }
 	function getPageLoader() {
 		var ifr = get('WIN_FRAMEID');
 		if(ifr == null) {
 			ifr = document.createElement('iframe');
	 		ifr.setAttribute('src', '/images/title_bg.gif');
	 		ifr.id = 'WIN_FRAMEID';
	 		ifr.name = 'WIN_FRAME';
	 		ifr.style.display = 'none';
	 		document.body.appendChild(ifr);
 		}
 		return ifr;
 	}
 	function getIFrameDOM(id) {
 		var ifrs = document.getElementsByTagName('iframe');
 		for ( var i = 0; i < ifrs.length; i++) {
 			if (id === ifrs[i].id) {
 				break;
 			}
 		}
 		return window.frames[i].document;
 	}