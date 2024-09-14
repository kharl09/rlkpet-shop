// Modal functionality
const modal = document.getElementById("announcementModal");
const closeBtn = document.querySelector(".close-btn");

// Show modal when page loads
window.onload = function() {
    modal.style.display = "flex"; // Changed from "block" to "flex" for proper alignment
};

// Close modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});