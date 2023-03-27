import { Router } from "express";
import PostController from "../controller/postController";


export const postRouter = Router ()
postRouter.get('/',PostController.getAll);
postRouter.get('/:id', PostController.getPostUser)
postRouter.post('/',PostController.create);
postRouter.put('/:id',PostController.update);
postRouter.delete('/:id',PostController.remove);
postRouter.get('/find-by-id/:id', PostController.findByIdPost)



