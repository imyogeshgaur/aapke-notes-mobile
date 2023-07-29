import User from "../Models/User";
import { StatusCode } from "../Constant/StatusCode";
import { AES, enc } from "crypto-js";
import { config } from "dotenv";
import { resolve } from "path"
import { hash, compare, genSalt } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { updateTask } from "./task.controller";
config({ path: resolve("./src/.env") })

export const registerUser = async (encryptedNewUserString: string) => {
    try {
        const decryptedNewUserString = AES.decrypt(encryptedNewUserString, process.env.CRYPTO_KEY as string).toString(enc.Utf8);
        const newUser = JSON.parse(decryptedNewUserString);
        const newPassword = await hash(newUser.password, 12);
        const createdUser = new User({
            ...newUser,
            password: newPassword
        });

        const savedUser = await createdUser.save();
        if (savedUser) return AES.encrypt(
            JSON.stringify({ code: StatusCode.SUCCESS, message: "Registration Completed !!!" }), process.env.CRYPTO_KEY as string
        ).toString();

    } catch (error) {
        console.log("User Registration Error : ", error);
        return AES.encrypt(
            JSON.stringify({ code: StatusCode.SERVER_ERROR, message: "Internal Server Error !!!" }), process.env.CRYPTO_KEY as string
        ).toString();
    }
}

export const loginUser = async (encryptedUserLoginDetail: string) => {
    try {
        const decryptedLoginDetails = AES.decrypt(encryptedUserLoginDetail, process.env.CRYPTO_KEY as string).toString(enc.Utf8)

        const loginDetails = JSON.parse(decryptedLoginDetails);
        const { email, password } = loginDetails;

        const isExist = await User.findOne({ email })
        if (isExist) {
            const isMatch = await compare(password, isExist.password);
            if (isMatch) {
                const token: any = sign({ userId: isExist._id }, process.env.JWT_SECRET as string)
                return AES.encrypt(
                    JSON.stringify({ code: StatusCode.SUCCESS, token }), process.env.CRYPTO_KEY as string
                ).toString();
            } else return AES.encrypt(
                JSON.stringify({ code: StatusCode.BAD_REQUEST, message: "Invalid Credentials !!!" }), process.env.CRYPTO_KEY as string
            ).toString();

        } else return AES.encrypt(
            JSON.stringify({ code: StatusCode.BAD_REQUEST, message: "Invalid Credentials !!!" }), process.env.CRYPTO_KEY as string
        ).toString();

    } catch (error) {
        console.log("User Login Error : ", error);
        return AES.encrypt(
            JSON.stringify({ code: StatusCode.SERVER_ERROR, message: "Internal Server Error !!!" }), process.env.CRYPTO_KEY as string
        ).toString();
    }
}

export const updateUser = async (encryptedUserUpdateString: string) => {
    try {
        const decryptedUpdateDetailsString = AES.decrypt(encryptedUserUpdateString, process.env.CRYPTO_KEY as string).toString(enc.Utf8);
        const updateDetails = JSON.parse(decryptedUpdateDetailsString);

        const isExist = await User.findOne({ _id: updateDetails._id });
        if (!isExist) return AES.encrypt(
            JSON.stringify({ code: StatusCode.BAD_REQUEST, message: "User Not Exist !!!" }), process.env.CRYPTO_KEY as string
        ).toString();

        const updatedUserData = await isExist.updateOne({
            ...updateDetails
        })
        if (updatedUserData.modifiedCount) return AES.encrypt(
            JSON.stringify({ code: StatusCode.SUCCESS, message: "User Data Updated !!!" }), process.env.CRYPTO_KEY as string
        ).toString();
        else return AES.encrypt(
            JSON.stringify({ code: StatusCode.SUCCESS, message: "User Data Not Updated !!!" }), process.env.CRYPTO_KEY as string
        ).toString();

    } catch (error) {
        console.log("User Update Error : ", error);
        return AES.encrypt(
            JSON.stringify({ code: StatusCode.SERVER_ERROR, message: "Internal Server Error !!!" }), process.env.CRYPTO_KEY as string
        ).toString();
    }
}


