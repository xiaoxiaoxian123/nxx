//冒泡排序
function bubblingSort(arr){
	var temp;
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}
//选择排序
function selectSort(arr){
	var temp;
	for(var i= 0;i<arr.length-1;i++){
		for(j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				temp=arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
			}
		}
	}
	return arr
}
//获取最大数
function getMax(arr){
	var max=arr[0];
	for(i=0;i<arr.length;i++){
		if(max<arr[i]){
			max = arr[i];
		}
	}
	return max;
}
//获取最小数
function getMin(arr){
	var min=arr[0];
	for(i=0;i<arr.length;i++){
		if(min>arr[i]){
			min = arr[i];
		}
	}
	return min;
}
//判断数组中是否存在某个值
 function has(arr,n){
 	for(var i in arr){
 		if(arr[i]==n){
 			return true;
 		}
 	}
 	return false;
 } 
 //数组去重
 function norepeat(arr){
	var arr1=[]
	for(var i in arr){
		if(!has(arr1,arr[i])){
			arr1.push(arr[i])
		}
	}
	return arr1;
}
//随机数
function randomNum(m,n){
	return parseInt(m+Math.random()*(n-m+1));
}
//随机颜色
function randomColor(){
	var R = parseInt(Math.random()*(255+1));
	var G = parseInt(Math.random()*(255+1));
	var B = parseInt(Math.random()*(255+1));
	return 'rgb('+R+','+G+','+B+')';
}
//将时间对象转化为字符串
function timer(sign){
	var d = new Date();
	if(!sign){
		sign='/';
	}
	return d.getFullYear()+sign+totalTimer((d.getMonth()+1))+sign+totalTimer(d.getDate())+'  '+totalTimer(d.getHours())+':'+totalTimer(d.getMinutes())+':'+totalTimer(d.getSeconds());
}
//不足2位补0
function totalTimer(num){
	if (num<10){
		num='0'+num;
	}
	return num
}
//4位验证码
function code(){
	var str='';
	for(var i=0;i<4;i++){
	var num = parseInt(48+Math.random()*(122-47));
		if(num>=58&&num<=64||num>=91&&num<=96){
			i--;
		}else {
			str+=String.fromCharCode(num);
		
		}
	}
	return str;
}
//通过id名获取
function $(id){
		var str = id.slice(1);
		return document.getElementById(str)
	}

//通过标签名获取
function $(TagName){
		var str = id.slice(1);
		return document.getElementByTagName(str)
	}
//通过类名获取
function $(ClassName){
		var str = id.slice(1);
		return document.getElementByClassName(str)
	}
//通过name值获取
function $(Name){
		var str = id.slice(1);
		return document.getElementByName(str)
	}
//隐藏
function hides(obj){
	obj.style.display='none';
}
//显示
function show(obj){
	obj.style.display='block';
}
//获取和设置自定义属性
function attr(obj,attr,val){
	if(arguments.length==2){
		return getAttribute(attr)
	}if(arguments.length==3){
		return setAttribute(attr,val)
	}if(arguments.length==1||obj.length>3)return
}
//设置cookie
function setCookie(_name,_val,expires){
	var d =new Date();
	d.setDate(d.getDate()+expires)
	document.cookie=_name+'='+_val+';path=/;expires='+d;
}
//获取cookie
function getCookie(_name){
	var cookie=document.cookie;
	var arr=cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var newarr=arr[i].split('=');
		if(newarr[0]==_name){
			return newarr[1];
		}
	}
}
//删除cookie
function removeCookie(_name,_val){
	setcookie(_name,_val,-1)
}
//获取className
function getClassName(oparent,aClass){
	var aEle=oparent.getElementByTagName('*');
	var reg = new RegExp('\\b'+aClass+'\\b',i);
	var arr=[];
	for(var i=0;i<aEle.length;i++){
	    if(reg.test(aEle[i].className)){
	    	arr.push(aEle[i]);
	  }
	}
	return arr;
}
//获取非行间样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr]
	}
}
//完美运动
function move(obj,json,fn){
	clearInterval(obj.timer)
	obj.timer=setInterval(function(){
		var bStop=true;
		for(var attr in json){
			var icur=0;
			if(attr=='opacity'){
				icur=parseInt(parseFloat(getStyle(obj,attr))*100)
			}else{
				icur=parseInt(getStyle(obj,attr))
			}
			var speed=(json[attr]-icur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed)
			if(icur!=json[attr]){
				bStop=false;
			}
				if(attr=='opacity'){
					obj.style.opacity=(icur+speed)/100;
					obj.style.filter='alpha(opacity:'+(icur+speed)+')'
				}else{
					obj.style[attr]=icur+speed+'px';
				}
			
		}
		if(bStop){
				clearInterval(obj.timer)
				if(fn){
					fn()
				}
			}
	},50)
}