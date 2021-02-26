//posicao da rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posicao da peça alvo
let posicaoPecaLinha = 8;
let posicaoPecaColuna = 8;

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

//Diagonal superior esquerda
for (let supEsq = 1; supEsq < 8; supEsq += 1) {
  let linhaRainha = posicaoRainhaLinha + supEsq;
  let colunaRainha = posicaoRainhaColuna - supEsq;

  if (linhaRainha > 8 || colunaRainha < 1) {
    break;
  }

  if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}

//Diagonal inferior esquerda
for (let infEsq = 1; infEsq < 8; infEsq += 1) {
  let linhaRainha = posicaoRainhaLinha - infEsq;
  let colunaRainha = posicaoRainhaColuna - infEsq;

  if (linhaRainha < 1 || colunaRainha < 1) {
    break;
  }

  if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}

//Diagonal inferior direita
for (let infDir = 1; infDir < 8; infDir += 1) {
  let linhaRainha = posicaoRainhaLinha - infDir;
  let colunaRainha = posicaoRainhaColuna + infDir;

  if (linhaRainha < 1 || colunaRainha > 8) {
    break;
  }

  if ((posicaoPecaLinha == linhaRainha) && (posicaoPecaColuna == colunaRainha)) {
    ataqueBemSucedido = true;
  }
}

console.log(ataqueBemSucedido);