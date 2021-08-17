const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// const task1 = new tasks({ description: "  buy milk", completed: true });
// task1
//   .save()
//   .then(() => console.log(task1))
//   .catch((err) => console.log(err));

// const users = mongoose.model("users", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("inValid email!");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     validate(value) {
//       if (value < 0) throw new Error("age mut be greater than 0!");
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: 6,
//     trim: true,
//     validate(value) {
//       if (validator.contains(value, "password"))
//         throw new Error("password cant be password");
//     },
//   },
// });

// const me = new users({
//   name: "himani",
//   age: 11,
//   email: "himnai@gmail.com",
//   password: "123",
// });

// me.save()
//   .then((res) => console.log(me))
//   .catch((err) => console.log(err));
