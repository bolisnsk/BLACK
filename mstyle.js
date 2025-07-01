const textElements = gsap.utils.toArray('#inc01 .b_txt');
textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 50%',
      scrub: true,
    },
  });
});

const textElements2 = gsap.utils.toArray('#inc01 .h_txt');
textElements2.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 50%',
      scrub: true,
    },
  });
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
      const textBox = document.getElementById('scrollText');
      const imageBox = document.getElementById('scrollImage');

      // 텍스트가 보이도록
      if (scrollY > 100 && scrollY < 600) {
        textBox.classList.add('visible');
      } else {
        textBox.classList.remove('visible');
      }

      // 이미지가 보이도록, 텍스트는 사라지도록
      if (scrollY > 700) {
        imageBox.classList.add('visible');
        textBox.classList.remove('visible');
      } else {
        imageBox.classList.remove('visible');
      }
    });
