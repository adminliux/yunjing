// 相关配置开始
var file_size_limit="2048";//单个文件最大限制几MB
var file_post_name="Filedata";//文件选择框名称
var upload_url="/uploadSchoolImg.html";///jiameng/zhuceok.html//文件上传接收文件的地址
var file_types="*.jpg;*.gif;*.png;*.bmp;*.doc;";//允许文件类型 "*.*" 所有文件    "*.jpg;*.gif" 只允许上传jpg和gif文件
var file_types_description="文件";//允许文件类型描述
var file_upload_limit="0";//上传文件个数限制
var swfupload="/swfupload/swfupload.swf";//swfupload.swf插件位置
var button_placeholder_id="logo";//文件选择按钮id
var button_text="选择文件";//文件选择按钮文本 html支持
var button_image_url="/skins/images/XPButtonUploadText_61x22.gif";//文件选择按钮背景图
var button_text_style=".btnText { font-size: 10; font-weight: bold; font-family: MS Shell Dlg; }";//文件选择按钮样式
var button_text_top_padding=3;//文本选择按钮中文本  top padding
var button_text_left_padding=100;//文本选择按钮中文本 lef padding
var button_width = 69;//文本选择按钮的宽度
var	 button_height = 22;//文本选择按钮的高度

//消息提示
var msg_complete="完成";
var msg_zero_byte_file="您选择的文件是空的或没权限读取，请选择其他文件。";
var msg_invalid_filetype="你选择的文件是不允许上传的类型。";
var msg_upload_error="上传时发生错误，请稍后再试";
var msg_missing_upload_url="一个配置错误，暂时无法上传。";
var msg_upload_limit_exceeded="你上传受限制。";
var msg_upload_filed="上传失败";
var msg_io_error="文件读取(IO)错误。";
var msg_security_error="安全限制错误。";
var msg_file_cancelled="上传被取消。";
var msg_file_stopped="停止了上传。";
var msg_no_upload_file="请先选择上传文件";
var msg_user_select_file="您选择的文件";
var msg_big="你所上传的文件太大";
var msg_user_select_exceeded="你选择了太多的文件";
var msg_user_upload_limited="你已达到上传限制。";
var msg_user_select_limit="你一次可以选择";
var msg_much_file="个文件。";
var msg_hundred_percent="100%"; 
var msg_plugin_unavailable="SWFUpload is unavailable";
var msg_uploaded="已上传";
var msg_allow_singleFile_maxsize="仅允许上传"+file_size_limit+"KB文件";
// 配置结束

var queue_file = null;

var FeaturesDemo = {start:function (swf_upload_instance) {
	FeaturesDemo.SU = swf_upload_instance;
}, stopUpload:function () {
	FeaturesDemo.SU.stopUpload();
}};
var FeaturesDemoHandlers = {swfUploadLoaded:function () {
	FeaturesDemo.start(this);
}, fileDialogStart:function () {
},
fileQueued:function (file) {
	if (file != null) {
		queue_file.value = file.id;
	}
},
fileQueueError:function (file, errorCode, message) {
	switch (errorCode) {
	  case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
		alert(msg_user_select_exceeded + (message == 0 ? msg_user_upload_limited : msg_user_select_limit + (message > 1 ? message + msg_much_file : message + msg_much_file)));
		return;
	  case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
		alert(msg_user_select_file + " " + (file != null ? file.name : "") + " " + msg_big + "," + msg_allow_singleFile_maxsize);
		return;
	  case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
		alert(msg_zero_byte_file);
		return;
	  case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
		alert(msg_invalid_filetype);
		return;
	  default:
		alert(msg_upload_error);
		return;
	}
}, fileDialogComplete:function (numFilesSelected, numFilesQueued) {
	upload();
}, uploadStart:function (file) {
	return true;
}, uploadProgress:function (file, bytesLoaded, totalBytes) {
	// 不显示进度条
}, uploadSuccess:function (file, serverData, receivedResponse) {
	if (serverData == 'error'){
		alert("上传错误，请重新上传图片文件，否则将使用默认的头像图片！");
		get('up_temp').value = '';
	} else {
		get('up_temp').value = serverData;
	}
}, uploadError:function (file, errorCode, message) {
	switch (errorCode) {
	  case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
		alert(msg_missing_upload_url);
		return;
	  case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
		alert(msg_upload_limit_exceeded);
		return;
	  case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
	  case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
		break;
	  default:
		alert(msg_upload_error);
		return;
	}
	switch (errorCode) {
	  case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
		alert(msg_upload_error);
		break;
	  case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
		alert(msg_upload_filed);
		break;
	  case SWFUpload.UPLOAD_ERROR.IO_ERROR:
		alert(msg_io_error);
		break;
	  case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
		alert(msg_security_error);
		break;
	  case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
		alert(msg_file_cancelled);
		break;
	  case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
		alert(msg_file_stopped);
		break;
	}
}, uploadComplete:function (file) {
}};
var suo;
function loadSwfupload() {
	if (typeof (SWFUpload) === "undefined") {
		alert(msg_plugin_unavailable);
		return;
	}
	queue_file = get('up_temp');
	suo = new SWFUpload({
		upload_url:upload_url, 
		file_post_name:file_post_name, 
		file_size_limit:file_size_limit + " KB", 
		file_types:file_types, 
		file_types_description:file_types_description, 
		file_upload_limit:file_upload_limit, 
		button_image_url:button_image_url, 
		button_width:button_width, 
		button_height:button_height, 
		button_action:SWFUpload.BUTTON_ACTION.SELECT_FILE, 
		button_placeholder_id:button_placeholder_id, 
		button_text:button_text, 
		button_text_style:button_text_style, 
		button_text_top_padding:button_text_top_padding, 
		button_text_left_padding:button_text_left_padding, 
		swfupload_loaded_handler:FeaturesDemoHandlers.swfUploadLoaded, 
		file_dialog_start_handler:FeaturesDemoHandlers.fileDialogStart, 
		file_queued_handler:FeaturesDemoHandlers.fileQueued, 
		file_queue_error_handler:FeaturesDemoHandlers.fileQueueError, 
		file_dialog_complete_handler:FeaturesDemoHandlers.fileDialogComplete, 
		upload_start_handler:FeaturesDemoHandlers.uploadStart, 
		upload_progress_handler:FeaturesDemoHandlers.uploadProgress, 
		upload_error_handler:FeaturesDemoHandlers.uploadError, 
		upload_success_handler:FeaturesDemoHandlers.uploadSuccess, 
		upload_complete_handler:FeaturesDemoHandlers.uploadComplete,  
		flash_url:swfupload
	});
}
function upload() {
	var curQueueFile = queue_file.value;
	if( curQueueFile && curQueueFile ) {
		FeaturesDemo.SU.startUpload( queue_file.value );
	}
}