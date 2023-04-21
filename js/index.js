window.onload = function(){
    // 프로필 버튼 클릭시 노출
    $(".profile_link").click(function(){
        $("body").addClass("scroll_off");
        $(".profile").fadeIn(1000);
        $(".logo .logo_text").css({animation: "slideUp 0.8s ease-in-out forwards", display: "inline-block"});
    });
    // 닫기 버튼 클릭
    $(".exit_btn").click(function(){
        $("body").removeClass("scroll_off");
        $(".profile").fadeOut();
        $(".logo .logo_text").css({animation: "slideDown 0.8s ease-in-out forwards", display : ""});
    }).mouseover(function(){
        $(".exit_btn span").css({"-webkit-text-stroke" : "1px #fff", color:"#4801ff"});
    }).mouseout(function(){
        $(".exit_btn span").css({color : ""});
    });

    // 컨텐츠 링크 클릭시 노출
    $(".main_link>li").click(function(){
        var titleIndex = $(this).index();

        $("body").addClass("scroll_off");
        $(".logo .logo_text").css({animation: "slideUp 0.8s ease-in-out forwards"}).mouseover(function(){
            $(".logo .logo_text").css({color:"#000"});
        }).mouseout(function(){
            $(".logo .logo_text").css({color:"#fff"})
        });
        $("nav a, nav li").css({color : "#fff"});
        $(".info li:last-child").fadeOut();
        $(".content").fadeIn(function(){
            $(".slide_wrap>div").eq(titleIndex).fadeIn();
        });
    });

    // 뒤로가기 버튼 클릭
    $(".pre_btn").click(function(){
        $("body").removeClass("scroll_off");
        $(".slide_wrap>div").fadeOut();
        $(".info li:last-child").fadeIn();
        $(".content").fadeOut();
        $(".logo .logo_text").css({animation: "slideDown 0.8s ease-in-out forwards", color: ""}).mouseover(function(){
            $(".logo .logo_text").css({color:"#4801ff"});
        }).mouseout(function(){
            $(".logo .logo_text").css({color:"#fff"});
        });
        $("nav a, nav li").css({color : ""})
    });

}