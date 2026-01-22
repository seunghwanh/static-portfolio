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

/* Toolbar search input */
const projectGrid = document.querySelector("#project-grid");
const searchInput = document.querySelector("#project-search");
const tagFilter = document.querySelector("#tag-filter");
const toolbarClearBtn = document.querySelector("#toolbar-clear");

function filterProjects() {
  if (!projectGrid) return;

  // Get search query and selected tag
  const query = searchInput.value.toLowerCase();
  const tag = tagFilter?.value || "all";

  const cards = Array.from(projectGrid.querySelectorAll(".card"));

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase().trim();
    const tags = card.dataset.tags.toLowerCase().trim();
    const hasQuery = !query || text.includes(query);
    const hasTag = tag === "all" || tags.includes(tag);

    card.style.display = hasQuery && hasTag ? "" : "none";
  });
}

if (searchInput) {
  searchInput.addEventListener("input", filterProjects);
}
if (tagFilter) {
  tagFilter.addEventListener("change", filterProjects);
}
if (toolbarClearBtn) {
  toolbarClearBtn.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    if (tagFilter) tagFilter.value = "all";
    filterProjects();
  });
}
