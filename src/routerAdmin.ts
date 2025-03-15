import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/members.controller";

routerAdmin.get("/", restaurantController.goHome);

routerAdmin.get("/login", restaurantController.getLogin);

routerAdmin.get("/signup", restaurantController.getSignUp );

export default routerAdmin;