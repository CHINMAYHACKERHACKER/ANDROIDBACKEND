const mysql=require("mysql");

const CON=mysql.createConnection({
    host:"0.0.0.0",
    user:"root",
    password:"HACKER",
    database:"mac"
})

CON.connect((ERR)=>{
    if(ERR){
        console.log("DATABASE NOT CONNECTED");
    }
    else{
        console.log("DATABASE CONNECTED");
    }
})

module.exports=CON;