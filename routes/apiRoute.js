const fs = require("fs")

// database which holds notes in array
const db = require("../db/db.json")

// id variable for deleting note
let id = db.length + 1

module.exports = function (app) {

    // reads the database parse the content and send to the client
    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data))
        });
    })

    // 
    app.post("/api/notes", function (req, res) {
        // add id to the note,push into array wite to file and send to client
        req.body.id = id++;
        db.push(req.body)
        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
            if (err) throw err
        })
        res.json(db)
    })
    app.delete("/api/notes/:id", function (req, res) {
        let getId = req.params.id
        //find the note with correct id and remove it from array
        // write to file and send to client
        for (let i = 0; i < db.length; i++) {
            if (db[i].id === parseInt(getId)) {
                db.splice(i, 1);
            }
        }
        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
            if (err) throw err
        })
        res.json(db)
    })
}
