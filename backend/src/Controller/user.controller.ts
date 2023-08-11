import { Request, Response } from "express";
import { StatusCode } from "../Constant/StatusCode";
import UserService from "../services/user.service";
class UserController {

    private req: Request;
    private res: Response;
    private service: UserService
    constructor(request: Request, response: Response) {
        this.req = request;
        this.res = response;
        this.service = new UserService();
    }

    registerAUser = async () => {
        try {
            const data = this.req.body.encryptedData;
            const responseString = await this.service.registerUser(data);
            return this.res.send({ responseString });
        } catch (error) {
            console.log("User Controller Error : ", error);
            return this.res.status(StatusCode.SERVER_ERROR).send({ message: "Internal Server Error !!!" })
        }
    }

    loginAUser = async () => {
        try {
            const data = this.req.body.encryptedData;
            const responseString = await this.service.loginUser(data);
            return this.res.send({ responseString });
        } catch (error) {
            console.log("User Controller Error : ", error);
            return this.res.status(StatusCode.SERVER_ERROR).send({ message: "Internal Server Error !!!" })
        }
    }

    updateAUser = async () => {
        try {
            const data = this.req.body;
            const responseString = await this.service.updateUser(data);
            return this.res.send({ responseString });
        } catch (error) {
            console.log("User Controller Error : ", error);
            return this.res.status(StatusCode.SERVER_ERROR).send({ message: "Internal Server Error !!!" })
        }
    }
}

export default UserController;