import {Router} from "express";
import {authRouter} from "./authRouter";
import {userRouter} from "./userRouter";
import {commentRouter} from "./CommentRouter";
import {auth} from "../middleware/auth";
import {postRouter} from "./postRouter";
import {friendsRouter} from "./friendsRouter";
export const router = Router()
router.use('/auth', authRouter)
router.use(auth)
router.use('/users', userRouter)
router.use('/comment', commentRouter)
router.use('/posts', postRouter)
router.use('/friends', friendsRouter)