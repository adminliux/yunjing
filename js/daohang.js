//通过id来获得对象  parent 可以为 null id 不可以为空
function get(id, parent) {
	return (parent || document).getElementById(id);
	
}

// 获得iframe的DOM对象 by id
function getIFrameDOM(id) {
	var ifrs = document.getElementsByTagName('iframe');
	for ( var i = 0; i < ifrs.length; i++) {
		if (id === ifrs[i].id) {
			break;
		}
	}
	return window.frames[i].document;
}

//加载中..调用的方法
function showjindutiao(){
	//var tipdom = '<div style=" text-align:center" id="klsdjfoksj">您当前网速太慢，正在为您加载数据中，耐心等待一下吧...</div>';
	var tipdom = '<div class="load" id="klsdjfoksj"><div style="margin-top: 30%; text-align:center">加载中...</div></div>';
	$(function(){
		$('.dialog_content_text').append(tipdom);
	});
}
function closejindutiao(){
	$(function(){
		$('#klsdjfoksj').css('display','none');
	});
}

// 此方法用于获取jsp元素
function changePage(page, isHideSelect) {
	var WIN_FRAME = window.WIN_FRAME;
	if ((typeof window.WIN_FRAME) === 'undefined') {
		var ifr = document.createElement('iframe');
		ifr.setAttribute('src', '/images/title_bg.gif');
		ifr.id = 'WIN_FRAME';
		ifr.name = 'WIN_FRAME';
		ifr.style.display = 'none';
		document.body.appendChild(ifr);
		WIN_FRAME = window.WIN_FRAME = ifr;
	}
	WIN_FRAME.setAttribute('src', (page.indexOf('?') > -1) ? page + '&d=' + new Date() : page + '?d=' + new Date());
	WIN_FRAME.onload = WIN_FRAME.onreadystatechange = function() {
		var ifrDOMObj = getIFrameDOM('WIN_FRAME');// getIFrameDOM('WIN_FRAME',
		if (ifrDOMObj.readyState === "complete") {
			try {
				get('position').innerHTML = get('replacePosition', ifrDOMObj).innerHTML;
				var contentHTML = get('main', ifrDOMObj).innerHTML;
				var allScripts = [];
				var c = get('main_right');
				c.innerHTML = contentHTML.replace(/<script(\S|\s)*<\/script>/gi,function(str) {
									if (/<script type=(\"){0,1}text\/javascript(\"){0,1}>/i.test(str)) {
										allScripts.push(str.replace(/<script type=(\"){0,1}text\/javascript(\"){0,1}>/i,'').replace(/<\/script>/i,''));
									}
									return '';
								});
				var nScript = '';
				for ( var i = 0; i < allScripts.length; i++) {
					//nScript = scriptTpl.cloneNode(false);
					nScript += allScripts[i];
					//document.body.appendChild(nScript);
				}
				var scriptTpl = get('DYNAMIC_SCRIPT');
				if( scriptTpl ) {
					scriptTpl.parentNode.removeChild(scriptTpl);
				}
				var tempObj = document.createElement('script');
				tempObj.type = 'text/javascript';
				tempObj.id="DYNAMIC_SCRIPT";
				tempObj.text = nScript;
				document.body.appendChild(tempObj);
			} catch (e) {
				alert(e.message);
				//location.href = "https://192.168.1.113/public/errorJsp.html"; //本地
				location.href = "/errorJsp.html"; //60
			};
			var tit = ifrDOMObj.title;
			if (tit.toString() == '')
				return;
			document.title = tit;
			WIN_FRAME.onload = WIN_FRAME.onreadystatechange = null;
			if( isHideSelect ) {
				$('select').css('display', 'none');
			}
		}
	};
}

//此方法用于获取 更新的jsp元素
function updatequeryDate(page) {
	var WIN_FRAME = window.WIN_FRAME;
	if ((typeof window.WIN_FRAME) === 'undefined') {
		var ifr = document.createElement('iframe');
		ifr.setAttribute('src', '/images/title_bg.gif');
		ifr.id = 'WIN_FRAME';
		ifr.name = 'WIN_FRAME';
		ifr.style.display = 'none';
		document.body.appendChild(ifr);
		WIN_FRAME = window.WIN_FRAME = ifr;
	}
	WIN_FRAME.setAttribute('src', (page.indexOf('?') > -1) ? page + '&d=' + new Date() : page + '?d=' + new Date());
	WIN_FRAME.onload = WIN_FRAME.onreadystatechange = function() {
		var ifrDOMObj = getIFrameDOM('WIN_FRAME');// getIFrameDOM('WIN_FRAME',
		if (ifrDOMObj.readyState === "complete") {
			try {
				get('rechargeemid').innerHTML = get('rechargeemid', ifrDOMObj).innerHTML;
				get('recharge_boxid').innerHTML = get('recharge_boxid', ifrDOMObj).innerHTML;
			} catch (e) {
				get('recharge_boxid').innerHTML="对不起，您的查询结果不存在！！";
			};
			var tit = ifrDOMObj.title;
			if (tit.toString() == '')
				return;
			document.title = tit;
			WIN_FRAME.onload = WIN_FRAME.onreadystatechange = null;
		}
	};
	
}


//去掉所有空格
function trim(str)
{
return str.replace(/\s+/g,"");
}

// 线上花店 账户明细查询 点击 "查询" 调用的方法
function chaxun() {

	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);
	var type = get("select7").options[get("select7").selectedIndex].text;
	var key = get("key").value;
	//去掉key关键词的空格
	key =trim(key);
	var startDate = year + "-" + month + "-" + day;
	var endDate = year1 + "-" + month1 + "-" + day1;
	// 对type 和 key 进行加密
	type = encodeURI(encodeURI(type));
	key = encodeURI(encodeURI(key));

	updatequeryDate('/findmingxi.html?startDate=' + startDate + "&endDate="
			+ endDate + "&type=" + type + "&key=" + key
			+ "&num=1&queryType=1&judje=mingxi");

	return true;
}

// 线上花店 账户明细查询 点击 "查询"后进入页面 点击页码数 调用的方法
function pageChaXun(startDate, endDate, type, key, pageNum) {

	// 进行编码
	type = encodeURI(encodeURI(type));
	key = encodeURI(encodeURI(key));

	window.location.href = "/findmingxi.html?startDate=" + startDate
			+ "&endDate=" + endDate + "&type=" + type + "&key=" + key + "&num="
			+ pageNum + "&queryType=1&judje=mingxi";

}
// 线上花店 充值提现 查询

function queryByTime() {

	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);

	var startDate = year + "-" + month + "-" + day ;
	var endDate = year1 + "-" + month1 + "-" + day1 ;
	updatequeryDate('/findRecharge.html?startDate=' + startDate + "&endDate="
			+ endDate + "&num=1");
	return true;
	
}
//充值提现 充值成功的点查询
function queryrechargeSucByTime(){
	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);

	var startDate = year + "-" + month + "-" + day ;
	var endDate = year1 + "-" + month1 + "-" + day1 ;
	
	//把头信息传到下一个页面
	var reSuc  =  get("reSuc").innerHTML;
	var dZhong = get("dZhong").innerHTML;
	var dSuc   = get("dSuc").innerHTML;
	var dFail  = get("dFail").innerHTML;
	var rechargeMoney = get("rechargeMoney").innerHTML;
	updatequeryDate('/findrechargesucorfail.html?num=1&queryType=6&queryStatus=2&rechargeSuc=' +reSuc + '&drawZhong=' + 
			    dZhong + '&drawSuc=' + dSuc + '&drawfail=' + dFail +'&rechargeMoney=' + rechargeMoney + '&startDate=' + startDate + "&endDate="
					+ endDate );
	return true;
}

//充值提现页面    提现中查询
function querydrawzhongByTime(){
	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);

	var startDate = year + "-" + month + "-" + day ;
	var endDate = year1 + "-" + month1 + "-" + day1 ;
	
	//把信息传到下一个页面
	var reSuc  =  get("reSuc").innerHTML;
	var dZhong = get("dZhong").innerHTML;
	var dSuc   = get("dSuc").innerHTML;
	var dFail  = get("dFail").innerHTML;
	var rechargeMoney = get("rechargeMoney").innerHTML;
	updatequeryDate('/findrechargesucorfail.html?num=1&queryType=7&queryStatus=1&rechargeSuc=' +reSuc + '&drawZhong=' + 
			    dZhong + '&drawSuc=' + dSuc + '&drawfail=' + dFail +'&rechargeMoney=' + rechargeMoney + '&startDate=' + startDate + "&endDate="
					+ endDate );
	return true;
	
}
//充值提现页面    提现成功查询
function  querydrawsucByTime(){
	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);

	var startDate = year + "-" + month + "-" + day ;
	var endDate = year1 + "-" + month1 + "-" + day1 ;
	
	//把信息传到下一个页面
	var reSuc  =  get("reSuc").innerHTML;
	var dZhong = get("dZhong").innerHTML;
	var dSuc   = get("dSuc").innerHTML;
	var dFail  = get("dFail").innerHTML;
	var rechargeMoney = get("rechargeMoney").innerHTML;
	updatequeryDate('/findrechargesucorfail.html?num=1&queryType=7&queryStatus=2&rechargeSuc=' +reSuc + '&drawZhong=' + 
			    dZhong + '&drawSuc=' + dSuc + '&drawfail=' + dFail +'&rechargeMoney=' + rechargeMoney + '&startDate=' + startDate + "&endDate="
					+ endDate );
	return true;
}

