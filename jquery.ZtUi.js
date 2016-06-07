
/*开始*/
(function ($) {
/*滑动开始*/
$.fn.ZtSlide=function(){

     return this.each(function(){
      var slideDiv=$("<div class='ZtSildeUp'></div>");
      var thisHeight=$(this).height();
          $(this).append(slideDiv)
          $(".ZtSildeUp").css({"width":"100%","height":"100%","background":"#000","background-color":"rgba(0,0,0,.5)","position":"absolute","top":thisHeight,"z-index":9999})
          $(this).on("mouseenter mouseleave",function(e){
                if(e.type=="mouseenter"){
                   $(this).children(".ZtSildeUp").stop().animate({"top":0},500)
                }else{
                   $(this).children(".ZtSildeUp").stop().animate({"top":thisHeight},500)
                }
          })

     })
}
/*滑动结束*/

/*遮罩滑动*/

$.fn.ZtSlideMark=function(){

     return this.each(function(){
       /*移入*/
       $(this).on("mouseenter","li",function(e){
        var Width=$(this).width(),
        Height=$(this).height(),
        pageX=e.pageX,
        pageY=e.pageY,
        OffsetTop=$(this).offset().top,
          OffsetLeft=$(this).offset().left,
          coordinateX=pageX-OffsetLeft,
          coordinateY=pageY-OffsetTop;
      if(coordinateX<10){//从左到右
       $(this).children(".mark").css({left:-100+"%",top:0}).stop().animate({left:0})
      }else if(coordinateX>Width-10){//从右到左
         $(this).children(".mark").css({left:100+"%",top:0}).stop().animate({left:0})
      }else if(coordinateY<10){//从上到下
        $(this).children(".mark").css({top:-100+"%",left:0}).stop().animate({top:0})
      }else if(coordinateY>Height-10){//从下到上
        $(this).children(".mark").css({top:100+"%",left:0}).stop().animate({top:0})
      }
       })
   /*移入*/

   /*移出*/
   $(this).on("mouseleave","li",function(e) {
    var Width=$(this).width(),
        Height=$(this).height(),
        pageX=e.pageX,
        pageY=e.pageY,
        OffsetTop=$(this).offset().top,
          OffsetLeft=$(this).offset().left,
          coordinateX=pageX-OffsetLeft,
          coordinateY=pageY-OffsetTop;
      if(coordinateX<10){//从左到右
       $(this).children(".mark").stop().animate({left:-100+"%",top:0})
      }else if(coordinateX>Width-10){//从右到左
          $(this).children(".mark").stop().animate({left:100+"%",top:0})
      }else if(coordinateY<10){//从上到下
         $(this).children(".mark").stop().animate({top:-100+"%",left:0})
      }else if(coordinateY>Height-10){//从下到上
         $(this).children(".mark").stop().animate({top:100+"%",left:0})
      }
 })
   /*移出*/
     })
}
/*遮罩滑动*/


/*图片隐藏滑动*/
$.fn.ZtPictureDisplay=function(opt){
     var defaults = {
         speed:2000
     };
        var options = $.extend(defaults,opt);
        this.each(function(){
          var that=$(this),
              timeOut=null,
              thisli=that.children("ul").children("li"),
              number=0;
              for(var i=0;i<thisli.length;i++){
                  var ol_li=$("<li></li>");
                  that.children(".loginBox").children("ol").append(ol_li)
              }
             var thisOlli=that.children(".loginBox").children("ol").children("li");
                 thisOlli.eq(0).addClass("white");
            $(thisOlli).on("click",function(e){
               var index=$(this).index();
                   number=index;
                $(this).addClass("white").siblings().removeClass("white")
                $(thisli).eq(index).animate({"opacity":1},500).css({"flter":"Alpha(Opacity=100)","z-index":1}).siblings().animate({"opacity":0},500).css({"flter":"Alpha(Opacity=0)","z-index":0})
            })
            var timeRright=function(){
               if(number==thisli.length-1){
                     number=0
               }else{
                     number++
               }
                    thisli.eq(number).animate({"opacity":1},500).css({"flter":"Alpha(Opacity=100)","z-index":1}).siblings().animate({"opacity":0},500).css({"flter":"Alpha(Opacity=0)","z-index":0})
                    thisOlli.eq(number).addClass("white").siblings().removeClass("white")
            } 

           timeOut=setInterval(timeRright,options.speed);

            that.hover(function(){
                clearInterval(timeOut);
            },function(){
                 timeOut=setInterval(timeRright,options.speed);
            })

        })

}
/*图片隐藏滑动*/
/*图片层叠*/
$.fn.Ztstack=function(opt){
  var defaults = {
         speed:2000
     };
        var options = $.extend(defaults,opt);
        this.each(function(){
           var listnumber=0;
           var timeOut=null;
           var thiswidth=$(this).width();
           var thisli=$(this).children("ul").children("li");
           $(this).children("ul").children("li:not(.not)").css({left:thiswidth})
           var timeRright=function(){
      if(listnumber==thisli.length-1){
         listnumber=0

     }else{
           listnumber++
     }
      thisli.eq(listnumber).css("z-index",5).siblings().css("z-index",3).end().animate({"left":0},500,function(){
          $(this).siblings().css("left",thiswidth)
   })
       }

      timeOut=setInterval(timeRright,options.speed);

            $(this).hover(function(){
                clearInterval(timeOut);
            },function(){
                 timeOut=setInterval(timeRright,options.speed);
            })
        

        })
}
/*图片层叠*/
/*图片放大*/
$.fn.ZtictureEnlarge=function(opt){
  var defaults = {
         big:30
     };
   var options = $.extend(defaults,opt);
   this.each(function(){
       var that=$(this);
       var thiswidth=that.width();
       var thisheight=that.height();
        that.on("mouseenter mouseleave",function(e){
             if(e.type=="mouseenter"){
             that.children("img").stop().animate({width:thiswidth+options.big,height:thisheight+options.big},300)
           }
            else{
              that.children("img").stop().animate({width:thiswidth,height:thisheight},300)
            } 
        })
   })
}
/*图片放大*/
/*返回顶部*/
$.fn.Ztreturn=function(){
    var that=$(this);
    that.click(function(){
       $("html,body").animate({
            "scrollTop": 0
        }, 300)
    })
}
/*返回顶部*/
/*弹窗*/
$.fn.Ztpopup=function(opt){
     var defaults = {
         speed:200,
         backd:"#000"
};
   var options = $.extend(defaults,opt);
        var windowWidth=$(window).width(),
            windowHeight=$(window).height(),
            ZtpopupWidth=$(this).width(),
            ZtpopupHeight=$(this).height(),
            halfWidth=windowWidth/2-ZtpopupWidth/2,
            halfHeight=windowHeight/2-ZtpopupHeight/2,
            that=$(this),
            mark=$("<div class='mark'></div>");
            $("body").append(mark);
            mark.css({position:"fixed",left:0,top:0,"z-index":120,width:windowWidth,height:windowHeight,opacity:0.5,filter:"alpha(opacity=50)",background:options.backd})
            $(this).show();
            $(this).animate({"left":halfWidth,
            "top":halfHeight},options.speed);

            $(window).resize(function(){
            var windowWidth=$(window).width(),
            windowHeight=$(window).height(),
            ZtpopupWidth=that.width(),
            ZtpopupHeight=that.height(),
            halfWidth=windowWidth/2-ZtpopupWidth/2,
            halfHeight=windowHeight/2-ZtpopupHeight/2;
            that.css({"left":halfWidth,
            "top":halfHeight});
            mark.css({width:windowWidth,height:windowHeight})

            })



}
/*弹窗*/

/*随机数*/

$.fn.Ztrandom=function(opt){
  var  defaults = {
         digital:10,
         timeover:2000,
         num:100
       },
       options = $.extend(defaults,opt),
       timeOut,
       i,
       size=$(this).length,
       numberArr=[],
       that=$(this);
       timeOut=setInterval(function(){
         for(i=0;i<size;i++){
               numberArr[i]=Math.ceil(Math.random()*options.digital) 
         }
         that.each(function(i){
               $(this).text(numberArr[i])
         })
       },options.num)
      setTimeout(function(){
        clearInterval(timeOut)
      },options.timeover)
   
}


/*随机数*/

})(jQuery);






/*结束*/