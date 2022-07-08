const URL = 'https://restcountries.com/v2/all'

fetch(URL)
	.then(res => res.json())
	.then(data => renderData(data))

function renderData(dataArray) {
	let countries = null
	dataArray.forEach(country => {
		countries = `<a href="${country.flag}" class="country-frame">
      <p class="country-name">
        ${country.name}
      </p>
      <img
        src="${country.flag}"
        alt="flag"
      />
      <p class="capital">
        Capital: ${country.capital}
      </p>
  </a>`

		document.querySelector('.countries').innerHTML += countries
	})
}
