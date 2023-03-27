import FriendsService from "../service/friendsService";
import {Request, Response} from "express";
import UserService from '../service/userService'

class AuthController {
    private FriendsService
    private UserService

    constructor() {
        this.FriendsService = FriendsService;
        this.UserService = UserService;
    }

    sendFriends = async (req: Request, res: Response) => {
        try {
            let sendFriend = req.body
            sendFriend.status = 'confirm'
            let user = await this.FriendsService.sendFriends(sendFriend)
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    confirmFriends = async (req: Request, res: Response) => {
        try {
            let user = await this.FriendsService.confirmFriends(req.body.idSender, req.body.idReceiver)
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    listSendFriends = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let status = 'confirm'
            let list = await this.FriendsService.listSendFriends(id, status)
            res.status(200).json(list)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    listReceiveFriends = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let status = 'confirm'
            let list = await this.FriendsService.listReceiveFriends(id, status)
            res.status(200).json(list)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    listFriends = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let status = 'friend'
            let list = await this.FriendsService.listFriends(id, status)
            res.status(200).json(list)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    remove = async (req: Request, res: Response) => {
        try {
            let friend = await this.FriendsService.remove(req.query.idSender, req.query.idReceiver)
            res.status(200).json(friend)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    friendSuggestion = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let users = await this.UserService.friendSuggestion(id);
            res.status(200).json(users)
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new AuthController();