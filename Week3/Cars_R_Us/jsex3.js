const serverUrl = "http://localhost:8080/api/cars";

document.getElementById("btn-get-all").addEventListener("click", getAllCars);
document.getElementById("btn-find-car").addEventListener("click", getCar);
document.getElementById("addCar").addEventListener("click", addCar);
document.getElementById("findEditCar").addEventListener("click", findEditCar);
document.getElementById("editBtn").addEventListener("click", editCar);

function editCar(){
    alert("edit car clicked")
    const id = document.getElementById("text-for-id2").value;
    const editedCar = {
        brand: document.getElementById("editBrand").value,
        model: document.getElementById("editModel").value,
        pricePrDay: parseFloat(document.getElementById("editPricePrDay").value),
        bestDiscount: parseFloat(document.getElementById("editBestDiscount").value),
    }

    const options = {
        method: "PUT",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(editedCar)
      }
    
    fetch(serverUrl+"/"+id, options)
    .then(res => res.json())
        .then(carResponse => console.log(carResponse)
        )
        document.getElementById("text-for-id2").value = "";
        document.getElementById("editBrand").value = "";
        document.getElementById("editModel").value = "";
        document.getElementById("editPricePrDay").value = "";
        document.getElementById("editBestDiscount").value = "";
    }

        

function findEditCar(){
    alert("clicked");
    const id = document.getElementById("text-for-id2").value;

    fetch(serverUrl + "/" + id)
    .then(res => res.json())
    .then(car => {
        document.getElementById("editBrand").value=car.brand;
        document.getElementById("editModel").value=car.model;
        document.getElementById("editPricePrDay").value=car.pricePrDay;
        document.getElementById("editBestDiscount").value=car.bestDiscount;
    })
}

function addCar(){
    alert("clicked")
    const form = document.getElementById('carForm');
    const newCar = {
    brand: form.brand.value,
    model: form.model.value,
    pricePrDay: parseFloat(form.pricePrDay.value),
    bestDiscount: parseInt(form.bestDiscount.value),
  };
  
  const options = {
    method: "POST",
    headers: {"Content-type":"application/json"},
    body: JSON.stringify(newCar)
  }
  fetch(serverUrl, options)
        .then(res => res.json())
        .then(carResponse => document.getElementById("new-car-response").innerText= JSON.stringify(carResponse, null, 3)
        )}


function getCar(){
    const  id = document.getElementById("text-for-id").value;

    fetch(serverUrl+"/"+id)
    .then(res => {
        if(!res.ok){
            return alert("car not found")
        }
        return res.json()
    })
    .then(car => {
        document.getElementById("found-car").innerText = JSON.stringify(car, null, 2)
    })
}


function getAllCars(){
    //alert("clicked")

    fetch(serverUrl)
        .then(res => res.json())
        .then((cars) => {
            

            const tableRows = cars.map(car => `
            <tr>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.pricePrDay}</td>
                <td>${car.bestDiscount}</td>
            </tr>
            `)

            const rowsAsStr = tableRows.join("")

            document.getElementById("tbody").innerHTML = rowsAsStr; //Remember XSS
        })
}

