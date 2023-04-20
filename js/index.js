window.onload = function(){
    // 프로필 버튼 클릭시 노출
    $(".profile_link").click(function(){
        $(".profile").fadeIn(1000);
        $(".logo .logo_text").css({animation: "slideUp 0.8s ease-in-out forwards", display: "inline-block"});
    });
    // 닫기 버튼 클릭
    $(".exit_btn").click(function(){
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
        $(".logo .logo_text").css({animation: "slideUp 0.8s ease-in-out forwards"});
        $("nav a, nav li").css({color : "#fff", transition: "all 0.5s"});
        $(".info li:last-child").fadeOut();
        $(".content").fadeIn(function(){
            $(".slide_wrap>div").eq(titleIndex).fadeIn();
            // 링크마다 노출 다르게
            // if( $(".slide_mini1").css("display") == "block" ){
            //     $(".content_wrap").css("background" , "#ea6852");
            //     $(".logo .logo_text").css({color:"#000"});
            //     $("nav a, nav li").css({color : "#000", transition: "all 0.5s"});
            //     $(".slide_box span").css({"-webkit-text-stroke":"2px #000"});
            //     $(".pre_btn i").css({color:"#000"});
            // }
            // else if( $(".slide_mini2").css("display") == "block" ){
            //     $(".content_wrap").css("background" , "#00437b");
            //     $(".logo .logo_text").css({color:"#fff"});
            //     $("nav a, nav li").css({color : "#fff", transition: "all 0.5s"});
            //     $(".slide_box span").css({"-webkit-text-stroke":"2px #fff"});
            //     $(".pre_btn i").css({color:"#fff"});
            // }
            // else if( $(".slide_mini3").css("display") == "block" ){
            //     $(".content_wrap").css("background" , "#ffeb60");
            //     $(".logo .logo_text").css({color:"#000"});
            //     $("nav a, nav li").css({color : "#000", transition: "all 0.5s"});
            //     $(".slide_box span").css({"-webkit-text-stroke":"2px #fff"});
            //     $(".pre_btn i").css({color:"#000"});
            // }
            // else if( $(".slide_mini4").css("display") == "block" ){
            //     $(".content_wrap").css("background" , "#F7F5EC");
            //     $(".logo .logo_text").css({color:"#000"});
            //     $("nav a, nav li").css({color : "#000", transition: "all 0.5s"});
            //     $(".slide_box span").css({"-webkit-text-stroke":"2px #000"});
            //     $(".pre_btn i").css({color:"#000"});
            // }
            // else if( $(".slide_mini5").css("display") == "block" ){
            //     $(".content_wrap").css("background" , "#F9E6D3");
            //     $(".logo .logo_text").css({color:"#000"});
            //     $("nav a, nav li").css({color : "#000", transition: "all 0.5s"});
            //     $(".slide_box span").css({"-webkit-text-stroke":"2px #fff"});
            //     $(".pre_btn i").css({color:"#000"});
            // }
            // else if( $(".slide_mini6").css("display") == "block" ){
            //     $(".content_wrap").css("background" , "#333");
            //     $(".logo .logo_text").css({color:"#fff"});
            //     $("nav a, nav li").css({color : "#fff", transition: "all 0.5s"});
            //     $(".slide_box span").css({"-webkit-text-stroke":"2px #fff"});
            //     $(".pre_btn i").css({color:"#fff"});
            // }
        });
    });

   

    // 뒤로가기 버튼 클릭
    $(".pre_btn").click(function(){
        $(".slide_wrap>div").fadeOut();
        $(".info li:last-child").fadeIn();
        $(".content").fadeOut();
        $(".logo .logo_text").css({animation: "slideDown 0.8s ease-in-out forwards", color: ""});
        $("nav a, nav li").css({color : "", transition: "all 1s"})
    });

}