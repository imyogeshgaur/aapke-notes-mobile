import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    priority: {
        type: String,
        required: true
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        required:true
    }
});

const Task = model("Task", taskSchema);
export default Task
