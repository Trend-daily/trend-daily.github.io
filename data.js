document.addEventListener("DOMContentLoaded",()=>{
    // Hide preloader after everything is fully loaded
const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.4s ease';
    
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 400); // Allow fade out before removing

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

//Carousel JS
const products = [
      { 
      title: 'Low Rise Striped Pants (For Women)', price: '$45.00', 
      img: 'images/streetwear-images/low-rise-striped-pants-for-women.jpg',
      shop: 'https://amzn.to/4fc31bE'
      
      },
      { 
      title: 'Lentta Womens Athletic Sleeveless Mini Dress with Built-in Shorts', 
      price: '$47.98', 
      img: 'images/streetwear-images/trenddaily-female3.jpg',
      shop:'https://amzn.to/45ccStq'
      },
      { 
      title: '3 Piece Tuxedo for Men Slim Fit Suit for Men Wedding Homecoming Tux Blazer Vest Pants with Bow Tie', 
      price: '$75.99', 
      img: 'images/formalwear-images/red-tuxedo.jpg',
      shop:'https://amzn.to/4ofrlxp'
       },
      {
      title: 'Womens Tank Tops Summer T Shirts Sleeveless Casual Loose Tunic Blouses',
      price: '$11.00', 
      img: 'images/streetwear-images/trenddaily-female2.jpg',
      shop:'https://amzn.to/4l3nlgC'
      },
      { 
       title: 'Joomra Whitin Men\'s Supportive Running Shoes Cushioned Athletic Sneakers', 
       price: '$39.99',
       img: 'images/sneakers-images/red-running-sneakers.jpg',
       shop:'https://amzn.to/4fd5Idf'
        },
    ];

    const carousel = document.getElementById('carousel');
    const cardWidth = 270; // including margin
    let currentIndex = 0;

    // Dynamically render cards
    function renderCards() {
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card-pr';
        card.innerHTML = `
          <img src="${product.img}" alt="${product.title}">
          <div class="info">
            <div class="title">${product.title}</div>
            <div class="price">${product.price}</div>
            <button onclick="window.location.href='${product.shop}'">Shop Now</button>
          </div>
        `;
        carousel.appendChild(card);
      });
    }

    // Scroll carousel
    function scrollCarousel(direction) {
      currentIndex = (currentIndex + direction + products.length) % products.length;
      const scrollX = currentIndex * cardWidth;
      carousel.scrollTo({ left: scrollX, behavior: 'smooth' });
    }

    // Auto slide every 4 seconds
    setInterval(() => {
      scrollCarousel(1);
    }, 4000);

    // Event listeners
    document.getElementById('prevBtn').addEventListener('click', () => scrollCarousel(-1));
    document.getElementById('nextBtn').addEventListener('click', () => scrollCarousel(1));

    // Initialize
    renderCards();
    scrollCarousel(0); // center first card
    
    //Carousel JS Ends
    
    
    
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
  
  