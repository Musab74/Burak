import express from 'express';
import path from 'path';
import RouterAdmin from './routerAdmin';
import router from './router';

/** 1-enterance  */
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
 /* 
 2-Sessions
 */

/** 3-Views */
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

 /** 4-Routers */
 // full tizim Architectual pattern

 // ADMIN ka loyihasini qurish sifatida:::: SSR :EJS
app.use("/admin", RouterAdmin); //SSR :EJS
app.use("/", router);//MiddleWare DP :::: SPA: react loyihasiga restAPI sifatida


export default app;   //moduleni export qilish  