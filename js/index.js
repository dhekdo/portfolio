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
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
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

//인트로
class FibonacciSphere {
  #points;

  get points() {
      return this.#points;
  }

  constructor(N) {
      this.#points = [];

      const goldenAngle = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < N; i++) {
          const y = 1 - (i / (N - 1)) * 2;
          const radius = Math.sqrt(1 - y ** 2);
          const a = goldenAngle * i;
          const x = Math.cos(a) * radius;
          const z = Math.sin(a) * radius;

          this.#points.push([x, y, z]);
      }
  }
}

class TagsCloud {
  #root;
  #size;
  #sphere;
  #tags;
  #rotationAxis;
  #rotationAngle;
  #rotationSpeed;
  #frameRequestId;

  constructor(root) {
      this.#root = root;
      this.#size = this.#root.offsetWidth;
      this.#tags = root.querySelectorAll('.tag');
      this.#sphere = new FibonacciSphere(this.#tags.length);
      this.#rotationAxis = [1, 0, 0];
      this.#rotationAngle = 0;
      this.#rotationSpeed = 0;

      this.#updatePositions();
      this.#initEventListeners();
      this.#root.classList.add('-loaded');
  }

  #initEventListeners() {
      window.addEventListener('resize', this.#updatePositions.bind(this));
      document.addEventListener('mousemove', this.#onMouseMove.bind(this));
  }

  #updatePositions() {
      const sin = Math.sin(this.#rotationAngle);
      const cos = Math.cos(this.#rotationAngle);
      const ux = this.#rotationAxis[0];
      const uy = this.#rotationAxis[1];
      const uz = this.#rotationAxis[2];

      const rotationMatrix = [
          [
              cos + (ux ** 2) * (1 - cos),
              ux * uy * (1 - cos) - uz * sin,
              ux * uz * (1 - cos) + uy * sin,
          ],
          [
              uy * ux * (1 - cos) + uz * sin,
              cos + (uy ** 2) * (1 - cos),
              uy * uz * (1 - cos) - ux * sin,
          ],
          [
              uz * ux * (1 - cos) - uy * sin,
              uz * uy * (1 - cos) + ux * sin,
              cos + (uz ** 2) * (1 - cos)
          ]
      ];

      const N = this.#tags.length;

      for (let i = 0; i < N; i++) {
          const x = this.#sphere.points[i][0];
          const y = this.#sphere.points[i][1];
          const z = this.#sphere.points[i][2];

          const transformedX =
                rotationMatrix[0][0] * x
          + rotationMatrix[0][1] * y
          + rotationMatrix[0][2] * z;
          const transformedY =
                rotationMatrix[1][0] * x
          + rotationMatrix[1][1] * y
          + rotationMatrix[1][2] * z;
          const transformedZ =
                rotationMatrix[2][0] * x
          + rotationMatrix[2][1] * y
          + rotationMatrix[2][2] * z;

          const translateX = this.#size * transformedX / 2;
          const translateY = this.#size * transformedY / 2;
          const scale = (transformedZ + 2) / 3;
          const transform =
                `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
          const opacity = (transformedZ + 1.5) / 2.5;

          this.#tags[i].style.transform = transform;
          this.#tags[i].style.opacity = opacity;
      }
  }

  #onMouseMove(e) {
      const rootRect = this.#root.getBoundingClientRect();
      const deltaX = e.clientX - (rootRect.left + this.#root.offsetWidth / 2);
      const deltaY = e.clientY - (rootRect.top + this.#root.offsetHeight / 2);
      const a = Math.atan2(deltaX, deltaY) - Math.PI / 2;
      const axis = [Math.sin(a), Math.cos(a), 0];
      const delta = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const speed = delta / Math.max(window.innerHeight, window.innerWidth) / 10;

      this.#rotationAxis = axis;
      this.#rotationSpeed = speed;
  }

  #update() {
      this.#rotationAngle += this.#rotationSpeed;

      this.#updatePositions();
  }

  start() {
      this.#update();

      this.#frameRequestId = requestAnimationFrame(this.start.bind(this));
  }

  stop() {
      cancelAnimationFrame(this.#frameRequestId);
  }
}


function main() {
  {
      const root = document.querySelector('.tags-cloud');
      const cloud = new TagsCloud(root);

      cloud.start();
  }

  {
      const cursor = document.getElementById('cursor');
      const isActivated = false;

      document.addEventListener('mousemove', (e) => {
          if (!isActivated) {
              cursor.classList.add('-activated');
          }

          cursor.style.transform =
              `translateX(${e.clientX}px) translateY(${e.clientY}px)`;
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  main();
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