const textElements = gsap.utils.toArray('#inc01 .b_txt');
textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 70%',
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


