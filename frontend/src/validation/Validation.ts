import validator from "validator"

//Required Validation
export const requiredValidation = (value: any) => (value || typeof value === 'number' ? undefined : 'Required Field')

//Validation of Email
export const emailValidation = (value: any) =>
    value && !validator.isEmail(value)
        ? 'Invalid email address'
        : undefined

//Validation of Phone Number
export const phoneNumberValidation = (value: any) =>
    value && !validator.isMobilePhone(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined

//TODO: Validation for Password
export const passwordValidation  = (value:any)=>{
    value && !validator.isStrongPassword(value) ? "Please Input a Strong Password" : undefined
}