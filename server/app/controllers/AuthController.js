const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const userModel = require('../models/UserModel')

// Create Token
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, "secret");
};

const handleErrors = (err) => {
    let errors = { email: "", password: "" };

    if (err.message === "User not found")
        errors.email = "Email is not registered";

    if (err.message === "Incorrect password")
        errors.password = "Password is incorrect";

    if (err.code === 11000) {
        errors.email = "Email is already registered";
        return errors;
    }

    if (err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};

module.exports.register = async (req, res) => {
    const { username, email, password, isAdmin } = req.body;
    try {
        if (!password) {
            throw new Error("Password is required.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            username: username,
            email: email,
            password: hashedPassword,
            isAdmin
        });

        const result = await newUser.save();
        const data = result.toJSON();

        const token = createToken(newUser._id);

        res.cookie("jwt", token, {
            withCredentials: true,
            maxAge: maxAge * 1000,
        });

        res.status(201).json({ user: newUser._id, created: true });
    } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
    }
};



// Login
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });

        if (!user) {
            throw Error("User not found");
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw Error("Incorrect password");
        }

        // Update the lastLoggedIn field
        user.lastLoggedIn = new Date();
        // await user.save();

        const token = createToken(user._id);

        res.cookie("jwt", token, {
            withCredentials: true,
            maxAge: maxAge * 1000,
        });
        res.status(200).json({ data: user, created: true });
    } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({ errors, created: false });
    }
};

module.exports.getMe = async (req, res) => {
    const user = req.user;
    res.send(user)
}


module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while retrieving users" });
    }
};


module.exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await userModel.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error("User not found");
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while deleting the user" });
    }
};

module.exports.getAdminUsers = async (req, res) => {
    try {
        const adminUsers = await userModel.find({ isAdmin: true });
        res.status(200).json(adminUsers);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "An error occurred while retrieving admin users" });
    }
};
  

  module.exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await userModel.findById(id);
      if (!user) {
        throw new Error("User not found");
      }
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "An error occurred while retrieving the user" });
    }
  };