const fs = require('fs');
const path = require('path');
const allNotes = require('../db/db.json');

module.exports = app => {

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});



    
}