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
  title: "2025 Streetwear Trends That Actually Matter (No Hypebeast Nonsense)",
  excerpt: "Cut through the hype with 7 wearable 2025 streetwear trends - from luxury gorpcore to anti-fit denim. Real-world styling tips + what to skip.",
  image: "../images/streetwear-images/womensstyle.jpg",
  readMore: "../trending/2025-streetwear-trends.html",
  shopLink: "../category/streetwear-shop.html"
},
{
  title: "How to Wear Pink Jeans Without Looking Basic: 2025's Smartest Styling Hacks",
  excerpt: "Master 5 sophisticated ways to style pink jeans with exact color formulas and texture combinations.",
  image: "../images/streetwear-images/pinkwears.jpg",
  readMore: "../trending/pink-jeans-outfits.html",
  shopLink: "../category/streetwear-shop.html"
},
{
  title: "Baggy Jeans Are Back: How to Style Them Without Looking Sloppy",
  excerpt: "Baggy jeans are trending hard in 2025 — here are 7 polished outfit combos that balance comfort and edge without looking messy.",
  image: "../images/streetwear-images/baggy-jeans-hero.jpg",
  readMore: "../trending/baggy-jeans-style-guide.html",
  shopLink: "../category/streetwear-shop.html"
},
{
  title: "Skinny Jeans Aren’t Dead: 7 2025-Ready Ways to Style Them",
  excerpt: "From streetwear to smart casual, these 7 outfit formulas prove skinny jeans are still fire in 2025 — without looking outdated.",
  image: "../images/streetwear-images/skinny-jeans-hero.jpg",
  readMore: "../trending/skinny-jeans-style-guide.html",
  shopLink: "../category/streetwear-shop.html"
},
 {
  title: "Why Powder Blue Is the New Neutral: A Fresh Take on Everyday Style in 2025",
  excerpt: "Discover how powder blue became 2025’s softest streetwear essential—plus 8 ways to wear it like a modern neutral.",
  image: "../images/streetwear-images/powder-blue-hero.jpg",
  readMore: "../trending/powder-blue-style-guide.html",
  shopLink: "../category/streetwear-shop.html"
},
{
  title: "10 Chic 2-Piece Outfits Every Woman Should Try in 2025",
  excerpt: "Step up your style game in 2025 with 10 chic 2-piece outfits every woman should own. From casual streetwear to classy sets, these looks are unmissable.",
  image: "../images/streetwear-images/2piece-outfits-ft.jpg",
  readMore: "../trending/10-chic-2piece-outfits-women-2025.html",
  shopLink: "../category/streetwear-shop.html"
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
  
 