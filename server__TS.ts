import express from "express";
const app = express();
import mongoose from "mongoose"
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const {port, mongoURI} = require("./config")
// my bouldering operations
const recordsRoutes = require("./routes/records");
// for environment variables
const dotenv = require('dotenv').config();


// midelware
app.use(cors()); // allows me to acces the api in the browser
app.use(bodyParser.json()); // any incomding data in the body will be transformed to json
app.use(morgan("tiny")); // keep the logs small


/*
    Why were no Mongoose Options set?
        - see: https://stackoverflow.com/questions/68958221/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported
    
    Where are the mongo credentials?
        - with dotenv as a environemnet varibale stored in ".env" which is not part of the git-repo => 
            MONGO = mongodb+srv://YOUR_USER:YOUR_PW@YOUR_DB.mongodb.net/user_records?retryWrites=true&w=majority

*/
mongoose.connect(process.env.MONGO, {})
.then(() => console.log("MongoDB database connected"))
.catch((err) => console.log(err))

app.use("/api/records", recordsRoutes);

app.get('/', (req, res) => res.send("Hello --- look at the server.js --- world"));

app.listen(port, () => console.log(`Express is running at port ${port}`));  


