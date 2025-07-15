document.addEventListener("DOMContentLoaded", () => {
  const blogPosts = [
    {
      title: "Pretty in Pink Power Suits",
      excerpt:
        "Make a bold statement with our curated pink suit collection. Double-breasted elegance meets confident femininity in styles perfect for work and weekends.",
      image: "https://trenddaily.shop/images/formalwear-images/pink-power-suit1.jpg",
      readMore: "trending/pretty-pink-suits.html",
      shopLink: "shop.html"
    },
    {
      title: "Black Gowns: Elegant, Sexy, and Classy",
      excerpt:
        "Discover the timeless allure of women’s black gowns — flattering for all body types, perfect for every occasion, and always on trend.",
      image: "https://trenddaily.shop/images/formalwear-images/blackgowns-1.jpg",
      readMore: "trending/black-gown-style.html",
      shopLink: "shop.html"
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
  
  
