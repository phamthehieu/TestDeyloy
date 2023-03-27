import {AppDataSource} from "../data-soure";
import {Friends} from "../model/friends";
class FriendsService {
    private friendsRepository;
    constructor() {
        this.friendsRepository = AppDataSource.getRepository(Friends);
    }
    sendFriends = async (send) => {
       await this.friendsRepository.save(send)
        return 'Success'
    }
    confirmFriends = async (idUser, id) => {
        let sql = `UPDATE friends SET status = 'friend' where (idReceiver = ${idUser} and idSender = ${id}) or (idReceiver = ${id} and idSender = ${idUser})`
        await this.friendsRepository.query(sql)
        return 'Success'
    }
    listSendFriends = async (id, status) => {
        let sql = `SELECT * from friends f JOIN users u ON f.idSender = u.idUser where f.idReceiver = ${id} and f.status = '${status}'`
        return await this.friendsRepository.query(sql)
    }
    listReceiveFriends = async (id, status) => {
        let sql = `SELECT * from friends f JOIN users u ON f.idReceiver = u.idUser where f.idSender = ${id} and f.status = '${status}'`
        return await this.friendsRepository.query(sql)
    }
    listFriends = async (id, status) => {
        let sql = `select * from friends f JOIN users u ON f.idSender = u.idUser where f.idReceiver = ${id} and f.status = '${status}'
                   union
                   select * from friends f JOIN users u ON f.idReceiver = u.idUser where f.idSender = ${id} and f.status = '${status}'`
        return await this.friendsRepository.query(sql)
    }
    remove = async (sender, receiver) => {
        let sql =`delete from friends where (idReceiver = ${receiver} and idSender = ${sender}) or (idReceiver = ${sender} and idSender = ${receiver} )`
        await this.friendsRepository.query(sql)
        return 'Success'
    }
}
export default new FriendsService()