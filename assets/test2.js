document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 0.4s ease';
  setTimeout(() => { preloader.style.display = 'none'; }, 400);

  const filterBtn = document.getElementById('filterBtn');
  const resetBtn = document.getElementById('resetBtn');
  const grid = document.getElementById("categoryGrid");
  const loadingOverlay = document.getElementById('loadingOverlay');

  const formalProducts = [
     {
      title: "BagSmart Tote Bag For Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag1.jpg",
     category:"bags",
      gender:"female",
      price: 16.90,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote Bag (BagSmart) for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag2.jpg",
     category:"bags",
      gender:"female",
      price: 16.90,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Leather Laptop Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag3.jpg",
     category:"bags",
      gender:"female",
      price: 27.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Sleek Portable Black Tote (Women)",
      image: "../images/bag-images/trenddaily-female-black-tote-bag4.jpg",
      category:"bags",
      gender:"female",
      price: 29.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Montana West Tote Bag For Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag5.jpg",
     category:"bags",
      gender:"female",
      price: 16.99,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Lovevook Black Tote Bag For Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag6.jpg",
   category:"bags",
      gender:"female",
      price: 24.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Leather Laptop Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag7.jpg",
    category:"bags",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Genuine Leather Tote Bag",
      image: "../images/bag-images/trenddaily-female-black-tote-bag8.jpg",
      category:"bags",
      gender:"female",
      price: 26.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Marc Jacobs Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag9.jpg",
      category:"bags",
      gender:"female",
      price: 17.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Leather Tote bag Formal(For Women)",
      image: "../images/bag-images/trenddaily-female-black-tote-bag10.jpg",
     category:"bags",
      gender:"female",
      price: 17.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Genuine Leather Black Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag11.jpg",
    category:"bags",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Tote Bags For Women Canvas with Mini Purse",
      image: "../images/bag-images/trenddaily-female-black-tote-bag12.jpg",
     category:"bags",
      gender:"female",
      price: 20.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Leather Black Tote for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag13.jpg",
     category:"bags",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote bag For Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag14.jpg",
      category:"bags",
      gender:"female",
      price: 27.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote bag (Leather for Women)",
      image: "../images/bag-images/trenddaily-female-black-tote-bag15.jpg",
      category:"bags",
      gender:"female",
      price: 27.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote bag (Leather) for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag16.jpg",
    category:"bags",
      gender:"female",
      price: 27.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "TOP Design Heavy Duty Canvas Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag17.jpg",
      category:"bags",
      gender:"female",
      price: 22.90,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Pink Nishell Travel Puffy Tote bag (best for Travelling)",
      image: "../images/bag-images/trenddaily-female-black-tote-bag18.jpg",
     category:"bags",
      gender:"female",
      price: 36.99,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Top Design Puffer Tote Bag (For Women)",
      image: "../images/bag-images/trenddaily-female-black-tote-bag19.jpg",
    category:"bags",
      gender:"female",
      price: 24.00,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "BagSmart Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag20.jpg",
      category:"bags",
      gender:"female",
      price: 22.90,
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Canvas Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag21.jpg",
      category:"bags",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/3U56lf2"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag1.jpg",
      category:"bags",
      gender:"female",
      price: 26.90,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag2.jpg",
      category:"bags",
      gender:"female",
      price: 27.90,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag3.jpg",
      category:"bags",
      gender:"female",
      price: 27.90,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag4.jpg",
      category:"bags",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag5.jpg",
      category:"bags",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag6.jpg",
      category:"bags",
      gender:"female",
      price: 27.99,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag7.jpg",
      category:"bags",
      gender:"female",
      price: 26.99,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag8.jpg",
      category:"bags",
      gender:"female",
      price: `<s>$34.99</s> `+26.90,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag9.jpg",
      category:"bags",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag10.jpg",
      category:"bags",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag11.jpg",
      category:"bags",
      gender:"female",
      price: 29.97,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag12.jpg",
      category:"bags",
      gender:"female",
      price: 29.97,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag13.jpg",
      category:"bags",
      gender:"female",
      price: 29.99,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag14.jpg",
      category:"bags",
      gender:"female",
      price: 34.99,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag15.jpg",
      category:"bags",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag16.jpg",
      category:"bags",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag17.jpg",
      category:"bags",
      gender:"female",
      price: 35.99,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag18.jpg",
      category:"bags",
      gender:"female",
      price: 33.70,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag19.jpg",
      category:"bags",
      gender:"female",
      price: 29.90,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag20.jpg",
      category:"bags",
      gender:"female",
      price: 26.95,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-tote-bag21.jpg",
      category:"bags",
      gender:"female",
      price: 36.90,
      shopUrl: "https://amzn.to/46yYX34"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag1.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 16.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag2.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 16.99,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag3.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 19.99,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag4.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 26.99,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag5.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 17.99,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag6.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 16.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag7.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 16.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag8.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 16.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag9.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 19.99,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag10.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 18.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag11.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 19.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag12.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 18.99,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag13.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 36.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag14.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 19.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag15.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 19.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag16.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 21.99,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag17.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 34.99,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag18.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 25.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Crossbody Bags",
      image: "../images/bag-images/trenddaily-crossbody-bag19.jpg",
      category:"crossbody-bags",
      gender:"unisex",
      price: 24.90,
      shopUrl: "https://amzn.to/3UI0dJT"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag1.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 17.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag2.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 14.99,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag3.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 24.99,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag4.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 24.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag5.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 19.99,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag6.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 19.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag7.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 19.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag8.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 14.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag9.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 14.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag10.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 23.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag11.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 12.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag12.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 14.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag13.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 25.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag14.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 7.99,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag15.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 11.99,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag16.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 14.90,
      shopUrl: "https://amzn.to/451mAAb"
    },
    {
      title: "Female Clutch Bags",
      image: "../images/bag-images/trenddaily-female-clutch-bag17.jpg",
      category:"clutch-bags",
      gender:"female",
      price: 8.99,
      shopUrl: "https://amzn.to/451mAAb"
    },
     {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks1.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 35.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks2.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 43.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks3.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 25.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks4.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 36.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks5.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 39.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks6.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 29.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks7.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 45.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks8.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 33.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks9.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 38.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks10.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 32.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks11.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 33.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks12.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 36.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks13.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 25.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks14.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 29.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks15.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 28.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks16.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 29.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks17.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 27.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks18.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 29.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks19.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 29.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks20.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 34.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    {
      title: "Backpacks",
      image: "../images/bag-images/trenddaily-backpacks21.jpg",
      category:"backpacks",
      gender:"unisex",
      price: 41.99,
      shopUrl: "https://amzn.to/40PTOzY"
    },
    
    
    // Add more formal wear products here
  ];
  
  /* Filter pop up */
  
  const target = document.getElementById('filter');
  const button = document.getElementById("filter-Btn");

  const observer2 = new IntersectionObserver(entries => {
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
observer2.observe(target);
  
  
  /* Filter pop up ends */

  // ===== BATCH VARIABLES =====
  let productIndex = 0;
  const batchSize = 20;
  let currentList = [...formalProducts]; // filtered or all products

  // ===== RENDER A BATCH =====
  function renderBatch(list) {
    if (list.length === 0) {
      grid.innerHTML = '<p class="filterMessage">No products match your filters. Click Reset.</p>';
      return;
    }
    const nextBatch = list.slice(productIndex, productIndex + batchSize);
    nextBatch.forEach(product => {
      const card = document.createElement('div');
      card.classList.add("card");
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";

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

      requestAnimationFrame(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
    });

    productIndex += batchSize;

    if (productIndex >= list.length) {
      observer.disconnect();
      loaderSentinel.remove();
    }

    initZoomEffect();
  }

  // ===== SENTINEL =====
  const loaderSentinel = document.createElement('div');
  loaderSentinel.id = "loaderSentinel";
  grid.after(loaderSentinel);

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      renderBatch(currentList);
    }
  }, { rootMargin: "200px" });

  observer.observe(loaderSentinel);

  // ===== FILTER FUNCTIONS =====
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

    // reset batching
    grid.innerHTML = '';
    grid.after(loaderSentinel);
    observer.observe(loaderSentinel);
    currentList = filtered;
    productIndex = 0;

    loadingOverlay.style.display = 'flex';
    setTimeout(() => {
      renderBatch(currentList);
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
    applyFilters(); // resets to all products
  }

  // ===== EVENT LISTENERS =====
  document.querySelectorAll('input[type="checkbox"], input[type="number"]').forEach(el => {
    el.addEventListener('input', checkFiltersActive);
  });

  filterBtn.addEventListener('click', () => {
    if (filterBtn.classList.contains('active')) {
      applyFilters();
    }
  });

  resetBtn.addEventListener('click', resetFilters);

  // ===== INITIAL LOAD =====
  renderBatch(currentList);
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







   