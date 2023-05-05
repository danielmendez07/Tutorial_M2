var express = require('express');
var app  = express()

var hostname = '127.0.0.1';
var port = 3000;
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = 'banco.db';
var bodyParser = require('body-parser'); //bodyParser é para converter o body da requisição para vários formatos, inclusive o json (esquema de chave e valor) 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var db = new sqlite3.Database(DBPATH); 

app.get("/",(req,res)=>{ //rec,res (ou voce vai pegar algo do servidor ou respornder/mandar info para o servidor)
    res.setHeader('Access-Control-Allow-Origin','*') // tem que ter pois se não tiver não roda o js 
    res.send('Daniel gay') 
});

app.get('/read',(req,res)=>{
    res.statusCode = 200;
    var sql = "SELECT * FROM Pessoas"
    db.all(sql,[],(err,rows)=>{
        if (err){
            throw err;
        }
        console.log(rows);
        res.send(rows)
        db.close()
    })


});

app.listen(port,()=>{
    console.log('Servidor rodando')
})