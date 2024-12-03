import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import db from "./config/Database.js";
import ManagemenRoute from "./routes/ManagemenRoute.js";
import ModulRoute from "./routes/ModuleRoute.js";
import JadwalDokterRoute from "./routes/JadwalDokterRoute.js";
import BeritaRoute from "./routes/BeritaRoute.js";
import GaleriFotoRoute from "./routes/GaleriFotoRoute.js";
import DataSpesialisRoute from "./routes/DataSpesialisRoute.js";
import DataDokterRoute from "./routes/DataDokterRoute.js";
import PengaduanRoute from "./routes/PengaduanRoute.js";
import LayananFasilitasRoute from "./routes/LayananFasilitasRoute.js";
import CarouselRoute from "./routes/CarouselRoute.js";
import GridColumnRoute from "./routes/GridColumnRoute.js";
import SequelizeStore from "connect-session-sequelize";
import JadwalPoliPsikologRoute from "./routes/JadwalPoliPsikologRoute.js";
import JadwalPoliFisioterapiRoute from "./routes/JadwalPoliFisioterapiRoute.js";
import TtgKamiRoute from "./routes/TtgKamiRoute.js";
import FaqRoute from "./routes/FaqRoute.js";
import PenghargaanRoute from "./routes/PenghargaanRoute.js";
import DapartemenRoute from "./routes/DapartemenRoute.js";
import RoleRoute from "./routes/RoleRoute.js";
import UserRoute from "./routes/UserRoute.js";
import SenamHamilRoute from "./routes/SenamHamilRoute.js";
import LaborRoute from "./routes/LaborRoute.js";
import SpesialisRoute from "./routes/SpesialisRoute.js";
import fasilitasUnggulanRoutes from './routes/FasilitasUnggulanRoute.js';
import fasilitasPendukungRoutes from './routes/FasilitasPendukungRoute.js';
import layananPenunjang from './routes/LayananPenunjang.js';
import rawatInap from './routes/RawatInapRoute.js';
import rawatJalan from './routes/RawatJalanRoute.js';
import tarifPersalinan from './routes/TarifPersalinanRoute.js';


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
    origin: true
}));
app.use(express.json());

app.use(ManagemenRoute);
app.use(ModulRoute);
app.use(JadwalDokterRoute);
app.use(BeritaRoute);
app.use(GaleriFotoRoute);
app.use(DataSpesialisRoute);
app.use(DataDokterRoute);
app.use(PengaduanRoute);
app.use(LayananFasilitasRoute);
app.use(CarouselRoute);
app.use(GridColumnRoute);
app.use(JadwalPoliPsikologRoute);
app.use(JadwalPoliFisioterapiRoute);
app.use(TtgKamiRoute);
app.use(FaqRoute);
app.use(PenghargaanRoute);
app.use(DapartemenRoute);
app.use(RoleRoute);
app.use(UserRoute);
app.use(SenamHamilRoute);
app.use(LaborRoute);
app.use(SpesialisRoute);
app.use(fasilitasUnggulanRoutes);
app.use(fasilitasPendukungRoutes);
app.use(layananPenunjang);
app.use(rawatInap);
app.use(rawatJalan);
app.use(tarifPersalinan);

store.sync();

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server Sedang Berjalan ........');
});