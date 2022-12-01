//bola
let xBola = 120; //posicao x
let yBola = 150; //posicao y
let diametro = 25; //tamanho
let raio = diametro / 2; //raio
//VELOCIDADE
let velocidadexBola = 5;
let velocidadeyBola = 5;

//placar jogo
let meusPontos = 0;
let pontosOponente = 0;

//barra 1
let xBarra = 5;
let yBarra = 100;
let wBarra = 10;
let hBarra = 90;

//barra 2
let x2Barra = 285;
let y2Barra = 100;
let w2Barra = 10;
let h2Barra = 90;

//SONS DO JOGO
let raquetada;
let ponto;
let trilha;
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
function setup() {
  createCanvas(300, 300);
  trilha.loop();
}
function draw() {
  background(30);
  mostraBola();
  moveBola();
  verificaBorda();
  mostraBarra1(xBarra,yBarra);
  mostraBarra1(x2Barra,y2Barra);
  moveBarra1()
  hitBarra1(); 
  moveOPO();
  incluiPlacar();
  marcaPonto();
  
}
function marcaPonto(){
  if(xBola > 287){
    meusPontos +=1;
   ponto.play();
  }
  
  if(xBola < 13){
    pontosOponente +=1;
    ponto.play();
  }
}
function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  
  fill(color(255,140,0))
  rect(50,10,40,22)
  fill(255);
  text(meusPontos,70, 27);
  
  fill(color(255,140,0))
  rect(250,10,40,22)
  fill(255);
  text(pontosOponente, 270, 27)
  
 
}
function moveOPO(){
  if(keyIsDown(87)){
    y2Barra -= 10;
  }
  if(keyIsDown(83)){
    y2Barra +=10;
  }
}
//movimento barra1
function moveBarra1(){
  if(keyIsDown(UP_ARROW)){
    yBarra -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yBarra +=10;
  }
}
function hitBarra1(){
  if(xBola - raio < xBarra + wBarra && yBola -raio < yBarra + hBarra && yBola + raio > yBarra){
    velocidadexBola *= -1;
  raquetada.play();
 }
}

function mostraBarra1(x,y){
  rect(x,y, wBarra, hBarra, 20);
}
function mostraBola(){
  circle(xBola,yBola,diametro);
}
function moveBola(){
  xBola += velocidadexBola;
  yBola += velocidadeyBola;
}
function verificaBorda(){
  if(xBola +raio > width || xBola - raio < 0){
    velocidadexBola *= -1;
  }
  
  if(yBola + raio > height ||yBola -raio <0){
    velocidadeyBola *=-1;
  }
}