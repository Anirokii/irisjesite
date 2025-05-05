
// Function to handle the reveal animation when elements come into view
export const setupRevealAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const reveal = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const element = revealElements[i];
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150; // Distance from the viewport bottom when element becomes visible
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    }
  };
  
  // Initial check on page load
  reveal();
  
  // Add event listener for scroll
  window.addEventListener('scroll', reveal);
  
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};
