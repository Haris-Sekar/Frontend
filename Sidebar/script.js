const expandMore = document.getElementById("expandMore");
const expandMore1 = document.getElementById("expandMore1");

const compDorpdown = document.getElementById("compDorpdown");
expandMore.addEventListener("click", (event) => {
  if (compDorpdown.classList.contains("hidden")) {
    compDorpdown.classList.remove("hidden");
  } else {
    compDorpdown.classList.add("hidden");
  }
});
expandMore1.addEventListener("click", (event) => {
  if (compDorpdown.classList.contains("hidden")) {
    compDorpdown.classList.remove("hidden");
  } else {
    compDorpdown.classList.add("hidden");
  }
});

const minSidebar = document.getElementById("minSidebar");

minSidebar.addEventListener("click", () => {
    const isMin = document.getElementById("isMin");
    if(isMin.classList.contains("isMin")) {
        isMin.classList.remove("isMin");
    } else {
        isMin.classList.add("isMin");
    }
});
