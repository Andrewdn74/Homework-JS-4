
let URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
let URL1 = 'https://restcountries.com/v3.1/all';
let curs = await fetch(URL);
    curs = await curs.json();
let countries = await fetch(URL1);
    countries = await countries.json();
// console.log(curs);
let tag = document.getElementById('output');
countries = countries.map(item => ({
    country : item.name.official,
    currency : item.currencies,
    flag : item.flags.png
 }))
//  console.log(countries[105].currency);
 for (let i =0; i < countries.length; i++ ) {
    if (countries[i].currency === undefined) {
        countries[i].currency = {NON : 'no currency'};
    }
    countries[i].currency = Object.keys(countries[i].currency).join('');
}
// console.log(countries);
curs = curs.map(item => ({
    txt : item.txt,
    cc : item.cc,
    rate : item.rate,
    data : countries.filter(pos => pos.currency.includes(item.cc))
}))
console.log (curs, curs[0].data[0].country);
tag.innerHTML = curs.map(item =>`
    <div class="d-flex mb-2">
        <h5>${item.txt}</h5>
        <h5>${item.cc}</h5>
        <h5>${item.rate}</h5>
        <h5>${item.data[0].country}</h5>
        <h5>Флаги1</h5>
    </div>    
`).join('');



