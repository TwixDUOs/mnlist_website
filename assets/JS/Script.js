document.addEventListener('DOMContentLoaded', function() {
    let menuBtn = document.querySelector('.menu_shape-btn');
    let menu = document.querySelector('.menu_shape');
  
    menuBtn.addEventListener('click', function() {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    });
  });