const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click",(e) => {
    makeActiveBtn(e);

    if(e.target.classList.contains('btn__all')) {
      filterImage("all");
    }
    if(e.target.classList.contains('btn__car')) {
      filterImage("car");
    }
    if(e.target.classList.contains('btn__house')) {
      filterImage("house");
    }
    if(e.target.classList.contains('btn__animal')) {
      filterImage("animal");
    }
 });
});

const makeActiveBtn = (event) => {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
};

const filterImage = (category) => {
  const images = Array.from(document.querySelectorAll(".filter__imgs img"));

  images.forEach(img => {
    img.classList.add("hide");
  });

  const filterdImages = images.filter(
    (img) => 
    img.getAttribute("data-image") === category || 
    img.getAttribute("data-all") === category
    );

    filterdImages.forEach(img => {
      img.classList.remove("hide");
    });
};

