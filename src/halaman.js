elNavMenu.forEach(element => {
  element.addEventListener('click', bukaHalaman);
});

// global fungsi
function bukaHalaman(e) {
  e.preventDefault()
  elNavMenu.forEach(element => {
    element.classList.remove('active')
  });
  this.classList.add('active')
  const dataMenu = this.getAttribute('menu');

  elHalaman.forEach(element => {
    element.classList.add('d-none')
  })
  document.getElementById(dataMenu).classList.remove('d-none')
 
}