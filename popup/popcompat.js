// Get close buttons
let closeBtn = document.querySelector(".close-btn");

// Close popup on close button click
closeBtn.addEventListener("click", e => {
  window.close();
});