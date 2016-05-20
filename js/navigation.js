/**
 * 进入我的花付宝  主页面   点击 我的花付宝  和  花付宝系统管理  调用 方法
 * @param obj
 */
function showMenu( obj ) {
			var cBack = getStyle(obj, 'backgroundImage') || getStyle(obj, 'background-image');
			//alert(cBack);
			if(cBack.indexOf('content_07') > -1) {
				// hide
				obj.style.backgroundImage = 'url(/skins/admin/images/index/content_22.gif)';
				var uls = obj.parentNode.parentNode.getElementsByTagName('ul');
				if(uls.length > 0) {
					uls[0].style.display = 'none';
				}
			} else {
				obj.style.backgroundImage = 'url(/skins/admin/images/index/content_07.gif)';
				var uls = obj.parentNode.parentNode.getElementsByTagName('ul');
				if(uls.length > 0) {
					uls[0].style.display = '';
				}
			}
		}

		function getStyle( _obj, _type ) {
			if( _obj.currentStyle ) {
				return (_obj.currentStyle[_type]);
			} else if( document.defaultView ) {
				return (document.defaultView.getComputedStyle(_obj, null).getPropertyValue(_type));
			} else {
				return _obj.style[_type];
			}
		}
		function get( id ) {
			return document.getElementById( id );
		}
	
		
		function setTab(name,cursel,n){
			for(i=1;i<=n;i++){
				var menu=document.getElementById(name+i);
				var con=document.getElementById("con_"+name+"_"+i);
				if(menu != undefined && menu != null) menu.className=(i==cursel?"hover":"");
				if(con != undefined && con != null) con.style.display=(i==cursel?"block":"none");
			}
		}

		//用于改变a标签的颜色
		var curObj;
		function onmousedownMethod(obj){
			obj.parentNode.style.backgroundColor ="#54ad63";  
			if(curObj != null && curObj != obj){
				curObj.parentNode.style.backgroundColor = "white";
			}
			curObj = obj;
			
		}
		
		function onmouseoverMethod(obj){
			obj.style.background = "";
		}
		function onmouseoutMethod(){
			obj.style.background = "";
			
		}