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
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns1.jpg",
      category:"gowns",
      gender:"female",
      price: 63.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns2.jpg",
      category:"gowns",
      gender:"female",
      price: 63.89,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns3.jpg",
      category:"gowns",
      gender:"female",
      price: 63.99,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns4.jpg",
      category:"gowns",
      gender:"female",
      price: 62.70,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns5.jpg",
      category:"gowns",
      gender:"female",
      price: 61.99,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns6.jpg",
      category:"gowns",
      gender:"female",
      price: 63.99,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns7.jpg",
      category:"gowns",
      gender:"female",
      price: 47.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns8.jpg",
      category:"gowns",
      gender:"female",
      price: 41.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns9.jpg",
      category:"gowns",
      gender:"female",
      price: 42.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns10.jpg",
      category:"gowns",
      gender:"female",
      price: 37.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns11.jpg",
      category:"gowns",
      gender:"female",
      price: 33.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns12.jpg",
      category:"gowns",
      gender:"female",
      price: 39.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns13.jpg",
      category:"gowns",
      gender:"female",
      price: 43.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns14.jpg",
      category:"gowns",
      gender:"female",
      price: 52.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns15.jpg",
      category:"gowns",
      gender:"female",
      price: 41.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns16.jpg",
      category:"gowns",
      gender:"female",
      price: 44.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns17.jpg",
      category:"gowns",
      gender:"female",
      price: 54.00,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns18.jpg",
      category:"gowns",
      gender:"female",
      price: 55.99,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns19.jpg",
      category:"gowns",
      gender:"female",
      price: 41.99,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
     {
      title: "Gowns for Women",
      image: "../images/formalwear-images/trenddaily-womens-gowns20.jpg",
      category:"gowns",
      gender:"female",
      price: 33.99,
      shopUrl: "https://amzn.to/4lu01Jv"
    },
      {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit1.jpg",
      category:"suits",
      gender:"male",
      price: 73.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit2.jpg",
      category:"suits",
      gender:"male",
      price: 73.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit3.jpg",
      category:"suits",
      gender:"male",
      price: 69.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit4.jpg",
      category:"suits",
      gender:"male",
      price: 68.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit5.jpg",
      category:"suits",
      gender:"male",
      price: 77.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit6.jpg",
      category:"suits",
      gender:"male",
      price: 83.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit7.jpg",
      category:"suits",
      gender:"male",
      price: 81.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit8.jpg",
      category:"suits",
      gender:"male",
      price: 79.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit9.jpg",
      category:"suits",
      gender:"male",
      price: 84.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit10.jpg",
      category:"suits",
      gender:"male",
      price: 105.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit11.jpg",
      category:"suits",
      gender:"male",
      price: 81.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit12.jpg",
      category:"suits",
      gender:"male",
      price: 73.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit13.jpg",
      category:"suits",
      gender:"male",
      price: 63.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit14.jpg",
      category:"suits",
      gender:"male",
      price: 74.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit15.jpg",
      category:"suits",
      gender:"male",
      price: 78.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit16.jpg",
      category:"suits",
      gender:"male",
      price: 75.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit17.jpg",
      category:"suits",
      gender:"male",
      price: 76.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit18.jpg",
      category:"suits",
      gender:"male",
      price: 71.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
     {
      title: "Suits for Men",
      image: "../images/formalwear-images/trenddaily-mens-suit19.jpg",
      category:"suits",
      gender:"male",
      price: 69.99,
      shopUrl: "https://amzn.to/40OKRHf"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit1.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit2.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit3.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit4.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit5.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit6.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit7.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit8.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit9.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit10.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit11.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit12.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3UbfT8s"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit12.jpg",
      category:"suits",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/4mv1YGp"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit13.jpg",
      category:"suits",
      gender:"female",
      price: 37.99,
      shopUrl: "https://amzn.to/4mv1YGp"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit14.jpg",
      category:"suits",
      gender:"female",
      price: 51.99,
      shopUrl: "https://amzn.to/4mv1YGp"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit15.jpg",
      category:"suits",
      gender:"female",
      price: 42.99,
      shopUrl: "https://amzn.to/4mv1YGp"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit16.jpg",
      category:"suits",
      gender:"female",
      price: 43.99,
      shopUrl: "https://amzn.to/4mv1YGp"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit17.jpg",
      category:"suits",
      gender:"female",
      price: 42.99,
      shopUrl: "https://amzn.to/4mv1YGp"
    },
    {
      title: "Suits for Women",
      image: "../images/formalwear-images/trenddaily-womens-suit18.jpg",
      category:"suits",
      gender:"female",
      price: 39.99,
      shopUrl: "https://amzn.to/4mv1YGp"
    },
     {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse1.jpg",
      category:"blouses",
      gender:"female",
      price: 17.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse2.jpg",
      category:"blouses",
      gender:"female",
      price: 11.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse3.jpg",
      category:"blouses",
      gender:"female",
      price: 9.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse4.jpg",
      category:"blouses",
      gender:"female",
      price: 23.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse5.jpg",
      category:"blouses",
      gender:"female",
      price: 13.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse6.jpg",
      category:"blouses",
      gender:"female",
      price: 16.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse7.jpg",
      category:"blouses",
      gender:"female",
      price: 14.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse8.jpg",
      category:"blouses",
      gender:"female",
      price: 10.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse9.jpg",
      category:"blouses",
      gender:"female",
      price: 12.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse10.jpg",
      category:"blouses",
      gender:"female",
      price: 18.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse11.jpg",
      category:"blouses",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse12.jpg",
      category:"blouses",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse13.jpg",
      category:"blouses",
      gender:"female",
      price: 18.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse14.jpg",
      category:"blouses",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse15.jpg",
      category:"blouses",
      gender:"female",
      price: 39.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse16.jpg",
      category:"blouses",
      gender:"female",
      price: 11.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse17.jpg",
      category:"blouses",
      gender:"female",
      price: 14.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse18.jpg",
      category:"blouses",
      gender:"female",
      price: 16.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse19.jpg",
      category:"blouses",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
      {
      title: "Blouses for Women",
      image: "../images/formalwear-images/trenddaily-womens-blouse20.jpg",
      category:"blouses",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/3UbkuaB"
    },
    {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts1.jpg",
      category:"skirts",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts2.jpg",
      category:"skirts",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts3.jpg",
      category:"skirts",
      gender:"female",
      price: 32.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts4.jpg",
      category:"skirts",
      gender:"female",
      price: 28.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts5.jpg",
      category:"skirts",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts6.jpg",
      category:"skirts",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts7.jpg",
      category:"skirts",
      gender:"female",
      price: 21.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts8.jpg",
      category:"skirts",
      gender:"female",
      price: 23.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts9.jpg",
      category:"skirts",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts10.jpg",
      category:"skirts",
      gender:"female",
      price: 21.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts11.jpg",
      category:"skirts",
      gender:"female",
      price: 22.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts12.jpg",
      category:"skirts",
      gender:"female",
      price: 28.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Skirts for Women",
      image: "../images/formalwear-images/trenddaily-womens-skirts13.jpg",
      category:"skirts",
      gender:"female",
      price: 27.99,
      shopUrl: "https://amzn.to/3Hdakn0"
    },
     {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts1.jpg",
      category:"shirts",
      gender:"male",
      price: 27.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts2.jpg",
      category:"shirts",
      gender:"male",
      price: 23.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts3.jpg",
      category:"shirts",
      gender:"male",
      price: 17.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts4.jpg",
      category:"shirts",
      gender:"male",
      price: 22.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts5.jpg",
      category:"shirts",
      gender:"male",
      price: 21.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts6.jpg",
      category:"shirts",
      gender:"male",
      price: 17.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts7.jpg",
      category:"shirts",
      gender:"male",
      price: 29.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts8.jpg",
      category:"shirts",
      gender:"male",
      price: 32.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts9.jpg",
      category:"shirts",
      gender:"male",
      price: 19.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts10.jpg",
      category:"shirts",
      gender:"male",
      price: 24.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts11.jpg",
      category:"shirts",
      gender:"male",
      price: 23.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts12.jpg",
      category:"shirts",
      gender:"male",
      price: 27.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts13.jpg",
      category:"shirts",
      gender:"male",
      price: 27.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts14.jpg",
      category:"shirts",
      gender:"male",
      price: 22.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts15.jpg",
      category:"shirts",
      gender:"male",
      price: 27.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts16.jpg",
      category:"shirts",
      gender:"male",
      price: 27.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts17.jpg",
      category:"shirts",
      gender:"male",
      price: 27.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts18.jpg",
      category:"shirts",
      gender:"male",
      price: 25.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts19.jpg",
      category:"shirts",
      gender:"male",
      price: 22.99,
      shopUrl: "https://amzn.to/4mKHucX"
    },
    {
      title: "Shirts for Men",
      image: "../images/formalwear-images/trenddaily-mens-shirts20.jpg",
      category:"shirts",
      gender:"male",
      price: 27.99,
      shopUrl: "https://amzn.to/4mKHucX"
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
      grid.innerHTML = '<p class = "filterMessage">No products match your filters. Click Reset.</p>';
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
      filtered = filtered.filter(p => genders.includes(p.gender) || p.gender === "unisex");
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

