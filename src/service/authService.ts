import {AppDataSource} from "../data-soure";
import {Users} from "../model/users";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";
class AuthService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(Users);
    }
    register = async (user) => {
        user.password = await bcrypt.hash (user.password, 10)
        return this.userRepository.save(user)
    }
    checkUser = async (user) => {
        try {
            let userCheck = await this.userRepository.findOneBy({userName: user.userName})
            if (!userCheck) {
                return "User not found"
            } else {
                if (userCheck.status === 'locked') {
                    return "User is already locked"
                }else {
                    let passwordCompare = await bcrypt.compare(user.password, userCheck.password)
                    if (!passwordCompare) {
                        return 'Password does not match'
                    }else {
                        let payload = {
                            idUser: userCheck.idUser,
                            userName: userCheck.userName,
                            role: userCheck.role,
                            status: userCheck.status
                        }
                        const token = jwt.sign(payload, SECRET, {
                            expiresIn: 3600000
                        })
                        const check = {
                            token: token,
                            idUser: userCheck.idUser,
                            userName: userCheck.username,
                            role: userCheck.role,
                            status: userCheck.status
                        }
                        return check;
                    }
                }
            }
        }catch (e) {
            console.log(e.message)
        }

    }
}
export default new AuthService()