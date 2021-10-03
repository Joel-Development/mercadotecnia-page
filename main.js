const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener('click',e => {
  if(!e.target.classList.contains('toggle--show'))
  {
    e.target.classList.add('toggle--show');
    menu.classList.add('menu--show');
  }
  else
  {
    e.target.classList.remove('toggle--show');
    menu.classList.remove('menu--show');
  }
})