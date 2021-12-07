import axios from 'axios';
import { headers } from '../headers'

export const setpost = (d) => {
    localStorage.setItem("post", JSON.stringify(d));
}
export const getpost = () => {
    return JSON.parse(localStorage.getItem("post"));
}
export const setData = (d) => {
    localStorage.setItem("data", JSON.stringify(d));
}
export const setpageId = (d) => {
    localStorage.setItem("pageId", JSON.stringify(d));
}
export const setdataId = (d) => {
    localStorage.setItem("dataId", JSON.stringify(d));
}
export const getdataId = () => {
    return JSON.parse(localStorage.getItem("dataId"));
}
export const getpageId = () => {
    return JSON.parse(localStorage.getItem("pageId"));
}

export const setpage = (page) => {
    localStorage.setItem("page", JSON.stringify(page));
}
export const getpage = () => {
    return JSON.parse(localStorage.getItem("page"));
}
export const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
}
export const getTimeSpent = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/apifb`,
            { headers }))
}

export const postApiFb= (body) => {
    return (
        axios.post(
            `${process.env.REACT_APP_API_BASE}/Pagepostsfb
            `,
            body,
            { headers }))
}
export const postApimertrics= (body) => {
    return (
        axios.post(
            `${process.env.REACT_APP_API_BASE}/postmoredetails
            `,
            body,
            { headers }))
}

export const getnamepage = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageid`,
            { headers }))
}

export const postfacebook = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/postfacebook`,
            { headers }))
}
export const postfbdetails = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/postfbdetails`,
            { headers }))
}




