// variáveis do jogo
var canvas, ctx, ALTURA, LARGURA, frames = 0,

chao = {
    y: 550,
    altura: 50,
    cor: "#ffdf70",

    desenha: function() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(0, this.y, LARGURA, this.altura);
    }

},

bloco = {
    x: 50,
    y: 0,
    altura: 50,
    largura: 50,
    cor: "#ff4e4e",
    gravidade: 1.5,
    velocidade: 0,
    forcaDoPulo: 15,

    atualiza: function() {
        this.velocidade += this.gravidade;
        this.y += this.velocidade;

        if (this.y > chao.y - this.altura) {
            this.y = chao.y - this.altura;
        }
    },

    pula: function() {
        this.velocidade = - this.forcaDoPulo;
    },

    desenha: function() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.altura, this.largura);
    }
};

function clique(event) {
    bloco.pula();
}

function main() {
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;

    if (LARGURA >= 600) {
        LARGURA = 600;
        ALTURA = 600;
    }

    canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = "1px solid #000";

    ctx = canvas.getContext("2d");

    document.body.appendChild(canvas);

    document.addEventListener("mousedown", clique);

    roda();
} // main

function roda() {
    atualiza();
    desenha();

    window.requestAnimationFrame(roda);

}

function atualiza() {
    frames++;

    bloco.atualiza();
}

function desenha() {
    ctx.fillStyle = "#50beff"
    ctx.fillRect(0, 0, LARGURA, ALTURA)

    chao.desenha();
    bloco.desenha();
}

// inicializa o jogo
main();