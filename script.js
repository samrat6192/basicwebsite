// Smooth scroll for all anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Skill click animation
document.querySelectorAll(".skill").forEach(skill => {
  skill.addEventListener("click", () => {
    skill.classList.toggle("active");
  });
});