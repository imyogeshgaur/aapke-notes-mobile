import Task from "../Models/Task";
import { StatusCode } from "../Constant/StatusCode";
import { AES, enc } from "crypto-js";
import { config } from "dotenv";
import { resolve } from "path"
config({ path: resolve("./src/.env") })

class TaskService {
    getAllTasks = async (encryptedCreatorId: string) => {
        try {
            const decryptedString = AES.decrypt(encryptedCreatorId, process.env.CRYPTO_KEY as string).toString(enc.Utf8);

            const { creatorId } = JSON.parse(decryptedString);
            const tasksOfCreator = await Task.find({ creatorId })

            if (tasksOfCreator.length == 0) return AES.encrypt(
                JSON.stringify({ code: StatusCode.BAD_REQUEST, message: "No Task Exist !!!" }), process.env.CRYPTO_KEY as string
            ).toString();

            return AES.encrypt(
                JSON.stringify({ code: StatusCode.SUCCESS, tasks: tasksOfCreator }), process.env.CRYPTO_KEY as string
            ).toString();

        } catch (error) {
            console.log("Task Service Error : ", error);
            return AES.encrypt(
                JSON.stringify({ code: StatusCode.SERVER_ERROR, message: "Internal Server Error !!!" }), process.env.CRYPTO_KEY as string
            ).toString();
        }
    }

    registerTask = async (encryptedNewTaskString: string) => {
        try {
            const decryptTaskString = AES.decrypt(encryptedNewTaskString, process.env.CRYPTO_KEY as string).toString(enc.Utf8);
            const newTask = JSON.parse(decryptTaskString);
            const title = newTask.title;

            const isExist: any = await Task.findOne({ title })
            if (isExist) return AES.encrypt(
                JSON.stringify({ code: StatusCode.BAD_REQUEST, message: "Task Already Created !!!" }), process.env.CRYPTO_KEY as string
            ).toString();

            const createdTask = new Task({
                ...newTask
            });
            const taskToSave = await createdTask.save();
            if (taskToSave) return AES.encrypt(
                JSON.stringify({ code: StatusCode.SUCCESS, message: "New Task Added !!!" }), process.env.CRYPTO_KEY as string
            ).toString();

        } catch (error) {
            console.log("Task Service Error : ", error);
            return AES.encrypt(
                JSON.stringify({ code: StatusCode.SERVER_ERROR, message: "Internal Server Error !!!" }), process.env.CRYPTO_KEY as string
            ).toString();
        }
    }

    updateTask = async (encryptedTaskUpdateString: string) => {
        try {
            const decryptedTaskString = AES.decrypt(encryptedTaskUpdateString, process.env.CRYPTO_KEY as string).toString(enc.Utf8);

            const detailsToUpdate = JSON.parse(decryptedTaskString);
            const isExist = await Task.findOne({ _id: detailsToUpdate._id });

            if (!isExist) return AES.encrypt(
                JSON.stringify({ code: StatusCode.BAD_REQUEST, message: "Task Not Exist !!!" }), process.env.CRYPTO_KEY as string
            ).toString();

            const updatedTask = await isExist.updateOne({
                ...detailsToUpdate
            })
            if (updatedTask.modifiedCount) return AES.encrypt(
                JSON.stringify({ code: StatusCode.SUCCESS, message: "Task Updated !!!" }), process.env.CRYPTO_KEY as string
            ).toString();
            else return AES.encrypt(
                JSON.stringify({ code: StatusCode.SUCCESS, message: "Task Not Updated !!!" }), process.env.CRYPTO_KEY as string
            ).toString();

        } catch (error) {
            console.log("Task Service Error : ", error);
            return AES.encrypt(
                JSON.stringify({ code: StatusCode.SERVER_ERROR, message: "Internal Server Error !!!" }), process.env.CRYPTO_KEY as string
            ).toString();
        }
    }

    deleteTask = async (encryptedTaskDeleteId: string) => {
        try {
            const decryptedDeleteIdString = AES.decrypt(encryptedTaskDeleteId, process.env.CRYPTO_KEY as string).toString(enc.Utf8);

            const idToDelete = JSON.parse(decryptedDeleteIdString);
            const isExist = await Task.findOne({ _id: idToDelete });

            if (!isExist) return AES.encrypt(
                JSON.stringify({ code: StatusCode.BAD_REQUEST, message: "Task Not Exist !!!" }), process.env.CRYPTO_KEY as string
            ).toString();

            const deleteTask = await isExist.deleteOne({ _id: idToDelete })
            if (deleteTask) return AES.encrypt(
                JSON.stringify({ code: StatusCode.BAD_REQUEST, message: "Task Deleted !!!" }), process.env.CRYPTO_KEY as string
            ).toString();
            else return AES.encrypt(
                JSON.stringify({ code: StatusCode.BAD_REQUEST, message: "Task Not Deleted !!!" }), process.env.CRYPTO_KEY as string
            ).toString();

        } catch (error) {
            console.log("Task Service Error : ", error);
            return AES.encrypt(
                JSON.stringify({ code: StatusCode.SERVER_ERROR, message: "Internal Server Error !!!" }), process.env.CRYPTO_KEY as string
            ).toString();
        }
    }
}

export default TaskService;