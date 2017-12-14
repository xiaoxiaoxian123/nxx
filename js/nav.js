
//第一个导航
var nav=document.getElementById('nav1');
var li=nav.querySelectorAll('#nav');
for(var i=0;i<li.length;i++){
	li[i].children[0].style.display='block';
	li[i].children[1].style.display='none';
}
for(var i=0;i<li.length;i++){
	li[i].onmouseover=function(){
		this.children[0].style.display='none';
		this.children[1].style.display='block';
		this.children[1].style.color='rgb(229,30,19)';
	}
	li[i].onmouseout=function(){
		this.children[0].style.display='block';
	    this.children[1].style.display='none';
	    this.children[0].style.color='#585656';
	}

}
//导航
var select=document.getElementById('select');
var div=select.getElementsByClassName("select1");
var select2=document.getElementsByClassName('select2');
var classify=document.getElementById('classify');
classify.onmouseover=function(){
	select.style.display='block';
	for(var i=0;i<div.length;i++){
	div[i].index=i;
	div[i].onmouseover=function(){
		for(var j=0;j<select2.length;j++){
			select2[j].style.display='none';
		}
		for(var k=0;k<select2.length;k++){
			div[k].style.background="rgba(229,30,19,0.5)";
			div[k].style.color="white";
			div[k].firstElementChild.style.color="white";
		}
		select2[this.index].style.display="block";
		div[this.index].style.background="rgba(255,255,255,0.5)"
		div[this.index].style.color="rgb(229,30,19)"
		div[this.index].firstElementChild.style.color="rgb(229,30,19)";
		div[this.index].firstElementChild.style.textdecoration="underline";	
	}	
}
}	
//轮播
var oBanner = document.getElementById('banner');
var oUl = document.querySelector('#banner>ul');
var aLi =oUl.getElementsByTagName('li');
var aA = document.querySelectorAll('#btn>a');
var iNow = 0;
var next = 0;
var timer = null;
for(var i=0;i<aA.length;i++){
	aA[i].index = i;
	aA[i].onmouseover = function(){
		for(var j=0;j<aA.length;j++){
			aA[j].className = '';
			move(aLi[j],{"opacity":0});
		}
		this.className = 'active';
		move(aLi[this.index],{"opacity":100});
		next=this.index;
		
	}
}
oBanner.onmouseover = function(){
	clearInterval(timer)
	select.style.display="none";
}
oBanner.onmouseout = function(){
	autoPlay()
}
autoPlay()
function autoPlay(){
	clearInterval(timer)
	timer = setInterval(function(){
		if(next==aLi.length-1){
			next=0
		}else{
			next++;
		}
		toImg()
	},2000)
}
function toImg(){
	move(aLi[iNow],{"opacity":0});
	move(aLi[next],{"opacity":100});
	for(var i=0;i<aA.length;i++){
		aA[i].className = '';
	}
	aA[next].className = 'active';
	iNow=next;
}
//完美运动框架
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr]
	}
}
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

//侧边栏
var oBox = document.getElementsByClassName('nav_r_img');
var divImg=document.getElementsByClassName('nav_r_txt1');
var timer = null;
for(var i=0;i<oBox.length;i++){
	oBox[i].index=i;
	oBox[i].onmouseover = function(){
		clearInterval(this.timer)
		var num = this.index;
		oBox[this.index].children[0].style.background="rgb(229,30,19)";
	       this.timer = setInterval(function(){
				var speed = -10;
				if(divImg[num].offsetLeft<=-110){
					clearInterval(this.timer)
				}else{
					divImg[num].style.left=divImg[num].offsetLeft+speed+'px';
				}
			},30)
	}	

}
for(var i=0;i<oBox.length;i++){
oBox[i].onmouseout = function(){
	clearInterval(this.timer)
			var num = this.index;
			oBox[this.index].children[0].style.background="rgb(255,255,255)"
		   this.timer = setInterval(function(){
				var speed = 10;
				if(divImg[num].offsetLeft>=40){
					clearInterval(this.timer)
				}else{
					divImg[num].style.left=divImg[num].offsetLeft+speed+'px';
				}
			},30)  
		}
}
//侧边栏显示隐藏
window.onscroll=function(){
	var navBox=document.getElementById("nav_r");
    var t=document.documentElement.scrollTop||document.body.scrollTop;
	if(t>300){
		navBox.style.display="block";
	}else{
		navBox.style.display="none";
	}
}

//登录
var login_pass=document.getElementById('login_pass')
var login_phone=document.getElementById('login_phone')
login_pass.onclick=function(){
	var ul1=document.getElementById('ul1')
	var ul2=document.getElementById('ul2')
	ul1.style.display="block";
	ul2.style.display="none";
}
login_phone.onclick=function(){
	var ul1=document.getElementById('ul1')
	var ul2=document.getElementById('ul2')
	ul2.style.display="block";
	ul1.style.display="none";
}
var login_close=document.querySelector(".mask_h>a")
login_close.onclick=function(){
	var mask=document.getElementById('mask')
	mask.style.display="none"
}
var login=document.getElementById('login')
var mask_filter=document.getElementById('#maskbox')
login.onclick=function(){
	var mask=document.getElementById('mask')
	mask.style.display="block"
	mask_filter.style.display="block"
}

var oBtn = document.getElementById('btn1');
var userName = document.getElementById('userName');
var password = document.getElementById('password');
oBtn.onclick = function(){
	var nameVal = userName.value;
	var passVal = password.value;	
	ajax("get","http://datainfo.duapp.com/shopdata/userinfo.php",{"status":"login","userID":nameVal,"password":passVal},function(data){
		alert("登录成功！")
	})
}
//点击跳转到详情页
var chaxun=document.querySelectorAll(".chaxun")
for(var i=0;i<chaxun.length;i++){
	chaxun[i].onclick=function(){
		location.href="html/list.html";
	}
}
//购物车上的数字改变
if(getCookie('name')){
	var shoop =JSON.parse(getCookie('name'));
	console.log(shoop)
	var car_sum=document.getElementById('car_num');
	var car_num=0;
	for(var i in shoop){
		car_num+=Number(shoop[i]);		
	}
		car_sum.innerHTML=car_num;	
}