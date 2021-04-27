function Celula() {

}

function Olhos() {
  Pupila();

  Iris();

  Cornea();
}

function Cabeça() {
  Olhos({ cor: 'Castanho', tamanhoDaPupila: 10 }); // Prop props

  Cabelo();

  Orelhas();

  Nariz();

  Boca();
}

function Pessoa() {
  Cabeça();

  Tronco();

  BraçoEsquerdo();

  BraçoDireito();

  PernaEsquerda();

  PernaDireita();
}

// É uma função ou classe javascript que retorna/renderiza um html
function App() {
  return (
    <div>
      <Olhos cor="castanho" tamanhoDaPupila="10" />
      <input type="text" value="" name="" />
    </div>
  )
}
