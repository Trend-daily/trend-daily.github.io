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
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers1.jpg",
      category:"sneakers",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers2.jpg",
      category:"sneakers",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers3.jpg",
      category:"sneakers",
      gender:"male",
      price: 40.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers4.jpg",
      category:"sneakers",
      gender:"male",
      price: 51.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers5.jpg",
      category:"sneakers",
      gender:"male",
      price: 29.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers6.jpg",
      category:"sneakers",
      gender:"male",
      price: 30.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers7.jpg",
      category:"sneakers",
      gender:"male",
      price: 27.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers8.jpg",
      category:"sneakers",
      gender:"male",
      price: 26.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers9.jpg",
      category:"sneakers",
      gender:"male",
      price: 31.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers10.jpg",
      category:"sneakers",
      gender:"male",
      price: 33.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers11.jpg",
      category:"sneakers",
      gender:"male",
      price: 30.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers12.jpg",
      category:"sneakers",
      gender:"male",
      price: 31.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers13.jpg",
      category:"sneakers",
      gender:"male",
      price: 38.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers14.jpg",
      category:"sneakers",
      gender:"male",
      price: 36.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers15.jpg",
      category:"sneakers",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers16.jpg",
      category:"sneakers",
      gender:"male",
      price: 33.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers17.jpg",
      category:"sneakers",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers18.jpg",
      category:"sneakers",
      gender:"male",
      price: 29.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers19.jpg",
      category:"sneakers",
      gender:"male",
      price: 29.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers20.jpg",
      category:"sneakers",
      gender:"male",
      price: 19.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers21.jpg",
      category:"sneakers",
      gender:"male",
      price: 18.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers22.jpg",
      category:"sneakers",
      gender:"male",
      price: 27.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers23.jpg",
      category:"sneakers",
      gender:"male",
      price: 18.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers24.jpg",
      category:"sneakers",
      gender:"male",
      price: 56.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers25.jpg",
      category:"sneakers",
      gender:"male",
      price: 49.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers26.jpg",
      category:"sneakers",
      gender:"male",
      price: 49.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers27.jpg",
      category:"sneakers",
      gender:"male",
      price: 61.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers28.jpg",
      category:"sneakers",
      gender:"male",
      price: 51.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers29.jpg",
      category:"sneakers",
      gender:"male",
      price: 34.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Men",
      image: "../images/sneakers-images/trenddaily-men-sneakers30.jpg",
      category:"sneakers",
      gender:"male",
      price: 39.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
     {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers1.jpg",
      category:"sneakers",
      gender:"female",
      price: 99.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers2.jpg",
      category:"sneakers",
      gender:"female",
      price: 159.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers3.jpg",
      category:"sneakers",
      gender:"female",
      price: 129.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers4.jpg",
      category:"sneakers",
      gender:"female",
      price: 59.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers5.jpg",
      category:"sneakers",
      gender:"female",
      price: 49.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers6.jpg",
      category:"sneakers",
      gender:"female",
      price: 69.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers7.jpg",
      category:"sneakers",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers8.jpg",
      category:"sneakers",
      gender:"female",
      price: 89.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers9.jpg",
      category:"sneakers",
      gender:"female",
      price: 67.75,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers10.jpg",
      category:"sneakers",
      gender:"female",
      price: 139.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers11.jpg",
      category:"sneakers",
      gender:"female",
      price: 79.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers12.jpg",
      category:"sneakers",
      gender:"female",
      price: 59.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers13.jpg",
      category:"sneakers",
      gender:"female",
      price: 39.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers14.jpg",
      category:"sneakers",
      gender:"female",
      price: 28.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers15.jpg",
      category:"sneakers",
      gender:"female",
      price: 61.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers16.jpg",
      category:"sneakers",
      gender:"female",
      price: 57.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers17.jpg",
      category:"sneakers",
      gender:"female",
      price: 48.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers18.jpg",
      category:"sneakers",
      gender:"female",
      price: 41.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers19.jpg",
      category:"sneakers",
      gender:"female",
      price: 51.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers20.jpg",
      category:"sneakers",
      gender:"female",
      price: 36.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers21.jpg",
      category:"sneakers",
      gender:"female",
      price: 33.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers22.jpg",
      category:"sneakers",
      gender:"female",
      price: 38.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers23.jpg",
      category:"sneakers",
      gender:"female",
      price: 49.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers24.jpg",
      category:"sneakers",
      gender:"female",
      price: 69.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers26.jpg",
      category:"sneakers",
      gender:"female",
      price: 39.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers25.jpg",
      category:"sneakers",
      gender:"female",
      price: 69.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers27.jpg",
      category:"sneakers",
      gender:"female",
      price: 59.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers28.jpg",
      category:"sneakers",
      gender:"female",
      price: 59.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
    {
      title: "Sneakers for Women",
      image: "../images/sneakers-images/trenddaily-women-sneakers29.jpg",
      category:"sneakers",
      gender:"female",
      price: 79.99,
      shopUrl: "https://amzn.to/3H6Zz5I"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats1.jpg",
      category:"flats",
      gender:"female",
      price: 21.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats2.jpg",
      category:"flats",
      gender:"female",
      price: 23.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats3.jpg",
      category:"flats",
      gender:"female",
      price: 25.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats4.jpg",
      category:"flats",
      gender:"female",
      price: 25.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats5.jpg",
      category:"flats",
      gender:"female",
      price: 28.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats6.jpg",
      category:"flats",
      gender:"female",
      price: 20.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats7.jpg",
      category:"flats",
      gender:"female",
      price: 22.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats8.jpg",
      category:"flats",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats9.jpg",
      category:"flats",
      gender:"female",
      price: 27.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats10.jpg",
      category:"flats",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats11.jpg",
      category:"flats",
      gender:"female",
      price: 20.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats12.jpg",
      category:"flats",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats13.jpg",
      category:"flats",
      gender:"female",
      price: 27.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats14.jpg",
      category:"flats",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats15.jpg",
      category:"flats",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats16.jpg",
      category:"flats",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats17.jpg",
      category:"flats",
      gender:"female",
      price: 32.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats18.jpg",
      category:"flats",
      gender:"female",
      price: 30.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats19.jpg",
      category:"flats",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats20.jpg",
      category:"flats",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats21.jpg",
      category:"flats",
      gender:"female",
      price: 23.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
     {
      title: "Flat Shoes for Women",
      image: "../images/sneakers-images/trenddaily-women-flats22.jpg",
      category:"flats",
      gender:"female",
      price: 22.99,
      shopUrl: "https://amzn.to/4fgMxPA"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes1.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 42.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes2.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 42.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes3.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 42.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes4.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 43.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes5.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 58.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes6.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 52.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes7.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 32.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes8.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 40.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes9.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 41.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes10.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 50.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes11.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 38.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes12.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 38.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes13.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 35.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes14.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 52.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes15.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 43.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes16.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 42.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes17.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 42.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Corporate Shoes for Men",
      image: "../images/sneakers-images/trenddaily-mens-corporate-shoes18.jpg",
      category:"corporate-shoes",
      gender:"male",
      price: 32.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
     {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots1.jpg",
      category:"boots",
      gender:"male",
      price: 170.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots2.jpg",
      category:"boots",
      gender:"male",
      price: 47.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots3.jpg",
      category:"boots",
      gender:"male",
      price: 156.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots4.jpg",
      category:"boots",
      gender:"male",
      price: 47.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots5.jpg",
      category:"boots",
      gender:"male",
      price: 47.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots6.jpg",
      category:"boots",
      gender:"male",
      price: 47.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots7.jpg",
      category:"boots",
      gender:"male",
      price: 224.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots8.jpg",
      category:"boots",
      gender:"male",
      price: 46.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots9.jpg",
      category:"boots",
      gender:"male",
      price: 47.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots10.jpg",
      category:"boots",
      gender:"male",
      price: 38.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots11.jpg",
      category:"boots",
      gender:"male",
      price: 129.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots12.jpg",
      category:"boots",
      gender:"male",
      price: 87.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots13.jpg",
      category:"boots",
      gender:"male",
      price: 37.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots14.jpg",
      category:"boots",
      gender:"male",
      price: 41.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots15.jpg",
      category:"boots",
      gender:"male",
      price: 44.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots16.jpg",
      category:"boots",
      gender:"male",
      price: 137.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots17.jpg",
      category:"boots",
      gender:"male",
      price: 129.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
    {
      title: "Boots for Men",
      image: "../images/sneakers-images/trenddaily-mens-boots18.jpg",
      category:"boots",
      gender:"male",
      price: 147.99,
      shopUrl: "https://amzn.to/4okhLJM"
    },
     {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots1.jpg",
      category:"boots",
      gender:"female",
      price: 49.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots2.jpg",
      category:"boots",
      gender:"female",
      price: 66.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots3.jpg",
      category:"boots",
      gender:"female",
      price: 159.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots4.jpg",
      category:"boots",
      gender:"female",
      price: 99.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots5.jpg",
      category:"boots",
      gender:"female",
      price: 49.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots6.jpg",
      category:"boots",
      gender:"female",
      price: 46.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots7.jpg",
      category:"boots",
      gender:"female",
      price: 42.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots8.jpg",
      category:"boots",
      gender:"female",
      price: 45.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots9.jpg",
      category:"boots",
      gender:"female",
      price: 48.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots10.jpg",
      category:"boots",
      gender:"female",
      price: 48.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Boots for Women",
      image: "../images/sneakers-images/trenddaily-womens-boots11.jpg",
      category:"boots",
      gender:"female",
      price: 47.99,
      shopUrl: "https://amzn.to/40QKGLw"
    },
    {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels1.jpg",
      category:"heels",
      gender:"female",
      price: 105.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels2.jpg",
      category:"heels",
      gender:"female",
      price: 35.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels3.jpg",
      category:"heels",
      gender:"female",
      price: 38.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels4.jpg",
      category:"heels",
      gender:"female",
      price: 32.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels5.jpg",
      category:"heels",
      gender:"female",
      price: 34.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels6.jpg",
      category:"heels",
      gender:"female",
      price: 55.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels7.jpg",
      category:"heels",
      gender:"female",
      price: 45.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels8.jpg",
      category:"heels",
      gender:"female",
      price: 45.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels9.jpg",
      category:"heels",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels10.jpg",
      category:"heels",
      gender:"female",
      price: 37.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels11.jpg",
      category:"heels",
      gender:"female",
      price: 37.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels12.jpg",
      category:"heels",
      gender:"female",
      price: 39.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels13.jpg",
      category:"heels",
      gender:"female",
      price: 39.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels14.jpg",
      category:"heels",
      gender:"female",
      price: 36.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels15.jpg",
      category:"heels",
      gender:"female",
      price: 53.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels16.jpg",
      category:"heels",
      gender:"female",
      price: 35.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels17.jpg",
      category:"heels",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels18.jpg",
      category:"heels",
      gender:"female",
      price: 36.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels19.jpg",
      category:"heels",
      gender:"female",
      price: 30.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels20.jpg",
      category:"heels",
      gender:"female",
      price: 34.99,
      shopUrl: "https://amzn.to/3U785od"
    },
     {
      title: "Heels for Women",
      image: "../images/sneakers-images/trenddaily-womens-heels21.jpg",
      category:"heels",
      gender:"female",
      price: 38.99,
      shopUrl: "https://amzn.to/3U785od"
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
      grid.innerHTML = '<p class="filterMessage">No products match your filters. Click Reset.</p>';
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

