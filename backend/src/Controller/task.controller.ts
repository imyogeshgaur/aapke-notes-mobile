import { Request, Response } from "express";
import { StatusCode } from "../Constant/StatusCode";
import TaskService from "../services/task.service";
class TaskController {

    private req: Request;
    private res: Response;
    private service: TaskService;
    constructor(request: Request, response: Response) {
        this.req = request;
        this.res = response;
        this.service = new TaskService();
    }

    getAllTask = async () => {
        try {
            const data = this.req.body.encryptedData;
            const responseString = await this.service.getAllTasks(data);
            return this.res.send(responseString)
        } catch (error) {
            console.log("Task Controller Error : ",error);
            return this.res.status(StatusCode.SERVER_ERROR).send({message:"Internal Server Error !!!"})
        }
    }

    registerATask = async () => {
        try {
            const data = this.req.body.encryptedData;
            const responseString = await this.service.registerTask(data);
            return this.res.send(responseString)
        } catch (error) {
            console.log("Task Controller Error : ",error);
            return this.res.status(StatusCode.SERVER_ERROR).send({message:"Internal Server Error !!!"}) 
        }
    }

    updateATask = async () => {
        try {
            const data = this.req.body.encryptedData;
            const responseString = await this.service.updateTask(data);
            return this.res.send(responseString)
        } catch (error) {
            console.log("Task Controller Error : ",error);
            return this.res.status(StatusCode.SERVER_ERROR).send({message:"Internal Server Error !!!"})
        }
    }

    deleteATask = async() => {
        try {
            const data = this.req.body.encryptedData;
            const responseString = await this.service.deleteTask(data);
            return this.res.send(responseString)
        } catch (error) {
            console.log("Task Controller Error : ",error);
            return this.res.status(StatusCode.SERVER_ERROR).send({message:"Internal Server Error !!!"})
        }
    }
}

export default TaskController;