import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import db from "./config/Database.js";
import ManagemenRoute from "./routes/ManagemenRoute.js";
import ModulRoute from "./routes/ModuleRoute.js";
import SequelizeStore from "connect-session-sequelize";

dotenv.config();

const app = express();

(async()=>{
    await db.sync();
})();
const  sessionStore =SequelizeStore(session.Store);

const store = new sessionStore(({
    db:db
}));

app.use(session({
    secret:process.env.SESS_SECRET,
    resave:false,
    saveUninitialized:true,
    store: store,
    cookie:{
        secure:'auto'
    }
}))
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000' 
}));
app.use(express.json());

app.use(ManagemenRoute);
app.use(ModulRoute);

store.sync();


store.sync();
 
app.listen(process.env.APP_PORT, ()=>{
    console.log('Server Sedang Berjalan ........');
});