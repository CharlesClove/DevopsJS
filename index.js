const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to docker tut');
});

app.listen(3000, () => {
    console.log(`Listening on port http://localhost:3000`);  
});
