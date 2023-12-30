const notes = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const { v4: uuidv4 } = require("uuid");

//this will get notes that are in db and parse the data 
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

//this section will check if theres a title and text entered then give it an id and 
//render a new note to db.
notes.post("/", (req, res) => {
  const { title, text } = req.body;

    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    readAndAppend(newNote, "./db/db.json");
    res.json("Added Note!");
});

module.exports = notes;
