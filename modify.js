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

const modifyForm = document.querySelector("#modifyForm");
const modifyFormList = document.querySelectorAll("#modifyForm > div");
const idx = location.search;
const index = location.search.split("=")[1];
const boardsObj = JSON.parse(localStorage.getItem("boards"));
const board = boardsObj[index];

for (let i = 0; i < modifyForm.lenght; i++){
  const element = modifyForm[i].childNodes;
  const id = element.name;
  element.value = board[id];
}

const isEmpty = (subject, writer, content) => {
  if (subject.lenght === 0) throw new Error ("제목을 입력해 주세요");
  if (writer.lenght === 0) throw new Error ("작성자를 입력해 주세요");
  if (content.lenght === 0) throw new Error ("내용을 입력해 주세요");
}

const recordDate = () => {
  const date = new Date();
  const yyyy = data.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  mm = (mm >  9 ? "" : 0) + mm;
  dd = (dd >  9 ? "" : 0) + dd;

  const arr = [yyyy, mm, dd];

  return arr.join("-");
}

const modifyHandler = (e) => {
  e.preventDefault();
  const subject = e.target.subject.value;
  const writer = e.target.writer.value;
  const content = e.target.content.value;

  try{
    isEmpty(subject, writer, content);
    board.subject = subject;
    board.writer = writer;
    board.content = content;
    board.date = recordDate();

    const boardsStr = JSON.stringify(boardsObj);
    localStorage.setItem("boards", boardsStr);
    location.href = "./view.html" + idx;
  } catch (e) {
    alert(e.message);
    console.error(e);
  }
}

const backBtn = document.querySelector("#back");

const backBtnHandler = (e) => {
  location.href = document.referrer;
}

modifyForm.addEventListener("submit", modifyHandler);
backBtn.addEventListener("click", backBtnHandler);