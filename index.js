const sunIcon = document.querySelector(".feather-sun");
const moonIcon = document.querySelector(".feather-moon");

// Check if dark mode is already set in localStorage and apply it
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
}

// Toggle Dark Mode
sunIcon.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
  localStorage.setItem("dark-mode", "true");  // Save preference
});

moonIcon.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
  localStorage.setItem("dark-mode", "false");  // Save preference
});




// this is for pop part

// Get the button, modal, and close button
const aboutMeBtn = document.getElementById("aboutMeBtn");
const aboutMeModal = document.getElementById("aboutMeModal");
const closeModal = document.getElementById("closeModal");

// Show the modal when the button is clicked
aboutMeBtn.addEventListener("click", () => {
  aboutMeModal.classList.remove("hidden");
  aboutMeModal.classList.add("show");

  // Disable the "About Me" button while the modal is open
  aboutMeBtn.disabled = true;
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  aboutMeModal.classList.remove("show");
  aboutMeModal.classList.add("hidden");

  // Enable the "About Me" button after the modal is closed
  aboutMeBtn.disabled = false;
});

// Optionally close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === aboutMeModal) {
    aboutMeModal.classList.remove("show");
    aboutMeModal.classList.add("hidden");
    aboutMeBtn.disabled = false;
  }
});

// this is end of pop

// Get the button and the target section
const scrollButton = document.getElementById('scrollButton');
const targetSection = document.getElementById('targetSection');

// Add event listener to the button
scrollButton.addEventListener('click', function() {
  // Scroll to the target section smoothly
  targetSection.scrollIntoView({
    behavior: 'smooth',  // Smooth scroll
    block: 'start'       // Align to the top of the section
  });
});
