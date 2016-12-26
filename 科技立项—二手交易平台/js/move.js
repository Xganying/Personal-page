function getStyle(obj,name){
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	}
	else{
		return getComputedStyle(obj,false)[name];
	}
}
// var timer=null;
function move(obj,arrt,target){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		//var cur=parseInt(getStyle(obj,arrt));    //parseInt 转换为整数 直接将opacity转换为0
	var cur=0;
	if(arrt=='opacity'){
		cur=Math.round(parseFloat(getStyle(obj,arrt))*100);    //针对透明度
	}
	else{
		cur=parseInt(getStyle(obj,arrt));
	}
	var speed=(target-cur)/6;
	speed=speed>0?Math.ceil(speed):Math.floor(speed);
	if (cur==target) 
	{
		clearInterval(obj.timer);
	}
	else{
	if(arrt=='opacity')
	{
		obj.style.filter='alpha(opacity:'+(cur+speed)+')';
		obj.style.opacity=(cur+speed)/100;
	}
	else
	{
		obj.style[arrt]=cur+speed+'px';     //透明度 不能+px
	}	
}
},30)
}