const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const fetch = require('node-fetch');
const argv = require('./config/yargs').argv

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coordenadas.lat, coordenadas.lng)
        return `El clima es de ${temp}ºC.`;


    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}.`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);