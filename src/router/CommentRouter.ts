import {Router} from "express";
import commentsController from "../controller/comments.controller";

export const commentRouter = Router()
commentRouter.post('/:idUser/:idPost', commentsController.newComment)
commentRouter.delete('/:idComment', commentsController.DeleteComment)
