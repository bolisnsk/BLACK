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

const writeForm = document.querySelector("#writeForm");

class Board {
    constructor(indexNum, subjecStr, writerStr, contentStr){
        this.index = indexNum;
        this.Subject = subjecStr;
        this.Writer = writerStr;
        this.Content = contentStr;
        this.date = recordDate();
        this.views = -1;
        this.fefresh = false;
    }

    set Subject(value) {
        if (value.length === 0) throw new Error("제목을 입력해주세요.");
        this.subject = value;
    }

    set Writer(value) {
        if (value.length === 0) throw new Error("작성자를 입력해주세요.");
        this.writer = value;
    }

    set Content(value) {
        if (value.length === 0) throw new Error("내용을 입력해주세요.");
        this.content = value;
    }
}

const recordDate = () => {
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    mm = (mm > 9 ? "" : 0) + mm;
    dd = (dd > 0 ? "" : 0) + dd;

    const arr = [yyyy, mm, dd];

    return arr.join("-");
};

const submitHandler = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const writer = e.target.writer.value;
    const content = e.target.content.value;

    try {
        const boardsObj = JSON.parse(localStorage.getItem("boards")) || [];

        const index = boardsObj.length;
        const instance = new Board(index, subject, writer, content);
        boardsObj.push(instance);

        const boardsStr = JSON.stringify(boardsObj);
        localStorage.setItem("boards", boardsStr);
        location.href = "./view.html?index=" + index;
    } catch (e) {
        alert(e.message);
        console.error(e);
    }
};

writeForm.addEventListener("submit", submitHandler);