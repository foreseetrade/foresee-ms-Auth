import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

//@ts-ignore
import { UserDetail } from "otpless-node-js-auth-sdk";
const router = express.Router();
console.log("Auth routes loaded");
// Define authentication-related routes
router.post("/login", (req: Request, res: Response) => {
  // Authenticate user here, if valid credentials generate a token
  const username = req.body.username;
  // Verify user credentials...

  // If user credentials are valid, generate JWT token
  const accessToken = jwt.sign({ username: username }, config.jwtSecret);
  res.json({ accessToken: accessToken });
});

router.post("/otpless", async (req: Request, res: Response) => {
  try {
    // Authenticate user here, if valid credentials generate a token
    console.log("Request:", req.body);
    const { token } = req.body;
    console.log("Token:", token);

    console.log("config:", config);

    const userDetail = await UserDetail.verifyToken(
      token,
      config.clientId,
      config.clientSecret
    );
    console.log("User Details:", userDetail);
    const jwtToken = jwt.sign({ email: userDetail.email }, config.jwtSecret);
    userDetail.jwtToken = jwtToken;
    return res.json(userDetail);
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json("Internal server error :" + err);
  }
});
export default router;
