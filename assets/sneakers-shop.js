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
      title: "Elegant Black Gown",
      image: "../images/formalwear-images/blackgowns-1.jpg",
      price: "$89.99",
      shopUrl: "#"
    },
    {
      title: "Classic White Blazer",
      image: "../images/formalwear-images/blackgowns-1.jpg",
      price: "$120.00",
      shopUrl: "#"
    },
    {
      title: "Silk Formal Dress",
      image: "../images/formalwear-images/blackgowns-1.jpg",
      price: "$150.00",
      shopUrl: "#"
    },
    // Add more formal wear products here
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

  initZoomEffect(); // Initialize zoom for dynamically added images
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
