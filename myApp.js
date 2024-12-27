require('dotenv').config()
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const { appendFile } = require('fs');
console.log("Hello World")
app.use("/", (req, res, next) => {
    console.log((`${req.method} ${req.path} - ${req.ip}`))
    next()
    })
    console.log("GET /json - ::ffff:127.0.0.1");
/* app.get("/", (req,res) =>{
    res.send("Hello Express")
}) */





app.get("/", (req, res) => {
    res.sendFile(absolutePath = __dirname + '/views/index.html')
})
   



app.use("/public", (express.static(__dirname + '/public')))


   



app.get("/json", (req,res) => {
    let response = "Hello json".toUpperCase()
    if(process.env.MESSAGE_STYLE === "uppercase"){
    res.json({message: response})
    }
 else {
    res.json({message: "Hello json"})
}})


app.get("/now", (req,res, next) => {
    req.time = new Date().toString()
   next()
}, (req, res) => {
    res.json({time: req.time})
})

app.get("/:word/echo", (req, res) => {
        word = req.params.word  
    res.json({echo: word})

})


app.use((bodyParser.urlencoded({extended: false})))
app.use(bodyParser.json())

app.get("/name",(req, res) => {
   res.json({name:`${req.query.first} ${req.query.last}`})
})

app.post("/name", (req, res) => {
    res.json({name: `${req.body.first} ${req.body.last}`})
})
