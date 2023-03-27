import {AppDataSource} from "../data-soure";
import {Users} from "../model/users";

class UserService {
    private userRepository
    constructor() {
        this.userRepository = AppDataSource.getRepository(Users)
    }
    editUser = async (id, newUser) => {
        let user = await this.userRepository.findOneBy({idUser: id})
        if (!user) {
            return null;
        }
        return await this.userRepository.update({idUser: id}, newUser)
    }
    getAll = async () => {
        let user = await this.userRepository.find()
        return user
    }
    getUser = async (id) => {
        let user = await this.userRepository.findOneBy({idUser: id})
        return user;
    }
    getProfileUser = async (idUser, id) => {
        let sql = `select *
                   from users u
                            join friends f on (u.idUser = f.idSender) or (u.idUser = f.idReceiver)
                   where (f.idReceiver = ${idUser} and f.idSender = ${id})
                      or (f.idReceiver = ${id} and f.idSender = ${idUser})
                       and idUser = ${id}`
        return await this.userRepository.query(sql)
    }
    lock = async (id) => {
        let user = await this.userRepository.findOneBy({idUser: id});
        if
        (!user) {
            return null;
        } else {
            if (user.status === 'open') {
                return this.userRepository.update({idUser: id}, {status: 'locked'})
            } else {
                return this.userRepository.update({idUser: id}, {status: 'open'})
            }
        }
    }
    changePassword = async (user, newPass) => {
        return await this.userRepository.update({idUser: user.idUser}, {password:newPass})
    }
    findUser = async (id) => {
        let user = await this.userRepository.findOneBy({idUser: id})
        if (!user) {
            return null;
        }else{
            return user
        }
    }
    friendSuggestion = async (id) => {
        let sql = `select *
                   from users
                   where idUser not in (select idSender from friends where idReceiver = ${id} or idSender = ${id})
                     and idUser not in (select idReceiver from friends where idSender = ${id} or idReceiver = ${id})
                     and idUser != ${id}    
        `
        return await this.userRepository.query(sql)
    }
}
export default new UserService()