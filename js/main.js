
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

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>${user.name}</p>
      <p>${user.city}</p>
      <p>${user.color}</p>
      <p>${user._id}</p>
      <p>${user.age}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            
            

            `
            }
        }
    }

    //Mostrar una tabla con los valores de Nombre y Ciudad. Estos dos criterios serán los que se utilizarán para hacer el sorting.

}

//Create a GitHub user
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





