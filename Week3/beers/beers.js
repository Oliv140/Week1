const beerUrl = "https://api.punkapi.com/v2/beers"

let beerArray = [];

document.getElementById("abv-btn").addEventListener("click", fetchBeersAbove);

function fetchBeersAbove(){
    const abvNum1 = parseFloat(document.getElementById("filter-abv").value);
    const newArray = beerArray.filter(beer => beer.abv > abvNum1);

    const tablerows3 = newArray.map(beer => `
        <tr>
            <td>${beer.name}</td>
            <td>${beer.tagline}</td>
            <td>${beer.abv}</td>
            <td>${beer.ibu}</td>
        </tr>
        `)

        const rowsAsString1 = tablerows3.join("");
        document.getElementById("tbl1").innerHTML = rowsAsString1;

}

function fetchAll(){

    fetch(beerUrl)
    .then(res => res.json())
    .then((beers) =>{
        beerArray = beers;
        console.log(beerArray)
        const tablerows2 = beers.map(beer => `
        <tr>
            <td>${beer.name}</td>
            <td>${beer.tagline}</td>
            <td>${beer.abv}</td>
            <td>${beer.ibu}</td>
        </tr>
        `)

        const rowsAsString = tablerows2.join("");
        document.getElementById("tbl1").innerHTML = rowsAsString;
    })

}

fetchAll();