import { BASE_URL } from "../env/environment"

//User API
export const GET_USER_DATA = `http://${BASE_URL}:4000/api/user/getUserFromToken/`
export const LOGIN_API = `http://${BASE_URL}:4000/api/user/loginAUser`
export const SIGN_UP_API = `http://${BASE_URL}:4000/api/user/registerAUser`
export const UPDATE_USER = `http://${BASE_URL}:4000/api/user/updateAUser`

//Task API
export const GET_ALL_TASKS = `http://${BASE_URL}:4000/api/task/getAllTasks`
export const CREATE_A_TASK = `http://${BASE_URL}:4000/api/task/createATask`
export const UPDATE_A_TASK = `http://${BASE_URL}:4000/api/task/updateATask`
export const DELETE_A_TASK = `http://${BASE_URL}:4000/api/task/deleteATask`
