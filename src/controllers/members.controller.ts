import { Request, Response } from "express";
import { T } from "../libs/types/common";

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page");

    } catch (err) {
        console.log("Error Home", err);

    }

};

memberController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page");

    } catch (err) {
        console.log("Error Login", err);

    }

};

memberController.getSignUp = (req: Request, res: Response) => {
    try {
        res.send("SignUp Page");

    } catch (err) {
        console.log("Error SignUp", err);

    }

};

export default memberController;