function querydrawfailByTime(){
	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);

	var startDate = year + "-" + month + "-" + day ;
	var endDate = year1 + "-" + month1 + "-" + day1 ;
	
	//把信息传到下一个页面
	var reSuc  =  get("reSuc").innerHTML;
	var dZhong = get("dZhong").innerHTML;
	var dSuc   = get("dSuc").innerHTML;
	var dFail  = get("dFail").innerHTML;
	var rechargeMoney = get("rechargeMoney").innerHTML;
	updatequeryDate('/findrechargesucorfail.html?num=1&queryType=7&queryStatus=0&rechargeSuc=' +reSuc + '&drawZhong=' + 
			    dZhong + '&drawSuc=' + dSuc + '&drawfail=' + dFail +'&rechargeMoney=' + rechargeMoney + '&startDate=' + startDate + "&endDate="
					+ endDate );
	return true;
}

//充值提现   充值成功  调用
function querychenggong(){
	//把头信息传到下一个页面
	var reSuc  =  get("reSuc").innerHTML;
	var dZhong = get("dZhong").innerHTML;
	var dSuc   = get("dSuc").innerHTML;
	var dFail  = get("dFail").innerHTML;
	var rechargeMoney = get("rechargeMoney").innerHTML;
	updatequeryDate('/rechargesucorfail.html?num=1&queryType=6&queryStatus=2&rechargeSuc=' +reSuc + '&drawZhong=' + 
			    dZhong + '&drawSuc=' + dSuc + '&drawfail=' + dFail +'&rechargeMoney=' + rechargeMoney);
}
//充值提现   提现中  调用
function querytixianzhong(){
	var reSuc  =  get("reSuc").innerHTML;
	var dZhong = get("dZhong").innerHTML;
	var dSuc   = get("dSuc").innerHTML;
	var dFail  = get("dFail").innerHTML;
	var rechargeMoney = get("rechargeMoney").innerHTML;
	updatequeryDate('/rechargesucorfail.html?num=1&queryType=7&queryStatus=1&rechargeSuc=' +reSuc + '&drawZhong=' +
			    dZhong + '&drawSuc=' + dSuc + '&drawfail=' + dFail +'&rechargeMoney=' + rechargeMoney);
}
//充值提现   提现成功  调用
function querytixianchenggong() {
	var reSuc  =  get("reSuc").innerHTML;
	var dZhong = get("dZhong").innerHTML;
	var dSuc   = get("dSuc").innerHTML;
	var dFail  = get("dFail").innerHTML;
	var rechargeMoney = get("rechargeMoney").innerHTML;
	updatequeryDate('/rechargesucorfail.html?num=1&queryType=7&queryStatus=2&rechargeSuc=' +reSuc + '&drawZhong=' + 
			    dZhong + '&drawSuc=' + dSuc + '&drawfail=' + dFail +'&rechargeMoney=' + rechargeMoney);
}
//充值提现   充值失败  调用
function querytixianshibai() {
	var reSuc  =  get("reSuc").innerHTML;
	var dZhong = get("dZhong").innerHTML;
	var dSuc   = get("dSuc").innerHTML;
	var dFail  = get("dFail").innerHTML;
	var rechargeMoney = get("rechargeMoney").innerHTML;
	updatequeryDate('/rechargesucorfail.html?num=1&queryType=7&queryStatus=0&rechargeSuc=' +reSuc + '&drawZhong=' + 
			    dZhong + '&drawSuc=' + dSuc + '&drawfail=' + dFail  +'&rechargeMoney=' + rechargeMoney);
}

// 线上花店 花籽明细
function queryByTimeForFlower() {

	var judje = get("judje");

	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);

	var startDate = year + "-" + month + "-" + day;
	var endDate = year1 + "-" + month1 + "-" + day1;
	updatequeryDate('/findFlower.html?startDate=' + startDate + "&endDate="
			+ endDate + "&num=1&queryType=2&judje=flower");

	return true;

}
// 线上花店 花籽明细 确定 按钮 调用方法

function makesureHuaZi() {
	var judje = get("judje");
	var goPageNum = get('num').value;

	if (/[^\d]/gi.test(goPageNum) || goPageNum == "") {
		alert('请顶格输入数字');
		return;
	}
	changePage('/flower.html?num=' + goPageNum + '&queryType=2&judje=flower');

}

function makesureHuaZiChaXun(a, b) {
	var judje = get("judje");
	var goPageNum = get('num').value;

	if (/[^\d]/gi.test(goPageNum) || goPageNum == "") {
		alert('请顶格输入数字');
		return;
	}
	;
	updatequeryDate('/findFlower.html?startDate=' + a + '&endDate=' + b
			+ '&num=' + goPageNum + '&queryType=2&judje=flower');
}

