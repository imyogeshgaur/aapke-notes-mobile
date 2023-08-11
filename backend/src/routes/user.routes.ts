import { Request, Response, Router } from "express";
import UserController from "../Controller/user.controller";
const userRouter = Router();


userRouter.post("/registerAUser",async(req:Request,res:Response)=>{
    try {
        const taskController = new UserController(req, res)
        await taskController.registerAUser();
    } catch (error) {
        console.log("User Global Error : ",error);
    }
})

userRouter.post("/loginAUser",async(req:Request,res:Response)=>{
    try {
        const taskController = new UserController(req, res)
        await taskController.loginAUser();
    } catch (error) {
        console.log("User Global Error : ",error);
    }
})

userRouter.put("/updateAUser",async(req:Request,res:Response)=>{
    try {
        const taskController = new UserController(req, res)
        await taskController.updateAUser();
    } catch (error) {
        console.log("User Global Error : ",error);
    }
})

export default userRouter;