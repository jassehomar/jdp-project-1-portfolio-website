const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navbar .nav-item");
const mobileNav = document.querySelector('.mobile-nav');

const toggleButton = document.querySelector('.toggle-button');

document.addEventListener('scroll', function() {

  if (window.scrollY >= navbar.offsetHeight + 50) {
    navbar.classList.add('light');
    mobileNav.classList.add('light');
    toggleButton.querySelector('i').style.color = "black"
  } else {
    navbar.classList.remove('light');
    mobileNav.classList.remove('light');
    toggleButton.querySelector('i').style.color = "white"
  }
  
  if (window.scrollY >= 200) {
    document.querySelector('.back-to-top').style.opacity = 1;
  } else {
    document.querySelector('.back-to-top').style.opacity = 0;
  }

  // set active nav on scroll
  let active = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    console.log('section top: ' + sectionTop)
    if (window.scrollY >= sectionTop - 50) {
      active = section.getAttribute("id");
    }
  });

  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
    if (navItem.getAttribute('href').slice(1) == active) {
      navItem.classList.add("active");
    }
  });
})

toggleButton.addEventListener('click', function() {
  mobileNav.classList.toggle('show');
  toggleButton.querySelector('i').classList.toggle('fa-bars');
  toggleButton.querySelector('i').classList.toggle('fa-times');
});

document.addEventListener('click', function(event) {
  
  console.dir(event.target);
  if (event.target.parentElement != toggleButton) {
    
    if (toggleButton.querySelector('i').classList.contains('fa-times')) {
      toggleButton.querySelector('i').classList.remove('fa-times');
      toggleButton.querySelector('i').classList.add('fa-bars');
    }

    mobileNav.classList.remove('show');
  }
});