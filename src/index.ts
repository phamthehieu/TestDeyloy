// import {AppDataSource} from "./data-soure";
import express from 'express';
import bodyParser from "body-parser";
import cors from "cors"
// import {router} from "./router/router";
const http = require("http");
const app = express();
import { Request, Response } from 'express'
// AppDataSource.initialize().then(() => {
//     console.log(" Connect Server! ")
// })
app.get('/', (_req: Request, res: Response) => {
    return res.send('1')
})
app.get('/a1', (_req: Request, res: Response) => {
    return res.send('2')
})
app.get('/ping', (_req: Request, res: Response) => {
    return res.send('1')
})
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
// app.use('', router);
app.listen(3000, () => {
    console.log(' Connect Server! ')
})