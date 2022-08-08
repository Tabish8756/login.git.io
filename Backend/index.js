const express=require ('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())



mongoose.connect(process.env.DataBase_Access,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>console.log("Server Start"))

//Schema

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

// Model

const User=new mongoose.model("User", userSchema)

//Routes

app.post('/login', (req, res)=>{
    res.send("login")
})

app.post('/register', (req, res)=>{
    const{name, email, password}=req.body
    const user=new User({
        name,
        email,
        password
    })
    user.save(err=>{
        if(err){
            res.send(err)
        }
        else{
            res.send({message:"Sucessfull"})
        }
    })

})



app.listen(4000, ()=>console.log("Server is running"))




