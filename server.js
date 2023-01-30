import express from 'express';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const url = process.env.MONGODB_URL;
const PORT = process.env.APP_PORT;


// multer
const storage = new GridFsStorage({ url });
const upload = multer({storage})


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Routes
app.post('/upload', upload.single('files'), (req, res)=>{
     try {
        console.log("files", req.body)
        res.json({message: "hello from express"})
     } catch (error) {
        res.json({message: error.message})
     }
})

// Port Listen
app.listen(PORT, ()=> console.log(`port running on ${PORT}`));