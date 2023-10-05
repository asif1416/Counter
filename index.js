const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function(e){
    if(e.target.classList.contains("add")){
        count.innerHTML++;
    };

    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
    };

    if(e.target.classList.contains("reset")){
        count.innerHTML=0;
    };
});


const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const nav = document.querySelector(".nav"); // Select the .nav element

// Check if the user's preference is already set
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  nav.classList.add("dark-mode"); // Apply dark mode to the .nav element
}

darkModeToggle.addEventListener("click", () => {
  // Toggle dark mode for body and .nav
  body.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode"); // Toggle dark mode for .nav as well

  // Save user's preference to localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

