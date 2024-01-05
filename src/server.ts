import express from 'express';
import cors from 'cors';
import http from 'http';
import route from './route';
const pool = require("./config/connectPostgreSQL");
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors({
    origin: '*'
}));


pool.connect(
    (err:Error)=>{ 
    if (err) throw err; console.log("connect");
})


const port = "8088";
server.listen(port,()=>console.log('Start server in port '+ port));

app.use('/api/test',route());