//posicao da rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posicao da peça alvo
let posicaoPecaLinha = 7;
let posicaoPecaColuna = 7;

//identifica se o ataque foi bem sucedido ou não
let ataqueBemSucedido = false;

if ((posicaoRainhaLinha === posicaoPecaLinha) || (posicaoRainhaColuna === posicaoPecaColuna)) {
  ataqueBemSucedido = true;
}

//Diagonal superior direita
for (let supDir = 1; supDir < 8; supDir += 1) {
  let linhaRainha = posicaoRainhaLinha + supDir;
  let colunaRainha = posicaoRainhaColuna + supDir;

  if (linhaRainha > 8 || colunaRainha > 8) {
    break;
  }

  if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}



console.log(ataqueBemSucedido);