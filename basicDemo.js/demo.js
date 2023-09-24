const serverUrl = "http://localhost:8080/api/cars";


const car = fetch(serverUrl)
                .then(response =>response.json())
                .then(data => console.log(data))


                const newCar = {
                    brand: "Toyata",
                    model: "RAV",
                    pricePrDay: 500,
                    bestDiscount: 25
                  } 
                
                const options = {
                    method: "POST",
                    headers: {"content-type":"application/json",},
                    body: JSON.stringify(newCar)
                }

                fetch(serverUrl, options)
                .then(res => res.json())
                .then(carResponse => console.log(carResponse));
                  


//Vi skal gøre som vi gør i Postman:
//Vi skal have vores URL
//Vores headers (content:type)
//og vores body