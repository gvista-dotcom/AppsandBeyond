// Console log to check if the JS file is connected
console.log("AppsAndBeyond live and interactive!");

// Example: simple hover effect for all project links
const links = document.querySelectorAll(".project-link");
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevents broken links for now
    alert(`You clicked on ${link.textContent}`);
  });
});
