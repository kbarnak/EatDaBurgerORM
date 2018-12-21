//Dependencies
const express = require("express");
const app = express();
const burger = require("../models/burger.js");

//GET CRUD Method that displays the main page with the burgers
app.get("/", function (req, res) {
    burger.selectAll(function (data) {
        let burgerOrder = {
            burgers: data
        };
        console.log(burgerOrder);
        res.render("index", burgerOrder);
    });
});

// //POST CRUD Method that creates and puts in the burger order
// app.post("/api/burgers", function (req, res) {

//     var newBurger = req.body.burger_name.toString();
//     console.log(newBurger);

//     burger.insertOne("burger_name", newBurger, function (result) {
//         // Send back the ID of the new quote
//         res.json({ id: result.insertId });
//     });
// });

// //PUT CRUD Method that updates burger order
// app.put("/api/burgers/update/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.updateOne({ devoured: true }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// //DELETE CRUD Method that deletes specific burger order based on id
// router.delete("/api/burgers/delete/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     burger.deleteOne(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

module.exports = app;