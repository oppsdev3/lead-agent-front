const mongoose = require('mongoose');
const {Timestamp} = require("mongodb");

const leadSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    interestedcourse: {
        type: String,
        required: true
    },
    collegename: {
        type: String,
        required: true
    },
   status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    }
})

const LeadStatus = mongoose.model('leads', leadSchema);

module.exports = LeadStatus;