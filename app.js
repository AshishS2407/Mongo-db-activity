const express = require ("express")
const {mongoose} = require ("mongoose")
const routes = require ('./route')

const app = express ()

const PORT = 3009;

app.listen (PORT, () => {
    console.log (`The server is running at port ${PORT}`)
})

app.use(express.json())
app.use('/', routes)

mongoose.connect("mongodb://localhost:27017/Certiapp")
const Database = mongoose.connection;
Database.on ("error", (error) =>{
    console.log ("error")
});
Database.once ("connected", () => {
    console.log ("Database Connected")
})
