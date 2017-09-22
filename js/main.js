var a=0;
var $liPage;
var now = { row:1, col:1 }, last = { row:0, col:0};
const towards = { up:1, right:2, down:3, left:4};
var isAnimating = false;
$(document).ready(function(e) {
	//添加动画
	$(".loading").hide();
	$(".p1-1-1,.p2-2,.p2-3,.p3-3,.p5-3").addClass("fadeInDown");
	$(".p1-1-5,.p1-2-2,.logo,.p3-4,.p4-4").addClass("fadeIn");
	$(".p1-1-2,.p1-1-3").addClass("fadeInLeftBig");
	$(".p1-1-4").addClass("sc2");
	$(".p1-2-1,.p1-2-5").addClass("growUp");
	$(".p1-4-2").addClass("zoomInBigA");
	$(".p1-3 li").addClass("growUp");
	$(".p1-grow").addClass("bounceIn");
	$(".p1-light,.p4-3-1").addClass("fadeInLeft");
	$(".p4-3 li:not(.p4-3-1),.p5-7").addClass("fadeInRight");
	$(".p1-4-1").addClass("rotateInBig");
	$(".p2-6,.p2-1,.p5-6").addClass("fadeInLeft");
	$(".p2-light,.p3-6-2").addClass("flash");
	$(".p4-5,.p4-6,.p4-7,.p4-bottom,.p5-5").addClass("fadeInUp");
	$(".p4-8,.p4-9,.p4-10,.p5-8").addClass("fadeIn");
	$(".p5-button").addClass("tada")
	$(".p3-6").addClass("zoomIn");
/*	$(".p2-5,.p2-7,.p2-8").addClass("pulseBig");*/
	//五页切换
	$(".page-1-1,.page-3-1,.page-4-1,.page-5-1").swipe( {
		swipe:function(e,direction) {
			switch (direction){
				case "up":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row !=5) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
				break;
				case "down":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
			}		
		}	
	}); 
	$(".page-2-1").swipe( {
		swipe:function(e,direction) {
			switch (direction){
				case "down":
					if (isAnimating) return;
					last.row = now.row;
					last.col = now.col;
					if (last.row!=1) { now.row = last.row-1; now.col = 1; pageMove(towards.down);}
			}		
		}	
	}); 
	//播放音乐
	$("#music").click(function(){
		if($(this).attr("class")=="play"){
			$(this).removeClass().addClass("pause");
			$("#myMusic")[0].play();
			$(".audio").addClass("Rot");
		}else if($(this).attr("class")=="pause"){
			$(this).removeClass().addClass("play");
			$("#myMusic")[0].pause();
			$(".audio").removeClass("Rot");
		}
	});
	//点击跳转
	$(".p5-8 img").click(function(){
		$(".p5-5").removeClass("fadeInUp").addClass("fadeOutUp");
		$(".p5-6").removeClass("fadeInLeft").addClass("fadeOutRight");
		$(".p5-7").removeClass("fadeInRight").addClass("fadeOutLeft");	
		setTimeout(function(){
			location.href="http://campus.51job.com/babeltime/position.html";
		},1000);	
	})
	
    //动画补丁
	setTimeout(function(){
		$(".p1-1-6").show(0).addClass("flash");
	},4000);
	setTimeout(function(){
		$(".p1-2-6").show(0).addClass("flash");	
	},8000);
	setTimeout(function(){
		$(".flow-left").show(0).addClass("UpNone");	
	},5000);
	setTimeout(function(){
		$(".flow-right").show(0).addClass("UpNone");
	},4500);
	setTimeout(function(){
		$(".p3-5").show(0).addClass("flash");
	},4000);
	
	//第二页装备按钮
	$(".p2-6").on("touchstart",function(){
		$("#enter")[0].play();
		$(".p2_b2").show();
		$(".p2-6 .p2-button").removeClass("p2-button").addClass("p2-fire");
		$(".p2-5").show("slow").find(".p2-button").addClass("pulseBig");
/*		setTimeout(function(){
		  $(".p2-5").before("<div class='ripple p2-5re'><img src='images/pulse.png'></div>")
		},500);	*/	
		$(".p2-5").on("touchstart",function(){
			$("#enter")[0].play();
			$(".p2_b1").show();
			$(".p2-5 .p2-button").removeClass("p2-button").addClass("p2-fire");	
		    $(".p2-7").show("slow").find(".p2-button").addClass("pulseBig");	
/*			setTimeout(function(){
			  $(".p2-7").before("<div class='ripple p2-7re'><img src='images/pulse.png'></div>")
			},500);*/		
			$(".p2-7").on("touchstart",function(){
				$("#enter")[0].play();
				$(".p2_b3").show();
				$(".p2-7 .p2-button").removeClass("p2-button").addClass("p2-fire")
		       	$(".p2-8").show("slow").find(".p2-button").addClass("pulseBig");
/*				setTimeout(function(){
				  $(".p2-8").before("<div class='ripple p2-8re'><img src='images/pulse.png'></div>")
				},500);	*/
				$(".p2-8").on("touchstart",function(){
					$("#enter")[0].play();
					$(".p2_b4").show();
					$(".p2-8 .p2-button").removeClass("p2-button").addClass("p2-fire")
					$(document).swipe( {
						swipe:function(e,direction) {
							switch (direction){
								case "up":
									if (isAnimating) return;
									last.row = now.row;
									last.col = now.col;
									if (last.row !=5) { now.row = last.row+1; now.col = 1; pageMove(towards.up);}
								break;
							}		
						}	
					}); 
					setTimeout(function(){
					  $(".page-2-1 .footer").before("<div class='arrow fadeOutDown'><img src='images/1-hint.png'></div>")
					},1500);
					$(".p2-bottom").show("fast");
				})
			})	
		})
	})
	
	//第三页技能按钮
	$(".p3-6").on("touchstart",function(){
		$("#enter")[0].play();
		$(".p3-7,.p3-8,.p3-9,.p3-10").show().addClass("fadeInDown");
		$(this).find(".p3-6-2").removeClass("flash");
	})

    //获取宽度
	function get_width(){
	  $(".get_width").each(function(index, element) {
		  var _width=$(this).find("li:nth-child(1) img").width();
		  $(this).css({"width":_width});
	  });
	  var _width=$(".flog>ul").find("li:nth-child(1) img").width();
	  $(".flog>ul").css({"width":_width});
	}
	get_width();
	$(window).resize(function(){
		get_width();
	}); 
	 
});
//页面跳转
function pageMove(tw){
var lastPage = ".page-"+last.row+"-"+last.col,
	nowPage = ".page-"+now.row+"-"+now.col;
	switch(tw) {
		case towards.up:
			outClass = 'pt-page-moveToTop';
			inClass = 'pt-page-moveFromBottom';
			break;
		case towards.right:
			outClass = 'pt-page-moveToRight';
			inClass = 'pt-page-moveFromLeft';
			break;
		case towards.down:
			outClass = 'pt-page-moveToBottom';
			inClass = 'pt-page-moveFromTop';
			break;
		case towards.left:
			outClass = 'pt-page-moveToLeft';
			inClass = 'pt-page-moveFromRight';
			break;
	}
	isAnimating = true;
	$(nowPage).removeClass("hide");
	$(lastPage).addClass(outClass);
	$(nowPage).addClass(inClass);

    //动画补丁
	setTimeout(function(){
		$(lastPage).removeClass(outClass);
		$(lastPage).addClass("hide");
		$(lastPage).find("div:not(.footer)").addClass("hide");
		$(nowPage).addClass('page-current');
		$(lastPage).removeClass('page-current');
		$(nowPage).removeClass(inClass);
		$(nowPage).find("div:not(.footer)").removeClass("hide");
		isAnimating = false;
		if(now.row==1){	
			var _width=$(".flog>ul").find("li:nth-child(1) img").width();
			$(".flog>ul").css({"width":_width});		
		}
		isAnimating = false;		
	},300);
	if ($(".p1-1-6").hasClass("flash")){
		$(".p1-1-6").hide().removeClass("flash").show(8000).addClass("flash");
    }
	if ($(".p1-2-6").hasClass("flash")){
		$(".p1-2-6").hide().removeClass("flash").show(2000).addClass("flash");
    }
	if ($(".flow-left").hasClass("UpNone")){
		$(".flow-left").hide().removeClass("UpNone").show(3000).addClass("UpNone");
    }
	if ($(".flow-right").hasClass("UpNone")){
		$(".flow-right").hide().removeClass("UpNone").show(4500).addClass("UpNone");
    }
	if ($(".p3-5").hasClass("flash")){
		$(".p3-5").hide().removeClass("flash").show().addClass("flash");
    }
	$(".p3-6-2").addClass("flash");
	if ($(".p2-6").hasClass("fadeInLeft")){
		setTimeout(function(){
			$(".p2-6").removeClass("fadeInLeft");
			$(".p2-6 .p2-button").addClass("pulseBig");
		},2000);
    }
	if ($(".p3-7,.p3-8,.p3-9,.p3-10").show()){
		$(".p3-7,.p3-8,.p3-9,.p3-10").hide();
    }

}

//js判断手机横竖屏判断
function orient() { 
	if (window.orientation == 90 || window.orientation == -90) { 
		$(".portrait").hide();
		$(".cover").show(); 
		$(".fe").hide();
    }
	else if (window.orientation == 0 || window.orientation == 180) { 
		$(".portrait").show();
		$(".cover").hide();
		$(".fe").show();
	}
}
	var timer;
	$(window).bind("orientationchange", function(){
		clearTimeout(timer);
		timer = setTimeout(orient, 300);
	});
orient();
