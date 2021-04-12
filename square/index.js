function func2() {
  setTimeout(() => {
    console.log('Função 2');
  }, Math.random() * 3000);
}

function func3() {
  setTimeout(() => {
    console.log('Função 3');
  }, Math.random() * 3000);
}

function func1(callback) {
  setTimeout(() => {
    console.log('Função 1');
    callback('Icaro');
  }, Math.random() * 3000);
}

console.log('Olá! O código começou a ser executado.');

func1(func2);
func3();

console.log('Tchau! O código terminou.');
