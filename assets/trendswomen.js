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
  title: "Curly Hair Queens: Defining Cuts and Styles for Every Curl Type",
  excerpt: "Discover the best haircuts and styles for every curl type in our guide for curly hair queens. From loose waves to tight coils, learn how to embrace and define your natural curls beautifully",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/cl-sft.jpg",
  readMore: "https://trenddaily.shop/trending/curly-women-hairstyles",
  shopLink: "../category/streetwear-shop.html"
},
  {
  title: "Women Hairstyles That Make You Look Younger Instantly!",
  excerpt: "Want to look 10 years younger? here are some women hairstyles that atleast won't make you look soo old. Every Woman deserves a glow and sparkle!",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td825/wh-sft.jpg",
  readMore: "https://trenddaily.shop/trending/women-hairstyles",
  shopLink: "../category/streetwear-shop.html"
},
  {
  title: "40 Best Nail Inspos You Should Try in 2025",
  excerpt: "Check out the hottest, trending, Nail Inspos this season! spice up your looks, look sleek not mid. Ready to make the big impression?",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td825/nl-ift.jpg",
  readMore: "https://trenddaily.shop/trending/nail-inspos",
  shopLink: "../category/streetwear-shop.html"
},
  {
  title: "10 Bob Hairstyle Trends to Make You Stand Out in 2025",
  excerpt: "Bob hairstyles really do make an impression, sleek, simple yet very classy. Here are the best ways you can style them to match your fit and Stand out when you enter room, make that killer impression.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td825/bh-sft.jpg",
  readMore: "https://trenddaily.shop/trending/bob-hairstyles",
  shopLink: "../category/streetwear-shop.html"
},
  
  {
  title: "10 Ways to Rock Ankara Short Gowns Without Looking Like Everyone Else at the Party",
  excerpt: "Discover 10 stylish ways to rock Ankara short gowns without blending into the crowd. From bold prints to chic accessories, explore unique outfit ideas and fashion inspo that turn heads at any party!",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td825/IMG-20250825-WA0000.jpg",
  readMore: "https://trenddaily.shop/trending/ankara-gowns-style",
  shopLink: "../category/streetwear-shop.html"
},
{
  title: "15 Chic 2-Piece Crochet Outfits for Women in 2025",
  excerpt: "15 trendy women’s 2-piece crochet outfit ideas, from casual sets to chic vacation looks. Perfect style inspo for your next fashion upgrade!",
  image: "../images/streetwear-images/2-piece-crotchet-ft.jpg",
  readMore: "../trending/15-stunning-2-piece-crochet-outfits-for-women-2025.html",
  shopLink: "../category/streetwear-shop.html"
},

   {
  title: "10 Chic 2-Piece Outfits Every Woman Should Try in 2025",
  excerpt: "Step up your style game in 2025 with 10 chic 2-piece outfits every woman should own. From casual streetwear to classy sets, these looks are unmissable.",
  image: "../images/streetwear-images/2piece-outfits-ft.jpg",
  readMore: "../trending/10-chic-2piece-outfits-women-2025.html",
  shopLink: "../category/streetwear-shop.html"
},
{
  title: "8 of the Best ways to style a female tote bag casually",
  excerpt: "Explore 8 casual ways to style tote bags. Learn how to rock a black tote bag with everyday outfits and shop the best tote bag looks today.",
  image: "../images/bag-images/female_tote_bag_ft.jpg",
  readMore: "../trending/best-ways-to-style-female-tote-bag-casually.html",
  shopLink: "../category/bags-shop.html"
},
 {
      title: "From Desk to Dinner: 5 Transitional Work Outfits For Women",
      excerpt:
        "5 seamless work-to-evening outfit transitions with pro styling tips. Master desk-to-dinner dressing with blazers, wraps & monochrome looks.",
      image: "../images/formalwear-images/womencorporate-2.jpg",
      readMore: "../trending/desk-to-dinner-outfits.html",
      shopLink: "../category/formal-wear-shop.html"
    },
      {
      title: "Black Gowns: Elegant, Sexy, and Classy",
      excerpt:
        "Discover the timeless allure of women’s black gowns — flattering for all body types, perfect for every occasion, and always on trend.",
      image: "../images/formalwear-images/blackgowns-1.jpg",
      readMore: "../trending/womens-black-gowns.html",
      shopLink: "../category/formal-wear-shop.html"
    },
    {
      title: "Pretty in Pink Power Suits",
      excerpt:
        "Make a bold statement with our curated pink suit collection. Double-breasted elegance meets confident femininity in styles perfect for work and weekends.",
      image: "../images/formalwear-images/pink-power-suit1.jpg",
      readMore: "../trending/pretty-pink-suits.html",
      shopLink: "../category/formal-wear-shop.html"
    },
    {
  title: "How to Style a Black Tote Bag: 7 Elevated Outfit Ideas for 2025",
  excerpt: "From streetwear to office-ready looks, discover 7 polished outfit formulas that prove the black tote is the ultimate fashion essential in 2025.",
  image: "../images/bag-images/black-tote-hero.jpg",
  readMore: "../trending/black-tote-bag-style.html",
  shopLink: "../category/bags-shop.html"
},
 {
  title: "Why Powder Blue Is the New Neutral: A Fresh Take on Everyday Style in 2025",
  excerpt: "Discover how powder blue became 2025’s softest streetwear essential—plus 8 ways to wear it like a modern neutral.",
  image: "../images/streetwear-images/powder-blue-hero.jpg",
  readMore: "../trending/powder-blue-style-guide.html",
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
  title: "2025 Streetwear Trends That Actually Matter (No Hypebeast Nonsense)",
  excerpt: "Cut through the hype with 7 wearable 2025 streetwear trends - from luxury gorpcore to anti-fit denim. Real-world styling tips + what to skip.",
  image: "../images/streetwear-images/womensstyle.jpg",
  readMore: "../trending/2025-streetwear-trends.html",
  shopLink: "../category/streetwear-shop.html"
},
   
   

    // Add more posts as needed
  ];

  const grid = document.getElementById("categoryGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  let postsPerLoad = 4;  // initial batch size
  let loadIncrement = 2; // posts per "Load More"
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
  
  