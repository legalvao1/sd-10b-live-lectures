const x = 3;
x = 18;
console.log(x);

function class10 (bool) {
  
  if (bool) {
    const x = 48;
  }

  return x;

}

console.log(class10(true));
// console.log(class10(false));


function nomeFuncao () {
  //codigo da funcao
}

botao.addEventListener('click', function () {
  //codigo da funcao
})

const nomeFuncao = () => {
  //codigo da funcao
}

nomeFuncao(param);

function soma (num1, num2) {
  return num1 + num2;
}

const soma = (num1, num2) => num1 + num2;

console.log(soma(2, 8));

//Arrow Function
//1. Ela é uma função anônima
//2. Não precisamos utilizar a palavra chave function
//3. Ela possui uma seta entre os parâmetros e o corpo da função
//4. Return é implícito
//5. Quando tenho uma única linha, não precisamos utilizar {}
//6. Quando tivermos um único parâmetro podemos usar () ou não
//7. Sem parâmetros = () ou _

const funcao = () => {
  console.log('Olá, tudo bem?');
}

funcao();