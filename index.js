// console.log("Here");

const express = require('express');
const app = express();

app.listen(3000, () => console.log('Listening at 3000'));

// using express to host static files
app.use(express.static('public'));
app.use(express.json({ limit : '1mb' }));
app.post('/api', (req, res) =>{
    // request received from client 
    console.log(req.body);
    // sending response to client
});