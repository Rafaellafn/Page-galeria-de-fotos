const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click",(e) => {
    makeActiveBtn(e);
  });
});

const makeActiveBtn = (event) => {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
};
