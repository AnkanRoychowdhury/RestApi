import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import { Connection } from "./database/db.js";
import Router from "./src/routes/idea.routes.js"
/* import DefaultData from "./default.js"; */

const PORT = 8080;
const app = express();

dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-gtth969-shard-00-00.zywlq2j.mongodb.net:27017,ac-gtth969-shard-00-01.zywlq2j.mongodb.net:27017,ac-gtth969-shard-00-02.zywlq2j.mongodb.net:27017/?ssl=true&replicaSet=atlas-ohpsjx-shard-0&authSource=admin&retryWrites=true&w=majority`

Connection(URL);

// app.use(myMiddleWare);

// Middleware
// function myMiddleWare(req,res,next){
//     console.log('Inside the middleware');
//     next();
// }

/**
 * Starting Server
*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// DefaultData();