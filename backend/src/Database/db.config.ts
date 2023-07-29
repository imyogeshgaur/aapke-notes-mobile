import { connect } from "mongoose";
import {config} from "dotenv"
import {resolve} from "path"
config({path:resolve("./src/.env")})

const connectWithDB = async () => {
    try {
        await connect(process.env.MONGO_URI as string);
        console.log("Database Connected !!!")
    } catch (error) {
        console.log("Database Connection Error : ", error)
    }
}

export default connectWithDB