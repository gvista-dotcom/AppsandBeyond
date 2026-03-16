// Console log to make sure JS is working
console.log("AppsAndBeyond live and interactive!");

// Example: alert when clicking project links
const projectLinks = document.querySelectorAll(".project-link");
projectLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevents broken links for now
    alert(`You clicked: ${link.textContent}`);
  });
});
