document.addEventListener("DOMContentLoaded",()=>{
    // Hide preloader after everything is fully loaded
const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.4s ease';
    
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 400); // Allow fade out before removing
    
})
// productData.js
const allProducts = [
 {
    title: "Streetwear",
    category: "Streetwear",
    image: "images/ft-img/streetwear-ftimg.jpg",
    blurImage: "images/ft-img/streetwear-blur.jpg",
    trendsUrl: "trending/streetwear-trends.html",
  shopUrl: "category/streetwear-shop.html"
  },
  {
    title: "Formal Wear",
    category: "Formal wear",
    image: "images/ft-img/formalwear-ftimg.jpg",
    blurImage: "images/ft-img/formalwear-blur.jpg",
    trendsUrl: "trending/formalwear-trends.html",
    shopUrl: "category/formal-wear-shop.html"
      },
  {
    title: "Sneakers",
    category: "Sneakers",
    image: "images/ft-img/sneakers-ftimg.jpg",
    blurImage: "images/ft-img/sneakers-blur.jpg",
        trendsUrl: "trending/sneakers-trends.html",
    shopUrl: "category/sneakers-shop.html"
  },
  {
    title: "Trendy Bags",
    category: "Trendy Bags",
    image: "images/ft-img/trendybags-ftimg.jpg",
    blurImage: "images/ft-img/trendybags-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
  {
    title: "Y2K Fashion",
    category: "Streetwear",
    image: "images/ft-img/y2k.jpg",
    blurImage: "images/ft-img/streetwear-blur.jpg",
        trendsUrl: "trending/streetwear-trends.html",
    shopUrl: "category/streetwear-shop.html"
  },
  {
    title: "Y2K Fashion",
    category: "Streetwear",
    image: "images/ft-img/y2k.jpg",
    blurImage: "images/ft-img/streetwear-blur.jpg",
        trendsUrl: "trending/streetwear-trends.html",
    shopUrl: "category/streetwear-shop.html"
  },
  {
    title: "Y2K Fashion",
    category: "Streetwear",
    image: "images/ft-img/y2k.jpg",
    blurImage: "images/ft-img/streetwear-blur.jpg",
        trendsUrl: "trending/streetwear-trends.html",
    shopUrl: "category/streetwear-shop.html"
  },
  {
    title: "Christian Dior",
    category:"Christian Dior Bags and Purses",
    image: "images/bag-images/dior-bag-1.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/trending-bags.html",
  shopUrl: "category/bags-shop.html"
  },
  {
    title: "Luis Vuitton",
    category:"Luis Vuitton Bags and Purses",
    image: "images/bag-images/luis-vuitton-bag-1.jpg",
    blurImage: "images/luis-vuitton-bag-1-blur.jpg",
    trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
      },
  {
    title: "Sleek BTS Bags",
     category:"Luis Vuitton Bags BTS Bags and Purses",
    image: "images/bag-images/luis-vuitton-bag-2.jpg",
    blurImage: "images/bag-images/luis-vuitton-bag-2-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
  {
    title: "Black Bags",
    category:"Luis Vuitton Bags BTS Bags Black Bags and Purses",
    image: "images/bag-images/black-bag-1.jpg",
    blurImage: "images/bag-images/black-bag-1-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
  {
    title: "Small Purses",
    category: "Purses White Black",
    image: "images/bag-images/small-bag-1.jpg",
    blurImage: "images/ft-img/streetwear-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
  {
    title: "Y2K Fashion",
    category: "Purses White Black",
    image: "images/bag-images/luis-v-3.jpg",
    blurImage: "images/bag-images/luis-v-3-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
  {
    title: "Y2K Fashion",
    category: "Purses White Black",
    image: "images/y2k.jpg",
    blurImage: "images/streetwear-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
  {
    title: "Luis Vuitton bags",
    category: "bags luis Vuitton bags purses",
    image: "images/bag-images/luis-v-3.jpg",
    blurImage: "images/bag-images/luis-v-3-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
  {
    title: "Black Bags",
    category: "bags black bags luis vuitton bags",
    image: "images/bag-images/black-bag-2.jpg",
    blurImage: "images/streetwear-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
 {
    title: "Blue Bags",
    category: "bags blue bags blue purses",
    image: "images/bag-images/lightbluebag.jpg",
    blurImage: "images/bag-images/dior-bag-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
  {
    title: "Brown Bags",
    category: "Brown Bags cool bags women bags",
    image: "images/bag-images/brown-bag-2.jpg",
    blurImage: "images/bag-images/luis-v-3-blur.jpg",
        trendsUrl: "trending/trending-bags.html",
    shopUrl: "category/bags-shop.html"
  },
  {
    title: "Brown wears",
    category: "Cargo pants brown cargo streetwear",
    image: "images/streetwear-images/browncargo.jpg",
    blurImage: "../images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/streetwear-trends.html",
  shopUrl: "category/streetwear-shop.html"
  },
{
    title: "Jeans for Women",
    category: "Womens jeans women jeans",
    image: "images/streetwear-images/womensjeans.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/streetwear-trends.html",
  shopUrl: "category/streetwear-shop.html"
  },
  {
    title: "Pink Wears",
    category: "Pink Wears Pink Clothes Top Pink Top Pink Jeans Pink Cargo",
    image: "images/streetwear-images/pinkwears.jpg",
    blurImage: "images/ft-img/streetwear-blur.jpg",
    trendsUrl: "trending/streetwear-trends.html",
  shopUrl: "category/streetwear-shop.html"
  },
  {
    title: "Sky Blue Wears",
    category: "sky blue wears blue wears blue clothes",
    image: "images/streetwear-images/skybluewears.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/streetwear-trends.html",
  shopUrl: "category/streetwear-shop.html"
  },
  {
    title: "Women\'s Style",
    category: "womens style clothes wears",
    image: "images/streetwear-images/womensstyle.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/streetwear-trends.html",
  shopUrl: "category/streetwear-shop.html"
  },
  {
    title: "Men\'s Jeans",
    category: "Mens jeans jeans clothes wears",
    image: "images/streetwear-images/mensjeans.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/streetwear-trends.html",
  shopUrl: "category/streetwear-shop.html"
  },
   {
    title: "Pink Sneakers",
    category: "sneakers pink sneakers canvas",
    image: "images/sneakers-images/pinksneakers.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "category/sneakers-shop.html",
  shopUrl: "category/sneakers-shop.html"
  },
   {
    title: "Quality Sneakers",
    category: "sneakers pink sneakers canvas quality sneakers",
    image: "images/sneakers-images/sneakers-2.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/sneakers-trends.html",
  shopUrl: "category/sneakers-shop.html"
  },
   {
    title: "Top Fashion Sneakers",
    category: "sneakers pink sneakers canvas fashion sneakers",
    image: "images/sneakers-images/sneakers-3.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/sneakers-trends.html",
  shopUrl: "category/sneakers-shop.html"
  },
  {
    title: "Trending Sneakers",
    category: "sneakers pink sneakers canvas trending sneakers",
    image: "images/sneakers-images/sneakers-5.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/sneakers-trends.html",
  shopUrl: "category/sneakers-shop.html"
  },
  {
    title: "Trending Sneakers",
    category: "sneakers blue sneakers canvas",
    image: "images/sneakers-images/sneakers-6.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/sneakers-trends.html",
  shopUrl: "category/sneakers-shop.html"
  },
   {
    title: "Trending Sneakers",
    category: "sneakers brown sneakers trending canvas",
    image: "images/sneakers-images/sneakers-7.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/sneakers-trends.html",
  shopUrl: "category/sneakers-shop.html"
  },
   {
    title: "Multi-colour Sneakers",
    category: "sneakers white and red sneakers white sneakers red sneakers canvas",
    image: "images/sneakers-images/whiteandredsneakers.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/sneakers-trends.html",
  shopUrl: "category/sneakers-shop.html"
  },
   {
    title: "White Sneakers",
    category: "sneakers white sneakers canvas",
    image: "images/sneakers-images/whitesneakers.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/sneakers-trends.html",
  shopUrl: "category/sneakers-shop.html"
  },
  {
    title: "White Sneakers",
    category: "sneakers white sneakers canvas",
    image: "images/sneakers-images/whitesneakers-2.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/sneakers-trends.html",
  shopUrl: "category/sneakers-shop.html"
  },
  {
    title: "Black Gowns",
    category: "gowns black gowns women gowns",
    image: "images/formalwear-images/blackgowns-1.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/formalwear-trends.html",
  shopUrl: "category/formal-wear-shop.html"
  },
   {
    title: "Trending Gowns",
    category: "gowns milk color gowns women gowns",
    image: "images/formalwear-images/gowns-1.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/formalwear-trends.html",
  shopUrl: "category/formal-wear-shop.html"
  },
   {
    title: "Pink Suits",
    category: " mens suits pink",
    image: "images/formalwear-images/pinksuits-1.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/formalwear-trends.html",
  shopUrl: "category/formal-wear-shop.html"
  },
   {
    title: "Red Suits",
    category: "Red suits men suits",
    image: "images/formalwear-images/redsuits-1.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/formalwear-trends.html",
  shopUrl: "category/formal-wear-shop.html"
  },
  {
    title: "Women Corporate Wears",
    category: "Corporate wears women corporate elegant women corporate",
    image: "images/formalwear-images/womencorporate-2.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/formalwear-trends.html",
  shopUrl: "category/formal-wear-shop.html"
  },
  {
    title: "Women Corporate Wears (Elegant)",
    category: "corporate wears women corporate elegant women corporate wears",
    image: "images/formalwear-images/womencorporate-3-1.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/formalwear-trends.html",
  shopUrl: "category/formal-wear-shop.html"
  },
  {
    title: "Women Corporate Wears (Stylish)",
    category: "Corporate wears women corporate sexy stylish women corporate wears",
    image: "images/formalwear-images/womencorporate-3.jpg",
    blurImage: "images/bag-images/dior-bag1-blur.jpg",
    trendsUrl: "trending/formalwear-trends.html",
  shopUrl: "category/formal-wear-shop.html"
  },
  // Add more categories here
];

document.addEventListener("DOMContentLoaded", () => {
// search.js

  const params = new URLSearchParams(window.location.search);
  const query = params.get("q")?.toLowerCase() || "";
  const resultsGrid = document.getElementById("categoryGrid");
  const header = document.getElementById("resultHeader");

  const matched = allProducts.filter(product =>
    product.title.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  if (matched.length === 0) {
    header.innerText = `No results found for "${query}"`;
  } else {
    header.innerText = `Results for "${query}"`;
    matched.forEach(cat => {
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

      resultsGrid.appendChild(card);
    });
  }
  
  /* Trending Search Results */
  const blogPosts = [
   {
  title: "2025 Streetwear Trends That Actually Matter (No Hypebeast Nonsense)",
  excerpt: "Cut through the hype with 7 wearable 2025 streetwear trends - from luxury gorpcore to anti-fit denim. Real-world styling tips + what to skip.",
  category: "2025 streetwear trends, gorpcore fashion, anti-fit denim, officecore style, sustainable streetwear, quiet luxury streetwear,fashion trends, trending outfits, viral fashion, affiliate shopping, daily fashion updates, style inspiration, shop the look ",
  image: "images/streetwear-images/womensstyle.jpg",
  readMore: "trending/2025-streetwear-trends.html",
  shopLink: "category/streetwear-shop.html"
},
{
  title: "How to Wear Pink Jeans Without Looking Basic: 2025's Smartest Styling Hacks",
  excerpt: "Master 5 sophisticated ways to style pink jeans with exact color formulas and texture combinations.",
  category: " ",
  image: "images/streetwear-images/pinkwears.jpg",
  readMore: "trending/pink-jeans-outfits.html",
  shopLink: "category/streetwear-shop.html"
},
{
  title: "Baggy Jeans Are Back: How to Style Them Without Looking Sloppy",
  excerpt: "Baggy jeans are trending hard in 2025 — here are 7 polished outfit combos that balance comfort and edge without looking messy.",
  category: " ",
  image: "images/streetwear-images/baggy-jeans-hero.jpg",
  readMore: "trending/baggy-jeans-style-guide.html",
  shopLink: "category/streetwear-shop.html"
},
{
  title: "Skinny Jeans Aren’t Dead: 7 2025-Ready Ways to Style Them",
  excerpt: "From streetwear to smart casual, these 7 outfit formulas prove skinny jeans are still fire in 2025 — without looking outdated.",
  category: " ",
  image: "images/streetwear-images/skinny-jeans-hero.jpg",
  readMore: "trending/skinny-jeans-style-guide.html",
  shopLink: "category/streetwear-shop.html"
},
 {
  title: "Why Powder Blue Is the New Neutral: A Fresh Take on Everyday Style in 2025",
  excerpt: "Discover how powder blue became 2025’s softest streetwear essential—plus 8 ways to wear it like a modern neutral.",
  category: " ",
  image: "images/streetwear-images/powder-blue-hero.jpg",
  readMore: "trending/powder-blue-style-guide.html",
  shopLink: "category/streetwear-shop.html"
},
    {
  title: "How to Style a Black Tote Bag: 7 Elevated Outfit Ideas for 2025",
  excerpt: "From streetwear to office-ready looks, discover 7 polished outfit formulas that prove the black tote is the ultimate fashion essential in 2025.",
  category: " ",
  image: "images/bag-images/black-tote-hero.jpg",
  readMore: "trending/black-tote-bag-style.html",
  shopLink: "category/bags-shop.html"
},
{
  title: "5 Streetwear Crossbody Looks That Actually Work for Guys",
  excerpt: "Master the art of crossbody bag styling with 5 clean streetwear formulas guys can actually pull off in 2025.",
  category: " ",
  image: "images/bag-images/crossbody-hero.jpg",
  readMore: "trending/5-streetwear-crossbody-looks-for-guys.html",
  shopLink: "category/bags-shop.html"
},
 {
      title: "Pretty in Pink Power Suits",
      excerpt:
        "Make a bold statement with our curated pink suit collection. Double-breasted elegance meets confident femininity in styles perfect for work and weekends.",
        category: " ",
      image: "images/formalwear-images/pink-power-suit1.jpg",
      readMore: "trending/pretty-pink-suits.html",
      shopLink: "category/formal-wear-shop.html"
    },
    {
      title: "Black Gowns: Elegant, Sexy, and Classy",
      excerpt:
        "Discover the timeless allure of women’s black gowns — flattering for all body types, perfect for every occasion, and always on trend.",
        category: " ",
      image: "images/formalwear-images/blackgowns-1.jpg",
      readMore: "trending/womens-black-gowns.html",
      shopLink: "category/formal-wear-shop.html"
    },
    {
      title: "Red Suits for Formal Events: Stylish not Loud",
      excerpt:
        "A red suit commands attention—but at a formal event, the key is sophistication, not shock value. Learn how to wear one with polish, not pizzazz, for weddings, galas, and black-tie affairs.",
        category: " ",
      image: "images/formalwear-images/redsuits-1.jpg",
      readMore: "trending/red-suits.html",
      shopLink: "category/formal-wear-shop.html"
    },
    {
      title: "From Desk to Dinner: 5 Transitional Work Outfits For Women",
      excerpt:
        "5 seamless work-to-evening outfit transitions with pro styling tips. Master desk-to-dinner dressing with blazers, wraps & monochrome looks.",
        category: " ",
      image: "images/formalwear-images/womencorporate-2.jpg",
      readMore: "trending/desk-to-dinner-outfits.html",
      shopLink: "category/formal-wear-shop.html"
    },
    {
  title: "5 Suits Every Man Needs: Build a Power Wardrobe That Never Quits",
  excerpt: "The only 5 suits your professional wardrobe requires—from interview-ready navy to versatile charcoal. Expert styling tips for career success.",
  category: " ",
  image: "images/formalwear-images/suit-collage.jpg",
  readMore: "trending/5-suits-every-man-needs.html",
  shopLink: "category/formal-wear-shop.html"
},
    // Add more posts as needed
  ];

  const grid = document.getElementById("categoryGrid2");
  
/* Search for trending posts start */
 const header2 = document.getElementById("resultHeader2");

  const blogMatch = blogPosts.filter(blog =>
    blog.title.toLowerCase().includes(query) ||
    blog.excerpt.toLowerCase().includes(query)
  );

  if (blogMatch.length === 0) {
    header2.innerText = `No Trending Posts results found for "${query}"`;
  } else {
    header2.innerText = `Trending Posts Results for "${query}"`;
 }
  
  /* Search For Trending Posts End */
  
  blogMatch.forEach(post => {
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
 /* Trending posts end */
 /* Shop Products */
 const formalProducts = [
   {
      title: "BagSmart Tote Bag For Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag1.jpg",
      price: "$16.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote Bag (BagSmart) for Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag2.jpg",
      price:`<s>$48.99</s> ` + "$16.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Leather Laptop Bag for Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag3.jpg",
      price: `<s>$33.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Sleek Portable Black Tote (Women)",
      image: "images/bag-images/trenddaily-female-black-tote-bag4.jpg",
      price: `<s>$28.99</s> ` + "$19.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Montana West Tote Bag For Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag5.jpg",
      price: `<s>$18.99</s> ` + "$16.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Lovevook Black Tote Bag For Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag6.jpg",
      price: `<s>$48.99</s> ` + "$24.79",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Leather Laptop Bag for Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag7.jpg",
      price:`<s>$48.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Genuine Leather Tote Bag",
      image: "images/bag-images/trenddaily-female-black-tote-bag8.jpg",
      price: `<s>$28.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Marc Jacobs Tote Bag for Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag9.jpg",
      price: `<s>$28.99</s> ` + "$16.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Leather Tote bag Formal(For Women)",
      image: "images/bag-images/trenddaily-female-black-tote-bag10.jpg",
      price: `<s>$28.99</s> ` + "$16.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Genuine Leather Black Tote Bag for Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag11.jpg",
      price: `<s>$28.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Tote Bags For Women Canvas with Mini Purse",
      image: "images/bag-images/trenddaily-female-black-tote-bag12.jpg",
      price: `<s>$23.99</s> ` + "$19.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Leather Black Tote for Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag13.jpg",
      price: `<s>$48.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote bag For Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag14.jpg",
      price: `<s>$48.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote bag (Leather for Women)",
      image: "images/bag-images/trenddaily-female-black-tote-bag15.jpg",
      price:`<s>$28.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote bag (Leather) for Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag16.jpg",
      price: `<s>$28.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "TOP Design Heavy Duty Canvas Tote Bag for Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag17.jpg",
      price: `<s>$48.99</s> ` + "$22.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Pink Nishell Travel Puffy Tote bag (best for Travelling)",
      image: "images/bag-images/trenddaily-female-black-tote-bag18.jpg",
      price: `<s>$51.99</s> ` + "$36.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Top Design Puffer Tote Bag (For Women)",
      image: "images/bag-images/trenddaily-female-black-tote-bag19.jpg",
      price: `<s>$28.99</s> ` + "$23.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "BagSmart Tote Bag for Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag20.jpg",
      price: `<s>$28.99</s> ` + "$22.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Canvas Tote Bag for Women",
      image: "images/bag-images/trenddaily-female-black-tote-bag21.jpg",
      price: `<s>$28.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
    
  ];
 /* Products on Search */
 
 const header3 = document.getElementById("resultHeader3");

  const shopMatch = formalProducts.filter(prod_res =>
    prod_res.title.toLowerCase().includes(query) ||
    prod_res.price.toLowerCase().includes(query)
  );

  if (blogMatch.length === 0) {
    header3.innerText = `No Products results found for "${query}"`;
  } else {
    header3.innerText = `Products Results for "${query}"`;
 }
 
 const grid3 = document.getElementById("categoryGrid3");

  formalProducts.forEach((prod, index) => {
    const card = document.createElement("div");
    card.classList.add("card3");

    card.innerHTML = `
      <div class="image-zoom-wrapper">
        <div class="loader3"></div>
        <img class="zoom-image" src="${prod.image}" alt="${prod.title}" style="display: none;" />
      </div>
      <div class="card3-body">
        <h3 class="card3-title">${prod.title}</h3>
        <p class="price">${prod.price}</p>
        <button onclick="window.location.href='${prod.shopUrl}'">Shop Now</button>
      </div>
    `;

    grid.appendChild(card);

    const img = card.querySelector("img");
    const loader = card.querySelector(".loader3");

    img.onload = () => {
      loader.style.display = "none";
      img.style.display = "block";
    };
  });
 
 /* Products on Search End */
  
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
  // Lazy loading using IntersectionObserver
  
});

