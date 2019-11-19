// Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicializar Variales 
var app = express();

//Conexion bb
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true })
    .then(() => {
        console.log("Base de datos: \x1b[32m%s\x1b[0m", " online")
    })
    .catch((err) => {
        console.error(err);
    });

//rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'peticion realizada'
    })

});

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})