const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/register-routes");
const app = express();

//middlewares(connect to the routes)
app.use(express.json());
app.use("/Registers",router);



mongoose.connect("mongodb+srv://jayani:18232928@cluster0.oxzsrxd.mongodb.net/grocerydelivery?retryWrites=true&w=majority")
.then(()=>console.log("connected to database"))
.then(()=> {
    app.listen(5000)
})
.catch((err)=>console.log(err));

//18232928