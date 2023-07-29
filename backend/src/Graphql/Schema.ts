export const typeDefs = `#graphql
    type Query{
        getAllTasks(encryptedCreatorId:String):String
    }

    type Task{
        _id:ID!
        title:String!
        priority:String!
        description:String
    }

    type User{
        _id:ID!
        userName:String!
        email:String!
        password:String!
    }

    type Mutation{
        #TASK MUTATION
        registerTask(encryptedNewTaskString:String):String
        updateTask(encryptedTaskUpdateString:String):String
        deleteTask(encryptedTaskDeleteId:String):String
        
        #USER MUTATION
        registerUser(encryptedNewUserString:String):String
        loginUser(encryptedUserLoginDetail:String):String
        updateUser(encryptedUserUpdateString:String):String
    }

`