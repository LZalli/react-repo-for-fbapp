import axios from 'axios';
import { headers } from '../headers'

export const getIData = () => {
    return JSON.parse(localStorage.getItem("IData"));
}
export const getpageid = () => {
    return JSON.parse(localStorage.getItem("pageId"));
}
export const setIData = (d) => {
    localStorage.setItem("IData", JSON.stringify(d));
}
export const setpageId = (d) => {
    localStorage.setItem("pageId", JSON.stringify(d));
}

export const setinstapid = (d) => {
    localStorage.setItem("instapid", JSON.stringify(d));
}
export const getinstapid = (d) => {
    localStorage.setItem("instapid", JSON.stringify(d));
}
export const postApiInt= (body) => {
    return (
        axios.post(
            `${process.env.REACT_APP_API_BASE}/instapageid`,
            body,
            { headers }))
}

export const postIntsgrame= (body) => {
    return (
        axios.post(
            `${process.env.REACT_APP_API_BASE}/PostIntsgram`,
            body,
            { headers }))
}
export const getnamepage = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageid`,
            { headers }))
}
//end-of chart
export const instid = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/instid`,
            { headers }))
}
export const Instaviews = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instaviews`,
            { headers }))
}

export const Instareach = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instareach`,
            { headers }))
}
export const Instemail = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instemail`,
            { headers }))
}

export const Instamsgclicks = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instamsgclicks`,
            { headers }))
}
export const Instawebsite = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instawebsite`,
            { headers }))
}
export const Instapageimpression = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instapageimpression`,
            { headers }))
}
export const Instaaudcountry = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instaaudcountry`,
            { headers }))
}
export const Instaaudcity = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instaaudcity`,
            { headers }))
}
export const Instaaudage = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instaaudage`,
            { headers }))
}

//end-of chart

export const Instapostinfo = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instapostinfo`,
            { headers }))
}
export const Instapostmore = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instapostmore`,
            { headers }))
}
export const Instastory = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/Instastory`,
            { headers }))
}
export const storydetails = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/storydetails`,
            { headers }))
}
