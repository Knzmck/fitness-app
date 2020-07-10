const router = require("express").Router();
const Workout = require("../models/workout.js");


router.post("/api/workouts", (req,res) => {
    const {date,exercises} = req.body;
    Workout.create({date,exercises})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", ( req,res ) => {
    Workout.find({}, (err, found) => {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
});
module.exports = router;