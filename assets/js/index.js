const titulo = document.getElementById('titulo');
titulo.innerHTML = 'Mi tienda';

fetch("data/data.json")
    .then(function(response) {return response.json()})
    .then((data) => {
        console.log(data);
    })