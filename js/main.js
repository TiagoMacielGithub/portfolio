document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navMenu = document.getElementById('navMenu');

  // Identifica a página atual pelo nome do arquivo na URL
  const currentFileName = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');

    // Se o link corresponder à página aberta, ativa o botão
    if (linkHref === currentFileName || (currentFileName === '' && linkHref === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }

    // Fecha automaticamente o menu no celular ao clicar em um link
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });
});
