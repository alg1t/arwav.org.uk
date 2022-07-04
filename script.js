const imgTargets = document.querySelectorAll("img[data-src]");
console.log(imgTargets);
const nav = document.querySelector(".nav");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  // console.log(entry.target.dataset.src);
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  // console.log(entry.target.classList[0]);

  entry.target.addEventListener("load", function () {
    // if ((entry.target.classList[0] = "composition__photo"))
    entry.target.classList.remove("composition__photo--lazy-img");
    // else entry.target.classList.remove1("popup__img--lazy-img");
    // entry.target.classList[0] = "composition__photo"
    //   ? entry.target.classList.remove("composition__photo--lazy-img")
    //   : entry.target.classList.remove("popup__img--lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

const handleHover = function (e) {
  if (e.target.classList.contains("nav__lia")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__lia");
    // const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    // logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.7));
nav.addEventListener("mouseout", handleHover.bind(1));

// const allSections = document.querySelectorAll(".section");
// console.log(allSections);
// const revealSection = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("section--hidden");
//   observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });
