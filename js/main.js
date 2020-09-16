
// Get users

fetch(`https://raw.githubusercontent.com/ITBconsult/json-data/master/data.json`)
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });


//Store a user
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
}).then(res=>res.json())
  .then(res => console.log(res));


     