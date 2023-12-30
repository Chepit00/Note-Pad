const notes = require("express").Router();
//importing two functions located in helpers folder 
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
//this is using an older version of uuid 
const { v4: uuidv4 } = require("uuid");

//this will get notes that are in db and parse the data 
notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

//this section will check if theres a title and text entered then give it an id and 
//appends a new note to db.
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
