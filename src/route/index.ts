import express from "express";
import { getdata } from "../controllers/test";

const router = express.Router();

export default () : express.Router =>{
    router.get('/getdata',getdata);
    return(router);
};