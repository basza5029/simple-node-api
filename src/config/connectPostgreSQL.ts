const {Pool} = require("pg");
const pool  = new Pool({
    user:"root",
    host:"dpg-cmboofv109ks73adkjmg-a.singapore-postgres.render.com",
    password:"YVINDPHCEmNLIunRvC0s2OJiOrukNwED",
    database:"basdb",
    port:5432,
    ssl: true
});

module.exports = pool;