const User = require("../module/userModule");

const createUser = async (req, res) => {
  try {
    const { name, job, email, phone } = req.body;

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ status: "Failed", msg: "User already exists." });
    }

    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res
        .status(400)
        .json({ status: "Failed", msg: "User already exists." });
    }

    const newUser = new User({
      name,
      job,
      email,
      phone,
    });
    await newUser.save();
    res
      .status(201)
      .send({ status: "Success", msg: "User created successfully." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length) {
      return res.status(404).json({ status: "Failed", msg: "No users found" });
    }

    return res
      .status(200)
      .json({ users, status: "Success", msg: "Fetched all users." });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const body = req.body;

    const update = await User.findByIdAndUpdate(userId, body, { new: true });

    if (!update) {
      return res.status(404).json({ status: "Failed", msg: "User not found" });
    }
    return res.status(200).json({
      status: "Success",
      msg: "Record updated successfully.",
      update,
    });
  } catch (error) {
    return res.status(500).json({ status: "Failed", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletUSer = await User.findByIdAndDelete(userId);
    if (!deletUSer) {
      return res.status(404).json({ status: "Failed", msg: "User not found" });
    }

    return res
      .status(200)
      .json({ status: "Success", msg: "Deleted Successfully..." });
  } catch (error) {
    return res.status(500).json({ status: "Failed", error });
  }
};

module.exports = { createUser, getUser, updateUserById, deleteUser };
