import CustomDropdown from "../Components/Task/CustomDropdown";
import CustomInput from "../Components/Auth/CustomInput";
import CustomTextBox from "../Components/Task/CustomTextBox";
import { requiredValidation } from "../validation/Validation";

const taskData:Array<any> = [
    {
        name:"Title",
        type:"text",
        component:CustomInput,
        placeholder:"Enter the Title",
        validate:[requiredValidation]
    },
    {
        name:"Priority",
        component:CustomDropdown,
        placeholder:"Enter priority ",
        validate:[requiredValidation]
    },
    {
        name:"Description",
        type:"text",
        component:CustomTextBox,
        placeholder:"Enter Description",
    },

]

export default taskData