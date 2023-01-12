//código do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 270, 318] ;
let velocidadeCarros = [2, 2.5, 3.2, 4, 4.3, 2.4]


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
    
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosisaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    } 
  }
}

function passouTodaATela(xCarros){
  return xCarros < -40;
}