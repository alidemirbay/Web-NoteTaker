const fs = require("fs")

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {

        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data))
        });
    })



}