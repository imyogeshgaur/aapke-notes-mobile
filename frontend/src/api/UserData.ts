import axios from "axios"
import { GET_USER_DATA } from "../Constants/CONSTANTS";
import { AES, enc } from "react-native-crypto-js";
import { MY_SECRET_KEY } from "../env/environment";

const getUserDetailsAPI = async (token: any) => {
    try {
        const response = await axios.get(GET_USER_DATA + token);
        const responseData = await response.data;
        const decryptedResponseMessage: any = AES.decrypt(
            responseData?.responseString,
            MY_SECRET_KEY,
        ).toString(enc.Utf8);
        return JSON.parse(decryptedResponseMessage);
    } catch (error) {
        console.log("User Data API Error : ", error)
    }
}

export default getUserDetailsAPI;