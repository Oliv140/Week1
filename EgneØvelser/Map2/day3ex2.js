const Country_api = "https://countries.plaul.dk/api/countries";

document.getElementById("svg2").addEventListener("click", mapHandler)

function mapHandler(evt){
    const elementPressed = evt.target;
    const id = elementPressed.id;
    //const id = evt.target.id

    console.log(id)

    elementPressed.style.fill = "blue";
    fetch(Country_api+"/"+id)
    .then(res => res.json())
    .then(data=>{
        console.log(data);
    })
}