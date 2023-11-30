const mongoose = require("mongoose");

const files = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  left: {
    type: Number,
    required: true,
  },
  right: {
    type: Number,
    required: true,
  },
  parent: {
    type: Number,
    required: true,
  },
  is_folder: {
    type: Boolean,
    required: true,
  },
  mime_type: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: String,
    required: true,
  },
  updated_by: {
    type: String,
    required: true,
  },
  deleted_at: {
    type: Date,
  },
  deleted_by: {
    type: String,
  },
});


const Files = mongoose.model("files", files);