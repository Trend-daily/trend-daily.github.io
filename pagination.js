document.addEventListener("DOMContentLoaded",()=>{

   
  // Array of pagination button data
  const buttonsData = [
    { label: "Trending Bags", link: "trending/trending-bags.html" },
    { label: "Streetwear", link: "trending/streetwear-trends.html" },
    { label: "Formal Wear", link: "trending/formalwear-trends.html" },
    { label: "Sneakers", link: "trending/sneakers-trends.html" },
    { label: "Trending", link: "trending/trends.html" },
  ];

  const paginationContainer = document.getElementById("paginationButtons");
  const toggleMore = document.getElementById("toggleMore");
  let expanded = false;

  // Render pagination buttons based on expanded state
  function renderButtons() {
    paginationContainer.innerHTML = ""; // Clear previous buttons

    buttonsData.forEach((btn, index) => {
      const button = document.createElement("button");
      button.textContent = btn.label;
      button.onclick = () => window.location.href = btn.link;

      // Hide buttons after the first 2 if not expanded
      if (!expanded && index > 1) {
        button.classList.add("hidden");
      }

      paginationContainer.appendChild(button);
    });
  }

  // Toggle 'More' link to show or hide extra buttons
  toggleMore.addEventListener("click", (e) => {
    e.preventDefault();
    expanded = !expanded;
    toggleMore.textContent = expanded ? "Show Less" : "More";
    renderButtons();
  });

  // Call once on page load
  renderButtons();

  // OPTIONAL: Add new button dynamically (example)
  // buttonsData.push({ label: "11", link: "page11.html" });
  // renderButtons();
  
  
  

})
