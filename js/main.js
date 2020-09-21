
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
    countingUsers(index - 1);
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
if (btnAddUser) {
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

//Search a user by Name
function searchUsers() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//Print pagination 
let pagination = document.getElementById("pagination");

// function pagination(resultsPerPage, totalResults) {
//     for(let index = 1; )

// }

function countingUsers(index) {
    alert("El número de usarios es " + index);
}

function sortByName() {

}

function sortByCity() {

}


// // Pagination function

// const list_items = [
// 	"Item 1",
// 	"Item 2",
// 	"Item 3",
// 	"Item 4",
// 	"Item 5",
// 	"Item 6",
// 	"Item 7",
// 	"Item 8",
// 	"Item 9",
// 	"Item 10",
// 	"Item 11",
// 	"Item 12",
// 	"Item 13",
// 	"Item 14",
// 	"Item 15",
// 	"Item 16",
// 	"Item 17",
// 	"Item 18",
// 	"Item 19",
// 	"Item 20",
// 	"Item 21",
// 	"Item 22"
// ];

// const list_element = document.getElementById('list');
// const pagination_element = document.getElementById('pagination');

// let current_page = 1;
// let rows = 5;

// function DisplayList (items, wrapper, rows_per_page, page) {
// 	wrapper.innerHTML = "";
// 	page--;

// 	let start = rows_per_page * page;
// 	let end = start + rows_per_page;
// 	let paginatedItems = items.slice(start, end);

// 	for (let i = 0; i < paginatedItems.length; i++) {
// 		let item = paginatedItems[i];

// 		let item_element = document.createElement('div');
// 		item_element.classList.add('item');
// 		item_element.innerText = item;
		
// 		wrapper.appendChild(item_element);
// 	}
// }

// function SetupPagination (items, wrapper, rows_per_page) {
// 	wrapper.innerHTML = "";

// 	let page_count = Math.ceil(items.length / rows_per_page);
// 	for (let i = 1; i < page_count + 1; i++) {
// 		let btn = PaginationButton(i, items);
// 		wrapper.appendChild(btn);
// 	}
// }

// function PaginationButton (page, items) {
// 	let button = document.createElement('button');
// 	button.innerText = page;

// 	if (current_page == page) button.classList.add('active');

// 	button.addEventListener('click', function () {
// 		current_page = page;
// 		DisplayList(items, list_element, rows, current_page);

// 		let current_btn = document.querySelector('.pagenumbers button.active');
// 		current_btn.classList.remove('active');

// 		button.classList.add('active');
// 	});

// 	return button;
// }

// DisplayList(list_items, list_element, rows, current_page);
// SetupPagination(list_items, pagination_element, rows);