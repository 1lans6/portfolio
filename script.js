const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const dark = body.classList.contains("dark");
  themeToggle.textContent = dark ? "☀" : "☾";
  localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
