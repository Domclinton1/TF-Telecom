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

function toggleMenu() {
    const menu = document.querySelector('#menuFilho');
    menu.classList.toggle('active');
}

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const menuPai = document.querySelector('.menuPai');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        menuPai.style.top = "-170px";
    } else {
        // Scrolling up
        menuPai.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// Fecha o menu ao clicar fora dele
window.addEventListener('click', function(event) {
    const menu = document.querySelector('#menuFilho');
    const menuHamburger = document.querySelector('#menuHamburger');
    if (!menu.contains(event.target) && !menuHamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Fecha o menu ao rolar a página
window.addEventListener('scroll', function() {
    const menu = document.querySelector('#menuFilho');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

//adciona slide as imagens
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Muda a imagem a cada 3 segundos
setInterval(showNextSlide, 3000);




function inicio() {
    var click = document.getElementById('#inicio')
    window.location.href = '#inicio'
}
function services(){
    var click = document.getElementById('#services')
    window.location.href = '#services'
}
function sobre(){
    var lick = document.getElementById('#sobre')
    window.location.href = '#sobre'
}
function clientes(){
    var click = document.getElementById('#clientes')
    window.location.href = '#clientes'
}
function contato(){
    var click = document.getElementById('#contato')
    window.location.href = '#contato'
}
function wpp() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto...")
}
function wpp2() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531992616974?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto...")
}
function email(){
    var click = document.querySelectorAll('email')
    window.location.href = 'mailto:fctelecom24@gmail.com';
}