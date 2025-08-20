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

 // app.js
 let userInput = "alert('Some security issue!')";
 eval(userInput);  // BAD: should trigger a security hotspot

//some duplicate code for test run
 function duplicate1() {
  console.log("duplicate code");
}

function duplicate2() {
  console.log("duplicate code");
}

/*
 This is a very long comment line repeated many times for trigerring maintainability issue
 This is a very long comment line repeated many times
 This is a very long comment line repeated many times
*/

/*
 This is a very long comment line repeated many times
 This is a very long comment line repeated many times
 This is a very long comment line repeated many times
*/
