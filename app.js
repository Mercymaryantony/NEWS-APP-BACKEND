const express =require("express")
const mongoose =require("mongoose")
const cors =require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const {newsmodel}=require("./model/news")
mongoose.connect("mongodb+srv://mercy1112:mercy1112@cluster0.8x8j3ya.mongodb.net/newsDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input = req.body
    let news = new newsmodel(input)
    console.log(news)
    news.save()
    res.json({"status":"added"})
})

app.post("/view",(req,res)=>{
    newsmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.send("error")
    })
})

app.post("/search",(req,res)=>{
    let input=req.body
    newsmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.send("error")
    })
})

app.post("/delete",(req,res)=>{
    let input=req.body
    newsmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"deleted"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
})
app.listen(8000,()=>{
    console.log("server started")
})