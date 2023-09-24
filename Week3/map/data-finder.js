let country;
let fill;
let isoCode;

// Nedenfor opsætter jeg det således, at når vi klikker på et land, får vi id'et (Danmark = dk).
document.getElementById("svg2").onclick = (evt) => {
    // Her hentes HTML-elementet (vores kort)
    const countryNode = evt.target;

    // Her henter vi det område der blev klikket på som id
    isoCode = countryNode.id;

    // Printer id'et til det specifikke område
    console.log(isoCode);

    // Her skal vi give landene en farve når vi klikker på dem
    if (country) {
        // Først vil vi vide om det er et land, som allerede er blevet farvet.
        // Hvis det er tilfældet, vil det blive ændret tilbage til sin oprindelige farve.
        country.style.fill = fill;
        document.getElementById("info").style.display = "none";
    }

    // Nu bliver country-variablen ændret til det land, der senest blev klikket på.
    country = countryNode;

    // Dette land gemmes i fill variablen med den originale farve
    fill = countryNode.style.fill;

    // Her opdateres landets farve til "steelblue".
    countryNode.style.fill = "steelblue";

    const newUrl = `https://countries.plaul.dk/api/countries/${isoCode}`;

    fetch(newUrl)
        .then(res => res.json())
        .then(info => {
            document.getElementById("info").style.display = "block";
            document.getElementById("navn").innerText = info.name.common;
            document.getElementById("capi").innerText = info.capital;
        })
        .catch(e => console.log(e));
}
