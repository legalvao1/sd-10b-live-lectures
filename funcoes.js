//Calcula área de um triângulo retângulo
const calcArea = (base, height) => (base * height) / 2;

console.log(calcArea(10, 5));





















//Quebra frase
const splitSentence = (word) => word.split(' ');

console.log(splitSentence('Hey, Ho, Lets Go'));





















//Conta quantas vezes o maior número se repete
const highestCount = array => {
  let hight = array[0];
  let rept = 1;
  for (let index = 1; index < array.length; index += 1){
      if (array[index] > hight){
          hight = array[index];
          rept = 1;
      } else if (array[index] == hight){
           rept += 1;
      }
  }
  return rept;
}

console.log(highestCount([91, 1, 91, 3, 9, 91, 7]));




const button = document.querySelector('#btn-1');
button.addEventListener('click', () => console.log('Oi Thiago!'));




const message = `Essa é minha 
'primeira' mensagem.`

console.log(message);













//TEMPLATE LITERALS
//Cria texto de um e-mail
const to = 'Turma 10 - Tribo B';
const value = 'R$ 17,90';

const email =
`Olá ${to},
o valor da sua cobrança é ${value}. 
Esta é uma mensagem automática.`;

console.log(email);