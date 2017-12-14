function ajax(method,url,json,success,error){
	//1、创建一个ajax对象
	var xml = new XMLHttpRequest()||new ActiveXObject("Microsoft","XMLHTTP");


	//判断是否是get请求
	if(method=="get"){
		//数据拼接
		var str = '';
		for(var key in json){
			str+='&'+key+"="+json[key]
		}
		str = str.substr(1);
		//添加到url后面
		url = url+"?"+str;
		//打开与后面连接的数据
		xml.open("get",url,true);
		//发送
		xml.send();
	}else{
		//数据拼接
		var str = '';
		for(var key in json){
			str+='&'+key+"="+json[key]
		}
		str = str.substr(1);

		xml.open("post",url,true);
		//设置post的请求头
		xml.setRequestHeader("content-type","application/x-www-form-urlencoded");
		//发送
		xml.send(str)
	}

	xml.onreadystatechange = function(){
		//ajax请求成功以及服务器请求成功
		if(xml.readyState==4&&xml.status==200){
			var r = xml.responseText;
			if(typeof r!="object"){
				r = JSON.parse(r)
			}
			
			success&&success(r)

		}else{
			error&&error(xml.status)
		}
	}
}