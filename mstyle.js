// .b_txt들을 배열로 가져온다
const textElements = gsap.utils.toArray('#inc01 .b_txt');

// 각 text 요소에 대해 애니메이션 적용. forEach를 쓰면 배열 안의 각 요소를 하나씩 꺼낼 수 있고 그걸 GSAP 애니메이션 대상 gsap.to로 넘겨준다
textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    //부드러운 연결감을 위해 속도를 일정하게 유지하는 애니메이션 설정을 줌
    ease: 'none',
    scrollTrigger: {
      // text 요소가 스크롤되어 화면의 특정 위치에 도달했을 때, 애니메이션 시작하거나 끝내겠다 즉, 애니메이션 기준이 되는 요소를 지정하고 현재 .b_txt 요소 하나가  text가 되고 각 요소가 자기 위치에서 개별적으로 애니메이션되게 만들기 위해 사용
      trigger: text,
      start: 'center 80%',
      end: 'center 40%',
      // 스크롤 위치에 따라 애니메이션이 진행되는 설정
      scrub: true,
    },
  });
});

gsap.to('#inc01 .h_txt', {
  backgroundSize: '100%',
  ease: 'none',
  scrollTrigger: {
    trigger: '#inc01 .b_txt',
    start: 'center 80%',
    end: 'center 50%',
    scrub: true,
  },
});

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('header').classList.add('visible');
  }, 1000);
});

window.onload = () => {
  let x = 0,
      y = 0;
  let targetX = 0,
      targetY = 0;
  const speed = 0.09;
  const cursorItem = document.querySelector(".cursorItem");
  const circle = cursorItem.querySelector(".cursor");

  const buttonAll = document.querySelectorAll("a");

  buttonAll.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      circle.style.transform = "scale(.3)";
    });
    item.addEventListener("mouseleave", () => {
      circle.style.transform = "scale(1)";
    });
  });
  
  window.addEventListener("mousemove", (e) => {
    x = e.pageX;
    y = e.pageY;
  });

  const loop = () => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;

    cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

    window.requestAnimationFrame(loop);
  };
  loop();  
};

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const imageBox = document.getElementById('scrollImage');

  if (scrollY > 1600) {
    imageBox.classList.add('visible');
  } else {
    imageBox.classList.remove('visible');
  }
});

  gsap.fromTo('.text',
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.text',
        start: 'top 80%', // 요소의 top이 뷰포트 80%에 닿을 때
        end: 'top 20%',   // 끝나는 조건
        toggleActions: 'play reverse play reverse', // 스크롤 위/아래 모두 반응
        markers: false    // 개발 중엔 true로 설정하면 디버깅 편해요
      }
    }
  );