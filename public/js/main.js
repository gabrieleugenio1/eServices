// EFEITO HOVER DOS CARDS DE SERVIÇO
const i = document.querySelectorAll('.icon-box');
const card = document.querySelectorAll('.criarpost');


card.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        i.forEach((i) => {
            i.style.backgroundColor = 'var(--cor-principal)';
        })
    })
})

card.forEach((card) => {
    card.addEventListener('mouseleave', () => {
        i.forEach((i) => {
            i.style.backgroundColor = 'var(--cor-hover)';
        })
    })
})

// MENU HAMBURGUER
const toggleNButton = document.querySelector('.toggle-button');
const iconMenu = document.querySelector('.fa-bars')
const toggleItens = document.querySelector('.toggle-itens')
const footer = document.getElementsByTagName('footer')

let countClick = 0;


toggleNButton.addEventListener('click', () => {
    if (countClick == 0) {
        iconMenu.classList.replace('fa-bars', 'fa-xmark')
        toggleItens.style.display = 'block';
        window.scroll(0, 0)
   
        countClick++;
    } else if (countClick == 1) {
        iconMenu.classList.replace('fa-xmark', 'fa-bars')
        toggleItens.style.opacity = '0';
        toggleItens.style.display = 'none';
        toggleItens.style.opacity = '1';
        countClick = 0;

    }

})
//Limitar caracteres 
$(document).on("input", "#descricao", function () {
    var limite = 1000;
    var informativo = "caracteres restantes.";
    var caracteresDigitados = $(this).val().length;
    var caracteresRestantes = limite - caracteresDigitados;

    if (caracteresRestantes <= 0) {
        var comentario = $("textarea[name=descricao]").val();
        $("textarea[name=descricao]").val(comentario.substr(0, limite));
        $(".caracteres").text("0 " + informativo);
    } else {
        $(".caracteres").text(caracteresRestantes + " " + informativo);
    }
});
