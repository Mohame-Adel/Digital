/** @format */

let naveLinks = document.querySelectorAll(".nav-link");
let client = document.querySelector(".client-opinion");
let cards = document.querySelectorAll(".client-opinion .card");
let blog = document.querySelector(".blog");
let scrollToTop = document.querySelector(".scrollToTop");
let listOfWorks = document.querySelectorAll(".portfolio li");
let gallery = document.querySelectorAll(".portfolio .card");
let scrollProgress = document.querySelector(".scroll-progress");
naveLinks.forEach((naveLink) => {
  naveLink.addEventListener("click", (element) => {
    naveLinks.forEach((naveLink) => {
      naveLink.classList.remove("activeted");
    });
    element.currentTarget.classList.add("activeted");
  });
});
let services = document.querySelector(".services");
let works = document.querySelectorAll(".num");
window.onscroll = () => {
  scrollProgress.style.width = `${
    (window.scrollY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100
  }%`;

  if (window.scrollY > 500) {
    scrollToTop.style.display = "flex";
  } else {
    scrollToTop.style.display = "none";
  }
  if (window.scrollY >= blog.offsetTop - 650) {
    blog.classList.add("reach");
  }
  if (window.scrollY >= client.offsetTop - 650) {
    cards.forEach((card) => {
      card.classList.add("reach");
    });
  }
  if (window.scrollY >= services.offsetTop) {
    works.forEach((work) => {
      let count = setInterval(() => {
        if (work.textContent == work.dataset.count) {
          clearInterval(count);
        } else {
          work.textContent++;
        }
      }, 4000 / parseInt(work.dataset.count));
    });
  }
};
listOfWorks.forEach((list) => {
  list.addEventListener("click", (element) => {
    listOfWorks.forEach((list) => {
      list.classList.remove("active");
    });
    element.currentTarget.classList.add("active");
    gallery.forEach((ele) => {
      ele.classList.add("not-choosen");
    });
    document
      .querySelectorAll(`.${element.currentTarget.dataset.cat}`)
      .forEach((ele) => {
        ele.classList.remove("not-choosen");
      });
  });
});
