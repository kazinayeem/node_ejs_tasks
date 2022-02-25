const mongoose = require('mongoose') 


let ol = "mongodb://127.0.0.1:27017/userejs"
const url =
  "mongodb+srv://admin:admin123@cluster0.j0gm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = db = async () => {
  await mongoose.connect(url);
  try {
    console.log("Connecting to database");
  } catch (error) {
    console.log(error);
  }
};
