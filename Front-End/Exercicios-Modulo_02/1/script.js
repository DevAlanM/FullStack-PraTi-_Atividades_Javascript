 const toggleButton = document.getElementById('menu-toggle');
  const navbarMenu = document.querySelector('.navbar ul');

  toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });