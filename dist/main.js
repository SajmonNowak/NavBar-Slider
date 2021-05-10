const hamburgerIcon = document.getElementById("menuIcon");
const mobileNav = document.getElementById("mobileNavContainer");
let counter = 1;

const NavBar = {
  changeIcon() {
    hamburgerIcon.classList.toggle("change");
  },

  openCloseMenu() {
    if (mobileNav.style.display == "" || mobileNav.style.display == "none") {
      mobileNav.style.display = "flex";
    } else {
      mobileNav.style.display = "none";
    }
  },
};

const Slider = {
  start() {
    Slider.showImg(counter);
    Slider.initialiseButtons();
  },

  initialiseButtons() {
    const nextBtn = document.getElementById("nextButton");
    const prevBtn = document.getElementById("prevButton");
    const dot1 = document.getElementById("dot1");
    const dot2 = document.getElementById("dot2");
    const dot3 = document.getElementById("dot3");

    nextBtn.addEventListener("click", () => {
      Slider.nextSlide();
    });
    prevBtn.addEventListener("click", () => {
      Slider.prevSlide();
    });
    dot1.addEventListener("click", () => {
      counter = 1;
      Slider.showImg(counter);
    });
    dot2.addEventListener("click", () => {
      counter = 2;
      Slider.showImg(counter);
    });
    dot3.addEventListener("click", () => {
      counter = 3;
      Slider.showImg(counter);
    });
  },

  showImg(imgNumber) {
    let img = "";
    const imgs = document.querySelectorAll(".imageDiv");
    imgs.forEach((element) => element.classList.remove("showImage"));

    switch (imgNumber) {
      case 1:
        img = document.getElementById("img1");
        Slider.activateDot(1);
        break;
      case 2:
        img = document.getElementById("img2");
        Slider.activateDot(2);
        break;
      case 3:
        img = document.getElementById("img3");
        Slider.activateDot(3);
        break;
    }
    img.classList.add("showImage");
    setTimeout(Slider.nextSlide, 5000);
  },
  nextSlide() {
    counter++;
    if (counter > 3) {
      counter = 1;
    }
    Slider.showImg(counter);
  },
  prevSlide() {
    counter--;
    if (counter < 1) {
      counter = 3;
    }
    Slider.showImg(counter);
  },
  activateDot(dot) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((element) => element.classList.remove("activeDot"));

    switch (dot) {
      case 1:
        dots[0].classList.add("activeDot");
        break;
      case 2:
        dots[1].classList.add("activeDot");
        break;
      case 3:
        dots[2].classList.add("activeDot");
        break;
    }
  },
};

hamburgerIcon.addEventListener("click", (e) => {
  NavBar.changeIcon();
  NavBar.openCloseMenu();
});

document.addEventListener("DOMContentLoaded", Slider.start());
