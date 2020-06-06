const fetch = require('node-fetch');

// const lat = 40.419998;
// const lng = -3.700000;


const  obj  =  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f533527b8d191484a3afdc7bf6e2954d&units=metric`)    
    .then(res  =>  res.json())    
    .then(data  =>  {         getClima(data)     })    
    .catch(err  =>  console.log(err))


let getClima = (data) => {

    const resp = data.main.temp;

    console.log(resp);
}

module.exports = {
    getClima
}