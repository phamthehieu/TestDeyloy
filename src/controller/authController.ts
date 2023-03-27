import AuthService from "../service/authService";
import {Request, Response} from "express";
class AuthController {
    private AuthService
    constructor() {
        this.AuthService = AuthService;
    }
    login = async (req: Request, res: Response) => {
        try {
            let user = await this.AuthService.checkUser(req.body)
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    register = async (req: Request, res: Response) => {
        try {
            let userRegister = req.body
            userRegister.role = 'user'
            userRegister.status = 'open'
            let user = await this.AuthService.register(userRegister)
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}
export default new AuthController();