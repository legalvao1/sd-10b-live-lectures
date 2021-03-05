window.onload = function () {
  let button = document.getElementById('start-race-btn');
  let car1 = document.querySelector('.car1');
  let car2 = document.querySelector('.car2');

  //1. qual o tipo do evento devo escutar?
  //2. o que eu faço quando esse evento acontecer?
  button.addEventListener('click', function () {
    car1.style.marginLeft = Math.random() * 100 + 'px';
    car2.style.marginLeft = Math.random() * 100 + 'px';
  });
};

