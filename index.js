// console.log("Here");

const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('Listening at 3000'));

// using express to host static files
app.use(express.static('public'));
app.use(express.json({ limit : '1mb' }));

// Adding database  
const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) =>{
    // request received from client 
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);

    // sending response to client
    response.json({
        status : 'success',
        timestamp : timestamp,
        Name : data.username,
        latitude : data.lat,
        longitude : data.lon,
    })
});