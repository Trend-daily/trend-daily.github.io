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
  title: "10 Almond-Shaped Nail Ideas Perfect for November",
  date: "22 Oct 2025",
  excerpt: "Explore 10 stunning almond-shaped nail ideas perfect for November! From cozy fall hues to festive designs, these trendy manicures will elevate your autumn style with elegance and flair..",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/alnift.webp",
  readMore: "https://trenddaily.shop/td1025/10-almond-nail-ideas",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Fun Matching Outfit Ideas for Friends and Lovers",
  date: "22 Oct 2025",
  excerpt: "Discover 10 fun and stylish matching outfit ideas perfect for friends and couples! From casual twinning looks to coordinated date-night styles, get inspired to showcase your bond with these trendy, easy-to-pull-off outfits..",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/molft.webp",
  readMore: "https://trenddaily.shop/td1025/10-matching-outfits-lovers",
  shopLink: "../category/all-categories.html"
},
   {
  title: "15 Adorable November Baby Shower Aesthetic Ideas for Pinterest Lovers",
  date: "17 Oct 2025",
  excerpt: "Plan a picture-perfect November baby shower with these 15 adorable aesthetic ideas, featuring cozy fall vibes, seasonal colors, and Pinterest-worthy details for a memorable celebration.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/bsaft.webp",
  readMore: "https://trenddaily.shop/td1025/15-november-baby-shower-aesthetics",
  shopLink: "../category/all-categories.html"
},
   {
  title: "7 Elegant November Wedding Guest Looks for Women That Outshine the Season",
  date: "17 Oct 2025",
  excerpt: "Elevate your style with these 7 elegant November wedding guest looks for women, featuring rich fall hues, luxurious fabrics, and chic designs to shine all season long.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nwgft.webp",
  readMore: "https://trenddaily.shop/td1025/7-november-wedding-guest-looks-women",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Stunning November Wedding Themes For A Dreamy Fall Ceremony",
  date: "17 Oct 2025",
  excerpt: "Transform your November wedding into a dreamy fall ceremony with these 10 stunning themes, featuring rich autumn hues, cozy textures, and enchanting seasonal details.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nwtft.webp",
  readMore: "https://trenddaily.shop/td1025/10-november-wedding-themes",
  shopLink: "../category/all-categories.html"
},
  {
  title: "13 Stunning November Wedding Ideas for a Perfect Celebration",
  date: "17 Oct 2025",
  excerpt: "Plan a breathtaking November wedding with these 13 stunning ideas, blending seasonal charm, elegant décor, and cozy details for an unforgettable celebration.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nwift.webp",
  readMore: "https://trenddaily.shop/td1025/13-november-wedding-ideas",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 November Wedding Décor Ideas for a Rustic Autumn Vibe",
  date: "17 Oct 2025",
  excerpt: "Create a cozy, rustic autumn atmosphere with these 10 November wedding décor ideas, featuring warm colors, natural elements, and seasonal touches for a memorable celebration.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nwdft.webp",
  readMore: "https://trenddaily.shop/td1025/12-november-wedding-color-palettes",
  shopLink: "../category/all-categories.html"
},
   {
  title: "12 Chic November Wedding Color Palettes You’ll Fall in Love With",
  date: "16 Oct 2025",
  excerpt: "Find your perfect autumn inspiration with these 12 elegant November wedding color palettes. From rich burgundy to warm neutrals, create a timeless and romantic celebration.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nwcft.webp",
  readMore: "https://trenddaily.shop/td1025/10-november-wedding-decor-ideas",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Cozy November Baby Shower Themes Everyone Will Adore",
  date: "16 Oct 2025",
  excerpt: "Celebrate your little one's arrival with these charming November baby shower themes. From rustic harvest gatherings to woodland wonderlands, find the perfect cozy and seasonal inspiration.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/bstft.webp",
  readMore: "https://trenddaily.shop/td1025/10-november-baby-shower-themes",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Creative Baby Shower Guest Outfits Perfect for a Chilly November Day",
  date: "16 Oct 2025",
  excerpt: "Discover 10 stylish and cozy baby shower guest outfits perfect for a chilly November day. From layered looks to warm accessories, find inspiration for a chic, comfortable celebration.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nboft.webp",
  readMore: "https://trenddaily.shop/td1025/10-november-baby-shower-guest-outfits",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Adorable Baby Shower Decor Ideas for November Moms",
  date: "16 Oct 2025",
  excerpt: "10 charming baby shower decor ideas for November moms, featuring cozy fall themes and festive touches to celebrate your little one’s arrival!",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/bs-ift.webp",
  readMore: "https://trenddaily.shop/td1025/10-best-baby-shower-decor-ideas",
  shopLink: "../category/all-categories.html"
},
  {
  title: "12 Ways to Style Your Feed with a November Aesthetic Touch",
  date: "16 Oct 2025",
  excerpt: "Discover 12 November aesthetic feed ideas to elevate your social media! Cozy, seasonal vibes for stunning posts. 🍂✨ #AestheticInspo #NovemberVibes",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nfi-ft.jpg",
  readMore: "https://trenddaily.shop/td1025/12-november-aesthetic-feed",
  shopLink: "../category/all-categories.html"
},
   {
  title: "48 Of The Best DIY Halloween Makeup Ideas You Must Try This Season!",
  date: "14 Sep 2025",
  excerpt: "Discover 48 of the best DIY Halloween makeup ideas that are fun, spooky, and totally achievable. From creepy classics to glam-ghoul looks, get inspired to create unforgettable Halloween makeup this season—no sewing or pro skills required.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/hm-ift.jpg",
  readMore: "https://trenddaily.shop/td925/halloween-makeup-ideas",
  shopLink: "../category/all-categories.html"
},
   {
  title: "32 Spooky Yet Cute Halloween Hairstyles To Try This Year",
  date: "12 Sep 2025",
  excerpt: "Get inspired with 32 spooky yet cute Halloween hairstyles for 2025. Easy Halloween hair ideas you can recreate at home without stress.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/hal-hft.jpg",
  readMore: "https://trenddaily.shop/td925/halloween-women-hairstyles",
  shopLink: "../category/all-categories.html"
},
  {
  title: "28 Halloween Nail Art Designs You Can Do At Home",
  date: "12 Sep 2025",
  excerpt: "Discover 28 spooky yet stylish Halloween nail designs you can DIY at home — from creepy classics to playful pumpkins and chic gothic vibes.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/hn-aft.jpg",
  readMore: "https://trenddaily.shop/td925/halloween-nail-art",
  shopLink: "../category/all-categories.html"
},
   {
  title: "15 Last-Minute Halloween Costume Ideas for Women (No Sewing Required)",
  date: "12 Sep 2025",
  excerpt: "Here are some nice, creative last minute ideas for halloween costumes that you could put on and still steal the show!",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/hci-wft.jpg",
  readMore: "https://trenddaily.shop/td925/halloween-costume-ideas-women",
  shopLink: "../category/all-categories.html"
},
    {
  title: "Autumn Date Night Outfits for Women That Will Impress",
  date: "11 Sep 2025",
  excerpt: "Take a look at the best autumn date night outfits for women that blend comfort, style, and confidence. From chic blazers to cozy knits, romantic dresses, and polished classics, find the perfect fall look to impress on any occasion.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/ado-wft.jpg",
  readMore: "https://trenddaily.shop/td925/autumn-date-night-outfits",
  shopLink: "../category/all-categories.html"
},
  {
  title: "20 Chic Autumn Outfits for Women to Try This Season",
  date: "10 Sep 2025",
  excerpt: "Discover 20 chic autumn outfits for women that blend comfort, layering, and timeless style. From cozy knits to smart casual office looks, get inspired to upgrade your fall wardrobe with effortless seasonal pairings.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/ca-oft.jpg",
  readMore: "https://trenddaily.shop/td925/20-chic-autumn-outfits",
  shopLink: "../category/all-categories.html"
},
  {
  title: "Best Winter Hair Care Tips for Braided Hairstyles",
  date: "7 Sep 2025",
  excerpt: "Protect your braids this winter with expert hair care tips. Learn how to prevent dryness, frizz, and breakage while keeping your braided hairstyles healthy and stylish in cold weather.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/whc.jpg",
  readMore: "https://trenddaily.shop/td925/winter-hair-care-tips",
  shopLink: "../category/all-categories.html"
},
   {
  title: "Winter Hair Braid Ideas That Pair Perfectly with Beanies and Scarves",
  date: "7 Sep 2025",
  excerpt: "Discover winter hair braid ideas that pair perfectly with beanies and scarves. From low side braids to double Dutch styles, find chic, practical braids to beat hat hair this season.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/wbi-bsft.jpg",
  readMore: "https://trenddaily.shop/td925/winter-braid-ideas",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Cozy and Chic Winter Hair Braid Styles for Women to Keep You Warm and Stylish",
  date: "5 Sep 2025",
  excerpt: "Stay warm and stylish this season with 10 cozy winter braid hairstyles. From elegant crown braids to chic low buns, discover protective styles that fight frizz and look effortlessly chic.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/wb-sft.jpg",
  readMore: "https://trenddaily.shop/td925/chic-winter-braid-styles",
  shopLink: "../category/all-categories.html"
},
   {
  title: "Autumn Capsule Wardrobe for Women: Essentials You Need",
  date: "5 Sep 2025",
  excerpt: "Build the perfect autumn capsule wardrobe with 28 timeless essentials. From chic trench coats to cozy knitwear, discover versatile fall outfits that look polished and effortless every day.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/ac-wft.jpg",
  readMore: "https://trenddaily.shop/td925/autumn-capsule-wardrobe-for-women",
  shopLink: "../category/all-categories.html"
},
   {
  title: "28 Winter Outfit Ideas for Women That Look Expensive (But Are Totally Affordable)",
  date: "5 Sep 2025",
  excerpt: "Upgrade your cold-weather wardrobe with 28 winter outfit ideas that look luxe but cost less. From chic coats to cozy knitwear, discover affordable styles that make you look expensive all season long.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/wt-wft.jpg",
  readMore: "https://trenddaily.shop/td925/28-winter-outfit-ideas-for-women",
  shopLink: "../category/all-categories.html"
},
   {
  title: "24 Back to School Braided Hairstyles for Women",
  date: "3 Sep 2025",
  excerpt: "From chic boxer braids to protective Ghana braids, explore 24 stylish back-to-school braided hairstyles that blend elegance, ease, and all-day confidence.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/bt-bft.jpg",
  readMore: "https://trenddaily.shop/td925/24-back-to-school-braids",
  shopLink: "../category/all-categories.html"
},
  {
  title: "40 Best Pixie Cut Styles to Spice Up Your Look!",
  date: "2 Sep 2025",
  excerpt: "Pixie cuts aren’t just hairstyles—they’re power moves. Explore 40 edgy, elegant, and fearless pixie styles to transform your look instantly.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/px-cft.jpg",
  readMore: "https://trenddaily.shop/td925/best-pixie-cut-styles",
  shopLink: "../category/all-categories.html"
},
  {
  title: "44 Cozy Fall Ombre Acrylic Nail Ideas to Match Your Seasonal Wardrobe",
  date: "1 Sep 2025",
  excerpt: "Check these 44 Cozy Fall Ombre Acrylic Nail Ideas to Match Your Seasonal Wardrobe, from fall nail ideas to absolute glitter, elevate your glow!",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/oa-nft.jpg",
  readMore: "https://trenddaily.shop/td925/44-ombre-acrylic-nail-ideas",
  shopLink: "../category/all-categories.html"
},
  {
  title: "Curly Hair Queens: Defining Cuts and Styles for Every Curl Type",
  date: "1 Sep 2025",
  excerpt: "Discover the best haircuts and styles for every curl type in our guide for curly hair queens. From loose waves to tight coils, learn how to embrace and define your natural curls beautifully",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td925/cl-sft.jpg",
  readMore: "https://trenddaily.shop/td925/curly-women-hairstyles",
  shopLink: "../category/all-categories.html"
},
    {
  title: "Women Hairstyles That Make You Look Younger Instantly!",
  date: "31 Aug 2025",
  excerpt: "Want to look 10 years younger? here are some women hairstyles that atleast won't make you look soo old. Every Woman deserves a glow and sparkle!",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td825/wh-sft.jpg",
  readMore: "https://trenddaily.shop/trending/women-hairstyles",
  shopLink: "../category/all-categories.html"
},
   {
  title: "40 Best Nail Inspos You Should Try in 2025",
  date: "30 Aug 2025",
  excerpt: "Check out the hottest, trending, Nail Inspos this season! spice up your looks, look sleek not mid. Ready to make the big impression?",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td825/nl-ift.jpg",
  readMore: "https://trenddaily.shop/trending/nail-inspos",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Bob Hairstyle Trends to Make You Stand Out in 2025",
  date: "26 Aug 2025",
  excerpt: "Bob hairstyles really do make an impression, sleek, simple yet very classy. Here are the best ways you can style them to match your fit and Stand out when you enter room, make that killer impression.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td825/bh-sft.jpg",
  readMore: "https://trenddaily.shop/trending/bob-hairstyles",
  shopLink: "../category/all-categories.html"
},
  
