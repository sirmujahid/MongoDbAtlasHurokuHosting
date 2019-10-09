const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// kindly change username and password
const url = 'mongodb+srv://<usrename>:<password>@cluster0-r7hiz.azure.mongodb.net/test?retryWrites=true&w=majority';

// Library is Database
// Books is collection

const dbName = 'Library';
 
app.get('/', (req, res, next)=>{
    const mytemp = req.query.temprature
    MongoClient.connect(url, function(err, client) 
    {assert.equal(null, err);
      console.log("Connected successfully to server");
     
      const db = client.db(dbName);
    
      db.collection('Books').insertOne({
        Temp: mytemp
      })
    
      client.close();
    }); 
    res.send(`Currnt Temprature is : ${mytemp}`)

})

app.listen(process.env.PORT || 5000)