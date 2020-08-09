const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
}, {
    timestamps: true, // adds fields for created and modified.
});

const User = mongoose.model('User', userSchema);

module.exports = User;
