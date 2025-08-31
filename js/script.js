// Animate a sphere moving along a given SVG path
function animateSphere(pathId, sphereSelector, duration) {
  const path = document.querySelector(pathId);
  const sphere = document.querySelector(sphereSelector);
  if (!path || !sphere) return;

  const length = path.getTotalLength();
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = ((timestamp - start) % duration) / duration;
    const point = path.getPointAtLength(progress * length);
    sphere.style.transform = `translate(${point.x}px, ${point.y}px) translate(-20px, -20px)`;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Start sphere animations on both paths
animateSphere("#motionPath", ".gold-sphere", 4000);
animateSphere("#aboutMotionPath", ".about-sphere", 5000);

// Navigation toggle elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

// Toggle nav menu and overlay on menu button click
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navOverlay.classList.toggle("show");
});

// Hide nav menu and overlay when clicking on overlay
navOverlay.addEventListener("click", () => {
  navLinks.classList.remove("show");
  navOverlay.classList.remove("show");
});
