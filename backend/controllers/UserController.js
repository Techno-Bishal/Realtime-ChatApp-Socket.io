import createTokenAndSaveCookie from "../JWT/GenerateToken.js";
import User from "../models/User.model.js";
import bcrypt from "bcryptjs";

export const Signup = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Failed! Password do not match",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(404).json({
        error: " Oopps ! User already exists.",
      });
    }
    //Hashed password code here
    const hashedPasswowrd = await bcrypt.hash(password, 10);

    const newUser = await new User({
      fullname,
      email,
      password: hashedPasswowrd,
    });

    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);

      res.status(200).json({
        message: "User created Successfully 🙆‍♂️",
        user: {
          _id: newUser._id,
          fullname: newUser.fullname,
          email: newUser.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    const isMatched = await bcrypt.compare(password, user.password);

    if (!user || !isMatched) {
      return res.status(404).json({ error: "Invalid email and password 😭" });
    }

    createTokenAndSaveCookie(user._id, res);
    res.status(201).json({
      message: "User logged successfully",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logout successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const allUsers = async (req,res) => {
  try {
    const loggedInUser = req.user._id
    const filteredUsers = await User.find({_id : {$ne: loggedInUser}}).select("-password");
    res.status(201).json(
      filteredUsers,
    );
  } catch (error) {
    console.log("Error in allusers controller : " + error);
  }
};
