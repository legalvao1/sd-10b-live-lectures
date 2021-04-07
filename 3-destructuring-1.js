const assert = require('assert');

const bbbParticipant = {
  name: 'Gilberto',
  birthplace: 'Jaboatão - Pernambuco',
  nickname: 'Gil do Vigor',
  jobs: [
    'Economista',
    'Missionário',
    'Futuro ex BBB',
    'Digital Influencer',
    'Blogueiro',
  ],
};

assert.strictEqual(
  `${bbbParticipant.name} também conhecido como ${bbbParticipant.birthplace}`,
  'Gilberto também conhecido como Gil do Vigor',
);

// assert.strictEqual(
//   `Possui uma nobre carreira como ${firstJob}, ${secondJob}, ${thirdJob}, etc`,
//   'Possui uma nobre carreira como Economista, Missionário, Futuro ex BBB, etc',
// );