// 线上花店 客服业绩 查询 当点击查询的时候调用
function queryByTimeForKeFu() {

	var kefu = get("select1").value;
	var kefuContent = '客服：'
			+ get("select1").options[get("select1").selectedIndex].text;
	var nian = get("select2").options[get("select2").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select3").options[get("select3").selectedIndex].text;
	var month = yue.substring(0, 2);

	var date = year + "-" + month;
	kefuContent = encodeURI(encodeURI(kefuContent));

	if (kefu == '选择客服' || year == '请选择年' || month == '请选择月') {
		alert("请选择  客服    年   月..");
		return false;
	}

	changePage('/findKeFu.html?date=' + date + "&kefu=" + kefu
			+ "&num=1&queryType=3&kefuContent=" + kefuContent);
	return true;
}

// 线上花店 订单冻结 查询
function queryByTimeForFreeze() {

	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);

	var startDate = year + "-" + month + "-" + day ;
	var endDate = year1 + "-" + month1 + "-" + day1;

	changePage('/findFreeze.html?startDate=' + startDate + "&endDate="
			+ endDate + "&num=1");
	return true;

}
//配送查询
function querySendByTimeForFreeze(){
	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);

	var startDate = year + "-" + month + "-" + day ;
	var endDate = year1 + "-" + month1 + "-" + day1;
	
	var send = get("countWaitSend").innerHTML;
	var sign = get("countWaitSign").innerHTML;
	var account = get("countTransferAccount").innerHTML ;
	
	changePage('/findshowwaitdetail.html?num=1&queryType=0&countWaitSend='+send+'&countWaitSign='+sign+'&countTransferAccount=' + account + '&startDate=' + startDate + "&endDate=" + endDate);
}

//签收查询
function querySignByTimeForFreeze(){
	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);

	var startDate = year + "-" + month + "-" + day ;
	var endDate = year1 + "-" + month1 + "-" + day1;
	
	var send = get("countWaitSend").innerHTML;
	var sign = get("countWaitSign").innerHTML;
	var account = get("countTransferAccount").innerHTML ;
	
	changePage('/findshowwaitdetail.html?num=1&queryType=1&countWaitSend='+send+'&countWaitSign='+sign+'&countTransferAccount=' + account + '&startDate=' + startDate + "&endDate=" + endDate);

	
}

//转账查询
function queryTransferByTimeForFreeze(){
	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var tian = get("select3").options[get("select3").selectedIndex].text;
	var day = tian.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var tian1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = tian1.substring(0, 2);

	var startDate = year + "-" + month + "-" + day ;
	var endDate = year1 + "-" + month1 + "-" + day1;
	
	var send = get("countWaitSend").innerHTML;
	var sign = get("countWaitSign").innerHTML;
	var account = get("countTransferAccount").innerHTML ;
	
	changePage('/findshowwaitdetail.html?num=1&queryType=2&countWaitSend='+send+'&countWaitSign='+sign+'&countTransferAccount=' + account + '&startDate=' + startDate + "&endDate=" + endDate);
}

// 线上花店 订单冻结   等待配送接收  
function waittoken(){
	
	var send = get("countWaitSend").innerHTML;
	var sign = get("countWaitSign").innerHTML;
	var account = get("countTransferAccount").innerHTML ;
	changePage('/showwaitdetail.html?num=1&queryType=0&countWaitSend='+send+'&countWaitSign='+sign+'&countTransferAccount=' + account);
	
}
//线上花店 订单冻结   等待配送签收
function waitsign(){
	var send = get("countWaitSend").innerHTML;
	var sign = get("countWaitSign").innerHTML;
	var account = get("countTransferAccount").innerHTML ;
	changePage('/showwaitdetail.html?num=1&queryType=1&countWaitSend='+send+'&countWaitSign='+sign+'&countTransferAccount=' + account);
}
//线上花店 订单冻结   等待配送转账
function waittransfer(){
	var send = get("countWaitSend").innerHTML;
	var sign = get("countWaitSign").innerHTML;
	var account = get("countTransferAccount").innerHTML ;
	changePage('/showwaitdetail.html?num=1&queryType=2&countWaitSend='+send+'&countWaitSign='+sign+'&countTransferAccount=' + account);
}

/*
 * 系统管理 花店余额流水查询
 */
function queryForDianLiu() {

	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var ri = get("select3").options[get("select3").selectedIndex].text;
	var day = ri.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var ri1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = ri1.substring(0, 2);
	var key = get("key").value;
	key=trim(key);
	var startDate = year + "-" + month + "-" + day;
	var endDate = year1 + "-" + month1 + "-" + day1;

	if (key =='输入花店名称编号查询') {
		key = "";
	}
	// 对key进行编码
	key = encodeURI(encodeURI(key));
	updatequeryDate('/finddianliu.html?startDate=' + startDate + "&endDate="
			+ endDate + "&key=" + key + "&num=1");

	return true;

}
// 线上花店 确定 按钮 调用的方法
function makesure() {

	var goPageNum = get('num').value;
	if (/[^\d]/gi.test(goPageNum || goPageNum == '')) {
		alert('请顶格输入数字');
		return;
	}
	;
	var judje = get("judje");
	changePage('/mingxi.html?&num=' + goPageNum + "&queryType=1&judje=mingxi");

}

// 线上花店 查询 按钮 调用的方法
function makesurechaxun(a, b, c, d) {

	var goPageNum = get('num').value;
	if (/[^\d]/gi.test(goPageNum || goPageNum == '')) {
		alert('请顶格输入数字');
		return;
	}
	;
	var judje = get("judje");
	updatequeryDate('/findmingxi.html?startDate=' + a + '&endDate=' + b + '&type='
			+ c + '&key=' + d + '&num=' + goPageNum
			+ "&queryType=1&queryType=1&judje=mingxi");

}

/*
 * 线上花店 花店余额流水查询 代码块 到此结束
 */

/*
 * 线上花店 会员余额流水查询
 */

function makeSureHuiLiu() {

	var goPageNum = get('num').value;

	if (/[^\d]/gi.test(goPageNum || goPageNum == '')) {
		alert('请顶格输入数字');
		return;
	}
	;
	var judje = get("judje");

	changePage('/huiliu.html?num=' + goPageNum);

}

function makeSureHuiYuanAccount() {

	var goPageNum = get('num').value;

	if (/[^\d]/gi.test(goPageNum || goPageNum == '')) {
		alert('请顶格输入数字');
		return;
	}
	;
	var judje = get("judje");

	changePage('/huiyuanaccount.html?num=' + goPageNum);

}

function makeSureHuiLiuChaXun(a, b, c) {

	var goPageNum = get('num').value;
	if (/[^\d]/gi.test(goPageNum || goPageNum == '')) {
		alert('请顶格输入数字');
		return;
	}
	;
	var judje = get("judje");
	updatequeryDate('/findhuiliu.html?startDate=' + a + '&endDate=' + b + '&key='
			+ c + '&num=' + goPageNum);

}
function makeSureHuiYuanAccountChaXun(a, b, c) {

	var goPageNum = get('num').value;
	if (/[^\d]/gi.test(goPageNum || goPageNum == '')) {
		alert('请顶格输入数字');
		return;
	}
	;
	var judje = get("judje");
	updatequeryDate('/findhuiyuanaccount.html?startDate=' + a + '&endDate=' + b + '&key='
			+ c + '&num=' + goPageNum);

}

function queryHuiLiu() {
	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var ri = get("select3").options[get("select3").selectedIndex].text;
	var day = ri.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var ri1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = ri1.substring(0, 2);
	var key = get("huiliukey").value;
	var startDate = year + "-" + month + "-" + day;
	var endDate = year1 + "-" + month1 + "-" + day1;

	key = trim(key);
	if (key == "输入会员Email查询") {
		key="";
	}
	key = encodeURI(encodeURI(key));

	updatequeryDate('/findhuiliu.html?startDate=' + startDate + "&endDate="
			+ endDate + "&key=" + key + "&num=1");

	return true;
}

