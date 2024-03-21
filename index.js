const express = require('express');             //importing express library
const app = express();

// creat route handler and associate with route
app.get('/', (req, res) => {
    res.send({ Bye: 'Buddy' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);


//localhost:5000/