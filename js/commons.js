/**
 * 修改子菜单
 *
 */
function updateChildMenu(code) {
	art.dialog.open('/admin/updateChildMenu.html?code=' + code, {
		title : '修改子菜单',
		width : 400,
		height : 180
	});
}

/**
 * 修改菜单
 *
 */
function popUpdateMenu(code) {
	art.dialog.open('/admin/popUpdateMenu.html?code=' + code, {
		title : '修改菜单',
		width : 400,
		height : 180
	});
}

/**
 * 添加用户
 *
 */
function popAddUser() {
	art.dialog.open('/admin/popAddUser.html', {
		title : '添加账户',
		width : 400,
		height : 180
	});
}

/**
 * 弹出修改用户
 * */
function popUpdateUser(code) {
	art.dialog.open('/admin/popUpdateUser.html?code=' + code, {
		title : '修改账户密码',
		width : 400,
		height : 180
	});
}


/**
 * 弹出增加一个子菜单的框
 *
 * */
function popAddChildMenu(code){
	art.dialog.open('/admin/popAddChildMenu.html?code=' + code, {
		title : '修改菜单',
		width : 400,
		height : 180
	});
}

/**
 * 弹出修改文章的界面
 *
 * */
function popUpdateArticle(code){
	art.dialog.open('/admin/popUpdateArticle.html?code=' + code, {
		title : '修改文章',
		width : 1000,
		height : 600
	});
}

/**
 * 弹出修改学科设置的界面
 *
 * */
function popUpdateSet(code){
	art.dialog.open('/admin/popUpdateSet.html?code=' + code, {
		title : '修改学科设置',
		width : 700,
		height : 590
	});
}

/**
 * 弹出修改老师的界面
 *
 * */
function popUpdateTeacher(code){
	art.dialog.open('/admin/popUpdateTeacher.html?code=' + code, {
		title : '修改老师信息',
		width : 750,
		height : 600
	});
}

/**
 * 弹出修改老师的界面
 *
 * */
function popAddTeacher(type){
	art.dialog.open('/admin/popAddTeacher.html?type=' + type, {
		title : '添加老师',
		width : 750,
		height : 600
	});
}


/**
 * 弹出添加文章的界面
 *
 * */
function popAddArticle(code){
	art.dialog.open('/admin/popAddArticle.html?code=' + code, {
		title : '添加文章',
		width : 1000,
		height : 600
	});
}


/**
 *	删除子菜单
 *
 */
function deleteChildMenu(code){
	var result = confirm("你确定要删除该子菜单么？");
	if(result == true){
		myou.ajax({
			url : '/deleteChildMenu.json',
			data : {
				code : code
			},
			success : function(text) {
				if (text == "suc") {
					alert("操作成功");
					window.location.reload();
				} else {
					alert("系统处理失败，请重新尝试");
				}
			}
		});
	}
}

/**
 * 删除用户
 *
 * */
function deleteUser(code){
	var result = confirm("你确定要删除该用户么？");
	if(result == true){
		myou.ajax({
			url : '/deleteUser.json',
			data : {
				code : code
			},
			success : function(text) {
				if (text == "suc") {
					alert("操作成功");
					window.location.reload();
				} else {
					alert("系统处理失败，请重新尝试");
				}
			}
		});
	}
}

/**
 *	删除子菜单
 *
 */
function deleteArticle(code){
	var result = confirm("你确定要删除该文章么？");
	if(result == true){
		myou.ajax({
			url : '/deleteArticle.json',
			data : {
				code : code
			},
			success : function(text) {
				if (text == "suc") {
					alert("操作成功");
					window.location.reload();
				} else {
					alert("系统处理失败，请重新尝试");
				}
			}
		});
	}
}



/**
 *	删除老师
 *
 */
function deleteTeacher(code){
	var result = confirm("你确定要删除么？");
	if(result == true){
		myou.ajax({
			url : '/deleteTeacher.json',
			data : {
				code : code
			},
			success : function(text) {
				if (text == "suc") {
					alert("操作成功");
					window.location.reload();
				} else {
					alert("系统处理失败，请重新尝试");
				}
			}
		});
	}
}

/**
 *
 * 登录
 * */
function doLogin(){
	art.dialog.open('/login.html', {
		title : '登录',
		width : 350,
		height : 270
	});
}

function exit(){
	myou.ajax({
		url : '/exit.json',
		data : {

		},
		success : function(text) {
			if (text == "suc") {
				alert("退出成功");
				window.location.reload();
			} else {
				alert("系统处理失败，请重新尝试");
			}
		}
	});
}
