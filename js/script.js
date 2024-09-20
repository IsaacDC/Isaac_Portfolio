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

