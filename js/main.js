const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const toast = document.querySelector("#toast");

const activateToast = (msg) => {
  if (!toast) return;
  toast.textContent = msg;
  toast.hidden = false;
  setTimeout(() => {
    toast.hidden = true;
  }, 2000);
};

/* Switch themes */
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
if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

/* Copy email to clipboard */
const copyEmailBtn = document.querySelector("#copy-email");
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
