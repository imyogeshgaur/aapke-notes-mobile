import CustomInput from "../Components/user/CustomInput";

const propsArray:Array<any> = [
    {
        name: "userName",
        placeholder:"Enter New UserName",
        type: "text",
        component: CustomInput,
    },
    {
        name: "email",
        placeholder:"Enter Your New Email",
        type: "text",
        component: CustomInput,
        keyboardType: "email-address",
    },
    {
        name: "password",
        placeholder:"Enter Your New Password",
        type: "text",
        component: CustomInput,
        secureTextEntry: true,
    }
]

export default propsArray