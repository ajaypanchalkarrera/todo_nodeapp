import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  // console.log(process.env.NODE_ENV==="Developement");

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,

      // it wiil work on deployement not on postman
      sameSite: process.env.NODE_ENV === "Developement" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Developement" ? false : true, // it does not send anty cookie on postman server
    })
    .json({
      success: true,
      message: message,
    });
};
