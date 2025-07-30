document.addEventListener("DOMContentLoaded",()=>{

   /* const toggleLink = document.getElementById("toggleMore");
  const hiddenButtons = document.querySelectorAll(".pagination-buttons .hidden");
  let expanded = false;

  toggleLink.addEventListener("click", (e) => {
    e.preventDefault();
    expanded = !expanded;

    hiddenButtons.forEach(btn => {
      btn.style.display = expanded ? "inline-block" : "none";
    });

    toggleLink.textContent = expanded ? "Show Less" : "More";
  });
  */
  // Array of pagination button data
  const buttonsData = [
    { label: "Trending Bags", link: "../trending/trending-bags.html" },
    { label: "Streetwear", link: "../trending/streetwear-trends.html" },
    { label: "Formal Wear", link: "../trending/formalwear-trends.html" },
    { label: "Sneakers", link: "../trending/sneakers-trends.html" },
    { label: "Trends", link: "../trending/trends.html" },
    { label: "Shop", link: "all-categories.html" },
   
  ];

  const paginationContainer = document.getElementById("paginationButtons");
  const toggleMore = document.getElementById("toggleMore");
  let expanded = false;

  // Render pagination buttons based on expanded state
  function renderButtons() {
    paginationContainer.innerHTML = ""; // Clear previous buttons

    buttonsData.forEach((btn, index) => {
      const button = document.createElement("button");
      button.textContent = btn.label;
      button.onclick = () => window.location.href = btn.link;

      // Hide buttons after the first 2 if not expanded
      if (!expanded && index > 1) {
        button.classList.add("hidden");
      }

      paginationContainer.appendChild(button);
    });
  }

  // Toggle 'More' link to show or hide extra buttons
  toggleMore.addEventListener("click", (e) => {
    e.preventDefault();
    expanded = !expanded;
    toggleMore.textContent = expanded ? "Show Less" : "More";
    renderButtons();
  });

  // Call once on page load
  renderButtons();

  // OPTIONAL: Add new button dynamically (example)
  // buttonsData.push({ label: "11", link: "page11.html" });
  // renderButtons();
  
  //script.js
/* Menu button styling*/

let isMenuVisible = false;
 $("main, footer").on("click",()=>{
     
     if(isMenuVisible){
  $("nav").slideUp(500)
  $(".menu-btn").trigger("click")
  
  isMenuVisible = false;
  }
 })
 $(".menu-btn").on("click",()=>{
   
 if(isMenuVisible){
   $("nav").slideUp(500)
   $("article, footer").css("opacity", "1")
   $("article, footer").css("transition", ".5s")
 
   isMenuVisible = false;
 }
 else{
   $("nav").slideDown(500)
   $("article, footer").css("opacity", "0.3")
   $("article, footer").css("transition", ".5s")
   isMenuVisible = true;
 }
 })  
 
 
 // Get the menu button element
    
const menuBtn = document.getElementById('menu-btn');

// Add an event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the 'clicked' class on the menu button
  menuBtn.classList.toggle('clicked');
});
/* Menu button styling end..*/

/* Header Effect on Scroll*/

window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
 })
  
  //blur image logic
      
  
const fullImages = document.querySelectorAll(".full-image");

  fullImages.forEach(img => {
    const placeholder = img.previousElementSibling;
    const highResSrc = img.getAttribute("data-src");

    const preloadImg = new Image();
    preloadImg.src = highResSrc;

    preloadImg.onload = () => {
      img.src = highResSrc;
      img.style.opacity = "1";
      placeholder.style.opacity = "0";
    };
  });

})
