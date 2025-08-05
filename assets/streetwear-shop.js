document.addEventListener("DOMContentLoaded", () => {
  // Hide preloader after everything is fully loaded
const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.4s ease';
    
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 400); // Allow fade out before removing
    //Product Filters
    const filterBtn = document.getElementById('filterBtn');
  const resetBtn = document.getElementById('resetBtn');
  const grid = document.getElementById("categoryGrid");
  const loadingOverlay = document.getElementById('loadingOverlay');
  
  const formalProducts = [
     {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear1.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 46.99,
      shopUrl: "https://amzn.to/44WLpgx"
    },
     {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear2.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 39.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear3.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 31.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear4.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 27.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear5.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 22.8,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear6.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 28.40,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear7.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 16.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear8.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 23.96,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear9.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear10.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 30.99,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear11.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 34.85,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear12.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 33.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear13.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 32.60,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear14.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 33.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear15.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear16.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 37,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear17.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 34.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear18.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear19.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear20.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear21.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear22.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear23.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 36.88,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear24.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear25.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 33.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear26.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear27.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 38.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear28.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 30.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear29.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 32.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear30.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 33.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear31.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 28.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
    {
      title: "2 piece outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-streetwear32.jpg",
     category:"2-piece-sets",
      gender:"female",
      price: 29.90,
      shopUrl: "https://amzn.to/44WLpgx"
    },
     {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans1.jpg",
     category:"Jeans",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
     {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans2.jpg",
     category:"Jeans",
      gender:"female",
      price: 32.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
     {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans3.jpg",
     category:"Jeans",
      gender:"female",
      price: 33.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans4.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.70,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans5.jpg",
     category:"Jeans",
      gender:"female",
      price: 32.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans6.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans7.jpg",
     category:"Jeans",
      gender:"female",
      price: 37.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans8.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans9.jpg",
     category:"Jeans",
      gender:"female",
      price: 29.95,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans10.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.95,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans11.jpg",
     category:"Jeans",
      gender:"female",
      price: 42.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans12.jpg",
     category:"Jeans",
      gender:"female",
      price: 46.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans13.jpg",
     category:"Jeans",
      gender:"female",
      price: 43.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans14.jpg",
     category:"Jeans",
      gender:"female",
      price: 40.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans15.jpg",
     category:"Jeans",
      gender:"female",
      price: 28.93,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans16.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.95,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans17.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.95,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans18.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.95,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans19.jpg",
     category:"Jeans",
      gender:"female",
      price: 29.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans20.jpg",
     category:"Jeans",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans21.jpg",
     category:"Jeans",
      gender:"female",
      price: 24.80,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans22.jpg",
     category:"Jeans",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans23.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans24.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans25.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans27.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans26.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans28.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans29.jpg",
     category:"Jeans",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans30.jpg",
     category:"Jeans",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans31.jpg",
     category:"Jeans",
      gender:"female",
      price: 27.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "Female Pink Jeans outfits For Women",
      image: "../images/streetwear-images/trenddaily-female-pink-jeans32.jpg",
     category:"Jeans",
      gender:"female",
      price: 28.90,
      shopUrl: "https://amzn.to/40HC2yP"
    },
    {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set1.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 32.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set2.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 45.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set3.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set4.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 44.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set5.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set6.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 33.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set7.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 38.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set8.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set9.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 35.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set10.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 44.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set11.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 36.97,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set12.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 38.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set13.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 38.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set14.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set15.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 33.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set16.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 37.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set17.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 44.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set18.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 44.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set19.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set20.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 36.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set21.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set22.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 41.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set23.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set24.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set25.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 41.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set26.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 40.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set27.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 37.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "2 Piece Outfits for Men",
      image: "../images/streetwear-images/trenddaily-male-2-piece-set28.jpg",
     category:"2-piece-sets",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/4lYtz2Q"
    },
     {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans1.jpg",
     category:"Jeans",
      gender:"male",
      price: 30.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans2.jpg",
     category:"Jeans",
      gender:"male",
      price: 24.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans3.jpg",
     category:"Jeans",
      gender:"male",
      price: 31.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans4.jpg",
     category:"Jeans",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans5.jpg",
     category:"Jeans",
      gender:"male",
      price: 58.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans6.jpg",
     category:"Jeans",
      gender:"male",
      price: 30.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans7.jpg",
     category:"Jeans",
      gender:"male",
      price: 22.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans8.jpg",
     category:"Jeans",
      gender:"male",
      price: 43.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans9.jpg",
     category:"Jeans",
      gender:"male",
      price: 44.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans10.jpg",
     category:"Jeans",
      gender:"male",
      price: 30.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans11.jpg",
     category:"Jeans",
      gender:"male",
      price: 31.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans12.jpg",
     category:"Jeans",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans13.jpg",
     category:"Jeans",
      gender:"male",
      price: 24.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans14.jpg",
     category:"Jeans",
      gender:"male",
      price: 14.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans15.jpg",
     category:"Jeans",
      gender:"male",
      price: 21.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans16.jpg",
     category:"Jeans",
      gender:"male",
      price: 16.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans17.jpg",
     category:"Jeans",
      gender:"male",
      price: 23.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans18.jpg",
     category:"Jeans",
      gender:"male",
      price: 13.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans19.jpg",
     category:"Jeans",
      gender:"male",
      price: 32.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans20.jpg",
     category:"Jeans",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
    {
      title: "Men\'s Jeans",
      image: "../images/streetwear-images/trenddaily-male-jeans21.jpg",
     category:"Jeans",
      gender:"male",
      price: 44.99,
      shopUrl: "https://amzn.to/3JeNlIH"
    },
     {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns23.jpg",
     category:"Gowns",
      gender:"female",
      price: 14.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns2.jpg",
     category:"Gowns",
      gender:"female",
      price: 9.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns3.jpg",
     category:"Gowns",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns4.jpg",
     category:"Gowns",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns5.jpg",
     category:"Gowns",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns6.jpg",
     category:"Gowns",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns8.jpg",
     category:"Gowns",
      gender:"female",
      price: 25.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns7.jpg",
     category:"Gowns",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns9.jpg",
     category:"Gowns",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns10.jpg",
     category:"Gowns",
      gender:"female",
      price: 34.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns11.jpg",
     category:"Gowns",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns12.jpg",
     category:"Gowns",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns13.jpg",
     category:"Gowns",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns14.jpg",
     category:"Gowns",
      gender:"female",
      price: 34.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns15.jpg",
     category:"Gowns",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns16.jpg",
     category:"Gowns",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns17.jpg",
     category:"Gowns",
      gender:"female",
      price: 25.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns18.jpg",
     category:"Gowns",
      gender:"female",
      price: 28.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns19.jpg",
     category:"Gowns",
      gender:"female",
      price: 21.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns20.jpg",
     category:"Gowns",
      gender:"female",
      price: 32.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns21.jpg",
     category:"Gowns",
      gender:"female",
      price: 30.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns22.jpg",
     category:"Gowns",
      gender:"female",
      price: 31.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Female Gowns",
      image: "../images/streetwear-images/trenddaily-female-gowns1.jpg",
     category:"Gowns",
      gender:"female",
      price: 14.99,
      shopUrl: "https://amzn.to/450yES8"
    },
    {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers1.jpg",
     category:"joggers",
      gender:"male",
      price: 24.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers2.jpg",
     category:"joggers",
      gender:"male",
      price: 31.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers3.jpg",
     category:"joggers",
      gender:"male",
      price: 27.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers4.jpg",
     category:"joggers",
      gender:"male",
      price: 26.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers5.jpg",
     category:"joggers",
      gender:"male",
      price: 24.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers6.jpg",
     category:"joggers",
      gender:"male",
      price: 28.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers7.jpg",
     category:"joggers",
      gender:"male",
      price: 33.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers8.jpg",
     category:"joggers",
      gender:"male",
      price: 38.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers9.jpg",
     category:"joggers",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers10.jpg",
     category:"joggers",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers11.jpg",
     category:"joggers",
      gender:"male",
      price: 44.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers12.jpg",
     category:"joggers",
      gender:"male",
      price: 26.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers13.jpg",
     category:"joggers",
      gender:"male",
      price: 24.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers14.jpg",
     category:"joggers",
      gender:"male",
      price: 28.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers15.jpg",
     category:"joggers",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers16.jpg",
     category:"joggers",
      gender:"male",
      price: 28.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers17.jpg",
     category:"joggers",
      gender:"male",
      price: 24.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers18.jpg",
     category:"joggers",
      gender:"male",
      price: 26.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers19.jpg",
     category:"joggers",
      gender:"male",
      price: 44.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers20.jpg",
     category:"joggers",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers21.jpg",
     category:"joggers",
      gender:"male",
      price: 28.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers22.jpg",
     category:"joggers",
      gender:"male",
      price: 19.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers23.jpg",
     category:"joggers",
      gender:"male",
      price:34.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers24.jpg",
     category:"joggers",
      gender:"male",
      price: 37.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers25.jpg",
     category:"joggers",
      gender:"male",
      price: 24.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers26.jpg",
     category:"joggers",
      gender:"male",
      price: 38.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers27.jpg",
     category:"joggers",
      gender:"male",
      price: 36.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers28.jpg",
     category:"joggers",
      gender:"male",
      price: 37.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers29.jpg",
     category:"joggers",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
   {
      title: "Male Joggers",
      image: "../images/streetwear-images/trenddaily-male-joggers30.jpg",
     category:"joggers",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/3HeCH43"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers1.jpg",
     category:"joggers",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers2.jpg",
     category:"joggers",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers3.jpg",
     category:"joggers",
      gender:"female",
      price: 32.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers4.jpg",
     category:"joggers",
      gender:"female",
      price: 38.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers5.jpg",
     category:"joggers",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers6.jpg",
     category:"joggers",
      gender:"female",
      price: 33.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers7.jpg",
     category:"joggers",
      gender:"female",
      price: 20.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers8.jpg",
     category:"joggers",
      gender:"female",
      price: 31.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers9.jpg",
     category:"joggers",
      gender:"female",
      price: 23.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers10.jpg",
     category:"joggers",
      gender:"female",
      price: 25.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers11.jpg",
     category:"joggers",
      gender:"female",
      price: 30.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers12.jpg",
     category:"joggers",
      gender:"female",
      price: 32.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers13.jpg",
     category:"joggers",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers14.jpg",
     category:"joggers",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers15.jpg",
     category:"joggers",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers16.jpg",
     category:"joggers",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers17.jpg",
     category:"joggers",
      gender:"female",
      price: 18.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers18.jpg",
     category:"joggers",
      gender:"female",
      price: 28.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers19.jpg",
     category:"joggers",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers20.jpg",
     category:"joggers",
      gender:"female",
      price: 32.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
    {
      title: "Female Joggers",
      image: "../images/streetwear-images/trenddaily-female-joggers21.jpg",
     category:"joggers",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/4lZY3Bw"
    },
   
   
    
    
  
    
    
    // Add more formal wear products here
  ];
  
  /* Filter pop up */
  
  const target = document.getElementById('filter');
  const button = document.getElementById("filter-Btn");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        button.classList.remove("visible");
      } else {
        button.classList.add("visible");
      }
    });
  }, {
    root: null,
    threshold: 0
    
  });
observer.observe(target);
  
  
  /* Filter pop up ends */
/* Render products */
function renderProducts(list) {
    grid.innerHTML = '';
    if (list.length === 0) {
      grid.innerHTML = '<p>No products match your filters. Click Reset.</p>';
      return;
    }
    list.forEach(product => {
      const card = document.createElement('div');
       card.classList.add("card");

  card.innerHTML = `
    <div class="image-zoom-wrapper">
      <div class="loader"></div>
      <img class="zoom-image" src="${product.image}" alt="${product.title}" style="display: none;" />
    </div>
    <div class="card-body">
      <h3 class="card-title">${product.title}</h3>
      <p class="price">$${product.price}</p>
      <button onclick="window.location.href='${product.shopUrl}'">Shop Now</button>
    </div>
  `;

  grid.appendChild(card);

  const img = card.querySelector("img");
  const loader = card.querySelector(".loader");

  img.onload = () => {
    loader.style.display = "none";
    img.style.display = "block";
  };
    });
     initZoomEffect(); // Initialize zoom for dynamically added images
  }
  
   

 
  function getFilters() {
    const categories = [...document.querySelectorAll('input[name="category"]:checked')].map(c => c.value);
    const genders = [...document.querySelectorAll('input[name="gender"]:checked')].map(g => g.value);
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;
    return { categories, genders, minPrice, maxPrice };
  }

  function applyFilters() {
    const { categories, genders, minPrice, maxPrice } = getFilters();
    let filtered = [...formalProducts];

    if (categories.length > 0) {
      filtered = filtered.filter(p => categories.includes(p.category));
    }

    if (genders.length > 0) {
      filtered = filtered.filter(p => genders.includes(p.gender));
    }

    if (minPrice) {
      filtered = filtered.filter(p => p.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));
    }
    loadingOverlay.style.display = 'flex';
    setTimeout(() => {
      renderProducts(filtered);
      loadingOverlay.style.display = 'none';
    }, 800);

    
  }

  function checkFiltersActive() {
    const { categories, genders, minPrice, maxPrice } = getFilters();
    if (categories.length || genders.length || minPrice || maxPrice) {
      filterBtn.classList.add('active');
      filterBtn.disabled = false;
      filterBtn.style.cursor = 'pointer';
    } else {
      filterBtn.classList.remove('active');
      filterBtn.disabled = true;
      filterBtn.style.cursor = 'not-allowed';
    }
  }

  function resetFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    checkFiltersActive();
    renderProducts(formalProducts);
  }

  // Event listeners
  document.querySelectorAll('input[type="checkbox"], input[type="number"]').forEach(el => {
    el.addEventListener('input', checkFiltersActive);
  });

  filterBtn.addEventListener('click', () => {
    if (filterBtn.classList.contains('active')) {
      applyFilters();
    }
  });

  resetBtn.addEventListener('click', resetFilters);

  renderProducts(formalProducts);
  //Products Filters End
    
  

  


});

// Magnifier logic
function initZoomEffect() {
  const zoomImages = document.querySelectorAll(".zoom-image");

  zoomImages.forEach(img => {
    img.addEventListener("mousemove", zoomIn);
    img.addEventListener("mouseleave", resetZoom);

    img.addEventListener("touchmove", zoomIn);
    img.addEventListener("touchend", resetZoom);
  });

  function zoomIn(e) {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const x = ((e.touches ? e.touches[0].clientX : e.clientX) - rect.left) / rect.width * 100;
    const y = ((e.touches ? e.touches[0].clientY : e.clientY) - rect.top) / rect.height * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2.2)";
  }

  function resetZoom(e) {
    const img = e.currentTarget;
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center center";
  }
}

