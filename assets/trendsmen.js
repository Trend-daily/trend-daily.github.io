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
  title: "Best Winter Hair Care Tips for Braided Hairstyles",
  excerpt: "Protect your braids this winter with expert hair care tips. Learn how to prevent dryness, frizz, and breakage while keeping your braided hairstyles healthy and stylish in cold weather.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/whc.jpg",
  readMore: "https://trenddaily.shop/td925/winter-hair-care-tips",
  shopLink: "../category/streetwear-shop.html"
},
    {
      title: "Red Suits for Formal Events: Stylish not Loud",
      excerpt:
        "A red suit commands attention—but at a formal event, the key is sophistication, not shock value. Learn how to wear one with polish, not pizzazz, for weddings, galas, and black-tie affairs.",
      image: "../images/formalwear-images/redsuits-1.jpg",
      readMore: "../trending/red-suits.html",
      shopLink: "../category/formal-wear-shop.html"
    },
    {
  title: "5 Suits Every Man Needs: Build a Power Wardrobe That Never Quits",
  excerpt: "The only 5 suits your professional wardrobe requires—from interview-ready navy to versatile charcoal. Expert styling tips for career success.",
  image: "../images/formalwear-images/suit-collage.jpg",
  readMore: "../trending/5-suits-every-man-needs.html",
  shopLink: "../category/formal-wear-shop.html"
},
   {
  title: "The 2025 Suit Capsule: 5 Must-Own Suits for Every Man",
  excerpt: "Want to stand out in 2025? These are the 5 suits every man must own this year—timeless fits that guarantee sharp style for work, weddings, and beyond.",
  image: "../images/formalwear-images/mens_five_suits-ft.jpg",
  readMore: "../trending/top-5-suits-every-man-should-own-2025.html",
  shopLink: "../category/formal-wear-shop.html"
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
  title: "15 Stylish 2-Piece Crochet Outfits for Men in 2025",
  excerpt: "Discover 15 stylish 2-piece crochet outfits for men in 2025, perfect for festivals, beach trips, and upscale events. From relaxed co-ords to tailored sets, find versatile looks with styling tips to elevate your wardrobe. Pin your favorites!",
  image: "../images/streetwear-images/2-piece-mcrotchet-ft.jpg",
  readMore: "../trending/15-stylish-2-piece-crochet-outfits-for-men-2025.html",
  shopLink: "../category/streetwear-shop.html"
},
    // Add more posts as needed
  ];

  const grid = document.getElementById("categoryGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  let postsPerLoad = 20;  // initial batch size
  let loadIncrement = 5; // posts per "Load More"
  let currentIndex = 0;

  // Reusable render function
  function renderPosts(start, end) {
    const slice = blogPosts.slice(start, end);
    slice.forEach(post => {
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

      // Fade-in effect
      img.addEventListener("load", () => {
        loader.style.display = "none";
        img.style.display = "block";
        img.classList.add("fade-in");
      });

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
  }

  // Initial render
  renderPosts(currentIndex, currentIndex + postsPerLoad);
  currentIndex += postsPerLoad;

  // Load more posts on button click
  loadMoreBtn.addEventListener("click", () => {
    renderPosts(currentIndex, currentIndex + loadIncrement);
    currentIndex += loadIncrement;

    if (currentIndex >= blogPosts.length) {
      loadMoreBtn.style.display = "none"; // hide button when done
    }
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
  
  
  