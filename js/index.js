window.onload = function(){
    // 프로필 클릭시 노출
    $(".profile_link").click(function(){
        $(".profile").fadeIn(1000);
        $(".logo .logo_text").css({animation: "slideUp 0.8s ease-in-out forwards", display: "inline-block"});
    });
    // 닫기 버튼 클릭
    $(".exit").click(function(){
        $(".profile").fadeOut();
        $(".logo .logo_text").css({animation: "slideDown 0.8s ease-in-out forwards", display : ""});
    }).mouseover(function(){
        $(".exit span").css({"-webkit-text-stroke" : "1px #fff", color:"#4801ff"});
    }).mouseout(function(){
        $(".exit span").css({color : ""});
    });

}