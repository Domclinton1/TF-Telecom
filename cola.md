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