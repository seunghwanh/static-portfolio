const getCurrentTheme = () => localStorage.getItem("theme") || "light";

const updateTheme = (theme) => {
  const root = document.documentElement;
  const themeAttribute = "data-theme";
  if (theme === "dark") {
    root.setAttribute(themeAttribute, theme);
  } else {
    root.removeAttribute(themeAttribute);
  }
};

updateTheme(getCurrentTheme());
