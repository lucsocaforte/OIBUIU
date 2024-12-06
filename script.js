// Função para alternar o tema claro e escuro
const toggleThemeButton = document.createElement('button');
toggleThemeButton.innerText = 'Alternar Tema';
toggleThemeButton.style.position = 'fixed';
toggleThemeButton.style.top = '20px';
toggleThemeButton.style.right = '20px';
toggleThemeButton.style.padding = '10px 20px';
toggleThemeButton.style.backgroundColor = '#2e7d32';
toggleThemeButton.style.color = '#ffffff';
toggleThemeButton.style.border = 'none';
toggleThemeButton.style.borderRadius = '5px';
toggleThemeButton.style.cursor = 'pointer';
toggleThemeButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
    const currentBackground = getComputedStyle(document.body).backgroundColor;
    if (currentBackground === 'rgb(232, 245, 233)') { // Tema claro
        document.body.style.backgroundColor = '#212121';
        document.body.style.color = '#f4f4f4';
        toggleThemeButton.style.backgroundColor = '#f4f4f4';
        toggleThemeButton.style.color = '#212121';
    } else { // Tema escuro
        document.body.style.backgroundColor = '#e8f5e9';
        document.body.style.color = '#212121';
        toggleThemeButton.style.backgroundColor = '#2e7d32';
        toggleThemeButton.style.color = '#ffffff';
    }
});

// Função para destacar o cabeçalho ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Animação suave para seções ao serem exibidas
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Exibir mensagem ao clicar em links do rodapé
const socialLinks = document.querySelectorAll('footer .social-media a');
socialLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert(`Você clicou no link: ${link.textContent}`);
    });
});
