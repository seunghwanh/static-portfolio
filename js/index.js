/* Toolbar search input */
const projectGrid = document.querySelector("#project-grid");
const searchInput = document.querySelector("#project-search");
const tagFilter = document.querySelector("#tag-filter");
const toolbarClearBtn = document.querySelector("#toolbar-clear");
const emptyProjectWarn = document.querySelector("#empty-project-warn");

function filterProjects() {
  if (!projectGrid) return;

  // Get search query and selected tag
  const query = searchInput.value.toLowerCase();
  const tag = tagFilter?.value || "all";

  const cards = Array.from(projectGrid.querySelectorAll(".card"));
  let visibleCount = 0;

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase().trim();
    const tags = card.dataset.tags.toLowerCase().trim();

    const hasQuery = !query || text.includes(query);
    const hasTag = tag === "all" || tags.includes(tag);
    const needShow = hasQuery && hasTag;

    card.style.display = needShow ? "" : "none";
    if (needShow) visibleCount++;
  });

  if (emptyProjectWarn) {
    emptyProjectWarn.style.display = visibleCount === 0 ? "block" : "none";
  }
}

// Event listeners for filtering
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
