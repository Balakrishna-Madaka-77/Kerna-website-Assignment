document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("themeToggle");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(systemDark ? "dark" : "light");
  }

  // Toggle click
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const isDark = document.documentElement.classList.contains("dark");
      const newTheme = isDark ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

});
