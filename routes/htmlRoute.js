// We need to include the path package to get the correct file path for our html
const path = require('path');

// exports the routes
module.exports = (app) => {
    // In each of the below cases the user is shown an HTML page of content
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    });
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}
