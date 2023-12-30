// Set up an Express application, import necessary modules, and import routes from "index.js".
const express = require("express");
const path = require("path");
const app = express();
const api = require("./routes/index.js");

const PORT = 3006;

// Configure middleware: serve static files, parse JSON, handle "/api" routes, and parse URL-encoded data.
app.use(express.static("public"));
app.use(express.json());
app.use("/api", api);
app.use(express.urlencoded({ extended: true }));

// Handle GET requests to the root endpoint by sending the "index.html" file.
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// Handle GET requests to the "/notes" endpoint by sending the "notes.html" file.
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
// Start the Express app, listen on the specified port, and log the server's address.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
