
//API
const URL = 'https://raw.githubusercontent.com/ITBconsult/json-data/master/data.json';

//Get all users from the API
var content = document.querySelector('#content')

function retrieveUsers() {
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            printTable(data)
        })
}

function printTable(data) {
    console.log(data);
    let index = 1;
    content.innerHTML = ''

    for (let value of data) {
        content.innerHTML += `
                
                <tr>
                    <th scope="row">${index}</th>
                    <td>${value.name}</td>
                    <td>${value.city}</td>
                    <td><button class="btn btn-light" data-toggle="modal" data-target="#exampleModal" onclick="getUser('${value._id}')"><i class="fab fa-github"></i> View Detail</button></td>
                </tr>
                
                `
        index++;
    }
}

//Show a specific user when 'View Detail' button is clicked
function getUser(id) {
    fetch(URL)
        .then(res => res.json())
        .then(dataUsers => {
            printUser(dataUsers, id)
        })

    function printUser(dataUsers, id) {
        console.log(dataUsers)
        console.log(id);
        usercontent.innerHTML = ''
        for (let user of dataUsers) {
            if (user._id === id) {
                usercontent.innerHTML += `

                <div class="card" style="width: 22rem;">
                     <div class="card-body">
                        <h5 class="card-title">Name: ${user.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">User ID: ${user._id}</h6>
                        <p class="card-text">City: ${user.city}</p>
                        <p class="card-text">Color: ${user.color}</p>
                        <p class="card-text">Age: ${user.age}</p>
                     </div>
                </div>
            
            `
            }
        }
    }
}

//Create a GitHub user through form
var usercontent = document.querySelector('#usercontent')

function addUser(user) {
    fetch('https://raw.githubusercontent.com/ITBconsult/json-data/master/data.json', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                name: "Noel",
                city: "Iniguez",
                color: "DimGray",
                age: 20,
                _mock: true
            })
    }).then(res => res.json())
        .then(res => console.log(res));
}

function generateId() {
    //Existe una parte fija dentro del Id y otra que es generada de forma "random"
}

function sortByName() {

}

function sortByCity() {

}





