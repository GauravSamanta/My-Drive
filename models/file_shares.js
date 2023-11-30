const mongoose = require("mongoose");

const file_shares = new mongoose.Schema({

file_id: {
type: String,
required: true,
},
user_id: {
type: String,
required: true,
},
created_at: {
type: Date,
default: Date.now,
},
created_by: {
type: String,
required: true,
},

});


module.exports = mongoose.model("file_shares", file_shares);