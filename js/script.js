// Loading Screen
const loadingScreen = document.querySelector(".loading-screen");
const content = document.querySelector(".content");
const listItems = document.querySelectorAll(".loading-screen ul li");

function loadingAnimationComplete() {
  content.classList.add("show");
  loadingScreen.style.opacity = "0";
  loadingScreen.style.visibility = "hidden";

}

listItems[listItems.length - 1].addEventListener(
  "animationend",
  loadingAnimationComplete
);

window.addEventListener("load", onLoad);

//Footer Date
function onLoad() {
  const copyrightEl = document.getElementById("copyrightText");

  if (copyrightEl) {
    const currentYear = new Date().getFullYear();
    const copyrightText = `@ ${currentYear} Isaac Del Castillo`;

    copyrightEl.innerHTML = copyrightText;
  }
}

const underlineProjects = document.querySelectorAll(".projects h2");
underlineProjects.forEach((h2) => {
  h2.style.textDecoration = "underline";
});
