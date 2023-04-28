window.onload = function(){

    // 링크 버튼 클릭시 노출
    $(".profile_link").click(function(){
        $("nav").fadeOut();
        $("body").addClass("scroll_off");
        $(".profile").fadeIn(1000);
        $(".logo .logo_text").css({animation: "slideUp 0.8s ease-in-out forwards", display: "inline-block"});

        if (matchMedia("screen and (max-width: 600px)").matches) {
            $(".logo .logo_text").css({animation: "",opacity:0, transition : "all 0.8s", display: ""});
          }
    });

    $(".skill_link").click(function(){
        $("nav").fadeOut();
        $("body").addClass("scroll_off");
        $(".skill").fadeIn(1000);
        $(".logo .logo_text").css({animation: "slideUp 0.8s ease-in-out forwards", display: "inline-block"});
        
        if (matchMedia("screen and (max-width: 600px)").matches) {
            $(".logo .logo_text").css({animation: "",opacity:0, transition : "all 0.8s", display: ""});
          }
    });
    // 닫기 버튼 클릭
    $(".exit_btn").click(function(){
        $("nav").fadeIn();
        $("body").removeClass("scroll_off");
        $(".profile, .skill").fadeOut();
        $(".logo .logo_text").css({animation: "slideDown 0.8s ease-in-out forwards", display : ""});

        if (matchMedia("screen and (max-width: 600px)").matches) {
            $(".logo .logo_text").css({animation: "", opacity : 1, transition : "all 0.8s"});
          }
    }).mouseover(function(){
        $(".exit_btn span").css({"-webkit-text-stroke" : "1px #fff", color:"#4801ff"});
    }).mouseout(function(){
        $(".exit_btn span").css({color : ""});
    });

    // 컨텐츠 링크 클릭시 노출
    $(".main_link>li").click(function(){
        var titleIndex = $(this).index();

        $(this).css({transform : "translate(0,0)"});
        $("body").addClass("scroll_off");
        $(".logo .logo_text").css({animation: "slideUp 0.8s ease-in-out forwards"}).mouseover(function(){
            $(".logo .logo_text").css({color:"#000"});
        }).mouseout(function(){
            $(".logo .logo_text").css({color:"#fff"})
        });
        $("nav a, nav li").css({color : "#fff"});
        $(".info li:last-child").fadeOut();
        $(".content").fadeIn(600,function(){
            $(".slide_wrap>div").eq(titleIndex).fadeIn();
        });
    });

    // 뒤로가기 버튼 클릭
    $(".pre_btn").click(function(){
        $("body").removeClass("scroll_off");
        $(".main_link>li").css({transform : ""});
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