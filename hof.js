const person = {
  name: 'Carol',
  lastName: 'Santos',
};

const greetingPeople = (person) => {
  console.log(`Olá ${person.name}, como vai você?`);
};

greetingPeople(person);

person.greet = (greetingFunction) => {
  return greetingFunction();
}

const formalGreeting = () => {
  console.log(`Está tudo uma grande maravilha.`);
}

person.greet(formalGreeting);

const badMoodGretting = () => {
  console.log(`Não fale comigo...`);
}

person.greet(badMoodGretting);

const casualGreeting = () => {
  console.log(`Opa, bão demais e ocê??`);
}

person.greet(casualGreeting);