import CustomInput from "../Components/CustomInput"
import { emailValidation, passwordValidation, requiredValidation } from "../validation/Validation"

const propsArray:any = [
    {
        name: "email",
        placeholder:"Enter Your Email",
        type: "text",
        component: CustomInput,
        keyboardType: "email-address",
        validate:[requiredValidation,emailValidation]
    },
    {
        name: "password",
        placeholder:"Enter Your Password",
        type: "text",
        component: CustomInput,
        secureTextEntry: true,
        validate:[requiredValidation,passwordValidation]
    }
]

export default propsArray