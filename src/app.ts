import express from 'express';
import path from 'path';
import Router from './router';

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
app.use("/", Router) //middleWare DP 
// full tizim Architectual pattern



export default app;   //moduleni export qilish  