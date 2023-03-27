import {Router} from "express";
import AuthController from "../controller/authController";

export const authRouter = Router()
authRouter.post('/login', AuthController.login)
authRouter.post('/register', AuthController.register)