function queryHuiYuanAccount() {
	var nian = get("select1").options[get("select1").selectedIndex].text;
	var year = nian.substring(0, 4);
	var yue = get("select2").options[get("select2").selectedIndex].text;
	var month = yue.substring(0, 2);
	var ri = get("select3").options[get("select3").selectedIndex].text;
	var day = ri.substring(0, 2);
	var nian1 = get("select4").options[get("select4").selectedIndex].text;
	var year1 = nian1.substring(0, 4);
	var yue1 = get("select5").options[get("select5").selectedIndex].text;
	var month1 = yue1.substring(0, 2);
	var ri1 = get("select6").options[get("select6").selectedIndex].text;
	var day1 = ri1.substring(0, 2);
	var key = get("huiliukey").value;
	var startDate = year + "-" + month + "-" + day;
	var endDate = year1 + "-" + month1 + "-" + day1;

	key = trim(key);
	if (key == "输入会员Email查询") {
		key="";
	}
	key = encodeURI(encodeURI(key));

	updatequeryDate('/findhuiyuanaccount.html?startDate=' + startDate + "&endDate="
			+ endDate + "&key=" + key + "&num=1");

	return true;
}

/*
 * end 线上花店 会员余额流水查询 到此结束
 */

// 弹出对话框公用方法 用于763 * 650 的页面
function newBigWin(address, title) {

	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 744,
		height : 420,
		resizeAble : true,
		isModel : true

	});
}

//弹出对话框公用方法 用于763 * 650 的页面
function newBigWinForXiTongOnly(address, title) {

	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 744,
		height : 500,
		resizeAble : true,
		isModel : true

	});
}

// 花店余额流水查询 信息提交
function newBigWinForDianLiu(address, name, title) {
	var namestr = encodeURI(encodeURI(name));
	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0"  src="' + address + '&name=' + namestr
				+ '" style="height: 100%; width: 100%;" />',
		width : 744,
		height : 500,
		resizeAble : true,
		isModel : true

	});
}

// index页面 点击立即充值调用
function newBigWinForRecharge(address, title) {

	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 710,
		height : 430,
		resizeAble : true,
		isModel : true

	});
}

//蜂蜜后台管理页面 点击立即充值调用
function newBigWinForTb(address, title) {

	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 740,
		height : 500,
		resizeAble : true,
		isModel : true

	});
}

// 弹出对话框公用方法 用于547 * 386 的页面
function newSmallWin(address, title) {
	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 650,
		height : 386,
		resizeAble : true,
		isModel : true

	});
}

// index 页面点击申请提现 调用
function newSmallWinForDraw(address, title) {
	MyouWin.createWin( {
		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 670,
		height : 380,
		resizeAble : true,
		isModel : true

	});
}

// 提现处理 点击 处理 调用该方法
function newSmallShenQingWin(address, title) {

	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 600,
		height : 330,
		resizeAble : true,
		isModel : true

	});
}

//提现处理 点击 处理 调用该方法
function newSmallLianMeng(address, title) {

	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 600,
		height : 390,
		resizeAble : true,
		isModel : true

	});
}

// 提现处理 点击 拒绝 调用该方法
function newSmallRefuseWin(address, title) {

	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 560,
		height : 265,
		resizeAble : true,
		isModel : true

	});
}

// index 主页面购买花铺 和 续费 调用的方法

function newWinForHuaFuBaoIndex(address, title) {

	//根据不同的address  创建不同的窗口
	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 550,
		height : 350,
		resizeAble : true,
		isModel : true

	});
}

//index 主页面购买花铺 调用的方法
function newWinForBuyHuaFuBaoIndex(address, title) {
	//根据不同的address  创建不同的窗口
	MyouWin.createWin( {
		title : title,
		msg : '<iframe id="huafubaogoumai" frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 550,
		height : 380,
		resizeAble : true,
		isModel : true
	});
	//完成
	/*
	var huafubaogoumaiiframe = get('huafubaogoumai');
	huafubaogoumaiiframe.style.display = 'none';
	//加载中..
	showjindutiao(getIFrameDOM('huafubaogoumai'));
	
    if (huafubaogoumaiiframe.attachEvent){   
    	huafubaogoumaiiframe.attachEvent("onload", 
        function(){;huafubaogoumaiiframe.style.display = '';closejindutiao();});
    }else{ huafubaogoumaiiframe.onload = 
    	function(){ huafubaogoumaiiframe.style.display = '';closejindutiao();};}
    	*/
}

// index 主页面 续费 调用的方法

function newWinForHuaFuBaoIndexxufei(address, title) {

	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 500,
		height : 380,
		resizeAble : true,
		isModel : true

	});
}

function newWinForHuaFuBaoIndexcontinuexufei(address, title){
	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 520,
		height : 270,
		resizeAble : true,
		isModel : true

	});
}

// index 主页面购买域名 调用的方法

function newWinForHuaFuBaobuydns(address, title) {

	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 500,
		height : 250,
		resizeAble : true,
		isModel : true

	});
}

