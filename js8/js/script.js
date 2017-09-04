/**
 * Created by Administrator on 2017/9/3.
 */
//封装一个代替getElementById()方法
function byId(id) {
    return typeof(id)==="string"?document.getElementById(id):id;
}
//全局变量
var index =0,timer=null,
    pics=byId("banner").getElementsByTagName("div"),
    dots=byId('dots').getElementsByTagName("span"),
    len=pics.length;
function slideImg() {
    var main=byId("main");
    //滑过清楚定时器，离开继续
    main.onmouseover=function(){
        //滑过清除定时器
        if(timer) clearInterval(timer);
    }
    main.onmouseout=function () {
       var timer =setInterval(function () {
            index++;
            if(index>=len){
                index=0;
            }
           //切换图片
           changeImg();
       },3000);
    }
    //自动在mian上触发鼠标离开的事件
    mian.onmouseout();
    //遍历所有点击，且绑定点击事件，点击原点切换图片
    for(var d=0;d<len;d++){
        dots[d].onclick=function(){
            alert("hello");
        }
    }
}

//切换图片
function changeImg(){
    //遍历banner下多有的div,将其隐藏
    for(var i=0;i<len;i++){
        pics[i].style.display="none";
    }
    pics[index].style.display='block';
}
slideImg();