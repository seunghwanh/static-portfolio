const root = document.documentElement;

/* Switch themes */
const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const oldTheme = getCurrentTheme();
    const nextTheme = oldTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    themeToggle.textContent = nextTheme === "light" ? "Light" : "Dark";
    updateTheme(nextTheme);
  });
}

/* Toggle navigation menu for small screens */
const navToggle = document.querySelector("#nav-toggle");
const navList = document.querySelector("#nav-list");
if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

/* Copy email to clipboard */
const copyEmailBtn = document.querySelector("#copy-email");
const toast = document.querySelector("#toast");

function activateToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.hidden = false;
  setTimeout(() => {
    toast.hidden = true;
  }, 2000);
}

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    const address = copyEmailBtn.getAttribute("data-email");
    navigator.clipboard
      .writeText(address)
      .then(() => {
        activateToast("Email copied to clipboard!");
      })
      .catch(() => {
        activateToast("Failed to copy email.");
      });
  });
}
