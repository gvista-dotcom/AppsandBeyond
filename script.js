// ---------------------------------
// BASIC TEST
// This confirms that your JavaScript file is connected properly
// If you see this in the browser console → JS is working
// ---------------------------------
console.log("AppsAndBeyond live and interactive!");


// ---------------------------------
// SELECT ALL PROJECT LINKS
// This grabs every element with the class "project-link"
// It returns a NodeList (like an array)
// ---------------------------------
const projectLinks = document.querySelectorAll(".project-link");


// ---------------------------------
// LOOP THROUGH EACH LINK
// forEach runs a function on every link found
// ---------------------------------
projectLinks.forEach(link => {

  // ---------------------------------
  // ADD CLICK EVENT LISTENER
  // This runs code every time a link is clicked
  // ---------------------------------
  link.addEventListener("click", (e) => {

    // ---------------------------------
    // Only block links that are placeholders
    // Check the link's href attribute
    // If it's "#", it means the link is just a placeholder
    // ---------------------------------
    if (link.getAttribute("href") === "#") {
      e.preventDefault(); // prevents navigation
      alert(`You clicked a work in progress: ${link.textContent}`);
    }

  });

});
