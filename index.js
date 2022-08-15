const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const jsonParser = bodyParser.json()

// API untuk memindahkan challenge ch3 ke server, untuk mengakses /games bisa melalui html button play now
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname+'/challenge.html'))
})

// API untuk memindahkan challenge ch4 ke server, untuk kembali ke halaman utama bisa melalui button <
app.get('/games',(req, res) => {
    res.sendFile(path.join(__dirname+'/challenge ch-4.html'))
})

// API untuk mengenalkan aset
app.use('/css', express.static(__dirname+'/css'))
app.use('/assets', express.static(__dirname+'/assets'))
app.use('/js', express.static(__dirname+'/js'))

// API untuk membalikan json berisi kumpulan user data
app.get('/userdata',(req, res) => {
    let data = JSON.parse(fs.readFileSync('./userdata.json', 'utf-8'))
    res.send(data)
})

// API login
app.post('/login', jsonParser, (req,res) => {
    let data = JSON.parse(fs.readFileSync('./userdata.json', 'utf-8'))
    let authorizer
      for(let i = 0; i < data.length; i++){
        if(data[i].username === req.body.username && data[i].password === req.body.password)
        {
          authorizer = true
        }
      }
      if(authorizer){
        res.send('Authorized')
      }else{
        res.status(401).send('Unauthorized')
      }
})

app.listen(3000,()=>{
  console.log("localhost:3000")
})