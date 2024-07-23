const express = require ("express")
const path = require ("path")
const app = express ()
const PORT= 3009;
const mongoose = require ("mongoose")
const sample = require ('./Models/certiapp')
const dotenv=require('dotenv');
dotenv.config();

const uri = process.env.mongo_uri;

mongoose.connect(uri);
const database = mongoose.connection;
database.on("error", (error) => {
    console.log(error);
});
database.once("connected", () => {
    console.log("Database Connected");
});



app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));

app.get ('/' , (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get ('/issue', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'issueCertificate.html'))
})



app.post ('/submit-form' , async (req,res)=> {

    try{
        const data = req.body;
        console.log(data);
        const details = await sample.create(data);
        res.status(201).redirect('/thank-you')
    } catch (error){
        res.status(401).json
    }
})




app.get ('/thank-you', (req,res)=> {
    res.sendFile(path.join(__dirname, 'public', 'formsubmitted.html'))
})

app.get('/certificate' , (req,res) => {
    res.json(certificates)
})

app.get('/certificate/:id' , (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'view.html'))
})

app.get ('/api/certificate/:id', async (req,res)=> {
    const id = req.params.id
    const details = await sample.findOne({Certificateid : id})
    console.log(details)
    res.json(details)
})

app.listen(PORT, () => {
    console.log("The server is running at Port 3009")
})












// const express = require ("express")
// const {mongoose} = require ("mongoose")
// const routes = require ('./route')
// const dotenv = require('dotenv')
// dotenv.config();

// const uri = process.env.mongo_uri; // ignr koduthale env file avdunnu eduth process cheyyu

// const app = express ()

// const PORT = 3009;

// app.listen (PORT, () => {
//     console.log (`The server is running at port ${PORT}`)
// })

// app.use(express.json())
// app.use('/', routes)

// //mongoose.connect("   //mongodb://localhost:27017/Certiapp")
// mongoose.connect (uri)  //using .env  //igne cheyyunath enthina ennu vachal mukalilathe linkil user name and password okke vachu futureil cheyyendi varum apo ath ellrum kanand irikan hide cheyyan
// const Database = mongoose.connection;
// Database.on ("error", (error) =>{
//     console.log ("error")
// });
// Database.once ("connected", () => {
//     console.log ("Database Connected")
// })
