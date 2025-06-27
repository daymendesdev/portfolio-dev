document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navBar = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-bar a');

    console.log('Menu carregado');
    console.log('Hamburger:', hamburger);
    console.log('Nav:', navBar);

    if (hamburger && navBar) {
        hamburger.addEventListener('click', function() {
            console.log('Clicou no hamburger');
            hamburger.classList.toggle('active');
            navBar.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

  
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navBar.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}); 