// Get elements
const atom = document.getElementById('atom');
const pride = document.getElementById('pride');
const limit = document.getElementById('limit');
const homeImages = document.querySelector('.homeImages'); // Fix the undefined reference

// Function to handle hover effect
const applyHoverEffect = () => {
    atom.style.transform = "translate(0px, 20px) scale(1.05)";
    pride.style.transform = "rotate(-40deg)";
    limit.style.transform = "rotate(40deg)";
};

// Function to reset to the original state
const resetHoverEffect = () => {
    atom.style.transform = "translate(0px, 0px) scale(1)";
    pride.style.transform = "rotate(-20deg)";
    limit.style.transform = "rotate(20deg)";
};

// Add event listeners for hover effects
atom.addEventListener('mouseenter', applyHoverEffect);
atom.addEventListener('mouseleave', resetHoverEffect);

// Initial animation on page load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        homeImages.classList.add('animate'); // Add animation class
    }, 100); // Adjust delay if needed
});
