/*
  ADD A PROJECT:
  Copy one object in the projects array, edit its fields, and save.
  Add a comma between project objects.
*/

const projects = [
  {
    title: "Python Practice Projects",
    category: "PROGRAMMING",
    description: "Beginner-friendly Python exercises and small programs for practising variables, conditions, loops, and problem-solving.",
    image: "assets/Pythonart.png",
    tags: ["Python", "Programming"],
    link: "https://github.com/rullaselfiana01/MY-PROJECT-PYTHON"
  },
  {
    title: "Interactive IT Learning",
    category: "EDUCATION",
    description: "Classroom resources and practical activities designed to help students understand IT through hands-on learning.",
    image: "assets/eduart.png",
    tags: ["Teaching", "Learning"],
    link: "https://github.com/rullaselfiana01/Interactive-Learning"
  },
  {
    title: "Web Development Practice",
    category: "WEB DEVELOPMENT",
    description: "Simple web pages and front-end experiments created while learning the foundations of web development.",
    image: "assets/webart.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/rullaselfiana01"
  }
];


const projectGrid = document.getElementById("projectGrid");
projectGrid.innerHTML = projects.map(project => `
  <article class="project-card">
    <img class="project-image" src="${project.image}" alt="${project.title} thumbnail" loading="lazy">
    <div class="project-body">
      <span class="category">${project.category}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <a class="project-link" href="${project.link}" target="_blank" rel="noopener">View Project ↗</a>
    </div>
  </article>`).join("");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
