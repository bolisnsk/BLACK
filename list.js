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

let boardsStr = localStorage.getItem("boards");

if (boardsStr === null) {
    const listStr = JSON.stringify([]);
    localStorage.setItem("boards", listStr);
    boardsStr = listStr;
}

const boardsObj = JSON.parse(boardsStr);

const template = (index, objValue) => {
  return `
  <div>
    <div>${index + 1}</div>
    <div><a href = "./view.html?index=${objValue.index}">${objValue.subject}</a></div>
    <div>${objValue.writer}</div>
    <div>${objValue.date}</div>
    <div>${objValue.views}</div>
  </div>
  `;
};

const dbody = document.getElementById('tbody')

for(let i = 0; i < boardsObj.length; i++) {
  dbody.innerHTML += (template(i, boardsObj[i]));
  boardsObj[i].refresh = false;
  const refreshStr = JSON.stringify(boardsObj);
  localStorage.setItem("boards", refreshStr);
}