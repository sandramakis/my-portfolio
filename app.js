const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((hl) => {
  observer.observe(hl);
});

// const todoImage = document.getElementById("todo-app");

// todoImage.addEventListener("click", () => {
//   console.log("img pressed");
// });
