
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
var select_child=document.getElementsByClassName("select2_child");
for(var i=0;i<select_child.length;i++){
	select_child[i].onmouseover=function(){
		this.firstElementChild.style.color="orange";
}	
select_child[i].onmouseout=function(){
		this.firstElementChild.style.color="#666666";
}
}
var content=document.getElementById('content')
content.onmouseover = function(){
	
	select.style.display="none";
}
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
//显示人气商品
ajax("post","../json/hot_goods.json","",function(obj){
	var str = '';
	for(var i=0;i<obj.length;i++){
		str+='<div class=hot_good data-id='+obj[i].id+'><img src='+obj[i].img+'><p>'+obj[i].title+'</p><span>'+obj[i].price+'</span></div>';
	}
	var oList = document.getElementById('hot_list');
	oList.innerHTML = str;
})
//显示商品列表
ajax("post","../json/goods.json","",function(obj){
	var str = '';
	for(var i=0;i<obj.length;i++){
		str+='<div class="goods_r" data-id='+obj[i].id+'><a href=show.html?'+obj[i].id+'><img src='+obj[i].img+'></a><h4>'+obj[i].price+'</h4><p>'+obj[i].title1+'</p><h3>'+obj[i].title2+'</h3><i>'+obj[i].title3+'</i><br><em class="add"><i class="sub">-</i><input type="text" value="1" id="count"><strong class="adds">+</strong></em><span class="add_car"><i></i>加入购物车</span></div>';
	}
	var oList1 = document.getElementById('goods_box');
	oList1.innerHTML = str;

//商品加减
var Add=document.querySelectorAll('.adds');
 var Sub = document.querySelectorAll('.sub');
 //加
 for(var i = 0;i<Add.length;i++){
 	Add[i].onclick=function(){
 		var num = Number(this.previousElementSibling.value);
 		num++;
 		this.previousElementSibling.value=num;
 	}
 }
 //减
 for(var i = 0;i<Sub.length;i++){
 	Sub[i].onclick=function(){
 		var num = Number(this.nextElementSibling.value);
 		 num--;
 		 if(num<0){
 		 	num==0;
 		 }else{
 		this.nextElementSibling.value=num;
 		}
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
 //加入购物车
for(var i=0;i<obj.length;i++){
	   if(getCookie('name')){
			var obj = JSON.parse(getCookie('name'))
			var car_sum=document.getElementById('car_num');
			var car_num=0;
			for(var i in obj){
				car_num+=Number(obj[i]);		
			}
				car_sum.innerHTML=car_num;	
		}else{
			var obj = {}
		}
		var count=document.querySelectorAll('#count')
		var content_head =document.querySelector('.goods_r');
		var oShopping=document.querySelectorAll('.add_car')
		for(var j=0;j<oShopping.length;j++){
			oShopping[j].index=j;
			oShopping[j].onclick=function(){
				if(!obj[j]){
					obj[this.index+1]=count[this.index].value;
				}else{
					var num=obj[this.index+1];
					num++;
					obj[this.index+1]=num;			
				}
				setCookie('name',JSON.stringify(obj),7);
			}
		}
	}
		
	
})


