@media screen and (max-width: 450px) {
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        position: relative;
        width: 100%;
    }

    .logo img {
        width: 75px;
    }

    .nav {
        display: none; /* Menu oculto inicialmente */
        flex-direction: column;
        position: absolute;
        top: 60px; /* Ajuste para aparecer abaixo do header */
        right: 0;
        background-color: #333; /* Pode ajustar conforme necessário */
        width: 100%;
        text-align: right;
        padding: 10px 0;
    }

    .nav.active {
        display: flex; /* Exibe o menu ao clicar no ícone */
    }

    .nav li {
        list-style: none;
        padding: 10px 20px;
        color: white; /* Ajuste de cor conforme necessário */
        cursor: pointer;
    }

    .cta {
        width: 200px;
        height: 25px;
        margin-top: 10px;
    }

    .hamburger {
        display: block; /* Exibe o ícone do menu hamburguer */
        cursor: pointer;
    }

    .hamburger span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #D4A157;
        margin: 5px 0;
        transition: all 0.3s ease;
    }
    
    /* Transições para quando o menu estiver aberto */
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
}






/*
// Seleciona os elementos
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
let lastScrollTop = 0;

// Função para abrir e fechar o menu ao clicar no hambúrguer
function toggleMenu() {
    menu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);

// Função para ocultar o menu ao clicar fora dele
window.addEventListener('click', function(event) {
    const hamburger = document.getElementById('hamburger');
    
    // Verifica se o clique foi fora do menu ou do botão de hambúrguer
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Função para esconder o menu ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Se estiver rolando para baixo, esconde o header
    if (scrollTop > lastScrollTop) {
        header.style.top = "-170px"; // Ajuste a altura conforme necessário
    } else {
        header.style.top = "0"; // Mostra o header ao rolar para cima
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos

    // Fecha o menu se ele estiver aberto ao rolar a página
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// Função para fechar o menu ao clicar em um item do menu
const menuItems = document.querySelectorAll('.nav li a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
*/

// Função para abrir e fechar o menu ao clicar no hambúrguer