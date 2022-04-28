// const scrollToBottomPage = document.querySelector("#scroll");

// scrollToBottomPage.addEventListener("click", () => {
//   console.log("clicked >>>>"windows.scrollTo(0, document.body.scrollHeight));
// });

// scroll fadeIn animation

const isVisible = (el) => {
  let elementBox = el.getBoundingClientRect();
  let distanceFromTop = -200;

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true;
  } else {
    return false;
  }
};

const scanDocument = () => {
  let sectionList = document.querySelectorAll(".hidden");
  sectionList.forEach((section) => {
    if (isVisible(section)) {
      section.classList.remove("hidden");
    }
  });
};

document.addEventListener("scroll", scanDocument);

// dark theme javascript functionality section

const bgToggle = document.querySelector("#toggle");

bgToggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
