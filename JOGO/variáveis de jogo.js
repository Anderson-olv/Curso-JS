//variáveis do jogo
var canvas, ctx, ALTURA, LARGURA, frames = 0
chao = {
    y: 550,
    altura: 50,
    cor: "#ffdf70",
    desenha: function () {
        ctx.fillStyle = this.cor;
        ctx.fillRect(0, this.y, LARGURA, this.altura);

        bloco = {
            x = 50,
            y = 0,
            altura: 50,
            largura: 50,
            cor: "#ff4e4e"

            desenha function() {
                ctx.fillStyle = this.cor;
                ctx.fillRect(this.x, this.y, this.largura, this.altura);
            }
        };
    }
}

function clique(event) {
    alert("clicou");

}


function main() {
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;
    if (LARGURA >= 500) {
        LARGURA = 600;
        ALTURA = 600;
    }
    canvas = document.createElement("canvas")
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    document.addEventListener("mousedown", clique);

    roda();
}


function roda() {
    atualiza();
    desenha();

    window.requestAnimationFrame(roda);
}
//Status do Personagem e objetos do jogo.
function atualiza() {
    frames++;
}

function desenha() {
    ctx.fillStyle = "#50beff";
    ctx.fillRect(0, 0, LARGURA, ALTURA);

    chao.desenha();
    bloco.desenha();
}

//inicializa o jogo
main();