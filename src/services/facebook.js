import axios from 'axios';
import { headers } from '../headers'


export const setData = (d) => {
    localStorage.setItem("dataf", JSON.stringify(d));
}
export const setpage = (page) => {
    localStorage.setItem("page", JSON.stringify(page));
}
export const getpage = () => {
    return JSON.parse(localStorage.getItem("page"));
}
export const getData = () => {
    return JSON.parse(localStorage.getItem("dataf"));
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
            `${process.env.REACT_APP_API_BASE}/facebook`,
            body,
            { headers }))
}


export const getnamepage = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageid`,
            { headers }))
}

//chart
export const pageimp = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageimp`,
            { headers }))
}
export const pageViewsTotal = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageViewsTotal`,
            { headers }))
}
export const reactionsTotal = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/reactionsTotal`,
            { headers }))
}

export const totalactions = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/totalactions`,
            { headers }))
}
export const engagedusers = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/engagedusers`,
            { headers }))
}
export const postengagements = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/postengagements`,
            { headers }))
}
export const pagefans = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pagefans`,
            { headers }))
}
export const fanslocale = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/fanslocale`,
            { headers }))
}
export const fanscity = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/fanscity`,
            { headers }))
}
export const fanscountry = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/fanscity`,
            { headers }))
}
export const pagefansgenderage = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pagefansgenderage`,
            { headers }))
}
export const pagefanadds = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pagefanadds`,
            { headers }))
}
export const pagefanslikesource = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pagefanslikesource`,
            { headers }))
}
export const pagefanremoves = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pagefanremoves`,
            { headers }))
}
export const pageimpaid = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageimpaid`,
            { headers }))
}
export const pageimorganic = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageimorganic`,
            { headers }))
}
export const pageimviral = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageimviral`,
            { headers }))
}
export const pageimnonviral = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageimnonviral`,
            { headers }))
}
export const pageimptype = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageimptype`,
            { headers }))
}
export const pageimpfreq = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageimpfreq`,
            { headers }))
}
export const pageimpvirfreq = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageimpvirfreq`,
            { headers }))
}
export const liketotal = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/liketotal`,
            { headers }))
}
export const lovetotal = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/lovetotal`,
            { headers }))
}
export const wowtotal = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/wowtotal`,
            { headers }))
}
export const hahatotal = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/hahatotal`,
            { headers }))
}
export const sorrytotal = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/sorrytotal`,
            { headers }))
}
export const angtotal = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/angtotal`,
            { headers }))
}
export const pageviewsporftab = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageviewsproftab`,
            { headers }))
}
export const pageviewsexternal = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageviewsexternal`,
            { headers }))
}
export const pageviewloggedin = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageviewloggedin`,
            { headers }))
}
export const pageviewslogout = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/pageviewslogout`,
            { headers }))
}
export const positfdbtype = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/positfdbtype`,
            { headers }))
}
export const negativefdb = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/negativefdb`,
            { headers }))
}
export const negativefdbtype = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/negativefdbtype`,
            { headers }))
}
export const consumptions = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/consumptions`,
            { headers }))
}
export const consumptionstyp = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/consumptionstyp`,
            { headers }))
}
//videos
export const videoviews = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/videoviews`,
            { headers }))
}
export const videoviewspaid = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/videoviewspaid`,
            { headers }))
}
export const videoviewsorganic = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/videoviewsorganic`,
            { headers }))
}
export const videoclk = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/videoclk`,
            { headers }))
}
export const repeatviews = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/repeatviews`,
            { headers }))
}
export const completeviews30s = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/completeviews30s`,
            { headers }))
}
export const paid30s = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/paid30s`,
            { headers }))
}
export const organic30s = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/organic30s`,
            { headers }))
}
export const videoviews10s = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/videoviews10s`,
            { headers }))
}
export const paid10s = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/paid10s`,
            { headers }))
}
export const organic10s = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/organic10s`,
            { headers }))
}

//videos
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
export const idp = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/idp`,
            { headers }))
}
export const benchmark = () => {
    return (
        axios.get(
            `${process.env.REACT_APP_API_BASE}/benchmark`,
            { headers }))
}
//benchmark
