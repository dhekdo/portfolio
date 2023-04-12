// 파티클
particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 100, size: 0, duration: 2, opacity: 0.7, speed: 3 },
      // repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

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

// 프로젝트
const items = document.querySelectorAll(".item");

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });
  gsap.to(items, {
    width: item.clicked ? "15vw" : "8vw",
    duration: 3.7,
    ease: "elastic(1, .6)"
  });

  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? "42vw" : "15vw",
    duration: 4,
    ease: "elastic(1, .3)"
  });
};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener("click", () => expand(item, i));
});

// 아이템 클릭시 버튼 구현
$(".item").click(function(){
  $(this).children("button").fadeIn(800).end().siblings().children("button").hide(800);
 var size1 = Math.floor($(this).width());
 var size2 = Math.floor(window.innerWidth*0.25);

if( size1 > size2 ){
  $(this).children("button").hide();
}
});

// 버튼 클릭시 홈페이지 이동
$(".btn1").click(function(){
  window.open("https://dhekdo.github.io/project_1/", '_blank');
})

$(".btn2").click(function(){
  window.open("https://dhekdo.github.io/project_2/", '_blank');
})

$(".btn3").click(function(){
  window.open("https://dhekdo.github.io/project_3/", '_blank');
})

$(".btn4").click(function(){
  window.open("https://dhekdo.github.io/project_4/", '_blank');
})

$(".btn5").click(function(){
  window.open("https://dhekdo.github.io/project_5/", '_blank');
})