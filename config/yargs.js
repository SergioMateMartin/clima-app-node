const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para objeter el clima',
            demand: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}