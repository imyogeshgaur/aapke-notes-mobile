import { Request, Response, Router } from "express";
import TaskController from "../Controller/task.controller";
const taskRouter = Router();

taskRouter.get("/getAllTask", async (req: Request, res: Response) => {
    try {
        const taskController = new TaskController(req, res)
        await taskController.getAllTask();
    } catch (error) {
        console.log("Task Global Error : ", error);
    }
})
taskRouter.post("/createATask", async (req:Request, res:Response) => {
    try {
        const taskController = new TaskController(req, res)
        await taskController.registerATask();
    } catch (error) {
        console.log("Task Global Error : ", error);
    }
})
taskRouter.put("/updateATask", async (req:Request, res:Response) => {
    try {
        const taskController = new TaskController(req, res)
        await taskController.updateATask();
    } catch (error) {
        console.log("Task Global Error : ", error);
    }
})
taskRouter.delete("/deleteATask", async (req:Request, res:Response) => {
    try {
        const taskController = new TaskController(req, res)
        await taskController.deleteATask();
    } catch (error) {
        console.log("Task Global Error : ", error);
    }
})

export default taskRouter;