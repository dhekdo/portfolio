// 섹션이동
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 인트로
let text = document.querySelector('#text');

text.setAttribute('data-text',text.innerHTML);

// document.body.innerHTML += '<div style="position: absolute; bottom: 0; left: 0; right: 0; padding: .5em; font-size: 12px; font-family: monospace; text-align: center; pointer-event: none;">Click anywhere to re-run</div>';

var lr = document.querySelector('#text');
window.addEventListener('click',()=>{
  var newone = text.cloneNode(true); 
  lr.parentNode.replaceChild(newone, lr);
  lr = newone;
});

// 프로젝트
const items = document.querySelectorAll(".item");

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(items, {
    width: item.clicked ? "15vw" : "8vw",
    duration: 2,
    ease: "elastic(1, .6)"
  });

  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? "42vw" : "15vw",
    duration: 2.5,
    ease: "elastic(1, .3)"
  });
};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener("click", () => expand(item, i));
});

// 아이템 클릭시 버튼 구현
$(".item").click(function(){
  $(this).children().fadeIn(800).toggleClass("on").end().siblings().children().hide(800);
 var size1 = Math.floor($(this).width());
 var size2 = Math.floor(window.innerWidth*0.25);

if( size1 > size2 ){
  $(this).children().hide();
}
});

$(".btn1").click(function(){
  alert("dd");
});