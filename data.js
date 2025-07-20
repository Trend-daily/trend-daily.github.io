document.addEventListener("DOMContentLoaded",()=>{
    

// data.js
const fashionCategories = [
  {
    title: "Streetwear",
    image: "images/ft-img/streetwear-ftimg.jpg",
    blurImage: "images/ft-img/streetwear-blur.jpg",
    trendsUrl: "trending/streetwear-trends.html",
  shopUrl: "category/streetwear-shop.html"
  },
  {
    title: "Formal Wear",
    image: "images/ft-img/formalwear-ftimg.jpg",
    blurImage: "images/ft-img/formalwear-blur.jpg",
    trendsUrl: "trending/formalwear-trends.html",
    shopUrl: "category/formal-wear-shop.html"
      },
  {
    title: "Sneakers",
    image: "images/ft-img/sneakers-ftimg.jpg",
    blurImage: "images/ft-img/sneakers-blur.jpg",
        trendsUrl: "trending/sneakers-trends.html",
    shopUrl: "category/sneakers-shop.html"
  },
  {
    title: "Trendy Bags",
    image: "images/ft-img/trendybags-ftimg.jpg",
    blurImage: "images/ft-img/trendybags-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
  // Add more categories here
];
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
const grid = document.getElementById("categoryGrid");

fashionCategories.forEach(cat => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
  <div class="image-wrapper">
    <img class="placeholder" src="${cat.blurImage}" alt="${cat.title}" />
    <img class="full-image" data-src="${cat.image}" alt="${cat.title}" />
  </div>
  <div class="card-body">
    <h3 class="card-title">${cat.title}</h3>
    <div class="card-buttons">
      <button onclick="window.location.href='${cat.trendsUrl}'">Trending</button>
      <button onclick="window.location.href='${cat.shopUrl}'">Shop Now</button>
    </div>
  </div>
`;

  grid.appendChild(card);
});


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
  // Lazy loading using IntersectionObserver
  
  })
  
  // Hide preloader after everything is fully loaded
  window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.4s ease';
    
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 400); // Allow fade out before removing
  });
  
  
