import { deleteTask, getAllTasks, registerTask, updateTask } from "../Controller/task.controller"
import { registerUser, updateUser, loginUser } from "../Controller/user.controller";

export const resolvers = {
    Query: {
        getAllTasks: async(_: any, { encryptedCreatorId }: any) => {
            const response = await getAllTasks(encryptedCreatorId);
            return response;
        }
    },

    Mutation: {

        //Task Resolvers
        registerTask: (_: any, { encryptedNewTaskString }: any) => {
            const response = registerTask(encryptedNewTaskString);
            return response;
        },
        updateTask: (_: any, { encryptedTaskUpdateString }: any) => {
            const response = updateTask(encryptedTaskUpdateString);
            return response;
        },
        deleteTask: (_: any, { encryptedTaskDeleteId }: any) => {
            const response = deleteTask(encryptedTaskDeleteId);
            return response;
        },

        //User Resolvers 

        registerUser: async (_: any, { encryptedNewUserString }: any) => {
            const response = await registerUser(encryptedNewUserString);
            return response;
        },
        loginUser: async (_: any, { encryptedUserLoginDetail }: any) => {
            const response = await loginUser(encryptedUserLoginDetail);
            return response;
        },
        updateUser: async (_: any, { encryptedUserUpdateString }: any) => {
            const response = await updateUser(encryptedUserUpdateString);
            return response;
        },
    }
}