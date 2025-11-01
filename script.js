
const modeToggle = document.getElementById('modeToggle');
const body = document.body;


if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  modeToggle.textContent = '☀️';
}


modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    modeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    modeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const menu = dropdown.querySelector('.dropdown-menu');
  
  dropdown.addEventListener('mouseenter', () => {
    menu.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
  });
});


const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', function() {
  let filter = searchInput.value.toLowerCase();
  let items = document.querySelectorAll('.product-card');

  items.forEach(item => {
    let text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});


window.addEventListener('scroll', () => {
  const nav = document.querySelector('header');
  if (window.scrollY > 50) {
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; 
    nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    nav.style.transition = '0.4s';
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.boxShadow = 'none';
  }
});
