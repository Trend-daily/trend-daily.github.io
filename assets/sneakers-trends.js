document.addEventListener("DOMContentLoaded",()=>{
    

// data.js
const fashionCategories = [
    {
    title: "Pink Sneakers",
    category: "sneakers pink sneakers canvas",
    image: "../images/sneakers-images/pinksneakers.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/sneakers-shop.html"
  },
   {
    title: "Quality Sneakers",
    category: "sneakers pink sneakers canvas quality sneakers",
    image: "../images/sneakers-images/sneakers-2.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/sneakers-shop.html"
  },
   {
    title: "Top Fashion Sneakers",
    category: "sneakers pink sneakers canvas fashion sneakers",
    image: "../images/sneakers-images/sneakers-3.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/sneakers-shop.html"
  },
  {
    title: "Trending Sneakers",
    category: "sneakers pink sneakers canvas trending sneakers",
    image: "../images/sneakers-images/sneakers-5.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/sneakers-shop.html"
  },
  {
    title: "Trending Sneakers",
    category: "sneakers blue sneakers canvas",
    image: "../images/sneakers-images/sneakers-6.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/sneakers-shop.html"
  },
   {
    title: "Trending Sneakers",
    category: "sneakers brown sneakers trending canvas",
    image: "../images/sneakers-images/sneakers-7.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/sneakers-shop.html"
  },
   {
    title: "Multi-colour Sneakers",
    category: "sneakers white and red sneakers white sneakers red sneakers canvas",
    image: "../images/sneakers-images/whiteandredsneakers.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/sneakers-shop.html"
  },
   {
    title: "White Sneakers",
    category: "sneakers white sneakers canvas",
    image: "../images/sneakers-images/whitesneakers.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/sneakers-shop.html"
  },
  {
    title: "White Sneakers",
    category: "sneakers white sneakers canvas",
    image: "../images/sneakers-images/whitesneakers-2.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/sneakers-shop.html"
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
      <button onclick="window.location.href='${cat.trendsUrl}'">Browse Trends</button>
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
  
  })
  
