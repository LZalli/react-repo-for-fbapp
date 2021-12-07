import React, { useState, useEffect } from 'react'
import {
    // CChartPie,
    // CChartPolarArea,
//  CChartDoughnut
} from '@coreui/react-chartjs'

import * as Instagram from '../../services/Instagram';

import { AppSidebar, AppHeader } from '../../components/index'
import {
    CChartBar,
    // CChartPolarArea
} from '@coreui/react-chartjs'
import {
    CCardBody,
    CCard,
    CCol,
    CRow,
    CCardHeader,
} from '@coreui/react'

const Instpageimp = () => {
    // const axioscountry    = axios.CancelToken.source();
    const [infoInstaaudagelabes, setinfoInstaaudagelabes] = useState();

    const [infoInstaaudagevalue, setinfoInstaaudagevalue] = useState();
    useEffect(() => {
        let isSubscribed = true;

        Instagram.Instaaudage().then(res => {
            console.log(res.data[0]);
            const labes = [];
            const value = [];
            for (let key in res.data[0]) {
                if (key !== "_id") {
                    labes.push(key);

                    value.push(res.data[0][key]);
                }

            }

            setinfoInstaaudagelabes(labes);
            setinfoInstaaudagevalue(value);
        }).catch( err => {
            if (isSubscribed) {
                console.error(err);
            }
        } )


       viewaudicty();
        displayTableau();
        // return () =>axioscountry.cancel("hi"); // Abort both fetches on unmount
        return () => (isSubscribed = false)
    }, []);


    const [infoInstaaudcountrylabes, setinfoInstaaudcountrylabes] = useState();
    const [infoInstaaudcountryvalue, setinfoInstaaudcountryvalue] = useState();


    const [infoInstaaudcitylabes, setinfoInstaaudcitylabes] = useState();

    const [infoInstaaudcityvalue, setinfoInstaaudcityvalue] = useState();
 

    const viewaudicty=()=>{
        Instagram.Instaaudcountry().then(res => {

            console.log("Instaaudcountry",res.data[0].data[0].values[0].value);
            const labescountry =[];
            const valuecountry=[];
            for(let key in res.data[0].data[0].values[0].value){
                labescountry.push(key);
    
                valuecountry.push(res.data[0].data[0].values[0].value[key]);
    
    
              }
              console.log(labescountry);
              console.log(valuecountry);
    
              setinfoInstaaudcountrylabes(labescountry);
              setinfoInstaaudcountryvalue(valuecountry);


            // const labes = res.data[0].data[0].values.map((element,key) =>
            // console.log(key));
            // const value = res.data[0].data[0].values.map((element) => element);
            // setinfoInstaaudcountrylabes(labes);
            // setinfoInstaaudcountryvalue(value);
        })
    }
    const displayTableau = () => {
     
        Instagram.Instaaudcity().then(res => {
            console.log(res.data[0].data[0].values[0].value);

            const labesaaudcity =[];
            const valueaaudcity=[];
          for(let key in res.data[0].data[0].values[0].value){
            labesaaudcity.push(key);

            valueaaudcity.push(res.data[0].data[0].values[0].value[key]);


          }
        //   console.log(labesaaudcity);
        //   console.log(valueaaudcity);

            setinfoInstaaudcitylabes(labesaaudcity);
            setinfoInstaaudcityvalue(valueaaudcity);
            // console.log("fkfkkf",infoInstaaudcitylabes);
            // console.log("fkfkkf",infoInstaaudcityvalue);
        })
       
        
    }



    return (
        <div>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppHeader />
                <div className="body flex-grow-1 px-3">
                    <CRow>
                    <CCol xs={12}>
                            <CCard className="mb-4">
                                <CCardHeader>
                                Insta aud age
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        data={{
                                            labels: infoInstaaudagelabes,
                                            datasets: [
                                                {
                                                    label: 'Insta audage value',
                                                    backgroundColor: '#f87979',
                                                    data: infoInstaaudagevalue,
                                                },
                                            ],
                                        }}
                                        labels="months"
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol xs={12}>
                            <CCard className="mb-4">
                                <CCardHeader>
                                Insta aud age
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        data={{
                                            labels: infoInstaaudcitylabes,
                                            datasets: [
                                                {
                                                    label: 'info Instaaud city',
                                                    backgroundColor: '#f87979',
                                                    data: infoInstaaudcityvalue,
                                                },
                                            ],
                                        }}
                                        labels="months"
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>
                         <CCol xs={12}>
                            <CCard className="mb-4">
                                <CCardHeader>
                                Insta aud age
                                </CCardHeader>
                                <CCardBody>
                                    <CChartBar
                                        data={{
                                            labels: infoInstaaudcountrylabes,
                                            datasets: [
                                                {
                                                    label: 'infoInsta aud country',
                                                    backgroundColor: '#f87979',
                                                    data: infoInstaaudcountryvalue,
                                                },
                                            ],
                                        }}
                                        labels="months"
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol> 
                         {/* <CCol xs={6}>
                            <CCard className="mb-4">
                                <CCardHeader>Doughnut Chart</CCardHeader>
                                <CCardBody>
                                    <CChartDoughnut
                                        data={{
                                            labels: infoInstaaudagelabes,
                                            datasets: [
                                                {
                                                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                                                    data: infoInstaaudagevalue,
                                                },
                                            ],
                                        }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>      */}

                                           
                        {/* <CCol xs={6}>
                            <CCard className="mb-4">
                                <CCardHeader>Doughnut Chart</CCardHeader>
                                <CCardBody>
                                    <CChartDoughnut
                                        data={{
                                            labels: infoInstaaudcitylabes,
                                            datasets: [
                                                {
                                                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                                                    data: infoInstaaudcityvalue,
                                                },
                                            ],
                                        }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>    */}
                         {/* <CCol xs={6}>
                            <CCard className="mb-4">
                                <CCardHeader>Pie Chart</CCardHeader>
                                <CCardBody>
                                    <CChartPie
                                        data={{
                                            labels: infoInstaaudcitylabes,
                                            datasets: [
                                                {
                                                    data: infoInstaaudcityvalue,
                                                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                                                },
                                            ],
                                        }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol>   */}
                     {/* <CCol xs={6}>
                            <CCard className="mb-6">
                                <CCardHeader>Polar Area Chart</CCardHeader>
                                <CCardBody>
                                    <CChartPolarArea
                                        data={{
                                            labels: infoInstaaudagelabes,
                                            datasets: [
                                                {
                                                    data: infoInstaaudagevalue,
                                                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                                                },
                                            ],
                                        }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol> */}
                        {/* <CCol xs={6}>
                            <CCard className="mb-4">
                                <CCardHeader>Polar Area Chart</CCardHeader>
                                <CCardBody>
                                    <CChartPolarArea
                                        data={{
                                            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                                            datasets: [
                                                {
                                                    data: [11, 16, 7, 3, 14],
                                                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                                                },
                                            ],
                                        }}
                                    />
                                </CCardBody>
                            </CCard>
                        </CCol> */}

                    </CRow>

                </div>
            </div>
        </div>
    )
}

export default Instpageimp
