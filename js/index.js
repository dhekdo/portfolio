window.onload = function(){
    // 프로필 클릭시 노출
    $(".profile_link").click(function(){
        $(".profile").fadeIn(function(){
            $(".logo .logo_text").css({position:"fixed", top:"5%", left: "3%" , display:"inline-block"})
        });
    });

    $(".exit").click(function(){
        $(".profile").fadeOut();
        $(".logo .logo_text").css({position:"", top:"", left: "" , display:""});
    }).mouseover(function(){
        $(".exit span").css({"-webkit-text-stroke" : "1px #fff", color:"#4801ff"});
    }).mouseout(function(){
        $(".exit span").css({color : ""});
    });

}