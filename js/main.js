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
