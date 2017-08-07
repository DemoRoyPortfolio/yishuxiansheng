$(document).ready(function(){
	/* PC端 */
	var i = 0;
	// 右侧轮播
	var innerWidth = $(".pc").innerWidth();
	if (innerWidth > 750) {
		$(".pc .slide .item").eq(0).css("opacity","1");
		setInterval(function(){
			i++;
			$(".pc .slide .item").css("opacity","0");
			$(".pc .slide .item").eq(i).css("opacity","1");
			if (i == 2) {
				i = -1;
			};
		}, 5000);
	};
	// 注册页面
	$(".pc .left button").click(function(){
		$(".pc .popup-login").addClass("on");
		var i = 0;
		setInterval(function(){
			i++;
			switch(i){
				case 1: 
				$(".pc .popup-login .popup-bg").css("backgroundColor","#ac6856");
				break;
				case 2: 
				$(".pc .popup-login .popup-bg").css("backgroundColor","#8e7b75");
				break;
				default:
				$(".pc .popup-login .popup-bg").css("backgroundColor","#607b9d");
			};
			if (i > 3) {
				i = 0;
			};
		},6000);
	});
	// 关闭注册页面
	$(".pc .popup-login .btn-close").hover(function(){
		$(this).addClass("on");
	},function(){
		$(this).removeClass("on");
	});
	$(".pc .popup-login .btn-close").click(function(){
		$(".popup-login").removeClass("on");
	});
	// 搜索界面
	$(".pc header .search").click(function(){
		$(".pc .popup-search").addClass("on");
	})
	// 搜索结果
	$(".pc .popup-search .result").click(function(){
		var value = $(".pc .popup-search input").val();
		$(".pc .popup-search").removeClass("on");
 		$(".pc .popup-result").addClass("on");
		$(".pc .popup-result .name").text(value);
		$(".pc .popup-result .left .count").each(function(index,ele){
			index += 1;
			count = $(".pc .popup-result .result-" + index + " li").size();
			$(this).text(count);
		});
 		// 栏目切换
 		$(".pc .popup-result .left li").click(function(){
 			$(".pc .popup-result .left li").removeClass("active");
			$(this).addClass("active");
			$(".result").hide();
			$(".result-" + $(this).data("result")).fadeIn();
 		});
 	});
 	/* 移动端 */
 	$(".wap header .btn").click(function(){
 		$(".wap header").addClass("active");
 	});
 	$(".wap header .close-btn").click(function(){
 		$(".wap header").removeClass("active");
 	});
 	// 注册登录
		$(".wap-section-index .top button").click(function(){
			$(".Mpage-login").fadeIn();
			$(".Mpage-login section").hide();
			$(".login").show();
		});
		$(".Mpage-login .close-btn").click(function(){
			$(".Mpage-login").hide();
			$(".Mpage-login section").hide();
		});
		// 忘记密码
		$(".forgetpw-btn a").click(function(){
			$(".Mpage-login section").hide();
			$(".forgetpw").show();
		});
		// 设置新密码
		$(".forgetpw .next-btn").click(function(){
			$(".Mpage-login section").hide();
			$(".setnewpw").show();
		});
		// 返回登录页
		$(".back-login a").click(function(){
			$(".Mpage-login section").hide();
			$(".login").show();
		});
		// 注册页面
		$(".register-btn").click(function(){
		$(".Mpage-login section").hide();
			$(".register").show();
		});
		// 
		$(".login-btn").click(function(){
		$(".Mpage-login section").hide();
			$(".login").show();
		});
		$(".register button").click(function(){
		$(".Mpage-login section").hide();
			$(".register-secound").show();
		});
});