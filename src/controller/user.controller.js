const userModel = require("../model/user_model");
exports.userpost = async (req, res, next) => {
  try {
    const user = new userModel(req.body);

    await user.save();

    return res.redirect("/");

    next();
  } catch (error) {
    return res.status(500).json({
      message: "error saving user",
    });
  }
};

exports.getalluser = async (req, res, next) => {
  try {
    const users = await userModel.find();

    return res.render("index", { users });
  } catch (error) {
    res.status(500).json({ error: error });
  }

  next();
};

exports.textuser = async (req, res, next) => {
  console.log(req.body);
};

exports.deleteuser = async (req, res, next) => {
  try {
    let { id } = req.params;
    await userModel.findOneAndDelete({ _id: id });
    return res.redirect("/");
    next();
  } catch (error) {
    console.log(error);
  }
};
