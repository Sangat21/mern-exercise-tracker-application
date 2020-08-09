const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create schema
const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true, // adds fields for created and modified.
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
