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
  title: "15 Holiday Outfit Ideas That Define December Fashion",
  date: "8 Nov 2025",
  excerpt: "15 December 2025 holiday outfit ideas blending cozy chic, festive sparkle, boho lace, and warm layers—perfect for parties, dinners, and winter celebrations.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/holoft.webp",
  readMore: "https://trenddaily.shop/td1125/15-holiday-outfit-ideas-december.html",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 December Fashion Trends That Give the Chic Vibe",
  date: "7 Nov 2025",
  excerpt: "Discover 10 December 2025 fashion trends that deliver effortless chic—cozy layers, boho lace, warm neutrals, and festive sparkle for winter elegance.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/dftrft.webp",
  readMore: "https://trenddaily.shop/td1125/10-december-fashion-trends.html",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Festive Holiday Party Looks You’ll Want to Try",
  date: "7 Nov 2025",
  excerpt: "Get inspired with 10 festive holiday party looks for December 2025—featuring metallics, velvet, bold reds, and sustainable sparkle to shine at every soirée.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/fhplft.webp",
  readMore: "https://trenddaily.shop/td1125/10-festive-holiday-party-looks.html",
  shopLink: "../category/all-categories.html"
},
  {
  title: "25 Gift Ideas for Fashion Lovers This December",
  date: "7 Nov 2025",
  excerpt: "Unwrap 25 dazzling gift ideas for fashion lovers this December—think shimmering coastal-chic treasures, sculptural statement pieces, and eco-luxe must-haves that ignite 2025’s boldest trends.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/giflft.webp",
  readMore: "https://trenddaily.shop/td1125/25-gift-ideas-for-lovers.html",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Cozy Winter Outfit Ideas for Everyday Chic",
  date: "7 Nov 2025",
  excerpt: "Discover 10 cozy winter outfit ideas blending soft knits, layered textures, and effortless chic—perfect for staying warm and stylish during everyday cold-weather adventures in 2025.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/cwofft.webp",
  readMore: "https://trenddaily.shop/td1125/10-cozy-winter-outfit-ideas.html",
  shopLink: "../category/all-categories.html"
},
   {
  title: "20 Cozy Home Décor Trends for a Stylish Holiday",
  date: "7 Nov 2025",
  excerpt: "Discover 20 cozy home décor trends for 2025, blending natural textures, warm earth tones, and timeless holiday accents to create inviting, stylish spaces perfect for festive gatherings and serene winter evenings.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/chdtrft.webp",
  readMore: "https://trenddaily.shop/td1125/20-cozy-home-decor-trends.html",
  shopLink: "../category/all-categories.html"
},
   {
  title: "15 Statement Winter Coats That Steal the Spotlight",
  date: "6 Nov 2025",
  excerpt: "Turn heads this winter with 15 statement coats that command attention—bold colors, dramatic silhouettes, luxe textures, and standout details for instant spotlight-stealing outerwear.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/swcft.webp",
  readMore: "https://trenddaily.shop/td1125/10-minimalist-holiday-outfits",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Minimalist Holiday Outfits That Still Feel Luxe",
  date: "6 Nov 2025",
  excerpt: "Elevate simplicity with 10 minimalist holiday outfits that exude luxury—clean lines, premium fabrics, and subtle sparkle for effortless elegance at every festive gathering.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/mhoft.webp",
  readMore: "https://trenddaily.shop/td1125/10-minimalist-holiday-outfits",
  shopLink: "../category/all-categories.html"
},
   {
  title: "25 Winter Capsule Wardrobe Essentials for Women This Fall",
  date: "6 Nov 2025",
  excerpt: "Build a chic, versatile winter wardrobe with 25 essential pieces for women: timeless coats, cozy knits, tailored pants, and seasonal staples that mix effortlessly for fall-to-winter style.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/wcwft.webp",
  readMore: "https://trenddaily.shop/td1125/25-winter-capsule-wardrobe",
  shopLink: "../category/all-categories.html"
},
    {
  title: "20 Christmas Outfit Ideas for Brunch, Parties, and More",
  date: "6 Nov 2025",
  excerpt: "Discover 20 festive Christmas outfit ideas for every occasion—from cozy brunch layers and sparkling party dresses to chic family gatherings and holiday outings, blending comfort, glamour, and seasonal style.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/cmidft.webp",
  readMore: "https://trenddaily.shop/td1125/20-christmas-outfit-ideas",
  shopLink: "../category/all-categories.html"
},
    {
  title: "15 Holiday Gift Ideas for Trendy Women",
  date: "6 Nov 2025",
  excerpt: "Unwrap joy with 15 curated holiday gift ideas for trendy women: from sustainable fashion finds and tech-savvy beauty gadgets to personalized jewelry and cozy luxe essentials that scream style and sparkle.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/hgiwft.webp",
  readMore: "https://trenddaily.shop/td1125/15-holiday-gift-ideas-women",
  shopLink: "../category/all-categories.html"
},
    {
  title: "10 Winter Street Style Looks That Rule Pinterest",
  date: "6 Nov 2025",
  excerpt: "Discover 10 Pinterest-dominating winter street style looks, from oversized coats and chunky knits to bold boots and layered accessories—effortless cold-weather fashion that rules the season.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/wsslft.webp",
  readMore: "https://trenddaily.shop/td1125/10-winter-street-style-looks",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Holiday Accessories to Elevate Any Outfit",
  date: "6 Nov 2025",
  excerpt: "Discover 10 must-have holiday accessories that instantly elevate any outfit—from sparkling statement earrings to luxurious velvet clutches—for effortless festive glamour.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/holacft.webp",
  readMore: "https://trenddaily.shop/td1125/10-holiday-accessories",
  shopLink: "../category/all-categories.html"
},
  {
  title: "15 Gift Ideas for Fashion Bloggers and Creatives",
  date: "5 Nov 2025",
  excerpt: "Discover 15 perfect gift ideas for fashion bloggers and creatives, from ring lights and prime lenses to design tools and styling essentials—thoughtful picks to inspire content and elevate their craft.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/hdtrft.webp",
  readMore: "https://trenddaily.shop/td1125/15-gift-ideas-fashion-bloggers",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Winter Aesthetic Outfit Ideas You’ll Love",
  date: "5 Nov 2025",
  excerpt: "Explore 10 dreamy winter aesthetic outfit ideas, from cozy knits and plaid layers to snowy whites and velvet accents—perfect for channeling seasonal charm all December long..",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/waoft.webp",
  readMore: "https://trenddaily.shop/td1125/10-winter-aesthetic-outfits",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Holiday Dresses That Are Pinterest-Perfect",
  date: "5 Nov 2025",
  excerpt: "Explore 10 Pinterest-perfect holiday dresses, from shimmering velvet minis to elegant satin midis—ideal for festive parties, family photos, and sparkling seasonal moments.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/hpdft.webp",
  readMore: "https://trenddaily.shop/td1125/10-holiday-pinterest-dresses",
  shopLink: "../category/all-categories.html"
},
  {
  title: "20 Cozy Loungewear Trends for December Nights",
  date: "5 Nov 2025",
  excerpt: "Discover 20 cozy loungewear trends for December nights, from plush cashmere hoodies to sustainable fleece sets—perfect for fireside hygge and effortless holiday comfort.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/clwtft.webp",
  readMore: "https://trenddaily.shop/td1125/20-cozy-loungewear-trends",
  shopLink: "../category/all-categories.html"
},
  {
  title: "25 Festive Home Décor Themes to Try This Year",
  date: "4 Nov 2025",
  excerpt: "25 festive home décor themes that hijack the season: midnight pine forests dripping with matte black baubles, candy-cane minimalism in porcelain stripes, gilded Art Deco evergreens, and neon Nordic cabins—each room a mood board come alive.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/hdtft.webp",
  readMore: "https://trenddaily.shop/td1125/25-festive-home-decor-themes",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Winter Outfit Combinations You Can Copy Instantly",
  date: "4 Nov 2025",
  excerpt: "Steal these 10 winter outfits in one click: puffer + pleated midi, turtleneck tucked into vinyl, shearling jacket over slip dress, chunky knit with leather leggings—snap, layer, done, and suddenly the street’s your runway.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/wocoft.webp",
  readMore: "https://trenddaily.shop/td1125/10-winter-outfit-combo.html",
  shopLink: "../category/all-categories.html"
},
    {
  title: "15 Pinterest-Worthy Holiday Outfit Inspirations",
  date: "4 Nov 2025",
  excerpt: "Pinterest’s holiday glow-up: 15 outfits that pin themselves—emerald velvet wrapped like a gift, tinsel-trimmed blazers catching every flash, crimson silk slipping over candlelit skin, and faux-fur collars framing midnight smiles, ready for your board before the party ends",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/pnwoft.webp",
  readMore: "https://trenddaily.shop/td1125/15-pinterest-worthy-outfits",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Winter Sweater Styles That Look Unique",
  date: "4 Nov 2025",
  excerpt: "10 winter sweater styles that refuse to blend in: cable knits twisted into armor, color-blocked storms of mohair, cropped cardigans laced like corsets, and oversized tunics trailing fringe—each a quiet rebellion against ordinary layers.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/wssuft.webp",
  readMore: "https://trenddaily.shop/td1125/10-winter-sweater-styles-unique",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Fashionable Holiday Gifts for Her ",
  date: "4 Nov 2025",
  excerpt: "10 fashionable holiday gifts for her that blend luxury and whimsy—think pearl-embellished hair clips, butter-soft leather gloves, silk sleep masks in champagne hues, and crystal-studded phone cases that make every unwrap a style upgrade.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/fghft.webp",
  readMore: "https://trenddaily.shop/td1125/10-fashionable-gifts-for-her",
  shopLink: "../category/all-categories.html"
},
  {
  title: "15 Winter Date Night Outfit Ideas For Women That Wow",
  date: "4 Nov 2025",
  excerpt: "15 winter date-night outfits for women: velvet that clings like midnight, cashmere that whispers against skin, sequins catching every flicker of light, leather gleaming under streetlamps—each look engineered to make the night forget the cold.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/wdnoft.webp",
  readMore: "https://trenddaily.shop/td1125/15-winter-date-night-outfits",
  shopLink: "../category/all-categories.html"
},
   {
  title: "15 Holiday Party Outfit Ideas for Every Style",
  date: "4 Nov 2025",
  excerpt: "15 holiday party outfit ideas for every style that sparkle with personality—think boho velvet maxi dresses, grunge plaid suits, minimalist satin slips, and retro sequin minis that let you shine from cozy gatherings to rooftop soirées.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/hpoift.webp",
  readMore: "https://trenddaily.shop/td1125/15-holiday-party-outfit-ideas",
  shopLink: "../category/all-categories.html"
},
  {
  title: "15 Gift Ideas for Stylish Men",
  date: "4 Nov 2025",
  excerpt: "15 gift ideas for stylish men that fuse function and flair—think Italian leather weekender bags, minimalist gold signet rings, cashmere beanies in muted earth tones, and sleek wireless earbuds that elevate every look.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/gismft.webp",
  readMore: "https://trenddaily.shop/td1125/15-gift-ideas-for-stylish-men",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Elegant Holiday Outfit Ideas for Formal Events",
  date: "4 Nov 2025",
  excerpt: "10 elegant holiday outfit ideas for formal events that radiate timeless glamour—think silk slip gowns in jewel tones, tailored tuxedo jumpsuits, and crystal-embellished capes that turn every entrance into a red-carpet moment.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/eofft.webp",
  readMore: "https://trenddaily.shop/td1125/10-elegant-outfits-formal-events",
  shopLink: "../category/all-categories.html"
},
   {
  title: "15 Pinterest-Inspired Winter Streetwear Looks",
  date: "4 Nov 2025",
  excerpt: "15 Pinterest-inspired winter streetwear looks that fuse cozy layers with urban edge—think oversized puffer coats, chunky knit beanies, and combat boots layered over bold cargo pants for effortless cold-weather swagger.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/pslft.webp",
  readMore: "https://trenddaily.shop/td1125/15-pinterest-streetwear-looks",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Chic Outfit Ideas for Office Holiday Parties",
  date: "4 Nov 2025",
  excerpt: "10 chic office holiday party outfits that strike the perfect balance of festive sparkle and boardroom polish—think velvet blazers, sequin midi skirts, and statement heels that whisper celebration without shouting.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/copoft.webp",
  readMore: "https://trenddaily.shop/td1125/10-chic-office-party-outfits",
  shopLink: "../category/all-categories.html"
},
   {
  title: "15 Winter Scarf Styling Ideas That Feel Fresh",
  date: "4 Nov 2025",
  excerpt: "Discover 15 fresh winter scarf styling ideas that transform cozy essentials into bold statements—think asymmetrical drapes, belted silhouettes, and unexpected color clashes for instant outfit elevation.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1125/wssft.webp",
  readMore: "https://trenddaily.shop/td1125/15-winter-scarf-styling",
  shopLink: "../category/all-categories.html"
},
   {
  title: "9 Pinterest Hair Care Routines That Actually Work in Winter",
  date: "3 Nov 2025",
  excerpt: "Discover 9 proven Pinterest hair care routines designed for winter. Get real tips for battling dryness and frizz to keep your hair healthy and shiny all season long.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/phcrft.webp",
  readMore: "https://trenddaily.shop/td1025/9-pinterest-hair-care-routines",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Ways to Protect Your Hair from Winter Dryness",
  date: "3 Nov 2025",
  excerpt: "Dryness and static got you down? here are 10 Ways to Protect Your Hair from Winter Dryness. Learn quick, DIY masks and oils you can make at home to revive your hair.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/whcrft.webp",
  readMore: "https://trenddaily.shop/td1025/10-winter-hair-protection",
  shopLink: "../category/all-categories.html"
},
   {
  title: "8 Easy Winter Hair Treatments You Can Try at Home",
  date: "3 Nov 2025",
  excerpt: "Winter wreaking havoc on your hair? Restore moisture and shine with these 8 simple at-home hair treatments. Easy recipes with natural ingredients for soft, manageable hair.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/whtrft.webp",
  readMore: "https://trenddaily.shop/td1025/8-winter-hair-treatments",
  shopLink: "../category/all-categories.html"
},
  {
  title: "7 Ways to Style Your Fringe Jacket for Everyday Wear",
  date: "29 Oct 2025",
  excerpt: "Explore 7 versatile ways to style your fringe jacket for effortless everyday looks! From casual denim pairings to chic office outfits, elevate your wardrobe with boho flair and timeless tips.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/wsfft.webp",
  readMore: "https://trenddaily.shop/td1025/7-ways-to-style-fringe-jacket",
  shopLink: "../category/all-categories.html"
},
    {
  title: "12 Boho Fringe Looks That Bring Festival Energy to Fall",
  date: "28 Oct 2025",
  excerpt: "Channel festival vibes into fall with 12 boho fringe looks—suede jackets, layered scarves, and tassel details that add playful movement to cozy autumn outfits.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/bhflft.webp",
  readMore: "https://trenddaily.shop/td1025/12-boho-fringe-looks",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Ways to Style the Moto-Boho Trend Without Overdoing It",
  date: "28 Oct 2025",
  excerpt: "Master the moto-boho trend with 10 understated styling tips that blend rugged leather jackets with flowy bohemian layers—effortless, balanced, and never over-the-top.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/smbhft.webp",
  readMore: "https://trenddaily.shop/td1025/10-ways-to-style-moto-boho-trend",
  shopLink: "../category/all-categories.html"
},
  {
  title: "9 Boho-Meets-Leather Styles for an Effortless Chic Look",
  date: "28 Oct 2025",
  excerpt: "Discover 9 boho-meets-leather outfits that fuse free-spirited fringe with edgy leather for effortless chic style—perfect for festivals, city strolls, or everyday cool.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/bmlsft.webp",
  readMore: "https://trenddaily.shop/td1025/9-boho-meets-leather-styles",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Moto-Boho Outfit Ideas That Blend Edge and Freedom",
  date: "28 Oct 2025",
  excerpt: "Unleash your inner rebel with 10 moto-boho outfit ideas blending edgy leather, studs, and chains with flowing bohemian lace, fringe, and earthy vibes—perfect for effortless, free-spirited style this fall.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/mbhoft.webp",
  readMore: "https://trenddaily.shop/td1025/10-moto-boho-outfits",
  shopLink: "../category/all-categories.html"
},
   {
  title: "8 Fall Nail Designs You’ll Want to Screenshot Immediately",
  date: "28 Oct 2025",
  excerpt: "Screenshot-worthy fall nails alert! Dive into 8 trending designs featuring warm spice shades, elegant tortoiseshell patterns, glossy mocha dips, and playful pumpkin accents—perfect for instant inspo and your next salon visit.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/fndft.webp",
  readMore: "https://trenddaily.shop/td1025/8-fall-nail-designs-sc",
  shopLink: "../category/all-categories.html"
},
  {
  title: "12 Fall Nail Ideas That Are Trending Right Now",
  date: "28 Oct 2025",
  excerpt: "Discover 12 must-try fall nail ideas that are dominating trends this season! From rich jewel tones and cozy plaids to chic chrome accents and minimalist designs, get inspired with these stunning, Instagram-worthy manicures perfect for autumn.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/tfnft.webp",
  readMore: "https://trenddaily.shop/td1025/12-trending-fall-nails",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Cozy Nail Designs Perfect for November",
  date: "28 Oct 2025",
  excerpt: "Explore 10 cozy nail designs tailored for November—think rich mocha swirls, soft sweater textures, matte burgundy accents, and golden leaf details to keep your manicure warm and autumn-ready.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nndsft.webp",
  readMore: "https://trenddaily.shop/td1025/10-november-nail-designs",
  shopLink: "../category/all-categories.html"
},
  {
  title: "15 November Nail Ideas That Capture Fall Vibes",
  date: "28 Oct 2025",
  excerpt: "Discover 15 stunning November nail ideas that embody cozy fall vibes—from warm spice tones and plaid patterns to glittering leaves and matte pumpkins. Perfect inspo for your autumn manicure!",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nnidft.webp",
  readMore: "https://trenddaily.shop/td1025/15-november-nail-ideas",
  shopLink: "../category/all-categories.html"
},
  {
  title: "7 Cozy Thanksgiving Styles for Every Type of Gathering",
  date: "28 Oct 2025",
  excerpt: "Explore 7 cozy Thanksgiving styles tailored to every gathering—from intimate family dinners to grand festive feasts. Uncover warm textures, ambient lighting, and effortless decor ideas that blend rustic charm with modern elegance for a holiday that's as inviting as it is unforgettable.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/tgosft.webp",
  readMore: "https://trenddaily.shop/td1025/7-thanksgiving-outfit-styles",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Aesthetic Thanksgiving Table Decor Ideas",
  date: "28 Oct 2025",
  excerpt: "Enchant your Thanksgiving feast with 10 spellbinding aesthetic table decor visions—where golden harvest whispers meet velvet midnight elegance, flickering candlelit alchemy, and wildflower poetry bloom on every plate. Steal these ethereal DIY secrets to conjure a tablescape so breathtaking, your guests will savor the magic long after the pie is gone.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/tgdift.webp",
  readMore: "https://trenddaily.shop/td1025/10-thanksgiving-decor-ideas",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Thanksgiving Outfit Ideas That Balance Cozy and Cute",
  date: "27 Oct 2025",
  excerpt: "Discover 10 Thanksgiving outfit ideas that perfectly blend cozy comfort with cute style. From chunky knits to plaid skirts, get inspired for a festive, effortless holiday look!.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/tgoift.webp",
  readMore: "https://trenddaily.shop/td1025/10-thanksgiving-outfit-ideas",
  shopLink: "../category/all-categories.html"
},
  {
  title: "8 Couple Outfit Ideas That Nail the “Seeing Double” Trend",
  date: "27 Oct 2025",
  excerpt: "Double the style, twice the spark! Dive into 8 swoon-worthy couple outfit ideas that master the “seeing double” trend—think mirrored magic, playful twinning, and romance dialed up to eleven.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/coimft.webp",
  readMore: "https://trenddaily.shop/td1025/8-couple-outfit-ideas-m",
  shopLink: "../category/all-categories.html"
},
  {
  title: "9 Glam Outfit Ideas for an Unforgettable November Birthday",
  date: "27 Oct 2025",
  excerpt: "Celebrate your November birthday in style with 9 glamorous outfit ideas! From shimmering sequins to velvet elegance, discover looks that blend fall vibes with party flair for an unforgettable night.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/ngloft.webp",
  readMore: "https://trenddaily.shop/td1025/9-november-glam-outfit-ideas",
  shopLink: "../category/all-categories.html"
},
  {
  title: "8 Cozy-Chic November Birthday Looks You’ll Love Wearing",
  date: "27 Oct 2025",
  excerpt: "Steal the spotlight with 8 cozy-chic November birthday outfits! From plush knits to elegant layers, these stylish looks blend warmth and wow for your special day.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nbdlft.webp",
  readMore: "https://trenddaily.shop/td1025/8-november-birthday-looks",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Birthday Outfit Ideas That Slay for a November Celebration",
  date: "27 Oct 2025",
  excerpt: "Unleash your November birthday vibe with 10 jaw-dropping outfit ideas! From sultry velvet to sparkling sequins, these seasonal stunners will make your celebration iconic.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nbdoft.webp",
  readMore: "https://trenddaily.shop/td1025/10-november-birthday-outfit-ideas",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Cozy November Birthday Party Themes Everyone Will Love",
  date: "26 Oct 2025",
  excerpt: "Discover 10 cozy November birthday party themes that everyone will love! From rustic harvest vibes to warm, festive ideas, create unforgettable celebrations with these unique, seasonal party themes.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nbdtft.webp",
  readMore: "https://trenddaily.shop/td1025/10-november-birthday-party-themes",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Minimalist November Nail Looks for Everyday Glam",
  date: "23 Oct 2025",
  excerpt: "Check out these 10 chic and minimalist November nail looks! From cozy neutrals to subtle seasonal designs, these simple yet stylish manicures are perfect for embracing fall's elegance..",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/nnlft.webp",
  readMore: "https://trenddaily.shop/td1025/10-minimalist-november-nail-looks",
  shopLink: "../category/all-categories.html"
},
   {
  title: "8 Stylish Ways to Wear a Fringe Jacket This Season",
  date: "23 Oct 2025",
  excerpt: "8 stylish ways to rock a fringe jacket this season. From boho-chic to urban edge, find bold outfit ideas to elevate your wardrobe with this trendy statement piece..",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/fjsft.webp",
  readMore: "https://trenddaily.shop/td1025/8-fringe-jacket-styles",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Boho Fringe Jacket Outfit Ideas That Turn Heads",
  date: "23 Oct 2025",
  excerpt: "10 boho fringe jacket outfit ideas that steal the spotlight. From festival-ready looks to chic street style, get inspired with these bold, free-spirited ensembles.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/bojft.webp",
  readMore: "https://trenddaily.shop/td1025/10-boho-fringe-jacket-outfit-ideas",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Fisherman Aesthetic Outfits That Feel Coastal and Cozy",
  date: "23 Oct 2025",
  excerpt: "10 cozy and casual fisherman aesthetic outfits perfect for laid-back style. From chunky knits to rugged boots, find inspiration for effortless coastal vibes.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/fimoft.webp",
  readMore: "https://trenddaily.shop/td1025/10-fisherman-aesthetic-outfits",
  shopLink: "../category/all-categories.html"
},
  {
  title: "10 Elegant Almond Nails to Match Every November Outfit",
  date: "23 Oct 2025",
  excerpt: "Discover 10 stunning almond nail designs to complement any outfit! From chic neutrals to bold patterns, find the perfect nail inspo for every style and occasion..",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/alfoft.webp",
  readMore: "https://trenddaily.shop/td1025/10-almond-nails-for-every-outfit",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Matching Outfit Ideas for Besties Who Love Aesthetic Looks",
  date: "22 Oct 2025",
  excerpt: "Discover 10 stylish matching outfit ideas for besties who adore aesthetic looks! From cozy streetwear to chic boho vibes, find perfect coordinated styles to slay together.",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/mibft.webp",
  readMore: "https://trenddaily.shop/td1025/10-matching-outfit-ideas-besties",
  shopLink: "../category/all-categories.html"
},
   {
  title: "10 Autumn-Inspired Nail Colors for the Perfect Fall Aesthetic",
  date: "22 Oct 2025",
  excerpt: "Discover 10 stunning autumn-inspired nail colors to elevate your fall aesthetic. From rich burgundies to warm neutrals, find the perfect shades for cozy, seasonal vibes...",
  image: "https://cdn.jsdelivr.net/gh/Trend-daily/fbi@main/td1025/ancft.webp",
  readMore: "https://trenddaily.shop/td1025/10-autumn-nail-colors",
  shopLink: "../category/all-categories.html"
},
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
  shopLink: "../category/all-categories.html"
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
  shopLink: "../category/all-categories.html"
},
{
  title: "5 Streetwear Crossbody Looks That Actually Work for Guys",
  date: "14 July 2025",
  excerpt: "Master the art of crossbody bag styling with 5 clean streetwear formulas guys can actually pull off in 2025.",
  image: "../images/bag-images/crossbody-hero.jpg",
  readMore: "../trending/5-streetwear-crossbody-looks-for-guys.html",
  shopLink: "../category/all-categories.html"
},
 {
      title: "Pretty in Pink Power Suits",
      date: "14 July 2025",
      excerpt:
        "Make a bold statement with our curated pink suit collection. Double-breasted elegance meets confident femininity in styles perfect for work and weekends.",
      image: "../images/formalwear-images/pink-power-suit1.jpg",
      readMore: "../trending/pretty-pink-suits.html",
      shopLink: "../category/all-categories.html"
    },
      {
      title: "Black Gowns: Elegant, Sexy, and Classy",
      date: "14 July 2025",
      excerpt:
        "Discover the timeless allure of women’s black gowns — flattering for all body types, perfect for every occasion, and always on trend.",
      image: "../images/formalwear-images/blackgowns-1.jpg",
      readMore: "../trending/womens-black-gowns.html",
      shopLink: "../category/all-categories.html"
    },
     {
      title: "Red Suits for Formal Events: Stylish not Loud",
      date: "11 July 2025",
      excerpt:
        "A red suit commands attention—but at a formal event, the key is sophistication, not shock value. Learn how to wear one with polish, not pizzazz, for weddings, galas, and black-tie affairs.",
      image: "../images/formalwear-images/redsuits-1.jpg",
      readMore: "../trending/red-suits.html",
      shopLink: "../category/all-categories.html"
    },
     {
      title: "From Desk to Dinner: 5 Transitional Work Outfits For Women",
      date: "10 July 2025",
      excerpt:
        "5 seamless work-to-evening outfit transitions with pro styling tips. Master desk-to-dinner dressing with blazers, wraps & monochrome looks.",
      image: "../images/formalwear-images/womencorporate-2.jpg",
      readMore: "../trending/desk-to-dinner-outfits.html",
      shopLink: "../category/all-categories.html"
    },
    {
  title: "5 Suits Every Man Needs: Build a Power Wardrobe That Never Quits",
  date: "10 July 2025",
  excerpt: "The only 5 suits your professional wardrobe requires—from interview-ready navy to versatile charcoal. Expert styling tips for career success.",
  image: "../images/formalwear-images/suit-collage.jpg",
  readMore: "../trending/5-suits-every-man-needs.html",
  shopLink: "../category/all-categories.html"
},
{
  title: "8 of the Best ways to style a female tote bag casually",
  date: "17 Aug 2025",
  excerpt: "Explore 8 casual ways to style tote bags. Learn how to rock a black tote bag with everyday outfits and shop the best tote bag looks today.",
  image: "../images/bag-images/female_tote_bag_ft.jpg",
  readMore: "../trending/best-ways-to-style-female-tote-bag-casually.html",
  shopLink: "../category/all-categories.html"
},
{
  title: "The 2025 Suit Capsule: 5 Must-Own Suits for Every Man",
  date: "18 July 2025",
  excerpt: "Want to stand out in 2025? These are the 5 suits every man must own this year—timeless fits that guarantee sharp style for work, weddings, and beyond.",
  image: "../images/formalwear-images/mens_five_suits-ft.jpg",
  readMore: "../trending/top-5-suits-every-man-should-own-2025.html",
  shopLink: "../category/all-categories.html"
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
  let loadIncrement = 4; // posts per "Load More"
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
  
  
