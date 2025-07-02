document.addEventListener("DOMContentLoaded",()=>{
    

// data.js
const fashionCategories = [
  {
    title: "Streetwear",
    image: "../images/ft-img/streetwear-ftimg.jpg",
    blurImage: "../images/ft-img/streetwear-blur.jpg",
    trendsUrl: "streetwear-trends.html",
  shopUrl: "../category/streetwear-shop.html"
  },
  {
    title: "Brown wears",
    category: "Cargo pants brown cargo streetwear",
    image: "../images/streetwear-images/browncargo.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/streetwear-shop.html"
  },
{
    title: "Jeans for Women",
    category: "Womens jeans women jeans",
    image: "../images/streetwear-images/womensjeans.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/streetwear-shop.html"
  },
  {
    title: "Pink Wears",
    category: "Pink Wears Pink Clothes Top Pink Top Pink Jeans Pink Cargo",
    image: "../images/streetwear-images/pinkwears.jpg",
    blurImage: "../images/ft-img/streetwear-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/streetwear-shop.html"
  },
  {
    title: "Sky Blue Wears",
    category: "sky blue wears blue wears blue clothes",
    image: "../images/streetwear-images/skybluewears.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/streetwear-shop.html"
  },
  {
    title: "Women\'s Style",
    category: "womens style clothes wears",
    image: "../images/streetwear-images/womensstyle.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/streetwear-shop.html"
  },
  {
    title: "Men\'s Jeans",
    category: "Mens jeans jeans clothes wears",
    image: "../images/streetwear-images/mensjeans.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "#",
  shopUrl: "../category/streetwear-shop.html"
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
  
  