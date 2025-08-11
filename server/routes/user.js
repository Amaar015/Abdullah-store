import { Router } from "express";
import {
  Get_User,
  Get_Users,
  Login,
  Register,
  Send_OTP,
  Update_profile,
  Verify_OTP,
} from "../controllers/user";
import { Protect } from "../midleware/Protect";

const Authrouter = Router();

Authrouter.post("/login", Login);

Authrouter.post("/Register", Register, Send_OTP);

Authrouter.post("/send_otp", Send_OTP);

Authrouter.post("/verify_otp", Verify_OTP);

Authrouter.put("/update_profile/:id", Protect, Update_profile);

Authrouter.get("/get_user/:id", Protect, Get_User);

Authrouter.get("/get_users", Protect, Get_Users);

export default Authrouter;
