
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

 //加载详情页数据
 var url=location.href;
 var arr=url.split("?");
 var Num=Number(arr[1])-1;
 ajax("get","../json/show.json","",function(obj){
	var str = '';
		str='<div class=content_head data-id='+obj[Num].id+'><a href=>首页</a>&nbsp;>&nbsp;<a href=>'+obj[Num].title1+'</a>&nbsp;>&nbsp;<a href=>'+obj[Num].title2+'</a>&nbsp;>&nbsp;<a href=>'+obj[Num].title3+'</a></div><div class=show_goods><div class=show_left id=show_left1><div class=middle_img id=middle_box><div id=filter></div><img src='+obj[Num].middle_img1+' class=middle></div><div class=small_img><div><</div><ul><li><img src='+obj[Num].small_img1+' data-url='+obj[Num].middle_img1+' class="small"></li><li><img src='+obj[Num].small_img2+' data-url='+obj[Num].middle_img2+' class="small"></li><li><img src='+obj[Num].small_img3+' data-url='+obj[Num].middle_img3+' class="small"></li><li><img src='+obj[Num].small_img4+' data-url='+obj[Num].middle_img4+' class="small"></li></ul><div>></div></div></div><div class="max_img"><img src='+obj[Num].middle_img1+' class="max"></div><div class="show_right"><h3>'+obj[Num].title1+'</h3><p>商品价格：<span>'+obj[Num].price+'</span></p><div class="size"><span>规格：</span><ul id="goods_size"><li class="size1"><img src='+obj[Num].small_img1+'><a href="">季节限定</a></li><li><img src='+obj[Num].small_img2+'><a href="">应季流行</a></li><li><img src='+obj[Num].small_img3+'><a href="">特别推荐</a></li><li><img src='+obj[Num].small_img4+'><a href="">明星主打</a></li><li><img src='+obj[Num].small_img2+'><a href="">高级赏味</a></li><li><img src='+obj[Num].small_img1+'><a href="">特级精选</a></li></ul></div><div class="kind"><span>选择品类：</span><ul id="goods_kind"><li>越南龙眼+海南千禧圣女果+南非甜橙</li><li>吉林姑娘果+海南千禧圣女果+南非甜橙</li><li>广东金桔+甘肃花牛苹果+南非甜橙</li><li>河北宝石葡萄+甘肃花牛苹果+南非甜橙</li><li>山东80富士苹果+冰糖巨峰葡萄+福建红心柚</li></ul></div><p>净重：300g/盒</p><h4>服务：由果酷负责发货，并提供售后服务</h4><div id="add_box">数量：<em><i id="sub">-</i><input type="text" value="1" id="txt"><strong id="add">+</strong></em></div><div class="buy">立即购买</div><div class="addCar"><i></i><span id="shopping">加入购物车</span></div></div></div><div class="intro"><div class="intro_head">商品介绍</div><ul><li><img src="../home-img/81d16cbcac8c4b0e99561b2988007211.jpg" ></li><li><img src='+obj[Num].show_img1+' ></li><li><img src='+obj[Num].show_img2+' ></li><li><img src='+obj[Num].show_img3+' ></li><li><img src="../home-img/8d8e67500f9a4f2aaf0838832b7bf516.jpg" ></li><li><img src="../home-img/44844de842b240f5baa444d2c90ac701.jpg" ></li><li><img src="../home-img/c9b964870b6e496286e4fb5b41e02a12.jpg" ></li><li><img src="../home-img/eecf64ae8508424b8816669af8aa5755.jpg" ></li></ul></div>';
	var oList1 = document.getElementById('content');
	oList1.innerHTML = str;
//加入购物车
for(var i=0;i<obj.length;i++){
   if(getCookie('name')){
		var obj = JSON.parse(getCookie('name'))
	}else{
		var obj = {}
	}
	var content_head =document.querySelector('.content_head');
	var oTxt = document.getElementById('txt');
	var id=Number(content_head.getAttribute('data-id'));
	var oShopping=document.getElementById('shopping')
	oShopping.onclick=function(){			
		if(!obj[id]){
			obj[id]=oTxt.value;
		}else{
			var num=obj[id];
			num++;
			obj[id]=num;			
		}
		console.log(obj)
		setCookie('name',JSON.stringify(obj),7);
	}
}
	 //放大镜
	var middle = document.querySelector('.middle');
	var small = document.querySelectorAll('.small');
	var max =document.querySelector('.max')
	var max_img =document.querySelector('.max_img')
		for(var i=0;i<small.length;i++){
			small[i].onmouseover = function(){
			var url = this.getAttribute('data-url');
				middle.src = url;
				max.src=url;
					}
		}
		var obox = document.querySelector('.show_left');
		var oFilter = document.getElementById('filter');		
		obox.onmousemove = function(e){
			max.style.display="block";
			max_img.style.display="block";
			var e = e||event;
			var l = e.clientX-obox.offsetLeft-oFilter.offsetWidth/2;
			var t = e.clientY-obox.offsetTop-oFilter.offsetHeight/2;
				if(l<=0){
					l=0;
				}
				if(l>=middle.offsetWidth-oFilter.offsetWidth){
					l=middle.offsetWidth-oFilter.offsetWidth
				}
				if(t<=0){
					t=0;
				}
				if(t>=middle.offsetHeight-oFilter.offsetHeight){
					t=middle.offsetHeight-oFilter.offsetHeight;
				}	
				oFilter.style.left = l+'px';
				oFilter.style.top = t+'px';				
				max.style.left = -2*l+'px';
				max.style.top = -2*t+'px';
		}
		obox.onmouseout=function(){
			max.style.display="none";
			max_img.style.display="none";
		}

		//选商品规格和种类
	var sizes=document.querySelectorAll('#goods_size>li');
	var kind=document.querySelectorAll('#goods_kind>li');
	for(var i=0;i<sizes.length;i++){
		sizes[i].index=i;
		sizes[i].onclick=function(){
			for(var j=0;j<sizes.length;j++){
				sizes[j].style.border="1px solid #ccc";
			}
			sizes[this.index].style.border="1px solid rgb(229,30,19)";
		}		
	} 
	for(var i=0;i<kind.length;i++){
		kind[i].index=i;
		kind[i].onclick=function(){
			for(var j=0;j<kind.length;j++){
				kind[j].style.border="1px solid #ccc";
			}
			kind[this.index].style.border="1px solid rgb(229,30,19)";
		}	
	} 

	//商品加减
	var Add=document.getElementById("add")
	 var Sub = document.getElementById("sub")
	 //加	 
	 	Add.onclick=function(){
	 		var num = Number(this.previousElementSibling.value);
	 		num++;
	 		this.previousElementSibling.value=num;
	 	}	 
	 //减
	 	Sub.onclick=function(){
	 		var num = Number(this.nextElementSibling.value);
	 		 num--;
	 		 if(num<0){
	 		 	num==0;
	 		 }else{
	 		this.nextElementSibling.value=num;
	 		}
	 	}

})
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
//购物车上的数字改变
if(getCookie('name')){
	var shoop =JSON.parse(getCookie('name'));
	var car_sum=document.getElementById('car_num');
	var car_num=0;
	for(var i in shoop){
		car_num+=Number(shoop[i]);		
	}
		car_sum.innerHTML=car_num;
		
}
