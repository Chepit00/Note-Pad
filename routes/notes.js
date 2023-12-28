const notes = require('express').Router();
const noteList = require('../db/db.json');



notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) =>
        res.json(JSON.parse(data))
    );
});

notes.post('/', (req, res) => {
    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        
    }
})



module.exports = notes;