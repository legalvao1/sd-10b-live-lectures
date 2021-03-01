//OBJETOS

let estudante = {
  nome: 'Joana',
  idade: 43,
  hardSkills: 3,
  softSkills: 6,
  carreiraSkills: 5
};

estudante.cidade = 'São Paulo';
estudante['comidaFavorita'] = 'doritos';
estudante['nome'] = 'João';
estudante.apelidos = ['Apelido1', 'Apelido2', 'Apelido3'];
estudante.endereco = {
  logradouro: 'Rua Dalvo Trombeta',
  numero: 357
}

// console.log(estudante);


//FOR IN
// for (let key in estudante) {
//   console.log(key, estudante[key]);
// }

// ----------------------------------------------------

//FUNÇÕES

function trybe(xablau) {
  let pessoaDesenvolvedora = xablau;

  pessoaDesenvolvedora.hardSkills = 10;
  pessoaDesenvolvedora.softSkills = 10;
  pessoaDesenvolvedora.carreiraSkills = 10;
  pessoaDesenvolvedora.tryber = true;

  return pessoaDesenvolvedora;
};

console.log(trybe(estudante));




function soma(num1, num2) {
  return num1 + num2;
}

let valor1 = 5;
let valor2 = 10;
let valorSomado = soma(valor1, valor2);

console.log(valorSomado);
