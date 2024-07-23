let xBolinha = 375;
let yBolinha = 289;
let diametro = 20;
let raio = diametro / 2;
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;
let xRaquete = 3;
let yRaquete = 270;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let meusPontos = 0;
let pontosDoOponente = 0;
let raquetada;
let ponto;
let trilha;
let xOponente = 736;
let yOponente = 270;
let velocidadeYOponente;
let velocidadeXOponente;
let colidiu = false;

function setup() {
  createCanvas(750, 578);
    trilha.loop();
}

function draw() {
    background("black");
    mostraBolinha();
    movimentaBolinha();
    colisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    verificaColisaoRaquete(xOponente, yOponente);
    mostraRaquete(xOponente, yOponente);
    movimentaRaqueteOponente();
    incluiPlacar() 
    marcaPonto();
}
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
  fill("#ff0000");
  stroke("#003399");

}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
     raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
        raquetada.play();
  }
}

function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha -yOponente - raqueteComprimento / 2 - 87
  yOponente += velocidadeYOponente
}


function incluiPlacar(){
  stroke("#003399")
    textAlign(CENTER);
    textSize(16);
    fill("gold")
  text (meusPontos, 150, 26)  
  text(pontosDoOponente, 590, 26);



}


function marcaPonto() {
    if (xBolinha > 740) {
        meusPontos += 1;
        ponto.play();
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
        ponto.play();
    }
}


function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}