const mysql= require("mysql");

const con= mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"admin123",
  database:"ff"
});

con.connect((err)=>{

    if(err){

        console.warn("error is connection");
    }


});

module.exports = con;
