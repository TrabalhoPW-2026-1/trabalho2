const botoes = document.querySelectorAll('button');
const lake = document.querySelector('#lake');

botoes.forEach(botao => {
    // desloca a imagem para a direita e reseta depois de 3 cliques
    let clickCount = 0;
    botao.addEventListener('click', () => {
        clickCount++;
        lake.style.transform = 'translateX(' + (clickCount * 100) + 'px)';
        if (clickCount === 3) {
            lake.style.transform = 'translateX(0)';
            clickCount = 0;
        }
    });
});

// const botoes = document.getElementsByTagName('button');


// for (let i = 0; i < botoes.length; i++) {
//     const botao = botoes[i];
//     botao.onclick = function(e) {
//         alert(`Você clicou no botão: ${botao.textContent}`);
//     };
// }

const alignButtons = document.querySelectorAll('.align_button');
const alignText = document.querySelector('#align-text');

alignButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mapping = {
            'esquerda': 'left',
            'centro': 'center',
            'justificado': 'justify',
            'direita': 'right'
        };
        const textAlign = mapping[button.textContent.toLowerCase()];
        alignText.style.textAlign = textAlign;
    });
});

const botao = document.getElementById("pressme");
botao.onclick = function(e){
    const icomp = document.getElementById("icomp");
    icomp.className += " newclass";
    icomp.style.cssText = "color:red";
    icomp.style.fontSize = "32px";
    icomp.style.color = "red";  
};


// const icomp = document.getElementById("icomp");
// // const botao = document.getElementById("pressme");
// botao.onclick = function(){
//     icomp.style.cssText = "color:red";
// }


document.getElementById("add").onclick = function() {
icomp.style.setProperty("background-color", "lightgray");
icomp.style.setProperty("color", "red");
icomp.style.setProperty("font-size", "32px");
}
document.getElementById("clean").onclick = function() {
icomp.style.removeProperty("background-color");
icomp.style.removeProperty("color");
icomp.style.removeProperty("font-size");
}



const htmlLogo = new Image();
const lakeImg = new Image();
htmlLogo.setAttribute('src', '../imgs/logo-html.png');
lakeImg.setAttribute('src', '../imgs/im.jpg');
const troca = document.getElementById("troca-logo");
troca.onclick = function () {
    let logo = document.getElementById("img");

    if (logo.getAttribute('src') == htmlLogo.getAttribute('src')) {
        logo.setAttribute('src', lakeImg.getAttribute('src'));
    } else {
        logo.setAttribute('src', htmlLogo.getAttribute('src'));
    }
}