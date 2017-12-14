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

//显示加入购物车的商品
if(getCookie('name')){
	var shoop =JSON.parse(getCookie('name'));
    var str="";
    var oList = document.getElementById('car_goods');
    ajax("get","../json/goods.json","",function(obj){
    	for(var i in obj){
		    for(var j in shoop){
			    if(j==Number(obj[i].id)){
				    str+='<ul class="goods" data-id='+obj[i].id+'><li class="tick2"><input type="checkbox" checked="checked" class="check"></li><li class="g_img"><img src='+obj[i].img+'></li><li class="txt2">'+obj[i].title1+'</li><li class="market_price2">'+obj[i].price+'</li><li class="price2">'+obj[i].price+'</li><li class="a_s"><em><i id="sub">-</i><input type="text" value='+shoop[j]+' class="count"><strong id="add">+</strong></em></li><li class="sum_price2"></li><li class="delbtn" ><a href="" id="delbtn">删除</a></li></ul>';
				 }
			 }
			oList.innerHTML=str;
		}
	//计算件数
	var sum_count=oList.children.length
	var count_box=document.querySelector('.num_goods');
	count_box.firstElementChild.innerHTML=sum_count;
	    
	//商品加减
	var Add=document.querySelectorAll("#add")
	 var Sub = document.querySelectorAll("#sub")
	 //加并且算总价
	 var sum_p=document.querySelectorAll(".sum_price2")
	 var p=document.querySelectorAll(".price2")
	 var c=document.querySelectorAll(".count")
	 var sum_box=document.querySelector('.sum')
	 var num1=0;
	 //默认状态的总价
	 for(var i=0;i<sum_p.length;i++){
	 	sum_p[i].innerHTML="￥"+(p[i].innerHTML.substr(1)*c[i].value);
	 	 num1+=Number(sum_p[i].innerHTML.substr(1));
	 }
	 sum_box.innerHTML=num1.toFixed(2);
	 for(var i=0;i<Add.length;i++){	 
	 	Add[i].onclick=function(){
	 		var num = Number(this.previousElementSibling.value);
	 		num++;
	 		this.previousElementSibling.value=num;
	 		//将加了以后的值存入cookie
	 		var id_num=Number(this.parentNode.parentNode.parentNode.getAttribute('data-id'));
	 		shoop[id_num]=num;
	 		setCookie('name',JSON.stringify(shoop),7);
	 		//数量加了以后的总价
	 		var price =Number(this.parentNode.parentNode.previousElementSibling.innerHTML.substr(1))
			var total = this.parentNode.parentNode.nextElementSibling;
			total.innerHTML="￥"+(num*price).toFixed(2);
		     num1+=Number(total.innerHTML.substr(1));
			sum_box.innerHTML=num1;
	 	}
	 }	 
	 //减
	 for(var i=0;i<Sub.length;i++){
	 	Sub[i].onclick=function(){
	 		var num = Number(this.nextElementSibling.value);
	 		 num--;
	 		 if(num<0){
	 		 	num==0;
	 		 }else{
	 		this.nextElementSibling.value=num;
	 		var id_num=Number(this.parentNode.parentNode.parentNode.getAttribute('data-id'));
	 		shoop[id_num]=num;
	 		setCookie('name',JSON.stringify(shoop),7);
	 		var price =Number(this.parentNode.parentNode.previousElementSibling.innerHTML.substr(1))
			var total = this.parentNode.parentNode.nextElementSibling;
			total.innerHTML="￥"+(num*price).toFixed(2);
			num1-=Number(total.innerHTML.substr(1));
			sum_box.innerHTML=num1;
	 		}
	 	}
	 }
	 //删除商品
	var del=document.querySelectorAll('#delbtn')
	for(var i=0;i<del.length;i++){
		del[i].index=i;
		del[i].onclick=function(){	
		    this.parentNode.parentNode.remove()		
			var id=Number(this.parentNode.parentNode.getAttribute("data-id"));
			 delete shoop[id]
			setCookie('name',JSON.stringify(shoop),7);
		    }
	}
	 //全选反选
		var all = document.getElementById('tick');
		var input = document.querySelectorAll('.check');
		all.onclick = function(){
			if(all.checked){
				for(var i=0;i<input.length;i++){
					input[i].checked = 'checked';
				}
			}else{
				for(var i=0;i<input.length;i++){
					input[i].checked = '';
				}
			}
		}
		for(var j=0;j<input.length;j++){
			input[j].onclick = function(){
				var bstop = true
				for(var i=0;i<input.length;i++){
					if(input[i].checked==false){
						bstop = false;
						break;
					}
				}
				if(bstop){
					all.checked = 'checked'
				}else{
					all.checked = '';
				}
			}
		}
    })
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

