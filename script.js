// Sidebar toggle

const menu = document.querySelector("#menu");
const body = document.querySelector("body");

function openNav() {
  menu.style.width = "100%";
  body.style.overflow = "hidden";
}

function closeNav() {
  menu.style.width = "0";
  body.style.overflow = "auto";
}

// Closing the sidebar after clicking on the navlinks

const navLink = document.getElementById('menu').querySelectorAll('a#navLink');

if (window.innerWidth > 320 && window.innerWidth < 768) {
  Array.from(navLink).forEach((link) => {
    link.addEventListener('click', () => {
      document.getElementById('menu').style.width = "0";
      body.style.overflow = "auto";
      document.getElementById('toggle').classList.remove('active');
    });
  });
}

// Navbar dropdown

$(document).ready(function() {
  $('.dropdown').click(function() {
    $('#collapse').slideToggle('fast');
  });
});

// Navbar Dropdown icon rotation

function dropDown() {
  let x = document.getElementById('icon');
  if (x.style.transform == "rotate(0deg)") {
    x.style.transform = "rotate(180deg)";
  }
  else {
    x.style.transform = "rotate(0deg)";
  }
}


// Swiper Carousel

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: true,
  loop: true,
});


// Typing Animation

var typed = new Typed('#element', {
  strings: ['Classic', 'Zero', 'Light'],
  typeSpeed: 270,
  loop: true,
  smartBackspace: true,
});
