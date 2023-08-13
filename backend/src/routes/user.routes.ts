import { Request, Response, Router } from "express";
import UserController from "../Controller/user.controller";
import decodeUser from "../helper/DecodeUser";
const userRouter = Router();

userRouter.get("/getUserFromToken/:token", async (req: Request, res: Response) => {
    try {
        const userController = new UserController(req, res)
        await userController.getAUserData();
    } catch (error) {
        console.log("User Global Error : ", error);
    }
})

userRouter.post("/registerAUser", async (req: Request, res: Response) => {
    try {
        const userController = new UserController(req, res)
        await userController.registerAUser();
    } catch (error) {
        console.log("User Global Error : ", error);
    }
})

userRouter.post("/loginAUser", async (req: Request, res: Response) => {
    try {
        const userController = new UserController(req, res)
        await userController.loginAUser();
    } catch (error) {
        console.log("User Global Error : ", error);
    }
})

userRouter.put("/updateAUser", async (req: Request, res: Response) => {
    try {
        const userController = new UserController(req, res)
        await userController.updateAUser();
    } catch (error) {
        console.log("User Global Error : ", error);
    }
})

export default userRouter;