const mongoose = require("mongoose");


const starred_files = new mongoose.Schema({

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
});

module.exports = mongoose.model("starred_files", starred_files);