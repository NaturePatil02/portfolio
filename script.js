// Smooth scroll effect
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Highlight active nav link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".navbar a").forEach(link => {
  if(link.getAttribute("href") === currentPage){
    link.classList.add("active");
  }
});
