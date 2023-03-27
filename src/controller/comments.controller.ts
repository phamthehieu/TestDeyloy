import { AppDataSource } from "../data-soure";
import { Users } from "../model/users";
import { Comments } from "../model/comments";
import { Posts } from "../model/posts";
import createError from "http-errors";

const CommentRepo = AppDataSource.getRepository(Comments);
const PostRepo = AppDataSource.getRepository(Posts);

class CommentController {
async newComment(req, res, next) {
    try {
      const post = await PostRepo.findOne({
        where: { idPost: req.params.idPost },
      });
      if (!post) {
        return next(createError(401, "Post Not Found"));
      }
      const comment = await CommentRepo.save({
        idUser: req.params.idUser,
        content: req.body.comment,
        idPosts: req.params.idPost,
        time: req.body.time
      });
      res.status(201).json({
        success: true,
        comment,
      });
    } catch (error) {
      next(error);
    }
  }

   async DeleteComment(req, res, next) {
    try {
      const comment = await CommentRepo.findOne({
        where: { idComment: req.params.idComment },
      });
      if (!comment) {
        return next(createError(404, "Post Not Found"));
      }
      
      await CommentRepo.delete({ idComment: req.params.idComment });
      res.status(200).json({
        success: true,
        message: "Comment Delete Success",
      });
    } catch (error) {
      next(error);
    }
  }
};
 export default new CommentController()