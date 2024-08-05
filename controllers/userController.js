import userModel from "../models/userModel.js";

export const updateserController = async(req,res,next) => {
    const { name, email, lastName, location } = req.body;
    if (!name || !email || !lastName || !location) {
      next("Please Provide All Fields");
    }
    const user = await userModel.findOne({ _id: req.user.userId });
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.location = location;

    await user.save();
    const token = user.createJWT();
    res.status(200).json({
        user,
        token,
    });
};

//GET User Profile

export const getUserProfile = async(req, res, next) => {
    const { email} = req.body;
    if (!email ) {
      next("User not found");
    }
    const user = await userModel.findOne({ _id: req.user.userId });
    console.log(user);
    if (!user) {
      next("User Not Found");
    }
    res.status(200).json({
        user,
    });
};