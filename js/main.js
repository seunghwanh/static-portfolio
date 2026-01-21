/* Switch themes */
const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const oldTheme = getCurrentTheme();
    const nextTheme = oldTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    updateTheme(nextTheme);
  });
}

/* Toggle navigation menu for small screens */
const navToggle = document.querySelector("#nav-toggle");
const navList = document.querySelector("#nav-list");
navToggle.addEventListener("click", () => {
  navList.classList.toggle("open");
});
