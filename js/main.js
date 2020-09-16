
function retrieveUsers() {
    fetch(`https://raw.githubusercontent.com/ITBconsult/json-data/master/data.json`)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log('data = ', data);
        })
        .catch(function (err) {
            console.error(err);
        });
}

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

function getUser (id) {

    //En cada uno de las tarjetas, incluimos un botón de mostrar detalle, dónde aparecen el resto de datos del usuario
    //Mostrar una tabla con los valores de Nombre y Ciudad. Estos dos criterios serán los que se utilizarán para hacer el sorting.

}

function generateId () {
    //Existe una parte fija dentro del Id y otra que es generada de forma "random"
}

function sortByName() {

}

function sortByCity() {

}





