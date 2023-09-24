const Serverurl1 = "https://jsonplaceholder.typicode.com/users";

document.getElementById("get_all_btn").addEventListener("click", getAllUsers);
document.getElementById("get_user_btn").addEventListener("click", getUser);

function getUser(){
    const id = document.getElementById("id_field").value;
    fetch(Serverurl1+"/"+ id)
    .then(res => res.json())
    .then((user) => {
        document.getElementById("name_id").textContent = `Name: ${user.name}`;
        document.getElementById("phone_id").textContent = `Phone: ${user.phone}`;
        document.getElementById("street_id").textContent = `Street: ${user.address.street}`;
        document.getElementById("city_id").textContent = `City: ${user.address.city}`;
        document.getElementById("zip_id").textContent = `Zipcode: ${user.address.zipcode}`;
        document.getElementById("lat_id").textContent = `Lat: ${user.address.geo.lat}`;
        document.getElementById("lng_id").textContent = `Lng: ${user.address.geo.lng}`;
    } )
}

function getAllUsers(){
    fetch(Serverurl1)
    .then(res => res.json())
    .then((users) => {
        console.log(users)
        const tablerows1 = users.map(user => `
        <tr>
            <td>${user.name}</td>
            <td>${user.phone}</td>
        </tr>
        `)

        const rowAsString = tablerows1.join("")
        document.getElementById("myTBody").innerHTML = rowAsString;
})}