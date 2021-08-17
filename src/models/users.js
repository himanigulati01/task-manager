const validator = require("validator");
const mongoose = require("mongoose");

const users = mongoose.model("users", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("inValid email!");
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) throw new Error("age mut be greater than 0!");
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    trim: true,
    validate(value) {
      if (validator.contains(value, "password"))
        throw new Error("password cant be password");
    },
  },
});
module.exports = users;
