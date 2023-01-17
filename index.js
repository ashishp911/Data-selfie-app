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
    // inserting to database
    database.insert(data);

    // sending response to client
    response.json(data);
});

app.get('/api', (request, response) => {
    // console.log(response);
    database.find({}, (err, data) => {
        if (err){
            console.log("Error occured ");
            response.end();
            return
        }
        response.json(data);
    });
});

// app.get('/clearData', (request, response) => {
//     // console.log(response);
//     database.remove({}, (err, numRemoved) => {
//         if (err){
//             console.log("Error occured ");
//             response.end();
//             return
//         }
//         console.log(`Number of docs removed = ${numRemoved}`)
//     });
// });
