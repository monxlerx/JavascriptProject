
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
                
                <tr onmouseover="changeBackgroundColor(this)" onmouseout="restoreBackgroundColor(this)">
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
let btnAddUser = document.getElementById("btnAddUser");
if(btnAddUser) {
    btnAddUser.addEventListener('click', addUser, false);
}

function addUser() {

    let user = {
        _id: generateId(),
        name: document.getElementById("inputName").value,
        city: document.getElementById("inputCity").value,
        age: document.getElementById("inputAge").value,
        _mock: true
    }

    //alert(user._id + " " + user.name + " " + user.city + " " + user.age + " " + user._mock);
    let message = document.getElementById("message");

    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response);
            message.innerHTML = `
            
            <div class="alert alert-success" role="alert">
                 A new GitHub user has been created successfully.
            </div>
            
            `
        });
}

//Generate a unique ID when a user has been created
function generateId() {
    let fixedPartId = "5bed5c1ab453c25f";
    let randomCombination = (Math.random() * 0xfffff * 100000000).toString(16);
    let variablePartId = randomCombination.slice(0, 8);
    let uniqueId = fixedPartId + variablePartId;

    return uniqueId;
}

//Highlight rows of the table
let backgroundMouseOverColor = '#a9d8ef';
let backgroundMouseOutColor = '#ffffff';

function changeBackgroundColor(row) {
    row.style.backgroundColor = backgroundMouseOverColor;
}

function restoreBackgroundColor(row) {
    row.style.backgroundColor = backgroundMouseOutColor;
}

function sortByName() {

}

function sortByCity() {

}





