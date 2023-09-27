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
    for (const key in elPage) {
      if (Object.hasOwnProperty.call(elPage, key)) {
        const element = elPage[key];
        element.classList.remove('d-none')
      }
    }
  
    for (const key in elPage) {
      if (Object.hasOwnProperty.call(elPage, key)) {
        const element = elPage[key];
        if (key !== dataMenu)
          element.classList.add('d-none')
      }
    }
    elBody.classList.remove('align-items-center', 'd-flex')
    if (dataMenu === 'home-page') {
      elBody.classList.add('align-items-center', 'd-flex')
    }
  }