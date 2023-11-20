/**
Потрібно реалізувати логіку, яка буде формувати 2 випадаючих списки.
У першому містяться назви країн, у другому – назви міст.
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку
певна країна - в правому випадаючому списку з'являлися міста цієї країни.
Список міст формується динамічно, через JavaScript.
Також потрібно нижче в параграфі вивести назву обраної країни і місто.
Спробуйте не вносити зміни в html файл.
 */
const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const paragraph = document.querySelector("p");

const citiesByCountry = {
  ger: ["Berlin", "Keln", "Dresden"],
  usa: ["New York", "Miami", "Washington"],
  ukr: ["Odesa", "Kharkiv", "Ivano-Frankivsk"],
};

function updateCitiesList() {
    const selectedCountry = countrySelect.value;
    citiesSelect.innerHTML = "";
    const cities = citiesByCountry[selectedCountry] || [];
  
    cities.forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citiesSelect.appendChild(option);
    });
  
    updateParagraph();
  }

function updateParagraph() {
  const selectedCity = citiesSelect.value;
  paragraph.textContent = `Country: ${
    countrySelect.options[countrySelect.selectedIndex].text
  }, City: ${selectedCity}`;
}

countrySelect.addEventListener("change", updateCitiesList);
citiesSelect.addEventListener("change", updateParagraph); 

updateCitiesList();