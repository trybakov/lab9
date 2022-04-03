const port = 3000
const express = require('express')
const app = express()
const homeController = require("./controllers/homeController.js")


app.set('view engine', 'ejs'); 
app.get("/home", homeController.sendReqParam)
app.get("/", function(req,res){
    res.redirect("/home");
});
app.get("/images/1", homeController.sendReqParam)
app.get("/images/2", homeController.sendReqParam)
app.get("/images/3", homeController.sendReqParam)
app.use(express.static('public'))

.listen(port, () => {
    console.log(`The express.js server has started and is listening on port number: ${port}`);   
});
