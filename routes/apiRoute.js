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

}