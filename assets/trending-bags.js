document.addEventListener("DOMContentLoaded", () => {
  // Hide preloader after everything is fully loaded
const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.4s ease';
    
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 400); // Allow fade out before removing
  
  const blogPosts = [
  
    {
  title: "How to Style a Black Tote Bag: 7 Elevated Outfit Ideas for 2025",
  excerpt: "From streetwear to office-ready looks, discover 7 polished outfit formulas that prove the black tote is the ultimate fashion essential in 2025.",
  image: "../images/bag-images/black-tote-hero.jpg",
  readMore: "../trending/black-tote-bag-style.html",
  shopLink: "../category/bags-shop.html"
},
{
  title: "5 Streetwear Crossbody Looks That Actually Work for Guys",
  excerpt: "Master the art of crossbody bag styling with 5 clean streetwear formulas guys can actually pull off in 2025.",
  image: "../images/bag-images/crossbody-hero.jpg",
  readMore: "../trending/5-streetwear-crossbody-looks-for-guys.html",
  shopLink: "../category/bags-shop.html"
},
    // Add more posts as needed
  ];

  const grid = document.getElementById("categoryGrid");

  blogPosts.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    const loader = document.createElement("div");
    loader.className = "loader";

    const img = document.createElement("img");
    img.className = "blog-thumb";
    img.src = post.image;
    img.alt = post.title;

    // Fade-in effect on image load
    img.addEventListener("load", () => {
      loader.style.display = "none";
      img.style.display = "block";
      img.classList.add("fade-in");
    });

    // In case image is cached
    if (img.complete) {
      loader.style.display = "none";
      img.style.display = "block";
      img.classList.add("fade-in");
    }

    imageContainer.appendChild(loader);
    imageContainer.appendChild(img);

    const content = document.createElement("div");
    content.className = "blog-content";

    const title = document.createElement("div");
    title.className = "blog-title";
    title.textContent = post.title;

    const excerpt = document.createElement("p");
    excerpt.className = "blog-excerpt";
    excerpt.textContent = post.excerpt;

    const buttons = document.createElement("div");
    buttons.className = "blog-buttons";

    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read More";
    readMoreBtn.onclick = () => window.location.href = post.readMore;

    const shopBtn = document.createElement("button");
    shopBtn.textContent = "Shop Now";
    shopBtn.onclick = () => window.location.href = post.shopLink;

    buttons.appendChild(readMoreBtn);
    buttons.appendChild(shopBtn);

    content.appendChild(title);
    content.appendChild(excerpt);
    content.appendChild(buttons);

    card.appendChild(imageContainer);
    card.appendChild(content);

    grid.appendChild(card);
  });

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
  
 