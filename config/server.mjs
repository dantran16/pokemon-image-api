import express from "express";
const server = express()
import * as path from "path";
import { dirname } from 'path';
const __dirname = dirname('../')
const dir = path.join(__dirname, 'public')

server.use('/img/', express.static(dir + '/images'));
server.use('/sil/', express.static(dir + '/silhouette'));

server.use(express.urlencoded({
    extended: true
}))


export default server;