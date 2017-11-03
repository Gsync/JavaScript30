const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const data = fetch(endpoint)
    .then(raw => raw.json())
    .then(d => cities.push(...d)); //spread operator is used to avoid the array within array

    console.log(cities);
function findMatches(word, cities) {
    return cities.filter(d => {
        const regex = new RegExp(word, 'gi'); // g for global and i for insensitive (lower and upper case match)
        return d.city.match(regex) || d.state.match(regex); //filter condition
    })
}

function displayMatches() {
    const matched = findMatches(this.value, cities);
    const resultHtml = matched.map(d => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = d.city.replace(regex, `<span class='hl'>${this.value}</span>`)
        const stateName = d.state.replace(regex, `<span class='hl'>${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${d.population}</span>
            </li>
        `
    }).join(""); //join is used to convert the array returned from map to string
    suggest.innerHTML = resultHtml;
}

const inputBox = document.querySelector('.search');
const suggest = document.querySelector('.suggestions');

inputBox.addEventListener('change', displayMatches);
inputBox.addEventListener('keyup', displayMatches);