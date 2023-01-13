// console.log("Here");

const express = require('express');
const app = express();

app.listen(3000, () => console.log('Listening at 3000'));

// using express to host static files
app.use(express.static('public'));
app.use(express.json({ limit : '1mb' }));

app.post('/api', (request, response) =>{
    // request received from client 
    console.log(request.body);
    // sending response to client
    response.json({
        status : 'success',
        latitude : request.body.lat,
        longitude : request.body.lon,
    })
});