function toggleMenu() {
    const menu = document.querySelector('.menuFilho');
    menu.classList.toggle('active');
}

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const menuPai = document.querySelector('.menuPai');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        menuPai.style.top = "-170px";
    } else {
        menuPai.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

window.addEventListener('click', function(event) {
    const menu = document.querySelector('.menuFilho');
    const menuHamburguer = document.querySelector('.hamburger');
    if (!menu.contains(event.target) && !menuHamburguer.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Função para fechar o menu quando a página é rolada
function closeMenuOnScroll() {
    var menu = document.getElementById('menuFilho');

    // Verifica se o menu está aberto
    if (menu.classList.contains('active')) {
        // Fecha o menu
        menu.classList.remove('active');
    }
}

// Adiciona um event listener para escutar por rolagens na página
window.addEventListener('scroll', closeMenuOnScroll);



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
function fiber(){
    var click = document.getElementById('#fiber')
    window.location.href = '#fiber'
}
function contato(){
    var click = document.getElementById('#contato')
    window.location.href = '#contato'
}
function wpp() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto...")
}
function plano1() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20contratar%20o%20plano%20de%20internet%20de 420 MEGA...")
}
function plano2() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20contratar%20o%20plano%20de%20internet%20de 750 MEGA...")
}
function plano3() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20contratar%20o%20plano%20de%20internet%20de 780 MEGA...")
}
function plano4() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20contratar%20o%20plano%20de%20internet%20de 850 MEGA...")
}
function plano5() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531997715545?text=Ola,%20quero%20contratar%20o%20plano%20de%20internet%20de 1 GIGA...")
}
function wpp2() {
    var click = document.querySelectorAll('.cta')
    window.open("https://wa.me/5531992616974?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto...")
}
function email(){
    var click = document.querySelectorAll('email')
    window.location.href = 'mailto:fctelecom24@gmail.com';
}
function face() {
    var click = document.querySelectorAll('face')
    window.open("https://www.facebook.com/profile.php?id=61567112390613")
}
function insta(){
    var click = document.querySelectorAll('insta')
    window.open("https://www.instagram.com/tftelecom_ltda/")
}

document.addEventListener("DOMContentLoaded", function(){
    const openModalButtons = document.querySelectorAll(".openModal");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    openModalButtons.forEach(function(button){
        button.addEventListener("click", function(){
            const modalId = button.getAttribute("data-modal-id");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener("click", function(){
            const modal = button.closest(".modal");
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});