{
  title: "10 Ways to Rock Ankara Short Gowns Without Looking Like Everyone Else at the Party",
  date: "25 Aug 2025",
  excerpt: "Discover 10 stylish ways to rock Ankara short gowns without blending into the crowd. From bold prints to chic accessories, explore unique outfit ideas and fashion inspo that turn heads at any party!",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td825/IMG-20250825-WA0000.jpg",
  readMore: "https://trenddaily.shop/trending/ankara-gowns-style",
  shopLink: "../category/all-categories.html"
},
{
  title: "15 Stylish 2-Piece Crochet Outfits for Men in 2025",
  date: "19 Aug 2025",
  excerpt: "Discover 15 stylish 2-piece crochet outfits for men in 2025, perfect for festivals, beach trips, and upscale events. From relaxed co-ords to tailored sets, find versatile looks with styling tips to elevate your wardrobe. Pin your favorites!",
  image: "../images/streetwear-images/2-piece-mcrotchet-ft.jpg",
  readMore: "../trending/15-stylish-2-piece-crochet-outfits-for-men-2025.html",
  shopLink: "../category/all-categories.html"
},
{
  title: "15 Chic 2-Piece Crochet Outfits for Women in 2025",
  date: "20 July 2025",
  excerpt: "15 trendy women’s 2-piece crochet outfit ideas, from casual sets to chic vacation looks. Perfect style inspo for your next fashion upgrade!",
  image: "../images/streetwear-images/2-piece-crotchet-ft.jpg",
  readMore: "../trending/15-stunning-2-piece-crochet-outfits-for-women-2025.html",
  shopLink: "../category/all-categories.html"
},
{
  title: "10 Chic 2-Piece Outfits Every Woman Should Try in 2025",
  date: "15 July 2025",
  excerpt: "Step up your style game in 2025 with 10 chic 2-piece outfits every woman should own. From casual streetwear to classy sets, these looks are unmissable.",
  image: "../images/streetwear-images/2piece-outfits-ft.jpg",
  readMore: "../trending/10-chic-2piece-outfits-women-2025.html",
  shopLink: "../category/all-categories.html"
},
 {
  title: "How to Style White Sneakers in 2025",
  date: "15 July 2025",
  excerpt: "Wondering how to wear white sneakers without looking basic? These 7 fresh outfit ideas show you exactly how to style white sneakers in 2025 with ease.",
  image: "../images/sneakers-images/white-sneakers-hero.jpg",
  readMore: "../trending/how-to-style-white-sneakers-2025.html",
  shopLink: "../category/sneakers-shop.html"
},
{
  title: "2025 Streetwear Trends That Actually Matter (No Hypebeast Nonsense)",
  date: "15 July 2025",
  excerpt: "Cut through the hype with 7 wearable 2025 streetwear trends - from luxury gorpcore to anti-fit denim. Real-world styling tips + what to skip.",
  image: "../images/streetwear-images/womensstyle.jpg",
  readMore: "../trending/2025-streetwear-trends.html",
  shopLink: "../category/all-categories.html"
},
{
  title: "How to Wear Pink Jeans Without Looking Basic: 2025's Smartest Styling Hacks",
  date: "15 July 2025",
  excerpt: "Master 5 sophisticated ways to style pink jeans with exact color formulas and texture combinations.",
  image: "../images/streetwear-images/pinkwears.jpg",
  readMore: "../trending/pink-jeans-outfits.html",
  shopLink: "../category/all-categories.html"
},
{
  title: "Baggy Jeans Are Back: How to Style Them Without Looking Sloppy",
  date: "16 July 2025",
  excerpt: "Baggy jeans are trending hard in 2025 — here are 7 polished outfit combos that balance comfort and edge without looking messy.",
  image: "../images/streetwear-images/baggy-jeans-hero.jpg",
  readMore: "../trending/baggy-jeans-style-guide.html",
  shopLink: "../category/all-categories.html"
},
{
  title: "Skinny Jeans Aren’t Dead: 7 2025-Ready Ways to Style Them",
  date: "16 July 2025",
  excerpt: "From streetwear to smart casual, these 7 outfit formulas prove skinny jeans are still fire in 2025 — without looking outdated.",
  image: "../images/streetwear-images/skinny-jeans-hero.jpg",
  readMore: "../trending/skinny-jeans-style-guide.html",
  shopLink: "../category/all-categories.html"
},
 {
  title: "Why Powder Blue Is the New Neutral: A Fresh Take on Everyday Style in 2025",
  date: "16 July 2025",
  excerpt: "Discover how powder blue became 2025’s softest streetwear essential—plus 8 ways to wear it like a modern neutral.",
  image: "../images/streetwear-images/powder-blue-hero.jpg",
  readMore: "../trending/powder-blue-style-guide.html",
  shopLink: "../category/all-categories.html"
},
 {
  title: "How to Style a Black Tote Bag: 7 Elevated Outfit Ideas for 2025",
  date: "14 July 2025",
  excerpt: "From streetwear to office-ready looks, discover 7 polished outfit formulas that prove the black tote is the ultimate fashion essential in 2025.",
  image: "../images/bag-images/black-tote-hero.jpg",
  readMore: "../trending/black-tote-bag-style.html",
  shopLink: "../category/bags-shop.html"
},
{
  title: "5 Streetwear Crossbody Looks That Actually Work for Guys",
  date: "14 July 2025",
  excerpt: "Master the art of crossbody bag styling with 5 clean streetwear formulas guys can actually pull off in 2025.",
  image: "../images/bag-images/crossbody-hero.jpg",
  readMore: "../trending/5-streetwear-crossbody-looks-for-guys.html",
  shopLink: "../category/bags-shop.html"
},
 {
      title: "Pretty in Pink Power Suits",
      date: "14 July 2025",
      excerpt:
        "Make a bold statement with our curated pink suit collection. Double-breasted elegance meets confident femininity in styles perfect for work and weekends.",
      image: "../images/formalwear-images/pink-power-suit1.jpg",
      readMore: "../trending/pretty-pink-suits.html",
      shopLink: "../category/formal-wear-shop.html"
    },
      {
      title: "Black Gowns: Elegant, Sexy, and Classy",
      date: "14 July 2025",
      excerpt:
        "Discover the timeless allure of women’s black gowns — flattering for all body types, perfect for every occasion, and always on trend.",
      image: "../images/formalwear-images/blackgowns-1.jpg",
      readMore: "../trending/womens-black-gowns.html",
      shopLink: "../category/formal-wear-shop.html"
    },
     {
      title: "Red Suits for Formal Events: Stylish not Loud",
      date: "11 July 2025",
      excerpt:
        "A red suit commands attention—but at a formal event, the key is sophistication, not shock value. Learn how to wear one with polish, not pizzazz, for weddings, galas, and black-tie affairs.",
      image: "../images/formalwear-images/redsuits-1.jpg",
      readMore: "../trending/red-suits.html",
      shopLink: "../category/formal-wear-shop.html"
    },
     {
      title: "From Desk to Dinner: 5 Transitional Work Outfits For Women",
      date: "10 July 2025",
      excerpt:
        "5 seamless work-to-evening outfit transitions with pro styling tips. Master desk-to-dinner dressing with blazers, wraps & monochrome looks.",
      image: "../images/formalwear-images/womencorporate-2.jpg",
      readMore: "../trending/desk-to-dinner-outfits.html",
      shopLink: "../category/formal-wear-shop.html"
    },
    {
  title: "5 Suits Every Man Needs: Build a Power Wardrobe That Never Quits",
  date: "10 July 2025",
  excerpt: "The only 5 suits your professional wardrobe requires—from interview-ready navy to versatile charcoal. Expert styling tips for career success.",
  image: "../images/formalwear-images/suit-collage.jpg",
  readMore: "../trending/5-suits-every-man-needs.html",
  shopLink: "../category/formal-wear-shop.html"
},
{
  title: "8 of the Best ways to style a female tote bag casually",
  date: "17 Aug 2025",
  excerpt: "Explore 8 casual ways to style tote bags. Learn how to rock a black tote bag with everyday outfits and shop the best tote bag looks today.",
  image: "../images/bag-images/female_tote_bag_ft.jpg",
  readMore: "../trending/best-ways-to-style-female-tote-bag-casually.html",
  shopLink: "../category/bags-shop.html"
},
{
  title: "The 2025 Suit Capsule: 5 Must-Own Suits for Every Man",
  date: "18 July 2025",
  excerpt: "Want to stand out in 2025? These are the 5 suits every man must own this year—timeless fits that guarantee sharp style for work, weddings, and beyond.",
  image: "../images/formalwear-images/mens_five_suits-ft.jpg",
  readMore: "../trending/top-5-suits-every-man-should-own-2025.html",
  shopLink: "../category/formal-wear-shop.html"
},
  {
  title: "2025 Streetwear Trends That Actually Matter (No Hypebeast Nonsense)",
  date: "15 July 2025",
  excerpt: "Cut through the hype with 7 wearable 2025 streetwear trends - from luxury gorpcore to anti-fit denim. Real-world styling tips + what to skip.",
  image: "../images/streetwear-images/womensstyle.jpg",
  readMore: "../trending/2025-streetwear-trends.html",
  shopLink: "../category/all-categories.html"
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
      
      const date = document.createElement("span");
      date.className = "blog-date";
      date.textContent = post.date;

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
      content.appendChild(date);
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
  
  
