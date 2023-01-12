console.log("Here");

const express = require('express');
const app = express();

app.listen(3000, () => console.log('Listening at 3000'));

// using express to host static files

app.use(express.static('public'));
