import express from 'express';
const pool = require("../config/connectPostgreSQL");

export const getdata = async(req:express.Request,res:express.Response) =>{
    const query = "SELECT * FROM test"
    await pool.query(query)
    .then((data:any)=>{
        res.status(200).json({status:"OK",data:data.rows})
    })
    .catch((err:Error)=>{
        res.status(400).json({status:"ERROR",message:err})
    });
};
