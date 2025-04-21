// Sticky Navbar
window.onscroll = function () {
    toggleNavbarSticky();
  };
  
  const navbar = document.getElementById('navbar');
  const sticky = navbar.offsetTop;
  
  function toggleNavbarSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  