import express, { json } from "express"
import connectWithDB from "./Database/db.config";
import taskRouter from "./routes/task.routes";
import userRouter from "./routes/user.routes";
import cors from "cors";
const app = express();

connectWithDB();

app.use(cors())
app.use(json())

app.get("/",()=>{
    console.log("hi")
})

app.use("/api/user",userRouter)
app.use("/api/task",taskRouter)

app.listen(4000);
