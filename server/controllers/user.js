import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";

export const Login = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};

export const Register = async (req, res, next) => {
  try {
    let { name, email, password, c_password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
    if (password !== c_password) {
      return res.status(400).json({
        success: false,
        message: "Password must be matched",
      });
    }
    const existing_User = await User.findOne({ email });
    if (existing_User) {
      return res.status(400).json({
        success: false,
        message: "User Already exists",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      const user = await User.create({
        name,
        email,
        password,
      });
      req.userId = user._id;
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};

export const Send_OTP = async (req, res) => {
  try {
    const { userId } = req;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User dose not found",
      });
    }
    const new_otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });

    const otp_expiry_time = Date.now() + 5 * 60 * 1000; // otp expires in 5 minutes
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User dose not exists",
      });
    }
    user.otp = new_otp.toString;
    user.otp_expiry_time = otp_expiry_time;

    await user.save({ new: true, validateModifiedOnly: true });

    res.status(200).json({
      success: true,
      message: "OTP send Successfully",
      new_otp,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};

export const Verify_OTP = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};

export const Update_profile = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};

// get user by id and name
export const Get_User = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};

// get all user for admin
export const Get_Users = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Something went wrong!",
      success: false,
    });
  }
};
