import {Request, Response} from "express";
import postService from "../service/postService";

class PostController {
    private postService;
    constructor() {
        this.postService = postService;

    }
    getPostUser = async (req: Request, res: Response) => {
        try{
            let posts = await postService.getPostsUser(req.params.id);
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    findByIdPost = async (req: Request, res: Response) => {
        try{
            let posts = await postService.findByIdPost(req.params.id);
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    getAll = async (req: Request, res: Response) => {
        try{
            let posts = await postService.getAll();
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    create = async (req: Request, res: Response) => {
        try{
            let post = req.body;
            await this.postService.save(post);
            res.status(200).json('Success');
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    update = async (req: Request, res: Response) => {
        let id = req.params.id;
        let newPost = req.body;
        await this.postService.update(id, newPost);
        res.status(200).json('Success!')
    }
    remove = async (req: Request, res: Response) => {
        let id = req.params.id;
        await this.postService.remove(id);
        res.status(200).json('Success!')

    }
}
export default new PostController();