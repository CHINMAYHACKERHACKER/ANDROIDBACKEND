const express = require("express");
const cors = require("cors");
const CON = require("./MYSQL.js");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/SIGNUP", (req, res) => {
  const NAME = req.body.NAME;
  const PASS = req.body.PASSWORD;
  const EMAIL = req.body.EMAIL;
  CON.query(`INSERT INTO USERSIGNUPDATA (USERNAME,PASSWORD,EMAIL) values ('${NAME}','${PASS}','${EMAIL}')`, (ERR, DATA, fields) => {
    if (ERR) {
      console.log(ERR);
    }
    else {
      res.send(DATA);
    }
  })
})

app.get("/SIGNUP", (req, res) => {
  CON.query(`SELECT * FROM USERSIGNUPDATA`, (ERR, DATA, fields) => {
    if (ERR) {
      console.log(ERR);
    }
    else {
      res.send(DATA);
    }
  })
})

app.post("/USERDATA", (req, res) => {
  const USERNAME = req.body.USERNAME;
  const COLLEGENAME = req.body.COLLEGENAME;
  const USERROLLNUMBER = req.body.USERROLLNUMBER;
  const USERREGISTERNUMBER = req.body.USERREGISTERNUMBER;
  const MOBILENUMBER = req.body.MOBILENUMBER;
  CON.query(`INSERT INTO USERHOMEPAGEDATA (USERNAME,COLLEGENAME,ROLLNUMBER,REGISTERNUMBER,MOBILENUMBER) values ('${USERNAME}','${COLLEGENAME}','${USERROLLNUMBER}','${USERREGISTERNUMBER}','${MOBILENUMBER}')`, (ERR, DATA, fields) => {
    if (ERR) {
      console.log(ERR);
    }
    else {
      res.send(DATA);
    }
  })
})

app.get("/USERDATA", (req, res) => {
  CON.query(`SELECT * FROM USERHOMEPAGEDATA`, (ERR, DATA, fields) => {
    if (ERR) {
      console.log(ERR);
    }
    else {
      res.send(DATA);
    }
  })
})



app.listen(3001, () => {
  console.log("LISTENING TO PORT 3001");
});
