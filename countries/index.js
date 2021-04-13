function renderCountry(country) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const img = document.createElement('img');

  img.src = country.flag;
  img.width = 20;

  span.innerHTML = `${country.nativeName} - ${country.capital}`;
  li.appendChild(img);
  li.appendChild(span);
  ul.appendChild(li);
}
    
const fetchCountry = (countryName) => fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
  .then((response) => response.json())
  .then((countries) => {
    renderCountry(countries[0]);
  });

// const getCountries = () => {
//   fetchCountry('uruguay')
//     .then(() => fetchCountry('brazil'))
//     .then(() => fetchCountry('venezuela'))
//     .then(() => fetchCountry('angola'))
//     .catch((error) => {
//       alert('Ocorreu um erro ao buscar o país');
//     });
// };

// const fetch = () => {
//   return new Promise((resolve, reject) => {
//     // fazer a requisição
//     const response = fazerRequisicao();
//     if (response.ok) {
//       resolve(response);
//     } else {
//       reject(response);
//     }
//   });
// };

const getCountries = async () => {
  try {
    await fetchCountry('uruguay');
    await fetchCountry('brazil');
    await fetchCountry('venezuela');
    await fetchCountry('angola');
    await fetchCountry('japan');
    await fetchCountry('france');
    await fetchCountry('netherlands');
    await fetchCountry('china');
  } catch (error) {
    alert('Ocorreu um erro ao buscar o país');
  }
};

// const getCountries = () =>
//   fetch('https://restcountries.eu/rest/v2/name/uruguay')
//     .then((response) => response.json())
//     .then((countries) => {
//       renderCountry(countries[0]);
//       fetch('https://restcountries.eu/rest/v2/name/brazil')
//         .then((response) => response.json())
//         .then((countries) => {
//           renderCountry(countries[0]);
//           fetch('https://restcountries.eu/rest/v2/name/venezuela')
//             .then((response) => response.json())
//             .then((countries) => {
//               renderCountry(countries[0]);

//               fetch('https://restcountries.eu/rest/v2/name/angola')
//                 .then((response) => response.json())
//                 .then((countries) => {
//                   renderCountry(countries[0]);
//                 });
//             });
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });

window.onload = () => {
  getCountries();
};
