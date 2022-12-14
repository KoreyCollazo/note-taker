const PORT = process.env.PORT || 3001;
//Dependencies
const express = require('express');
const app = express();


//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//reveal public folder
app.use(express.static('public'));
//require routing file
require('./routes/routes')(app);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});