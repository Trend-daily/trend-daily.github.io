document.addEventListener("DOMContentLoaded",()=>{
    

// data.js
const fashionCategories = [
  {
    title: "Christian Dior",
    category: "bags",
    image: "../images/bag-images/dior-bag-1.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/bags-shop.html"
  },
  {
    title: "Luis Vuitton",
    category: "bags",
    image: "../images/bag-images/luis-vuitton-bag-1.jpg",
    blurImage: "../images/luis-vuitton-bag-1-blur.jpg",
    trendsUrl: "#",
    shopUrl: "../category/bags-shop.html"
      },
  {
    title: "Sleek BTS Bags",
    category: "bags",
    image: "../images/bag-images/luis-vuitton-bag-2.jpg",
    blurImage: "../images/bag-images/luis-vuitton-bag-2-blur.jpg",
        trendsUrl: "#",
    shopUrl: "../category/bags-shop.html"
  },
  {
    title: "Black Bags",
    category: "bags",
    image: "../images/bag-images/black-bag-1.jpg",
    blurImage: "../images/bag-images/black-bag-1-blur.jpg",
        trendsUrl: "#",
    shopUrl: "../category/bags-shop.html"
  },
  {
    title: "Small Purses",
    category: "bags",
    image: "../images/bag-images/small-bag-1.jpg",
    blurImage: "../images/ft-img/streetwear-blur.jpg",
        trendsUrl: "#",
    shopUrl: "../category/bags-shop.html"
  },
  {
    title: "Luxury Bags",
    category: "bags",
    image: "../images/bag-images/luis-v-3.jpg",
    blurImage: "../images/bag-images/luis-v-3-blur.jpg",
        trendsUrl: "#",
    shopUrl: "../category/bags-shop.html"
  },
  {
    title: "Black Bags",
    category: "bags",
    image: "../images/bag-images/black-bag-2.jpg",
    blurImage: "../images/streetwear-blur.jpg",
        trendsUrl: "#",
    shopUrl: "../category/bags-shop.html"
  },
 {
    title: "Blue Bags",
    category: "bags",
    image: "../images/bag-images/lightbluebag.jpg",
    blurImage: "../images/bag-images/dior-bag-blur.jpg",
        trendsUrl: "#",
    shopUrl: "../category/bags-shop.html"
  },
  {
    title: "Brown Bags",
    category: "Brown Bags",
    image: "../images/bag-images/brown-bag-2.jpg",
    blurImage: "../images/bag-images/luis-v-3-blur.jpg",
        trendsUrl: "#",
    shopUrl: "../category/bags-shop.html"
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
  
  