//密码 找回 调用的方法
function newWinFormimazhaohui(address, title) {

	MyouWin.createWin( {

		title : title,
		msg : '<iframe frameborder="0" src="' + address
				+ '" style="height: 100%; width: 100%;" />',
		width : 310,
		height : 100,
		resizeAble : true,
		isModel : true

	});
}
var currentTime = null;
// index 页面 动态时钟 显示方法
function startTime() {
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	// add a zero in front of numbers<10
	h= checkTime(h);
	month = checkTime(month);
	day = checkTime(day);
	m = checkTime(m);
	s = checkTime(s);
	currentTime = currentTime || document.getElementById('currentTime');//$('currentTime').get();//
	if ( currentTime ) {
		currentTime.innerHTML = ("当前时间：" + year + "-"
				+ month + "-" + day + "  " + h + ":" + m + ":" + s);
		setTimeout(function(){
			startTime();
			//setTimeout(arguments.callee, 1000);
		}, 1000);
	}
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

// form表单 发送post 请求 不刷新 请求
function doLoadIndex(obj, id) {

	// 银行卡提交校验
	if (obj == '/yinhangka.html') {
		// 验证提交内容
		var isOk = checkYinHangKa();
		if (!isOk) {
			return;
		}
	}

	// 支付密码 校验
	if (obj == '/zhifumima.html') {
		// 验证提交内容
		var isOk = chezhifumimapassword();
		if (!isOk) {
			return;
		}

	}

	// 会员线下充值信息校验
	if (obj == '/huichong.html') {

		// 验证提交内容
		var isOk = checkhuichongInf();
		if (!isOk) {
			return;
		}
	}

	// 快速下单交易信息校验
	if (obj == '/kuaidan.html') {

		// 验证提交内容
		var isOk = checkkuaidanInf();
		if (!isOk) {
			return;
		}
	}

	// 花店线下充值信息校验
	if (obj == '/dianchong.html') {

		// 验证提交内容
		var isOk = checkdianchongInf();
		if (!isOk) {
			return;
		}
	}
	
	//花付宝系统 --- 银行管理
	if(obj === '/yinhang.html'){
		var isOk = checkyinhang();
		if(!isOk){
			return;
		}
	}
	
	//添加花籽调用
	
	if(obj === '/excutetianjiahuazi.html'){
		var isOk = checkaddAccum();
		if(!isOk){
			return;
		}
	}
	
	
    //MyouWin.load('处理中...');
	load.ajax( {
				'targetForm' : get(id), // 例如：<div id="testFormDiv"> <form
										// id="testForm" action=""
										// method=""></form> </div>
				'onsuccess' : function(docRef) {
					
					
					// 银行卡交易返回结果
					if (obj == '/yinhangka.html') {
//						/MyouWin.close();
						var ok = docRef.getElementById("ok").innerHTML;
						var errorMsg_yinhang = docRef
								.getElementById("errorMsg").innerHTML;
							changePage(obj + "?ok=" + encodeURI(encodeURI(ok))
									+ "&error="
									+ encodeURI(encodeURI(errorMsg_yinhang))
									+ "&judje=okerror");
					}else if(obj === '/yinhang.html') {
						//MyouWin.close();
						//返回成功信息的时候刷新
						changePage(obj);
					} 
				},
				'ontimeout' : function() {
				}
			});
}
// 我的银行卡 出现 "设为默认" 改变成手型
function showSet(obj) {
	obj.style.color = "#3398ef";
	obj.title = "点击设为默认提现银行";
	obj.style.cursor = "pointer";
	obj.innerHTML = "设为默认";

}
// 鼠标 移出 效果失去
function removeSet(obj) {
	obj.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
	// 绑定 我的银行卡 的 id 为 setYinHangKa 的p
}
// 我的花付宝 会员线下充值查询的时候调用
function huiYuanChaXun(obj) {
	var key = null;
	var resultMsg = null;
	if (obj == 'button') {
		key = get("huiyuanid").value;
		resultMsg = "请输入email和手机";
	}
	if (obj == 'input') {
		key = get("emailid").value;
		resultMsg ="请输入email";
	}
	key=trim(key);
	if(key == ''){
		MyouWin.alertErr(resultMsg);
		return;
	}
	changePage('/huichong.html?judje=huiyuanchaxun&key=' + key);

}

// 我的花付宝 快速下单交易 查询花店的时候调用
function huaDianChaXun(obj) {
	var key = null;
	var type = null;
	var resultMsg = null;
	if (obj == 'buttonid') {
		key = get("chazhao_boxid").value;
		type = obj;
		resultMsg = "请输入花店的编号或名称";
	}

	if (obj == 'orgCodeid') {

		key = get("orgCodeid").value;
		type = obj;
		resultMsg = "请输入花店的编号";
	}
	key = trim(key);
	
	if(key ===''){
		MyouWin.alertErr(resultMsg);
		return;
	}

	changePage("/kuaidan.html?judje=chaxunkuaidan&key=" +  encodeURI(encodeURI(key)) + "&type=" + type);

}

// 花付宝系统管理 花店线下充值 查询花店的时候调用
function dianChong_huaDianChaXun(obj) {

	var key = null;
	var type = null;
	resultMsg = null;
	if (obj == 'buttonid') {
		key = get("chazhao_boxid").value;
		type = obj;
		resultMsg = "请输入花店的编号和名称";
	}

	if (obj == 'orgCodeid') {

		key = get("orgCodeid").value;
		type = obj;
		resultMsg = "请输入花店的编号";
	}
   key = trim(key);
   if(key === ""){
	   MyouWin.alertErr(resultMsg);
	   return ;
   }
	changePage("/dianchong.html?judje=chaxun&key=" + encodeURI(encodeURI(key)) + "&type=" + type);
}
/*
 * 花付宝系统管理  
 * 添加花籽   快速查询  和  编号查询 调用
 */
function dianChong_tianjiahuazi(obj){
	

	var key = null;
	var type = null;
	resultMsg = null;
	if (obj == 'buttonid') {
		key = get("chazhao_boxid").value;
		type = obj;
		resultMsg = "请输入花店的编号和名称";
	}

	if (obj == 'orgCodeid') {

		key = get("orgCodeid").value;
		type = obj;
		resultMsg = "请输入花店的编号";
	}
   key = trim(key);
   if(key === ""){
	   MyouWin.alertErr(resultMsg);
	   return ;
   }
	changePage("/tianjiahuazi.html?judje=chaxun&key=" + encodeURI(encodeURI(key)) + "&type=" + type);
	
	
}

// 我的花付宝 快速下单交易 查询之后 点击花店的单选按钮的时候调用
function setOrgCode(obj, pkOrg) {
	var orgCode = get("orgCodeid");
	orgCode.value = obj.value;
	// 设置pkOrg
	var pkOrgObj = get("pkOrgId");
	pkOrgObj.value = pkOrg;
	orgCode.style.background = '#dcdcdc';
	orgCode.disabled = 'disabled';

}

// 花付宝系统管理 银行管理 点击 "修改" 的时候调用
function xiugaiyinhang(name, logo, pkbank) {
	/*
	 * 银行的名称直接显示出来
	 */
	var bankObj = get("bankid");
	bankObj.value = name;

	/*
	 * 改变'添加银行' 为 '修改银行'
	 */
	var addyinhang = get("addyinhangid");
	addyinhang.innerHTML = "修改银行";

	/*
	 * 在'浏览....' 的前面添加 <img>
	 */
	get("dangqian_logo").style.display = '';
	get("dangqian_logo").innerHTML = "<bdo><span>当前LOGO：</span></bdo><img src='"
			+ logo + "' />";
	// 修改input file "银行LOGO: "
	var logo_labelObj = get("logo_label");
	logo_labelObj.innerHTML = "修改LOGO：";
	// 修改input file "银行名称："说明
	var mingchen_label = get("mingchen_label");
	mingchen_label.innerHTML = "修改名称：";

	// 在form 表单里面 放入update (更新的判断条件) pkbank（银行的主键）
	var judjeObj = get("judje");
	judjeObj.innerHTML = "<input type=\"hidden\" name=\"update\" id=\"updateid\" value=\"update\" />"
			+ " <input type=\"hidden\" name=\"pkbank\" id=\"pkbankid\" value='"
			+ pkbank
			+ "'  />"
			+ " <input type=\"hidden\" name=\"logo\" id=\"hidden_logo_id\" value='"
			+ logo + "'  />";

}

var jss = {
		'win': '/js/myou.win.min.js',
		'drag': '/js/myou.drag.min.js',
		'ajax': '/js/myou.ajax.min.js',
		'utils': '/js/myou.utils.min.js',
		'event': '/js/myou.event.min.js',
};
In.add('event',{path: jss['event'],type:'js',charset:'utf-8'});
In.add('drag',{path: jss['drag'],type:'js',charset:'utf-8',rely:['event']});
In.add('winCss',{path: '/skins/admin/css/win.css'});
In.add('utils',{path: jss['utils'],type:'js',charset:'utf-8'});
In.add('win',{path: jss['win'],type:'js',charset:'utf-8',rely:['drag', 'winCss', 'utils' ]});

In.add('ajax',{path: jss['ajax'],type:'js',charset:'utf-8'});
// 綁定回调函数
In.ready('jquery', 
	function(){startTime();}, 'win', 'ajax');

/** ****************************************************************************************************************** */
/** ********************************** 下面的方法是所有页面 的校验方法 ***************** */

// 验证我的银行卡
function checkYinHangKa() {

	isOk = true;
	// 银行
	var bank = get("bankid");
	if (bank.value === '-1') {
		var bank_error = document.getElementById("bank_error");
		bank_error.innerHTML = "银行必须选择";
		bank_error.className = "yinhangkap_label";
		isOk = false;
		return isOk;
	}
	// 区域
	var province = get("province").value;
	var city = get("city").value;
	var region = get("region").value;
	if (province === '-1' || city === '-1' || region === '-1') {
		var locate_error = document.getElementById("locate_error");
		locate_error.innerHTML = "省市区必须都选";
		locate_error.className = "yinhangkap_label";
		isOk = false;
		return isOk;
	}
	// 详细开户名

	var bankbrand_error = document.getElementById("bankbrand_error");
	var brandWhere = document.getElementById("brandWhereid");
	if (brandWhere.value === '') {
		bankbrand_error.className = "yinhangkap_label";
		bankbrand_error.innerHTML = "详细开户行名称不能为空";
		isOk = false;
		return isOk;
	}

	// 卡号
	var account = document.getElementById("accountid").value;
	var bankaccount_error = document.getElementById("bankaccount_error");
	if (account === '') {
		bankaccount_error.className = "yinhangkap_label";
		bankaccount_error.innerHTML = "注意：卡号不能为空";
		isOk = false;
		return isOk;
	}
	// 排序编号
	var scot = get("scotid").value;
	if ( !( /^[1-9][0-9]*$/g.test(scot) )) {
		var scot_error = get("scot_error");
		scot_error.innerHTML = "排序编号必须填写且为整数";
		scot_error.className = "yinhangkap_label";
		isOk = false;
		return isOk;
	}

	return isOk;

}

// 我的银行卡 当用户选择银行 选择支付宝 调用
function setTaoBao(obj) {
	var bank = obj.options[get("bankid").selectedIndex].text;
	var brandWhere = get("brandWhereid");
	if ("淘宝(支付宝)" === bank) {
		brandWhere.value = bank;
		get("bankaccount_error").innerHTML="支付宝例：manew@manew.3322.org";
		get("accountid").focus();
	}else{
		brandWhere.value = "";
		get("bankaccount_error").innerHTML="银行例：9558 8012 0210 888 888，4位数字1空格!";
		get("accountid").focus();
	}
	var bank_error = document.getElementById("bank_error");
	bank_error.innerHTML = "";
	bank_error.className = "";
}

function provinceselectonchange() {
	var locate_error = document.getElementById("locate_error");
	locate_error.innerHTML = "";
	locate_error.className = "";

}

function bankbrandonfocus() {

	var bankbrand_error = document.getElementById("bankbrand_error");
	bankbrand_error.className = "";
	bankbrand_error.innerHTML = "例：文二路分理处、朝阳支行英家坟储蓄所等";
}

//function bankbrandonblur() {
//	var bankbrand_error = document.getElementById("bankbrand_error");
//	var brandWhere = document.getElementById("brandWhereid");
//	if (brandWhere.value === '') {
//		bankbrand_error.className = "yinhangkap_label";
//		bankbrand_error.innerHTML = "详细开户行名称不能为空";
//	}
//
//}

function bankaccountonfocus() {

	var bankaccount_error = document.getElementById("bankaccount_error");
	bankaccount_error.className = "";
	var name1 = get("bankid").options[get("bankid").options.selectedIndex].text;
	if(name1 === "淘宝(支付宝)"){
		bankaccount_error.innerHTML = "支付宝例：manew@manew.3322.org";
	}else{
		bankaccount_error.innerHTML = "银行例：9558 8012 0210 888 888，4位数字1空格!";
	}

}

function bankaccountonblur() {

	var account = document.getElementById("accountid").value;
	var bankaccount_error = document.getElementById("bankaccount_error");
	if (account === '') {
		bankaccount_error.className = "yinhangkap_label";
		bankaccount_error.innerHTML = "注意：卡号不能为空";

	}

}

function scotonfocus() {
	var scot_error = get("scot_error");
	scot_error.innerHTML = "例：你想在下面的列表中排第一就录入：1";
	scot_error.className = "";
}

function scotonblur() {
	var scot = get("scotid").value;
	if (scot === '') {
		var scot_error = get("scot_error");
		scot_error.innerHTML = "排序编号必须填写";
		scot_error.className = "yinhangkap_label";
	}

}

// 控制 输入的账号 每 四位 空一格

function setSpace(obj) {

	obj.value = obj.value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");

};
/*
 * 我的银行卡 当 点击 修改的时候调用他 accountName 户名 account账号 name 银行名称 locate 位置 brandWhere
 * 分行位置
 */
function xiugai(accountName, account, name, locate, brandWhere, pkBankAccount,
		scot) {
	// 设置银行的名称
	var bank = get("bankid");
	for ( var i = 0; i < bank.length; i++) {
		if (bank.options[i].text == name) {
			bank.options[i].selected = "selected";
		}
	}

	var brandWhereObj = get("brandWhereid");
	brandWhereObj.value = brandWhere;

	var accountObj = get("accountid");
	accountObj.value = account;
	var accountNameObj = get("accountNameid");
	accountNameObj.value = accountName;
	//改省市区
	var areaInput = get('area_input');
	var pD = get('province'), pC = get('city'), pR = get('region');
	areaInput.value = '';
	if ((typeof p) === 'undefined') {
		p = new MyouProvince();
		if (pD && pC && pR) {
			p.init(pD, pC, pR, {
				'onInit' : function() {
					p.findByPk(parseInt(locate));
					if (pD.value != -1 && pC.value != -1 && pR.value != -1) {
						areaInput.value += p.getValObj(pD.value)[1] + ' '
								+ p.getValObj(pC.value)[2] + ' '
								+ p.getValObj(pR.value)[2] + ',' +  p.getValObj(pR.value)[1] ;
					}
				}
			});
		}

	} else {
		p.findByPk(parseInt(locate));
		if (pD.value != -1 && pC.value != -1 && pR.value != -1) {
			areaInput.value += p.getValObj(pD.value)[1] + ' '
					+ p.getValObj(pC.value)[2] + ' ' + p.getValObj(pR.value)[2] + ',' +  p.getValObj(pR.value)[1] ;
		}
	}

	// 要延迟加载 50s
	setTimeout(function() {
		if (areaInput.value == '') {
			// 省
			var province_value = pD.options[pD.selectedIndex].text;
			// 市
			var city_value = pC.options[pC.selectedIndex].text;
			// 区
			var region_value = pR.options[pR.selectedIndex].text;

			areaInput.value = province_value + ' ' + city_value + ' '
					+ region_value + ',' + pR.options[pR.selectedIndex].value ;
		}

	}, 250);

	// 改标题
	var titleObj = get("titleid");
	titleObj.innerHTML = "修改银行卡";

	var judje = get("judje");
	judje.innerHTML = "<input type=\"hidden\" name=\"judje\" id='judjeid' value='update' />"
			+ "<input type=\"hidden\" name=\"pkBankAccount\" id='bankAccountid' value='"
			+ pkBankAccount + "' />";

	// 显示排序编号
	var scotObj = get("scotid");
	scotObj.value = scot;
}
/**
 * zhifumima 校验页面 点击保存的时候调用
 */
function chezhifumimapassword() {
	var istheSame = true;
	// 原始密码
	var passwordold = get("passwordold").value;
	var passwordold_error = get("passwordold_error");
	if (passwordold === '') {
		passwordold_error.innerHTML = "请输入原始密码";
		passwordold_error.className = "mima_c_div_span";
		istheSame = false;
		return istheSame;
	}
	// 新密码
    if(!newonblur()){
    	istheSame = false;
    	return istheSame;
    }

	// 确认密码
	if(!sureonblur()){
		istheSame = false;
    	return istheSame;
	}
	return istheSame;
}
function oldonfocus() {
	var passwordold_error = get("passwordold_error");
	passwordold_error.innerHTML = "请您输入您的原始密码";
	passwordold_error.className = "mima_s_div_span";
}
function oldonblur() {
	var passwordold = get("passwordold").value;
	var passwordold_error = get("passwordold_error");
	if (passwordold === '') {
		passwordold_error.innerHTML = "注意：您的原始密码必填";
		passwordold_error.className = "mima_c_div_span";
	}else{
		passwordold_error.innerHTML = "";
		passwordold_error.className = "";
	}
}

function newonfocus() {
	var passwordnew_error = get("passwordnew_error");
	passwordnew_error.innerHTML = "必须是数字和字符的组合,长度至少6位";
 	passwordnew_error.className = "mima_s_div_span";
}
function newonblur() {
	var isSuc = true;
 	var passwordnew_error = get("passwordnew_error");
 	var passwordnew = get("passwordnew").value;
 	if (/^\s*$/.test(passwordnew)|| /^[0-9]*$/.test(passwordnew) || /^[^0-9]*$/.test(passwordnew)  ) {
 		passwordnew_error.className = "mima_c_div_span";
 		if( /^\s*$/.test(passwordnew) ){
 		passwordnew_error.innerHTML = "密码不能为空或空格";
 		isSuc = false;
 		return isSuc;
 		}
 		if(/^[0-9]*$/.test(passwordnew)){
 		passwordnew_error.innerHTML = "密码不能是纯数字";
 		isSuc = false;
 		return isSuc;
 		}
 		if( /^[^0-9]*$/.test(passwordnew) ){
 		passwordnew_error.innerHTML = "密码不能是纯字符";
 		isSuc = false;
 		return isSuc;
 		}
 	}else{
 		passwordnew_error.innerHTML = "";
 		passwordnew_error.className = "";
 	}
 	return isSuc;
}
function sureonfocus() {
	
	var passwordsure_error = get("passwordsure_error");
 	passwordsure_error.innerHTML = "请您再次输入您的密码";
 	passwordsure_error.className = "mima_s_div_span";
}

function sureonblur() {
	var isSuc = true;
 	var passwordsure_error = get("passwordsure_error");
 	var passwordsure = get("passwordsure").value;
 	var passwordnew = get("passwordnew").value;

 	if (/^\s*$/.test(passwordsure) || passwordsure != passwordnew) {
 		passwordsure_error.className = "mima_c_div_span";
		
 		if(/^\s*$/.test(passwordsure)){
 		passwordsure_error.innerHTML = "确认密码不能为空，请您输入";
 		isSuc = false;
 		return isSuc;
 		}
 		
 		if(passwordsure != passwordnew){
 		passwordsure_error.innerHTML = "确认密码和密码不相同";
 		isSuc = false ;
 		return isSuc;
 		}
 	}else{
 		passwordsure_error.innerHTML = "";
 		passwordsure_error.className = "";
 	}
 	
 	return isSuc;

}

/**
 * 会员线下充值 ；校验方法
 */

function checkhuichongInf() {
	// 校验金额 银行 密码 备注
	var result = "";
	var ischosed = true;
	// email
	var email = get("judjeemailid");
	var email_error = get("email_error");
	if (email === null) {
		email_error.innerHTML = "请输入email";
		email_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	} else if (email.value === '') {
		email_error.innerHTML = "请输入email";
		email_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}
	// money
	var money = get("moneyid").value;
	var balance = get("balanceid").innerHTML;
	var money_error = get("money_error");

	if (parseInt(money) > parseInt(balance)) {
		money_error.innerHTML = "余额不足，请充值";
		money_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}

	if (money === '') {
		money_error.innerHTML = "请输入金额";
		money_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}
	// bank
	var yinhangselect = get("yinhangselect");
	var yinhang_error = get("yinhang_error");
	if (yinhangselect.value === '-1') {

		yinhang_error.innerHTML = "注意：银行必须写。";
		yinhang_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}
	// memo
	var memo = get("memoid");
	var memo_error = get("memo_error");

	if (memo.value === '') {
		memo_error.innerHTML = "注意：备注必须写";
		memo_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}

	// ps
	var password = get("passwordid").value;
	var ps_error = get("ps_error");
	if (password === '') {
		ps_error.innerHTML = "密码不能为空";
		ps_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}
	
	if(ischosed){
		document.getElementById("huichongidaa").disabled='disabled';
		
	}

	return ischosed;
}

function emailonfocus() {
	var email_error = get("email_error");
	email_error.innerHTML = "";
	email_error.className = "";
}

function emailonblur() {
	var email = get("judjeemailid");
	var email_error = get("email_error");
	if (email.value === '') {
		email_error.innerHTML = "请输入email";
		email_error.className = "huiyuan_bdo";
	}
}

function moneyonfocus() {
	var money_error = get("money_error");
	money_error.innerHTML = "";
	money_error.className = "";
}

function moneyonblur() {
	var money = get("moneyid").value;
	var balance = get("balanceid").innerHTML;
	var money_error = get("money_error");

	if (parseInt(money) > parseInt(balance)) {
		money_error.innerHTML = "余额不足，请充值";
		money_error.className = "huiyuan_bdo";

	}

	if (money === '') {
		money_error.innerHTML = "请输入金额";
		money_error.className = "huiyuan_bdo";
	}

}

function bankonchange() {
	var yinhang_error = get("yinhang_error");
	yinhang_error.innerHTML = "";
	yinhang_error.className = "";

}

function memoonfocus() {
	var memo_error = get("memo_error");
	memo_error.innerHTML = "";
	memo_error.className = "";
}

function memoonblur() {
	var memo = get("memoid");
	var memo_error = get("memo_error");

	if (memo.value === '') {
		memo_error.innerHTML = "注意：备注必须写";
		memo_error.className = "huiyuan_bdo";
	}

}

function psonfocus() {
	var ps_error = get("ps_error");
	ps_error.innerHTML = "";
	ps_error.className = "";

}

function psonblur() {
	var password = get("passwordid").value;
	var ps_error = get("ps_error");
	if (password === '') {
		ps_error.innerHTML = "密码不能为空";
		ps_error.className = "huiyuan_bdo";
	}
}

/**
 * 快速下单交易 信息检验
 */
function checkkuaidanInf() {
	// 校验金额 银行 密码 备注
	var result = "";
	var ischosed = true;
	// 花店编号
	var pkOrg = get("pkOrgId");
	var org_error = get("org_error");
	if (pkOrg === null) {
		org_error.innerHTML = "请输入花店的编号";
		org_error.className = "xiadan_bdo";
		ischosed = false;
		return ischosed;
	} else if (pkOrg.value === '') {
		org_error.innerHTML = "请输入花店编号";
		org_error.className = "xiadan_bdo";
		ischosed = false;
		return ischosed;
	}

	// money
	var money = get("occurCashid").value;
	var balance = get("balanceid").innerHTML;
	var money_error = get("money_error");

	if (parseInt(money) > parseInt(balance)) {
		money_error.innerHTML = "余额不足，请充值";
		money_error.className = "xiadan_bdo";
		ischosed = false;
		return ischosed;
	}
	if (money === '') {
		money_error.innerHTML = "请输入金额";
		money_error.className = "xiadan_bdo";
		ischosed = false;
		return ischosed;
	}

	// memo
	var memo = get("memoid");
	var memo_error = get("memo_error");

	if (memo.value === '') {
		memo_error.innerHTML = "注意：备注必须写";
		memo_error.className = "xiadan_bdo";
		ischosed = false;
		return ischosed;
	}

	// ps
	var password = get("passwordid").value;
	var ps_error = get("ps_error");
	if (password === '') {

		ps_error.innerHTML = "密码必须填写";
		ps_error.className = "xiadan_bdo";
		ischosed = false;
		return ischosed;
	}
	//到这 条件过滤完  下一步就是提交
	document.getElementById("kuaidaniddd").disabled='disabled';
	return ischosed;
}

function orgonfocus() {
	var org_error = get("org_error");
	org_error.innerHTML = "";
	org_error.className = "";

}

function kuaidanmoneyonfocus() {
	var money_error = get("money_error");
	money_error.innerHTML = "";
	money_error.className = "";
}

function kuaidanmoneyonblur() {
	var money = get("occurCashid").value;
	var balance = get("balanceid").innerHTML;
	var money_error = get("money_error");

	if (parseInt(money) > parseInt(balance)) {
		money_error.innerHTML = "余额不足，请充值";
		money_error.className = "xiadan_bdo";

	}
	if (money === '') {
		money_error.innerHTML = "请输入金额";
		money_error.className = "xiadan_bdo";
	}

}
function kuaidanmemoonfocus() {
	var memo_error = get("memo_error");
	memo_error.innerHTML = "";
	memo_error.className = "";
}

function kuaidanmemoonblur() {
	var memo = get("memoid");
	var memo_error = get("memo_error");

	if (memo.value === '') {
		memo_error.innerHTML = "注意：备注必须写";
		memo_error.className = "xiadan_bdo";
	}

}

function kuaidanpsonfocus() {
	var ps_error = get("ps_error");
	ps_error.innerHTML = "";
	ps_error.className = "";
}

function kuaidanpsonblur() {
	var password = get("passwordid").value;
	var ps_error = get("ps_error");
	if (password === '') {

		ps_error.innerHTML = "密码必须填写";
		ps_error.className = "xiadan_bdo";
	}

}

/**
 * 花店线下充值 信息检验
 */
/**
 * 快速下单交易 信息检验
 */
function checkdianchongInf() {
	// 校验金额 银行 密码 备注
	var result = "";
	var ischosed = true;
	// 花店编号
	var pkOrg = get("pkOrgId");
	var org_error = get("org_error");
	if (pkOrg === null) {
		org_error.innerHTML = "请输入花店的编号";
		org_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	} else if (pkOrg.value === '') {
		org_error.innerHTML = "请输入花店编号";
		org_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}

	// money
	var money = get("moneyid").value;
	var balance = get("balanceid").innerHTML;
	var money_error = get("money_error");

	if (parseInt(money) > parseInt(balance)) {
		money_error.innerHTML = "余额不足，请充值";
		money_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}
	if (money === '') {
		money_error.innerHTML = "请输入金额";
		money_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}

	// memo
	var memo = get("memoid");
	var memo_error = get("memo_error");

	if (memo.value === '') {
		memo_error.innerHTML = "注意：备注必须写";
		memo_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}

	// ps
	var password = get("passwordid").value;
	var ps_error = get("ps_error");
	if (password === '') {

		ps_error.innerHTML = "密码必须填写";
		ps_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}
	// bank
	var select = get("selectid").value;
	if (select === '-1') {
		var bank_error = get("bank_error");
		bank_error.innerHTML = "注意：银行必须选择";
		bank_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;

	}

	if(ischosed){
		document.getElementById("dianchongddd").disabled ='disabled';
	}
	
	return ischosed;
}

//添加花籽信息校验
function checkaddAccum(){

	// 校验金额  密码 备注
	var ischosed = true;
	// 花店编号
	var pkOrg = get("pkOrgId");
	var org_error = get("org_error");
	if (pkOrg === null || pkOrg.value === '') {
		org_error.innerHTML = "请输入花店的编号";
		org_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}

	// money
	var money = get("moneyid").value;
	var money_error = get("money_error");
	if (money === '' || !( /^[1-9]{1}[0-9]*|-{1}[1-9]{1}[0-9]*$/.test(money) )) {
		money_error.innerHTML = "请输入花籽数量(注:必须整数)";
		money_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}

	// memo
	var memo = get("memoid");
	var memo_error = get("memo_error");

	if (memo.value === '') {
		memo_error.innerHTML = "注意：备注必须写";
		memo_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}

	// ps
	var password = get("passwordid").value;
	var ps_error = get("ps_error");
	if (password === '') {

		ps_error.innerHTML = "密码必须填写";
		ps_error.className = "huiyuan_bdo";
		ischosed = false;
		return ischosed;
	}

	if(ischosed){
		document.getElementById("dianchongddd").disabled ='disabled';
	}
	
	return ischosed;
	
}

function dianchongorgonfocus() {
	var org_error = get("org_error");
	org_error.innerHTML = "";
	org_error.className = "";

}

function dianchongmoneyonfocus() {
	var money_error = get("money_error");
	money_error.innerHTML = "";
	money_error.className = "";
}

function dianchongmoneyonblur() {
	var money = get("moneyid").value;
	var balance = get("balanceid").innerHTML;
	var money_error = get("money_error");

	if (parseInt(money) > parseInt(balance)) {
		money_error.innerHTML = "余额不足，请充值";
		money_error.className = "xiadan_bdo";

	}
	if (money === '') {
		money_error.innerHTML = "请输入金额";
		money_error.className = "xiadan_bdo";
	}
}


function tianjiahuadianonblur(){
	var money = get("moneyid").value;
	var money_error = get("money_error");

	if (money === '') {
		money_error.innerHTML = "请输入花籽的数量";
		money_error.className = "xiadan_bdo";
	}
}

function dianchongmemoonfocus() {
	var memo_error = get("memo_error");
	memo_error.innerHTML = "";
	memo_error.className = "";
}

function dianchongmemoonblur() {
	var memo = get("memoid");
	var memo_error = get("memo_error");

	if (memo.value === '') {
		memo_error.innerHTML = "注意：备注必须写";
		memo_error.className = "xiadan_bdo";
	}

}

function dianchongpsonfocus() {
	var ps_error = get("ps_error");
	ps_error.innerHTML = "";
	ps_error.className = "";
}

function dianchongpsonblur() {
	var password = get("passwordid").value;
	var ps_error = get("ps_error");
	if (password === '') {

		ps_error.innerHTML = "密码必须填写";
		ps_error.className = "xiadan_bdo";
	}

}

function dianchongbankonchange() {
	var bank_error = get("bank_error");
	bank_error.innerHTML = "";
	bank_error.className = "";
}

//花付宝系统 --- 银行管理信息校验
function checkyinhang(){
	var isSuc = true;
	var name = get('bankid').value;
	var filename = get('fileid').value;
	if(name === '' && filename === ''){
		isSuc = false;
		alert("银行和文件一个都没选,你想做什么呢？");
		return isSuc;
	}
	
	return isSuc;
}


/** ***********************************上面的方法是所有页面的校验方法******************************************** */

/*************************************jquery  ajax  form表单的提交****************************************/
 /*function doajaxform(){
	$(document).ready(function(){
		$("#free").submit(function(){
			$.ajax(function(){
				type: "post",
			    async: "true",
			    url:  "",
			    data: {
			    },
				success: function(data){
		          },
		        error:function(XMLHttpRequest, textStatus, errorThrown){
		        },
		        dataType: "json" 
			});
		});
		
	});
	
}*/
//function queryload(){
//	$(document)ready(
//			function(){
//				
//			}
//			);
//		
//	}
//}


