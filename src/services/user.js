import axios from 'axios';
import { headers } from '../headers'


export const setUser = (d) => {
    localStorage.setItem("User", JSON.stringify(d));
}

export const getUser= () => {
    return JSON.parse(localStorage.getItem("User"));
}
export const getTimeSpent = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/apifb`,
            { headers }))
}

export const signupUser= (body) => {
    return (
        axios.post(
            `${process.env.REACT_APP_API_BASE}/AdminAdd`,
            body,
            { headers }))
}

export const signinUser= (body) => {
    return (
        axios.post(
            `${process.env.REACT_APP_API_BASE}/LoginAdmin`,
            body,
            { headers }))
}




