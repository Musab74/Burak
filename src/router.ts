import express from "express";
const Router = express.Router();
import memberController from "./controllers/members.controller";

Router.get("/", memberController.goHome);

Router.get("/login", memberController.getLogin);

Router.get("/signup", memberController.getSignUp );

export default Router;