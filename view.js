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

const boardsStr = localStorage.getItem("boards");
const boardsObj = JSON.parse(boardsStr);

const idx = location.search;
const index = idx.split("=")[1];
const board = boardsObj[index];

console.log('boards');

const beforeUrl = document.referrer;

if (!board.refresh) {
  board.views++;
  board.refresh = true;
  const viewCountStr = JSON.stringify(boardsObj);
  localStorage.setItem("boards", viewCountStr);
} else {
  if (beforeUrl === "") {
    board.vies++;
    const viewCountStr = JSON.stringify(boardsObj);
    localStorage.setItem("boards", viewCountStr);
  }
}

const viewCount = (beforeUrl) => {
  if (beforeUrl.split("/").pop() === "list.html") {
    board.views++;
    const viewCountStr = JSON.stringify(boardsObj);
    localStorage.setItem("boards", viewCountStr);
  }
};

viewCount(beforeUrl);

const viewForm = document.querySelectorAll("#viewForm > div");

for (let i = 0; i < viewForm.length; i++) {
  const id = viewForm[i].id;
  viewForm[i].innerHTML += "" + board[id];
}

const modifyBtn = document.querySelector("#modify");

const modifyBtnHandler = (e) => {
  location = "./modify.html" + idx;
}

modifyBtn.addEventListener("click", modifyBtnHandler);

const deleteBtn = document.querySelector("#delete");

const deleteBtnHandler = (e) => {
  boardsObj.splice(index, 1);
  for (let i = 0; i < boardsObj.length; i++) {
    boardsObj[i].index = i;
  }

  const setBoardsStr = JSON.stringify(boardsObj);
  localStorage.setItem("boards", setBoardsStr);
  location.href = "./list.html";
}

deleteBtn.addEventListener("click", deleteBtnHandler);