// You js goes here
var countries;

function newCountry(event) {
    let randomNumber = Math.round(Math.random()* countries.length);
    document.querySelector(".flag").innerHTML = countries[randomNumber].flag;
    document.querySelector('.name').innerHTML = countries[randomNumber].name;
    document.querySelector(".capital").innerHTML = countries[randomNumber].capital;
}
     countries = [
    {
        flag : "<img src='img/flag-of-Afghanistan.png'>",
        name: "Afghanistan",
        capital :"Kabul"
    },
    {
        flag : "<img src='img/flag-of-Australia.png'>",
        name: "Australia",
        capital : "Canberra"
    },
    {
        flag : "<img src='img/flag-of-Belgium.png'>",
        name: "Belgium",
        capital :"Brussels"
    },
    {
        flag : "<img src='img/flag-of-Canada.png'>",
        name: "Canada",
        capital :"Ottawa"
    },
    {
        flag : "<img src='img/flag-of-Denmark.png'>",
        name: "Denmark",
        capital : "Copenhagen"
    },
    {
        flag : "<img src='img/flag-of-Serbia.png'>",
        name: "Serbia",
        capital : "Belgrade"
    },
    {
        flag : "<img src='img/flag-of-Spain.png'>",
        name: "Spain",
        capital : "Madrid"
    },
    {
        flag : "<img src='img/flag-of-Germany.png'>",
        name: "Germany",
        capital : "Berlin"
    },
    {
        flag : "<img src='img/flag-of-Sweden.png'>",
        name: "Sweden",
        capital : "Stockholm"
    },
    {
        flag : "<img src='img/flag-of-Russia.png'>",
        name: "Russia",
        capital : "Moscow"
    },
    {
        flag : "<img src='img/flag-of-Cuba.png'>",
        name: "Cuba",
        capital : "Havana"
    },
    {
        flag : "<img src='img/flag-of-China.png'>",
        name: "China",
        capital : "Beijing"
    },
    {
        flag : "<img src='img/flag-of-Qatar.png'>",
        name: "Qatar",
        capital : "Doha"
    },
    {
        flag : "<img src='img/flag-of-Vietnam.png'>",
        name: "Vietnam",
        capital : "Hanoi"
    },
    {
        flag : "<img src='img/flag-of-Albania.png'>",
        name: "Albania",
        capital : "Tirana"
    },
    {
        flag : "<img src='img/flag-of-Austria.png'>",
        name: "Austria",
        capital : "Vienna"
    },
    {
        flag : "<img src='img/flag-of-Mexico.png'>",
        name: "Mexico",
        capital : "Mexico City"
    },
    {
        flag : "<img src='img/flag-of-Malaysia.png'>",
        name: "Malaysia",
        capital : "Kuala Lampur"
    },
    {
        flag : "<img src='img/flag-of-New-Zealand.png'>",
        name: "New Zealand",
        capital : "Wellington"
    },
    {
        flag : "<img src='img/flag-of-Portugal.png'>",
        name: "Portugal",
        capital : "Lisbon"
    },
    {
        flag : "<img src='img/flag-of-Romania.png'>",
        name: "Romania",
        capital : "Bucharest"
    },
    {
        flag : "<img src='img/flag-of-Sri-Lanka.png'>",
        name: "Sri Lanka",
        capital : "Sri Jayawardenepura Kotte"
    },
    {
        flag : "<img src='img/flag-of-United-States-of-America.png'>",
        name: "United States of America",
        capital : "Washington D.C."
    }, 
    {
        flag : "<img src='img/flag-of-Hungary.png'>",
        name: "Hungary",
        capital : "Budapest"
    },   
    {
        flag : "<img src='img/flag-of-Turkey.png'>",
        name: "Turkey",
        capital : "Ankara"
    },
    {
        flag : "<img src='img/flag-of-United-Kingdom.png'>",
        name: "United Kingdom",
        capital : "London"
    },
    {
        flag : "<img src='img/flag-of-France.png'>",
        name: "France",
        capital : "Paris"
    },
    {
        flag : "<img src='img/flag-of-Finland.png'>",
        name: "Finland",
        capital : "Helsinki"
    },
    {
        flag : "<img src='img/flag-of-Korea-South.png'>",
        name: "South Korea",
        capital : "Seoul"
    },
    {
        flag : "<img src='img/flag-of-Switzerland.png'>",
        name: "Switzerland",
        capital : "Bern"
    },

] 

document.addEventListener('click', (event) => {
newCountry(countries);

});
   




