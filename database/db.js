const mysql = require('mysql')
const conexion = mysql.createConnection({
    host : 'localhost', 
    user: 'root', 
    password: "",
    database: 'crud_nodejs_db'
})
conexion.connect((error)=>{
    if(error){
        console.error('Hay un error, el error es:' +error);
        return
    }
    console.log('estas conectado a la base de datos de MySQL')
})
module.exports = conexion;