function generateRandomNumber(max) {
  const randomNumber = Math.floor(Math.random() * max);

  return randomNumber;
}

function gusGenerator(term) {
  return getPhrasesByTerm({ term, max: 5 })
    .then(({ phrases }) => {
      index = generateRandomNumber(5);
      return `Como diria ${phrases[index].author}: "${phrases[index].text}"`;
    })
    .catch(() => "Como diria Albert Einstein: \"Deu ruim na API \"");
}

describe('GusGenerator tests', () => {
  
});