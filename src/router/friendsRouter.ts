import {Router} from "express";
import FriendsController from "../controller/friendsController";

export const friendsRouter = Router()
friendsRouter.post('/send-friends', FriendsController.sendFriends)
friendsRouter.post('/confirm-friends', FriendsController.confirmFriends)
friendsRouter.get('/:id', FriendsController.listFriends)
friendsRouter.delete('', FriendsController.remove)
friendsRouter.get('/friend-suggestion/:id', FriendsController.friendSuggestion)
friendsRouter.get('/list-send-friends/:id', FriendsController.listSendFriends)
friendsRouter.get('/list-receive-friends/:id', FriendsController.listReceiveFriends)

