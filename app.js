const botão= document.querySelector("button");
const imagem= document.querySelector(".imagem");
const texto = document.querySelector("h2");

botão.addEventListener("click", function() {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
    botão.textContent = "🦇";
    texto.textContent = "31 de outubro!!"
    imagem.style.backgroundImage = "url('mão2.png')";
    imagem.style.height = '350px';
    imagem.style.width = '350px';
    } else {
        botão.textContent = "🦇";
        texto.textContent = "30 de outubro!"
        imagem.style.backgroundImage = "url('mão.png')";
    }
}); 


