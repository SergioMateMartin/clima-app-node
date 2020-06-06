const argv = require('../config/yargs').argv
const fetch = require('node-fetch');
const dir = argv.direccion;

const encodeUlr = encodeURI(dir);

const  info  =  fetch(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,   {  headers:  {  'x-rapidapi-key':   'a9c7f51f8dmsh163734849144c54p132214jsn5d5006a90513'  }  })    
    .then(res  =>  res.json())    
    .then(data  =>  {         getLugarLatLng(data)     })    
    .catch(err  =>  console.log(err))


let getLugarLatLng = (data) => {

    const datos = data.Results[0];

    if (datos.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const direccion = data.Results[0].name;
    const lat = data.Results[0].lat;
    const lng = data.Results[0].lon;


    console.log(direccion, lat, lng);

}

module.exports = {
    getLugarLatLng
}