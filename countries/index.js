function renderCountry(country) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const span = document.createElement('span');

  span.innerHTML = `${country.nativeName} - ${country.capital}`;
  li.appendChild(span);
  ul.appendChild(li);
}
    
const getCountries = () =>
  fetch('https://restcountries.eu/rest/v2/name/uruguay')
    .then((response) => {
      response.json()
        .then((countries) => {
          renderCountry(countries[0]);
          fetch('https://restcountries.eu/rest/v2/name/brazil')
            .then((response) => {
              response.json()
                .then((countries) => {
                  renderCountry(countries[0]);
                  fetch('https://restcountries.eu/rest/v2/name/venezuela')
                    .then((response) => {
                      response.json()
                        .then((countries) => {
                          renderCountry(countries[0]);
                          fetch('https://restcountries.eu/rest/v2/name/angola')
                            .then((response) => {
                              response.json()
                                .then((countries) => {
                                  renderCountry(countries[0]);
                                });
                            });
                        });
                    });
                });
            });
        });
    });

window.onload = () => {
  getCountries();
};
