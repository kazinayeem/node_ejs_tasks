const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },

  email: {
    type: "string",
    required: true,
    
  },
});

const userModel = mongoose.model("user", schema);

module.exports = userModel;
