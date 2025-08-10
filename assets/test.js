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
      title: "Elegant Black Gown",
      image: "../images/formalwear-images/blackgowns-1.jpg",
      category:"bags",
      gender:"female",
      price: 89.99,
      shopUrl: "#"
    },
    {
      title: "Classic White Blazer",
      image: "../images/formalwear-images/blackgowns-1.jpg",
      category:"bags",
      gender:"female",
      price: 120.00,
      shopUrl: "#"
    },
    {
      title: "Silk Formal Dress",
      image: "../images/formalwear-images/blackgowns-1.jpg",
      category:"bags",
      gender:"female",
      price: 150.00,
      shopUrl: "#"
    },
    
    // Add more formal wear products here
  ];
  
   
  
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

