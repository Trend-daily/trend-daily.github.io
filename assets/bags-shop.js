document.addEventListener("DOMContentLoaded", () => {
  // Hide preloader after everything is fully loaded
const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.4s ease';
    
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 400); // Allow fade out before removing
 
  const formalProducts = [
   {
      title: "BagSmart Tote Bag For Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag1.jpg",
      price: "$16.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote Bag (BagSmart) for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag2.jpg",
      price:`<s>$48.99</s> ` + "$16.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Leather Laptop Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag3.jpg",
      price: `<s>$33.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Sleek Portable Black Tote (Women)",
      image: "../images/bag-images/trenddaily-female-black-tote-bag4.jpg",
      price: `<s>$28.99</s> ` + "$19.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Montana West Tote Bag For Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag5.jpg",
      price: `<s>$18.99</s> ` + "$16.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Lovevook Black Tote Bag For Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag6.jpg",
      price: `<s>$48.99</s> ` + "$24.79",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Leather Laptop Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag7.jpg",
      price:`<s>$48.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Genuine Leather Tote Bag",
      image: "../images/bag-images/trenddaily-female-black-tote-bag8.jpg",
      price: `<s>$28.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Marc Jacobs Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag9.jpg",
      price: `<s>$28.99</s> ` + "$16.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Leather Tote bag Formal(For Women)",
      image: "../images/bag-images/trenddaily-female-black-tote-bag10.jpg",
      price: `<s>$28.99</s> ` + "$16.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Genuine Leather Black Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag11.jpg",
      price: `<s>$28.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Tote Bags For Women Canvas with Mini Purse",
      image: "../images/bag-images/trenddaily-female-black-tote-bag12.jpg",
      price: `<s>$23.99</s> ` + "$19.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Leather Black Tote for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag13.jpg",
      price: `<s>$48.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote bag For Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag14.jpg",
      price: `<s>$48.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote bag (Leather for Women)",
      image: "../images/bag-images/trenddaily-female-black-tote-bag15.jpg",
      price:`<s>$28.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Tote bag (Leather) for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag16.jpg",
      price: `<s>$28.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "TOP Design Heavy Duty Canvas Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag17.jpg",
      price: `<s>$48.99</s> ` + "$22.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Pink Nishell Travel Puffy Tote bag (best for Travelling)",
      image: "../images/bag-images/trenddaily-female-black-tote-bag18.jpg",
      price: `<s>$51.99</s> ` + "$36.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Top Design Puffer Tote Bag (For Women)",
      image: "../images/bag-images/trenddaily-female-black-tote-bag19.jpg",
      price: `<s>$28.99</s> ` + "$23.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "BagSmart Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag20.jpg",
      price: `<s>$28.99</s> ` + "$22.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
     {
      title: "Black Canvas Tote Bag for Women",
      image: "../images/bag-images/trenddaily-female-black-tote-bag21.jpg",
      price: `<s>$28.99</s> ` + "$26.99",
      shopUrl: "https://amzn.to/3U56lf2"
    },
    
  ];
  const grid = document.getElementById("categoryGrid");

  formalProducts.forEach((product, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="image-zoom-wrapper">
        <div class="loader"></div>
        <img class="zoom-image" src="${product.image}" alt="${product.title}" style="display: none;" />
      </div>
      <div class="card-body">
        <h3 class="card-title">${product.title}</h3>
        <p class="price">${product.price}</p>
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

  // Animate in with staggered IntersectionObserver
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        setTimeout(() => {
          card.classList.add("animate-in");
        }, i * 100); // staggered delay
        observer.unobserve(card);
      }
    });
  }, {
    threshold: 0.2
  });

  cards.forEach(card => observer.observe(card));

  initZoomEffect(); // Initialize zoom
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

