import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page");

    } catch (err) {
        console.log("Error Home", err);

    }

};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page");

    } catch (err) {
        console.log("Error Login", err);

    }

};

restaurantController.getSignUp = (req: Request, res: Response) => {
    try {
        res.send("SignUp Page");

    } catch (err) {
        console.log("Error SignUp", err);

    }

};

export default restaurantController;