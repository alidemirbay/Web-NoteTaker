const fs = require("fs")

const db = require("../db/db.json")


let id = db.length + 1

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {

        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data))
        });
    })

    app.post("/api/notes", function (req, res) {
        req.body.id = id++;

        db.push(req.body)
        fs.writeFile("./db/db.json", JSON.stringify(db), function (err) {
            if (err) throw err
        })
        res.json(db)
    })
    app.delete("/api/notes/:id", function (req, res) {
        let getId = req.params.id

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
