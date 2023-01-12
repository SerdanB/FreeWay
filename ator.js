//variaveis ator
let yAtor = 366;
let xAtor = 85;
let colisao = false;
let comprimentoCarro = 50;
let alturaCarro = 40;
let meusPontos = 0


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){ 
    if(podeSeMover()){
      
    }
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
        yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 5 );
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play()
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }      
    }
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0 
}
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  fill(color(222, 60, 100))
  text(meusPontos, width/5, 28);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function podeSeMover(){
  return yAtor < 366
}