"use strict";window.onload=function(){$(".hassub").on({mouseenter:function(){$(".head_section3_nav_div").eq($(this).index()-1).css("display","block")},mouseleave:function(){$(".head_section3_nav_div").css("display","none")}}),$(".head_section3_nav_div").on({mouseover:function(){$(this).css("display","block")},mouseout:function(){$(this).css("display","none")}}),$(".Img_tbody_tr > td > a").mouseenter(function(){$(".Img_tbody_tr > td > a").children("span").css("display","none"),$(this).children("span").css("display","block"),$(this).parent().parent().parent().parent().parent().siblings(".pBigPic").children("span").children("img").attr("src",$(this).attr("rel")),$(this).parent().parent().parent().parent().parent().siblings(".big_box").children("img").attr("src",$(this).attr("rel"))}),$(".mask").mouseover(function(){$(".float_layer").show(),$(".big_box").show()}),$(".mask").mouseout(function(){$(".float_layer").hide(),$(".big_box").hide()}),$(".mask").mousemove(function(t){var i=t.pageX-$(".pBigPic").offset().left-$(".float_layer").width()/2,e=t.pageY-$(".pBigPic").offset().top-$(".float_layer").height()/2;i<0&&(i=0),i>$(this).width()-$(".float_layer").width()&&(i=$(this).width()-$(".float_layer").width()),e<0&&(e=0),e>$(this).height()-$(".float_layer").height()&&(e=$(this).height()-$(".float_layer").height()),$(".float_layer").css({left:i,top:e});var a=i/($(".mask").width()-$(".float_layer").width()),m=e/($(".mask").height()-$(".float_layer").height());$(".big_box img").css({left:-a*($(".big_box img").width()-$(".big_box").width()),top:-m*($(".big_box img").height()-$(".big_box").height())})}),function(){var m=JSON.parse(localStorage.getItem("goodsInfo"));m||(alert("数据不存在！"),window.location.href="../pages/list.html");(function(){$(".headText1").text(m.headText1),$(".headText2").text(m.headText2),$(".headText3").text(m.headText3),$(".headText4").text(m.headText4),$(".headText5").text(m.headText5),$(".MaxImg1").attr("src",m.mi[0].MaxImg),m.mi.length<=4&&($(".mi_IMG5").css("display","none"),$(".mi_IMG6").css("display","none"),$(".mi_IMG7").css("display","none"),$(".mi_IMG8").css("display","none"),$(".mi_IMG9").css("display","none"),$(".mi_IMG1").attr("rel",m.mi[0].MaxImg),$(".mi_IMG1 > img").attr("src",m.mi[0].MaxImg),$(".mi_IMG2").attr("rel",m.mi[1].MaxImg),$(".mi_IMG2 > img").attr("src",m.mi[1].MaxImg),$(".mi_IMG3").attr("rel",m.mi[2].MaxImg),$(".mi_IMG3 > img").attr("src",m.mi[2].MaxImg),$(".mi_IMG4").attr("rel",m.mi[3].MaxImg),$(".mi_IMG4 > img").attr("src",m.mi[3].MaxImg));4<m.mi.length&&($(".mi_IMG5").css("display","block"),$(".mi_IMG6").css("display","block"),$(".mi_IMG7").css("display","block"),$(".mi_IMG8").css("display","block"),$(".mi_IMG9").css("display","block"),$(".mi_IMG1").attr("rel",m.mi[0].MaxImg),$(".mi_IMG1 > img").attr("src",m.mi[0].MaxImg),$(".mi_IMG2").attr("rel",m.mi[1].MaxImg),$(".mi_IMG2 > img").attr("src",m.mi[1].MaxImg),$(".mi_IMG3").attr("rel",m.mi[2].MaxImg),$(".mi_IMG3 > img").attr("src",m.mi[2].MaxImg),$(".mi_IMG4").attr("rel",m.mi[3].MaxImg),$(".mi_IMG4 > img").attr("src",m.mi[3].MaxImg),$(".mi_IMG5").attr("rel",m.mi[4].MaxImg),$(".mi_IMG5 > img").attr("src",m.mi[4].MaxImg),$(".mi_IMG6").attr("rel",m.mi[5].MaxImg),$(".mi_IMG6 > img").attr("src",m.mi[5].MaxImg),$(".mi_IMG7").attr("rel",m.mi[6].MaxImg),$(".mi_IMG7 > img").attr("src",m.mi[6].MaxImg),$(".mi_IMG8").attr("rel",m.mi[7].MaxImg),$(".mi_IMG8 > img").attr("src",m.mi[7].MaxImg),$(".mi_IMG9").attr("rel",m.mi[8].MaxImg),$(".mi_IMG9 > img").attr("src",m.mi[8].MaxImg))})(),$(".Title1").text(m.Title1),$(".sex").text(m.sex),$(".Title2").text(m.Title2),$(".Bmoney").text(m.Bmoney),$(".Smoney").text(m.Smoney),$(".zk").text(m.zk),$(".a_color > img").attr("src",m.mi[0].MaxImg),$(".size1").text(m.size1),$(".size2").text(m.size2),$(".size3").text(m.size3),$(".size4").text(m.size4),$(".size5").text(m.size5),$(".size6").text(m.size6),$(".size7").text(m.size7),$(".size8").text(m.size8),$(".prodCartBtn").click(function(){var t=JSON.parse(localStorage.getItem("cartList"))||[],i=t.some(function(t){return t.id==m.id});if(i){for(var e=null,a=0;a<t.length;a++)if(t[a].id==m.id){e=t[a];break}e.number++,e.Allmoney=e.number*e.Bmoney}else m.number=1,m.Allmoney=m.Bmoney,m.isSelect=!1,t.push(m);localStorage.setItem("cartList",JSON.stringify(t))})}()};