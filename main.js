let slides = document.querySelectorAll(".slide");

for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("click", function () {
    clearActiveClasses();
    slides[i].classList.add("active");
  });
}

function clearActiveClasses() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
}



let bars = document.querySelector(".bars");
let header = document.querySelector(".header");

bars.addEventListener("click", function () {
  if (header.style.display === "none") {
    header.style.display = "block";
  } else {
    header.style.display = "none";
  }
});

